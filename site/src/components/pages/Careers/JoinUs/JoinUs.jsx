import React from 'react'
import { string, shape, arrayOf } from 'prop-types'
import cx from 'classnames'

import WhiteRectangle from 'components/WhiteRectangle'
import LinkCard from 'components/LinkCard'
import ListItem from 'components/ListItem'

import s from './JoinUs.module.scss'

const JoinUs = ({ className, data: { title, cards } }) => {
  return (
    <div className={cx(s.wrapper, className)}>
      <div className={s.content}>
        <h2 className={s.title}>{title}</h2>
        <div>
          {cards.map((card) => (
            <div className={s.cardsWrapper} key={card.title}>
              <LinkCard linkTo={card.linkTo} title={card.title} description={card.description} />
              <ListItem className={s.text} title={card.text} />
            </div>
          ))}
        </div>
        <WhiteRectangle />
      </div>
    </div>
  )
}

JoinUs.propTypes = {
  className: string,
  data: shape({
    title: string,
    cards: arrayOf(
      shape({
        linkTo: string,
        title: string,
        description: string,
        text: string,
      }),
    ),
  }),
}

export default JoinUs
