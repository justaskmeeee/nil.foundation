import { string, shape } from 'prop-types'
import cx from 'classnames'

import { useViewport } from 'hooks/useViewport'

import HeadingSection from 'components/HeadingSection'
import WhiteRectangle from 'components/WhiteRectangle'

import s from './JoinNil.module.scss'
import { homePageData } from 'stubs/homePageData'

type JoinNilProps = {
  className?: string,
  data: typeof homePageData.joinNil,
  withMargin?: boolean,
}

const JoinNil = ({ className, data: { title, social, content }, withMargin }: JoinNilProps) => {
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
          <p className={s.text}>{contentRight}</p>
          <WhiteRectangle />
        </div>
      </div>
    </div>
  )
}

export default JoinNil
