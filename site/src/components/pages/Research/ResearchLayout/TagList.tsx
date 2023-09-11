import React from 'react'
import s from './ResearchLayout.module.scss'
import TagButton from 'components/TagButton'
import type { Tag } from 'entities/tag'
import cx from 'classnames'

type TagListProps = {
  tags: Tag[]
  activeTagSlug?: string | string[]
  onTagClick?: (tag: Tag) => void
  className?: string
}

const TagList = ({ tags, activeTagSlug, onTagClick, className }: TagListProps) => {
  return (
    <ul className={cx(s.tagList, className)}>
      {tags.map((tagItem) => (
        <li key={tagItem.id}>
          <TagButton
            className={s.tabItem}
            tag={tagItem.name}
            isActive={activeTagSlug === tagItem.slug?.toString()}
            onClick={() => onTagClick?.(tagItem)}
          />
        </li>
      ))}
    </ul>
  )
}

export default TagList
