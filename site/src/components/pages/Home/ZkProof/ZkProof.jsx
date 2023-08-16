import React from 'react'
import { string, shape, arrayOf } from 'prop-types'
import cx from 'classnames'

import { useViewport } from 'hooks/useViewport'

import HeadingSection from 'components/HeadingSection'
import WhiteRectangle from 'components/WhiteRectangle'
import BenefitsCard from 'components/BenefitsCard'

import s from './ZkProof.module.scss'

const ZkProof = ({ className, data: { title, content } }) => {
  const { isMobile } = useViewport()

  return (
    <div className={cx(s.root, className)}>
      <div className={s.left}>
        <WhiteRectangle />
        <HeadingSection title={title} />
        {!isMobile && <WhiteRectangle />}
      </div>
      <div className={s.right}>
        {!isMobile && <WhiteRectangle />}
        <div>
          {content.map((el) => (
            <BenefitsCard
              key={el.title}
              className={s.box}
              title={el.title}
              icon={el.icon}
              description={el.description}
            />
          ))}
        </div>
        <WhiteRectangle />
      </div>
    </div>
  )
}

ZkProof.propTypes = {
  className: string,
  data: shape({
    title: string,
    content: arrayOf(
      shape({
        title: string,
        icon: string,
        description: string,
      }),
    ),
  }),
}

export default ZkProof
