import React from 'react';
import IntroAnimation, { IntroDescription } from 'components/IntroAnimation';
import { useViewport } from 'hooks/useViewport';
import s from './Intro.module.scss';
import { animatedItemList, animatedItemMobileList } from './data';

const IntroAnimationWidget = ({ ...props }) => (
  <IntroAnimation
    {...props}
    navigationTitle="Effortless high-performance circuit definition"
    navigationLinkText="Discover zkLLVM"
    navigationLink="https://github.com/NilFoundation/zkllvm"
    animatedContainerClassName={s.animatedContainer}
  />
);

const Intro = () => {
  const { isMobile } = useViewport();

  return (
    <section className={s.container}>
      {isMobile ? (
        <IntroAnimationWidget
          key="introMobile"
          className={s.animationWidgetMobile}
          items={animatedItemMobileList}
        >
          {isVisible => (
            <IntroDescription
              className={s.descriptionMobile}
              isVisible={isVisible}
              text="Get high-performance circuits straight from C++, Rust, or other mainstream code using this powerful tool designed for developers."
            />
          )}
        </IntroAnimationWidget>
      ) : (
        <IntroAnimationWidget
          key="introDefault"
          className={s.animationWidget}
          items={animatedItemList}
        />
      )}
    </section>
  );
};

export default Intro;
