import { memo } from 'react'
import { string } from 'prop-types'
import cx from 'classnames'

import Button from 'components/Button'
import Icon from 'components/Icon'

import s from './LinkCard.module.scss'

const LinkCard = ({ className, title, linkTo, description }) => {
  return (
    <Button className={cx(s.root, className)} href={linkTo} disabled={!linkTo}>
      <h2 className={s.title}>{title}</h2>
      <p className={s.description}>{description}</p>
      <Icon className={s.arrow} name='arrow-up' />
    </Button>
  )
}

LinkCard.propTypes = {
  className: string,
  title: string,
  linkTo: string,
  description: string,
}

export default memo(LinkCard)
