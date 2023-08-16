import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import WhiteRectangle from 'components/WhiteRectangle'
import s from './DottedCard.module.scss'

const DottedCard = forwardRef(({ children, isHeadLine, isBottomLine, className }, ref) => {
  return (
    <article className={classNames(s.container, className)} ref={ref}>
      {isHeadLine && <WhiteRectangle />}
      {children}
      {isBottomLine && <WhiteRectangle className={s.bottomLine} />}
    </article>
  )
})
DottedCard.displayName = 'DottedCard'

DottedCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isHeadLine: PropTypes.bool,
  isBottomLine: PropTypes.bool,
}

export default DottedCard
