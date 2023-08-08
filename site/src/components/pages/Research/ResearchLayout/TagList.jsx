import React from 'react';
import s from './ResearchLayout.module.scss';
import TagButton from 'components/TagButton';
import { arrayOf, string } from 'prop-types';
import { Tag } from 'entities/tag';
import cx from 'classnames';

const TagList = ({ tags, activeTagSlug, className }) => {
  return (
    <ul className={cx(s.tagList, className)}>
      {tags.map(tagItem => (
        <li key={tagItem.id}>
          <TagButton
            className={s.tabItem}
            tag={tagItem.name}
            isActive={activeTagSlug === tagItem.slug.toString()}
            href={`/research/tag/${tagItem.name}`}
          />
        </li>
      ))}
    </ul>
  );
};

TagList.propTypes = {
  tags: arrayOf(Tag).isRequired,
  activeTagSlug: string,
  className: string,
};

export default TagList;
