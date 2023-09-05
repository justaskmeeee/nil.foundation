import React from 'react'
import { InferProps, string } from 'prop-types'
import cx from 'classnames'

import Icon from 'components/Icon'
import Button from 'components/Button'

import s from './SocialButton.module.scss'

function SocialButton({ className, icon, href }: InferProps<typeof SocialButton.propTypes>) {
  return (
    <Button className={cx(s.root, className)} href={href}>
      <Icon name={icon} />
    </Button>
  )
}

SocialButton.propTypes = {
  className: string,
  icon: string.isRequired,
  href: string,
}

export default SocialButton
