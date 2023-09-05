import React, { useCallback, useEffect, useRef, useState } from 'react'
import AnimatedDottedContainer from 'components/AnimatedDottedContainer'
import { useViewport } from 'hooks/useViewport'
import PropTypes, { InferProps } from 'prop-types'
import classNames from 'classnames'
import { getScreenHeight } from 'utils/getScreenSize'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import s from './FooterAnimationSection.module.scss'
import { getAnimatedItemList, getAnimatedItemMobileList } from './data'

function FooterAnimationSection({ link, linkText, onLinkClick, items: baseItems, className }: InferProps<typeof FooterAnimationSection.propTypes>) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { isMobile } = useViewport()
  const [timelineEnd, setTimelineEnd] = useState('bottom center')

  const items = isMobile
    ? getAnimatedItemMobileList(linkText, link, onLinkClick)
    : getAnimatedItemList(linkText, link, onLinkClick)

  const onResizeHandler = useCallback(() => {
    const section = sectionRef.current
    const isNotAvailable = !section || isMobile == null || isMobile

    if (isNotAvailable) {
      return
    }
    const screenHeight = getScreenHeight()
    const { scrollHeight } = document.documentElement
    ScrollTrigger.refresh()

    const { offsetTop } = section

    const offset = Math.abs(scrollHeight - offsetTop - screenHeight / 2)

    setTimelineEnd(`+=${offset * 0.8}px`)
  }, [isMobile, sectionRef])

  useEffect(() => {
    onResizeHandler()

    window.addEventListener('resize', onResizeHandler)

    return () => {
      window.removeEventListener('resize', onResizeHandler)
    }
  }, [onResizeHandler])

  return (
    <section ref={sectionRef} className={classNames(s.container, className)}>
      <AnimatedDottedContainer
        key={timelineEnd}
        className={s.animatedContainer}
        items={baseItems ?? items}
        initialAnimationDuration={0}
        scrollTriggerProps={{
          start: 'top center',
          end: timelineEnd,
        }}
      />
    </section>
  )
}

FooterAnimationSection.propTypes = {
  linkText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  className: PropTypes.string,
  onLinkClick: PropTypes.func.isRequired,
  items: PropTypes.array,
}
export default FooterAnimationSection
