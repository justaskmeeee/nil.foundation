/* eslint-disable no-nested-ternary */
import { useCallback, useEffect, useState } from 'react';
import { arrayOf, bool, number, shape, string } from 'prop-types';
import cx from 'classnames';

import { useViewport } from 'hooks/useViewport';

import Container from 'components/Container';
import PostCard from 'components/PostCard';
import TagButton from 'components/TagButton';
import Button from 'components/Button';

import FooterAnimationSection from 'components/FooterAnimationSection';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useScroll } from 'hooks/useScroll';
import BlogNavigation from 'pages/BlogsPage/BlogNavigation';
import s from './BlogsPage.module.scss';

const BlogsPage = ({ data }) => {
  const { isMobile } = useViewport();
  const { scrollToTop } = useScroll();

  const sortPostsByType = useCallback(posts => {
    posts.sort((prev, current) =>
      new Date(current.date) < new Date(prev.date)
        ? -1
        : new Date(current.date) > new Date(prev.date)
        ? 1
        : 0
    );
    return posts.sort((prev, current) =>
      prev.isFeature ? -1 : current.isFeature ? 1 : 0
    );
  }, []);

  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTags, setActiveTag] = useState([]);
  const [currentPosts, setCurrentPosts] = useState(sortPostsByType(data.posts));

  useEffect(() => {
    if (isMobile) {
      return;
    }
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, [activeCategory, activeTags, isMobile]);

  const onTagClick = useCallback(
    tag => {
      setActiveCategory('All');
      scrollToTop();

      let tags = [];
      if (activeTags.includes(tag)) {
        tags = activeTags.filter(active => active !== tag);
      } else {
        tags = [...activeTags, tag];
      }
      setActiveTag(tags);

      let filteredByTags = [...data.posts];
      if (tags.length > 0) {
        filteredByTags = filteredByTags.filter(post =>
          post.tags.some(item => tags.includes(item.name))
        );
      }
      setCurrentPosts(sortPostsByType(filteredByTags));
    },
    [activeTags, data.posts, sortPostsByType]
  );

  const onCategoryClick = useCallback(
    category => {
      setActiveTag([]);
      scrollToTop();
      setActiveCategory(category);

      let filteredByCategory = [...data.posts];
      if (category !== 'All') {
        filteredByCategory = filteredByCategory.filter(
          post => category === post.category?.name
        );
      }
      setCurrentPosts(sortPostsByType(filteredByCategory));
    },
    [data.posts, sortPostsByType]
  );

  return (
    <Container className={s.container}>
      <BlogNavigation
        onTagClick={onTagClick}
        onCategoryClick={onCategoryClick}
        activeTags={activeTags}
        activeCategory={activeCategory}
        {...data}
      />
      <div className={s.root}>
        <div className={s.inner}>
          <div className={s.pageHead}>
            <h1 className={cx(s.pageTitle, s.headItem)}>Blog</h1>
            <h2 className={cx(s.pageDescription, s.headItem)}>
              Stay in touch with our products development and explore
              zero-knowledge technology
            </h2>
            {isMobile && (
              <div className={s.mobileSortButtons}>
                <div className={s.scrollWrapper}>
                  <div className={s.buttonsWrapper}>
                    <Button
                      cbData="All"
                      onClick={onCategoryClick}
                      className={cx(s.filterButtons, {
                        [s.activeButton]: activeCategory === 'All',
                      })}
                    >
                      All
                    </Button>
                    {data.categories.map(button => (
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
                </div>
                <div className={s.scrollWrapper}>
                  <div className={s.tags}>
                    {data.tags.map(tag => (
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
              </div>
            )}
          </div>
          <div className={cx(s.content, s.centeredItems)}>
            {currentPosts.map(post => (
              <PostCard
                key={post.id}
                className={s.blogPost}
                linkTo={`/blog/${post.slug}`}
                content={post}
              />
            ))}
          </div>
        </div>
      </div>
      <FooterAnimationSection
        linkText="Load more"
        onLinkClick={() => {}}
        className={s.footerSection}
      />
    </Container>
  );
};

BlogsPage.propTypes = {
  data: shape({
    posts: arrayOf(
      shape({
        id: number,
        category: shape({
          id: number,
          name: string,
          slug: string,
          creataAt: string,
          publishedAt: string,
          updatedAt: string,
        }),
        date: string,
        description: string,
        slug: string,
        author: string,
        title: string,
        isFeature: bool,
        tags: arrayOf(
          shape({
            id: number,
            name: string,
            slug: string,
            creataAt: string,
            publishedAt: string,
            updatedAt: string,
          })
        ),
      })
    ),
    tags: arrayOf(
      shape({
        id: number,
        name: string,
        slug: string,
        creataAt: string,
        publishedAt: string,
        updatedAt: string,
      })
    ),
    category: shape({
      id: number,
      name: string,
      slug: string,
      creataAt: string,
      publishedAt: string,
      updatedAt: string,
    }),
  }),
};

export default BlogsPage;
