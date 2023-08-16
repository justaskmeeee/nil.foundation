import React from 'react'
import { shape, string } from 'prop-types'
import cx from 'classnames'

import { useViewport } from 'hooks/useViewport'

import HeadingSection from 'components/HeadingSection'
import WhiteRectangle from 'components/WhiteRectangle'
import Button from 'components/ArrowButton'

import s from './OurTeam.module.scss'

const OurTeam = ({ className, data: { title, description, button } }) => {
  const { isMobile } = useViewport()
  return (
    <div className={cx(s.root, className)}>
      <div className={s.left}>
        <WhiteRectangle />
        <HeadingSection title={title} className={s.head} />
        {!isMobile && <WhiteRectangle />}
      </div>

      <div className={s.right}>
        {!isMobile && <WhiteRectangle />}
        <p className={s.title}>{description}</p>
        <div className={s.footer}>
          <WhiteRectangle />
          <div>
            <Button className={s.button} text={button.text} href={button.link} />
            <WhiteRectangle />
          </div>
        </div>
      </div>
    </div>
  )
}

OurTeam.propTypes = {
  className: string,
  data: shape({
    title: string,
    description: string,
    button: shape({
      text: string,
      link: string,
    }),
  }),
}

export default OurTeam
