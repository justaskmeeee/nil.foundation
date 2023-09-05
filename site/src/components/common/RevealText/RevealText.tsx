import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import cx from 'classnames'
import { gsap } from 'gsap'

import { getWords, getAnimationProps, getTimings } from './utils'

import s from './RevealText.module.scss'

function RevealText({
  className,
  children,
  onComplete,
  as: As,
  isVisible,
  animation,
  duration: durationProp,
  delay: delayProp,
  tag,
  innerTag,
  reduceWhiteSpace,
  stagger,
  ...otherProps
}: InferProps<typeof RevealText.propTypes>) {
  const rootRef = useRef<HTMLElement>(null)
  const refGsap = useRef<gsap.core.Tween | null>(null)
  const elements = useRef<NodeListOf<Element>>([])

  const words = useMemo(
    () => getWords(children, { tag, innerTag, reduceWhiteSpace }),
    [children], // eslint-disable-line
  )

  const getElements = useCallback(() => {
    if (!rootRef.current) return []

    return rootRef.current.querySelectorAll(`.${s.innerElement}`)
  }, [])

  useEffect(() => {
    elements.current = getElements()
  }, [words, getElements])

  const handleAnimateTween = useCallback(
    (newVisible: boolean) => {
      const type = newVisible ? 'in' : 'out'
      const { start, end, ease } = getAnimationProps(type, animation)
      const { delay, duration } = getTimings(type, durationProp, delayProp)

      const gsapEase = ease || (newVisible ? 'circ.out' : 'sine.inOut')

      refGsap.current = gsap.fromTo(
        elements.current,
        {
          ...start,
        },
        {
          ...end,
          duration,
          delay,
          pointerEvents: !newVisible ? 'none' : '',
          ease: gsapEase,
          willChange: 'transform',
          clearProps: newVisible ? 'all' : '',
          stagger: stagger === undefined ? 0.01 : stagger,
          onComplete: () => {
            gsap.set(rootRef.current, {
              pointerEvents: newVisible ? '' : 'none',
            })
            if (onComplete) onComplete(newVisible)
          },
        },
      )
    },
    [onComplete, stagger, durationProp, delayProp, animation],
  )

  useEffect(() => {
    if (isVisible) {
      handleAnimateTween(isVisible)
    } else {
      const { start } = getAnimationProps('in', animation)
      gsap.set(elements.current, start)
    }

    return () => {
      refGsap.current?.kill()
    }
  }, [isVisible]) // eslint-disable-line

  return (
    <As className={cx(s.root, className)} {...otherProps} ref={rootRef}>
      {words}
    </As>
  )
}

RevealText.propTypes = {
  className: PropTypes.string,
  as: PropTypes.any,
  tag: PropTypes.any,
  innerTag: PropTypes.any,
  animation: PropTypes.string,
  onComplete: PropTypes.func,
  stagger: PropTypes.number,
  reduceWhiteSpace: PropTypes.bool,
  isVisible: PropTypes.bool,
  children: PropTypes.any,
  duration: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      in: PropTypes.number,
      out: PropTypes.number,
    }).isRequired,
  ]),
  delay: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      in: PropTypes.number,
      out: PropTypes.number,
    }).isRequired,
  ]),
}

RevealText.defaultProps = {
  as: 'div',
  animation: 'split',
  isVisible: false,
  reduceWhiteSpace: true,
  duration: 400,
  tag: 'span',
  delay: {
    in: 0,
    out: 0,
  },
}

export default React.memo(RevealText)
