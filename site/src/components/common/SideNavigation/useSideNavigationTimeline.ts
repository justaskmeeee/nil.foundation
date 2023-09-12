import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useViewport } from 'hooks/useViewport'
import { useRouter } from 'next/router'

type Options = {
  onLeave: () => void;
  onEnterBack: () => void;
}

export const useSideNavigationTimeline = (
  containerRef: React.RefObject<HTMLDivElement>,
  options: Options,
) => {
  const { isMobile } = useViewport()
  const router = useRouter()
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  useLayoutEffect(() => {
    const sidebar = containerRef.current

    if (!sidebar || isMobile !== false) {
      return
    }

    const timeout = setTimeout(() => {
      timelineRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          endTrigger: '#footer_nav',
          scrub: 0.5,
          pin: sidebar,
          invalidateOnRefresh: true,
          ...options,
        },
      })
    }, 20)

    return () => {
      clearTimeout(timeout)

      if (timelineRef.current) {
        timelineRef.current?.scrollTrigger?.kill?.()
        timelineRef.current.kill()
      }
    }
  }, [containerRef, isMobile, options])

  useLayoutEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)
  }, [router.asPath])
}
