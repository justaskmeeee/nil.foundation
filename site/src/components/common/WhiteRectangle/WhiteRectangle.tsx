import React from 'react'
import { InferProps, string } from 'prop-types'
import cx from 'classnames'

import s from './WhiteRectangle.module.scss'

function WhiteRectangle({ className }: InferProps<typeof WhiteRectangle.propTypes>) {
  return <div className={cx(s.root, className)} />
}

WhiteRectangle.propTypes = {
  className: string,
}

export default WhiteRectangle
