import { useEffect, useState } from 'react'

const query = '(prefers-reduced-motion: no-preference)'

function getPrefersReducedMotion() {
  if (typeof window === 'undefined') {
    return false
  }

  const mediaQueryList = window.matchMedia(query)

  return !mediaQueryList.matches
}

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getPrefersReducedMotion)

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(prefers-reduced-motion: no-preference)')
    const listener = () => {
      setPrefersReducedMotion(getPrefersReducedMotion)
    }

    mediaQueryList.addEventListener('change', listener)
    return () => {
      mediaQueryList.removeEventListener('change', listener)
    }
  }, [])

  return prefersReducedMotion
}
