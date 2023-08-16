import { arrayOf, shape, string } from 'prop-types'
import cx from 'classnames'

import { useViewport } from 'hooks/useViewport'

import WhiteRectangle from 'components/WhiteRectangle'
import HeadingSection from 'components/HeadingSection'
import LinkCard from 'components/LinkCard'
import ListItem from 'components/ListItem'

import s from './Toolchain.module.scss'

const Toolchain = ({ className, data: { title, description, content } }) => {
  const { isMobile } = useViewport()

  return (
    <div className={cx(s.root, className)}>
      <div className={s.left}>
        <WhiteRectangle />
        <HeadingSection title={title} description={description} />
        {!isMobile && <WhiteRectangle />}
      </div>
      <div className={s.right}>
        {!isMobile && <WhiteRectangle />}
        <div className={s.content}>
          {content.map((el) => (
            <div className={s.box} key={el.title}>
              <LinkCard className={s.linkCard} title={el.title} description={el.description} linkTo={el.link} />
              {el.list.map((item) => (
                <ListItem className={s.listItem} key={el.title} title={item.title} />
              ))}
            </div>
          ))}
        </div>
        <WhiteRectangle />
      </div>
    </div>
  )
}

Toolchain.propTypes = {
  className: string,
  data: shape({
    title: string,
    description: string,
    content: arrayOf(
      shape({
        title: string,
        description: string,
        link: string,
        list: arrayOf(shape({ title: string })),
      }),
    ),
  }),
}

export default Toolchain
