import { memo } from 'react'
import { string } from 'prop-types'
import cx from 'classnames'

import Icon from 'components/Icon'

import s from './BenefitsCard.module.scss'

const BenefitsCard = ({ className, title, icon, description }) => {
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
  icon: string,
  description: string,
}

export default memo(BenefitsCard)
