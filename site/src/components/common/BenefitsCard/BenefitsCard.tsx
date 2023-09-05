import { memo } from 'react'
import { InferProps, string } from 'prop-types'
import cx from 'classnames'

import Icon from 'components/Icon'

import s from './BenefitsCard.module.scss'

function BenefitsCard({ className, title, icon, description }: InferProps<typeof BenefitsCard.propTypes>) {
  return (
    <div className={cx(s.root, className)}>
      <div className={s.leftPath}>
        <h2 className={s.title}>{title}</h2>
        <Icon name={icon} className={s.icon} />
      </div>
      <p className={s.description}>{description}</p>
    </div>
  )
}

BenefitsCard.propTypes = {
  className: string,
  title: string,
  icon: string.isRequired,
  description: string,
}

export default memo(BenefitsCard)
