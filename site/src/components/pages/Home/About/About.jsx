import React from 'react'
import { string, shape } from 'prop-types'
import cx from 'classnames'

import { useViewport } from 'hooks/useViewport'

import HeadingSection from 'components/HeadingSection'
import WhiteRectangle from 'components/WhiteRectangle'

import s from './About.module.scss'

const About = ({ className, data: { title, social, description } }) => {
  const { isMobile } = useViewport()
  return (
    <div className={cx(s.root, className)}>
      <div className={s.left}>
        <WhiteRectangle />
        <HeadingSection title={title} socials={social} />
      </div>
      <div className={s.right}>
        {!isMobile && <WhiteRectangle />}
        <div className={s.description}>{description}</div>
      </div>
    </div>
  )
}

About.propTypes = {
  className: string,
  data: shape({
    title: string,
    social: string,
    description: string,
  }),
}

export default About
