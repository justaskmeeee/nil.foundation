import { string, shape } from 'prop-types'
import cx from 'classnames'

import { useViewport } from 'hooks/useViewport'

import HeadingSection from 'components/HeadingSection'
import WhiteRectangle from 'components/WhiteRectangle'

import s from './JoinNil.module.scss'

const JoinNil = ({ className, data: { title, social, content }, withMargin }) => {
  const { isMobile } = useViewport()
  const contentRight = !isMobile ? content.right.isDesktop : content.right.isMobile

  return (
    <div
      className={cx(s.root, className, {
        [s.space]: withMargin,
      })}
    >
      <div className={s.left}>
        <WhiteRectangle className={s.longRect} />
        <HeadingSection className={s.head} title={title} socials={social} />
        {!isMobile && <WhiteRectangle />}
      </div>

      <div className={s.right}>
        <div className={s.box}>
          {!isMobile && <WhiteRectangle />}
          <p className={s.text}>{content.left}</p>
          <WhiteRectangle />
        </div>
        <div className={s.box}>
          {!isMobile && <WhiteRectangle />}
          <p className={s.text}>{contentRight || content.right}</p>
          <WhiteRectangle />
        </div>
      </div>
    </div>
  )
}

JoinNil.propTypes = {
  className: string,
  data: shape({
    title: string,
    social: string,
  }),
}

export default JoinNil
