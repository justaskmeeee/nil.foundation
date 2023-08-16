import React, { forwardRef } from 'react'
import { string, any } from 'prop-types'
import cx from 'classnames'

import WhiteRectangle from 'components/WhiteRectangle'

import s from './StickyContainer.module.scss'

const StickyContainer = forwardRef(({ className, children }, ref) => (
  <div ref={ref} className={cx(s.root, className)}>
    {children}
    <WhiteRectangle className={s.whiteRectangle} />
  </div>
))

StickyContainer.propTypes = {
  className: string,
  children: any,
}

StickyContainer.displayName = 'StickyContainer'
export default StickyContainer
