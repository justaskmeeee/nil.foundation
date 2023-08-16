import { useRef, useEffect } from 'react'
import { shape, string } from 'prop-types'
import cx from 'classnames'
import lottie from 'lottie-web'

import * as animationData from 'lottie/proof.json'

import { useViewport } from 'hooks/useViewport'

import HeadingSection from 'components/HeadingSection'
import WhiteRectangle from 'components/WhiteRectangle'

import s from './Hero.module.scss'

const Hero = ({ className, data: { title, description } }) => {
  const lottieRef = useRef(null)
  const lottieInstance = useRef(null)
  const { isMobile } = useViewport()

  useEffect(() => {
    lottieInstance.current = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    })

    return () => lottieInstance.current.destroy()
  }, [])

  return (
    <div className={cx(s.root, className)}>
      <div className={s.left}>
        <HeadingSection className={s.heading} title={title} description={description} />
        {!isMobile && <WhiteRectangle />}
      </div>
      <div className={s.right}>
        <div className={s.lottieWrapper} ref={lottieRef} />
        <WhiteRectangle />
      </div>
    </div>
  )
}

Hero.propTypes = {
  className: string,
  data: shape({
    title: string,
    description: string,
  }),
}

export default Hero
