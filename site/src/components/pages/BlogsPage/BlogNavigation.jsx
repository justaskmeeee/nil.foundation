import React from 'react'
import Button from 'components/Button/Button'
import cx from 'classnames'
import TagButton from 'components/TagButton'
import SideNavigation from 'components/SideNavigation'
import PropTypes from 'prop-types'
import s from './BlogsPage.module.scss'

const BlogNavigation = ({ activeCategory, onCategoryClick, activeTags, onTagClick, categories, tags, className }) => {
  return (
    <SideNavigation className={cx(s.sideNavigation, className)} titleAnimation={false}>
      <div className={s.sideNavigationInner}>
        <div className={s.buttonsWrapper}>
          <Button
            cbData='All'
            onClick={onCategoryClick}
            className={cx(s.filterButtons, {
              [s.activeButton]: activeCategory === 'All',
            })}
          >
            All
          </Button>
          {categories.map((button) => (
            <Button
              key={button.id}
              cbData={button.name}
              onClick={onCategoryClick}
              className={cx(s.filterButtons, {
                [s.activeButton]: activeCategory === button.name,
              })}
            >
              {button.name}
            </Button>
          ))}
        </div>
        <div className={s.tags}>
          {tags.map((tag) => (
            <TagButton
              className={cx({
                [s.activeTag]: activeTags.includes(tag.name),
              })}
              key={tag.id}
              tag={tag.name}
              onClick={onTagClick}
            />
          ))}
        </div>
      </div>
    </SideNavigation>
  )
}

BlogNavigation.propTypes = {
  activeCategory: PropTypes.string,
  onCategoryClick: PropTypes.func,
  activeTags: PropTypes.array,
  onTagClick: PropTypes.func,
  categories: PropTypes.array,
  tags: PropTypes.array,
  className: PropTypes.string,
}

export default BlogNavigation
