import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useViewport } from 'hooks/useViewport'
import { useRouter } from 'next/router'

export const useSideNavigationTimeline = (containerRef, options) => {
  const { isMobile } = useViewport()
  const router = useRouter()
  const timelineRef = useRef(null)

  useEffect(() => {
    const sidebar = containerRef.current

    if (!sidebar || isMobile !== false) {
      return
    }

    setTimeout(() => {
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
      if (timelineRef.current) {
        timelineRef.current?.scrollTrigger?.kill?.()
        timelineRef.current.kill()
      }
    }
  }, [containerRef, isMobile, options])

  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)
  }, [router.asPath])
}
