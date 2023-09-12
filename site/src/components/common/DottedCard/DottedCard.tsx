import React, { forwardRef } from 'react'
import classNames from 'classnames'
import WhiteRectangle from 'components/WhiteRectangle'
import s from './DottedCard.module.scss'

type DottedCardProps = {
  children?: React.ReactNode
  className?: string
  isHeadLine?: boolean
  isBottomLine?: boolean
}

const DottedCard = forwardRef<HTMLDivElement, DottedCardProps>(
  ({ children, isHeadLine, isBottomLine, className }, ref) => {
    return (
      <article className={classNames(s.container, className)} ref={ref}>
        {isHeadLine && <WhiteRectangle />}
        {children}
        {isBottomLine && <WhiteRectangle className={s.bottomLine} />}
      </article>
    )
  },
)
DottedCard.displayName = 'DottedCard'

export default DottedCard
