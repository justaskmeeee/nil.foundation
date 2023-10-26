import { memo, useMemo } from 'react';
import cx from 'classnames';
import { string, shape, bool, InferProps } from 'prop-types';

import Icon from 'components/Icon';
import Button from 'components/Button';

import s from './PostCard.module.scss';
import { getBlogPosts } from 'src/strapi';
import { MappedBlog } from 'src/strapi/types/entities';
import Card from 'components/Card';

type PostCardProps = {
  className?: string;
  post: MappedBlog;
};

function PostCard({ className, post }: PostCardProps) {
  const isFeaturePost = useMemo(() => {
    return post.isFeature;
  }, [post.isFeature]);

  return (
    <Card
      href={`/blog/post/${post.slug}`}
      className={s.root}
    >
      <div className={cx(s.info, { [s.featureInfo]: isFeaturePost })}>
        <p className={cx(s.author, s.onHoverBlock)}>{post.author}</p>
        <p className={s.date}>{post.date}</p>
      </div>
      <div className={cx(s.content, { [s.featuredContent]: !isFeaturePost })}>
        <p
          className={cx({
            [s.featureTitle]: isFeaturePost,
            [s.title]: !isFeaturePost,
          })}
        >
          {post.title}
        </p>
        {post.subtitle && (
          <p
            className={cx({
              [s.featureDescription]: isFeaturePost,
              [s.description]: !isFeaturePost,
            })}
          >
            {post.subtitle}
          </p>
        )}
      </div>
    </Card>
  );
  // <Button href={`/blog/post/${post.slug}`} className={cx(s.root, className, { [s.featured]: isFeaturePost })}>
  //   <div
  //     className={cx(s.wrapper, {
  //       [s.featurePost]: isFeaturePost,
  //       [s.blogPost]: !isFeaturePost,
  //     })}
  //   >
  //     <div className={cx(s.info, { [s.featureInfo]: isFeaturePost })}>
  //       <p className={cx(s.author, s.onHoverBlock)}>{post.author}</p>
  //       <p className={s.date}>{post.date}</p>
  //     </div>
  //     <div className={cx({ [s.content]: !isFeaturePost })}>
  //       <p
  //         className={cx({
  //           [s.featureTitle]: isFeaturePost,
  //           [s.title]: !isFeaturePost,
  //         })}
  //       >
  //         {post.title}
  //       </p>
  //       {post.subtitle && (
  //         <p
  //           className={cx({
  //             [s.featureDescription]: isFeaturePost,
  //             [s.description]: !isFeaturePost,
  //           })}
  //         >
  //           {post.subtitle}
  //         </p>
  //       )}
  //     </div>
  //     <Icon name="arrow-up" className={cx(s.arrow, { [s.bigArrow]: isFeaturePost })} />
  //   </div>
  // </Button>
}

export default memo(PostCard);
