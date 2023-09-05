import React from 'react'
import { string, bool, InferProps } from 'prop-types'
import cx from 'classnames'

import WhiteRectangle from 'components/WhiteRectangle'

import s from './DotedBox.module.scss'

function DotedBox({ className, whiteTop, whiteBottom }: InferProps<typeof DotedBox.propTypes>) {
  return (
    <div className={cx(s.root, className)}>
      {whiteTop && <WhiteRectangle />}
      <div className={s.box} />
      {whiteBottom && <WhiteRectangle />}
    </div>
  )
}

DotedBox.propTypes = {
  className: string,
  whiteTop: bool,
  whiteBottom: bool,
}

DotedBox.defaultProps = {
  whiteTop: false,
  whiteBottom: false,
}

export default DotedBox
