import { memo, useMemo } from 'react';
import cx from 'classnames';
import { string, shape, bool } from 'prop-types';

import Icon from 'components/Icon';
import Button from 'components/Button';

import s from './PostCard.module.scss';

const PostCard = ({ className, content, linkTo }) => {
  const isFeaturePost = useMemo(() => {
    return content.isFeature;
  }, [content.isFeature]);

  return (
    <Button
      href={linkTo}
      className={cx(s.root, className, { [s.featured]: isFeaturePost })}
    >
      <div
        className={cx(s.wrapper, {
          [s.featurePost]: isFeaturePost,
          [s.blogPost]: !isFeaturePost,
        })}
      >
        <div className={cx(s.info, { [s.featureInfo]: isFeaturePost })}>
          <p className={cx(s.author, s.onHoverBlock)}>{content.author}</p>
          <p className={s.date}>{content.date}</p>
        </div>
        <div className={cx({ [s.content]: !isFeaturePost })}>
          <h2
            className={cx({
              [s.featureTitle]: isFeaturePost,
              [s.title]: !isFeaturePost,
            })}
          >
            {content.title}
          </h2>
          {content.description && (
            <p
              className={cx({
                [s.featureDescription]: isFeaturePost,
                [s.description]: !isFeaturePost,
              })}
            >
              {content.description}
            </p>
          )}
        </div>
        <Icon
          name="arrow-up"
          className={cx(s.arrow, { [s.bigArrow]: isFeaturePost })}
        />
      </div>
    </Button>
  );
};

PostCard.propTypes = {
  className: string,
  linkTo: string,
  content: shape({
    author: string,
    date: string,
    title: string,
    description: string,
    isFeature: bool,
  }),
};

export default memo(PostCard);
