import { useMemo, useState } from 'react';
import { arrayOf, number, shape, string } from 'prop-types';

import Container from 'components/Container';
import ResearchCard from 'components/ResearchCard';

import SideNavigation from 'components/SideNavigation';
import FooterAnimationSection from 'components/FooterAnimationSection';
import LastSection from 'components/LastSection';
import WhiteRectangle from 'components/WhiteRectangle';
import s from './Research.module.scss';

const Research = ({ data }) => {
  const [activeTags] = useState([]);

  const currentPosts = useMemo(() => {
    if (activeTags.length > 0) {
      return [...data.posts].filter(post =>
        post.tags.some(item => activeTags.includes(item.name))
      );
    }

    return data.posts;
  }, [activeTags, data.posts]);

  // TODO: return afted create need tags
  // const onTagClick = useCallback(
  //   tag => {
  //     if (activeTags.includes(tag)) {
  //       setActiveTag(activeTags.filter(active => active !== tag));
  //     } else {
  //       setActiveTag([...activeTags, tag]);
  //     }
  //   },
  //   [activeTags]
  // );

  return (
    <Container className={s.container}>
      <SideNavigation
        title="Research"
        className={s.sideNavigation}
        titleAnimation={false}
      />
      <div className={s.root}>
        <div className={s.pageContent}>
          <div className={s.info}>
            <div className={s.textWrapper}>
              <h1 className={s.pageTitle}>Research</h1>
            </div>
            <div className={s.textWrapper}>
              <h2 className={s.pageSubtitle}>
                Our team’s latest work on trustless cloud data management,
                non-interactive zero-knowledge proofs, decentralized
                cryptography, and more.
              </h2>
            </div>
          </div>
          <div>
            {/* TODO: return afted create need tags */}
            {/* {isMobile && (
            <div className={s.tagsWrapper}>
              <div className={s.tagsContainer}>
                {data.tags.map(tag => (
                  <TagButton
                    className={cx({
                      [s.activeTag]: activeTags.includes(tag),
                    })}
                    key={tag}
                    tag={tag}
                    onClick={onTagClick}
                  />
                ))}
              </div>
            </div>
          )} */}
            <div className={s.cards}>
              {currentPosts.map(el => (
                <ResearchCard
                  key={el.id}
                  className={s.card}
                  content={el}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={s.lastSection}>
        <div className={s.lastSectionWrapper}>
          <WhiteRectangle />
          <LastSection withBackground />
        </div>
      </div>
      <FooterAnimationSection className={s.footerSection} />
    </Container>
  );
};

Research.propTypes = {
  data: shape({
    posts: arrayOf(
      shape({
        id: number,
        date: string,
        author: string,
        link: string,
        title: string,
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
    tags: arrayOf(string),
  }),
};

export default Research;
