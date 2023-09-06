import { memo } from 'react'
import { InferProps, string } from 'prop-types'
import cx from 'classnames'

import Button from 'components/Button'
import Icon from 'components/Icon'

import s from './LinkCard.module.scss'

function LinkCard({ className, title, linkTo, description }: InferProps<typeof LinkCard.propTypes>) {
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
