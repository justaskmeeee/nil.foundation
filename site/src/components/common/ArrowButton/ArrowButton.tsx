import React from 'react'
import { string, InferProps } from 'prop-types'
import cx from 'classnames'

import Button, { ButtonProps } from 'components/Button'
import Icon from 'components/Icon'

import s from './ArrowButton.module.scss'

ArrowButton.propTypes = {
  text: string,
}

type ArrowButtonProps = InferProps<typeof ArrowButton.propTypes> & ButtonProps

function ArrowButton({ className, text, ...props }: ArrowButtonProps) {
  return (
    <Button className={cx(s.root, className)} {...props}>
      {text}
      <Icon name='arrow-up' className={s.icon} />
    </Button>
  )
}

export default ArrowButton
