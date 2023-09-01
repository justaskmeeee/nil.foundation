import React from 'react'
import { string, InferProps } from 'prop-types'
import cx from 'classnames'

import Button from 'components/Button'
import Icon from 'components/Icon'

import s from './ArrowButton.module.scss'

function ArrowButton ({ className, text, ...props }: InferProps<typeof ArrowButton.propTypes>) {
  return (
    <Button className={cx(s.root, className)} {...props}>
      {text}
      <Icon name='arrow-up' className={s.icon} />
    </Button>
  )
}

ArrowButton.propTypes = {
  className: string,
  text: string,
}

export default ArrowButton
