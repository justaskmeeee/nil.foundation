import React from 'react'
import { string, shape, arrayOf } from 'prop-types'
import cx from 'classnames'

import { useViewport } from 'hooks/useViewport'

import WhiteRectangle from 'components/WhiteRectangle'
import HeadingSection from 'components/HeadingSection'
import ListItem from 'components/ListItem'
import Button from 'components/ArrowButton'

import s from './FullCycle.module.scss'

const FullCycle = ({ className, data: { title, description, list, footer } }) => {
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
          {list.map((el, i) => (
            <div
              className={s.list}
              key={i} // eslint-disable-line
            >
              <ListItem className={s.item} key={el.title} title={el.title} description={el.description} />
            </div>
          ))}
        </div>
        <div className={s.footer}>
          <WhiteRectangle />
          <div>
            <Button className={s.button} text={footer.text} href={footer.link} />
            <WhiteRectangle />
          </div>
        </div>
      </div>
    </div>
  )
}

FullCycle.propTypes = {
  className: string,
  data: shape({
    title: string,
    description: string,
    list: arrayOf(
      shape({
        title: string,
        description: string,
      }),
    ),
    footer: shape({ text: string, link: string }),
  }),
}

export default FullCycle
