import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useViewport } from 'hooks/useViewport';
import RevealText from 'components/RevealText';
import ArrowButton from 'components/ArrowButton';
import WhiteRectangle from 'components/WhiteRectangle';
import { useSideNavigationTimeline } from 'components/SideNavigation/useSideNavigationTimeline';
import s from './SideNavigation.module.scss';

const SideNavigation = ({
  title,
  link,
  isVisible,
  linkText,
  titleAnimation,
  titleLarge,
  className,
  children,
}) => {
  const titleRef = useRef(null);
  const sidebarRef = useRef(null);
  const { isMobile } = useViewport();
  const [isTitleHidden, setTitleHidden] = useState(false);

  useSideNavigationTimeline(sidebarRef, {
    onLeave: () => {
      setTitleHidden(true);
    },
    onEnterBack: () => {
      setTitleHidden(false);
    },
  });

  useEffect(() => {
    const titleElement = titleRef.current;

    if (!titleElement || isMobile !== false || !titleAnimation) {
      return;
    }

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        invalidateOnRefresh: true,
        end: `+=80%`,
        scrub: 0.5,
      },
    });

    timeline.to(titleElement, {
      scale: '0.48',
      ease: 'expo.out',
    });

    return () => {
      if (timeline) {
        timeline.scrollTrigger.kill();
        timeline.kill();
      }
    };
  }, [titleRef, isMobile, titleAnimation]);

  return (
    <aside
      ref={sidebarRef}
      className={classNames(s.container, className)}
    >
      <div
        ref={titleRef}
        className={classNames(
          s.titleWrapper,
          (isTitleHidden || !isVisible) && s.titleWrapperHidden
        )}
      >
        {title && (
          <RevealText
            as="h1"
            isVisible={isVisible}
            className={classNames(s.title, titleLarge && s.titleLarge)}
            stagger={0.08}
          >
            {title}
          </RevealText>
        )}
      </div>
      <div className={s.linkWrapper}>
        {children}
        {linkText && (
          <ArrowButton
            href={link}
            className={s.link}
            text={linkText}
          />
        )}
        <WhiteRectangle className={s.bottomLine} />
      </div>
    </aside>
  );
};

SideNavigation.propTypes = {
  title: PropTypes.node,
  linkText: PropTypes.string,
  link: PropTypes.string,
  className: PropTypes.string,
  isVisible: PropTypes.bool,
  titleAnimation: PropTypes.bool,
  titleLarge: PropTypes.bool,
  children: PropTypes.any,
};
SideNavigation.defaultProps = {
  isVisible: true,
  titleAnimation: true,
};

export default SideNavigation;
