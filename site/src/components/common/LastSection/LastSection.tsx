import React from 'react'
import { InferProps, bool, string } from 'prop-types'
import cx from 'classnames'

import { useViewport } from 'hooks/useViewport'

import WhiteRectangle from 'components/WhiteRectangle'

import s from './LastSection.module.scss'

function LastSection({ className, withBackground }: InferProps<typeof LastSection.propTypes>) {
  const { isMobile } = useViewport()

  return (
    <div className={cx(s.wrapper, className, { [s.background]: withBackground })}>
      <div className={s.wrapper}>
        <div className={cx(s.box, s.box1)}>{!isMobile && <WhiteRectangle />}</div>
        {!isMobile && (
          <>
            <div className={cx(s.box, s.box2)}>
              <WhiteRectangle />
            </div>
            <div className={cx(s.box, s.box3)}>
              <WhiteRectangle />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

LastSection.propTypes = {
  withBackground: bool,
  className: string,
}

LastSection.defaultProps = {
  withBackground: false,
}

export default LastSection
