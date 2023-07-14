import React from 'react';
import IntroAnimation, { IntroDescription } from 'components/IntroAnimation';
import { useViewport } from 'hooks/useViewport';
import s from './Intro.module.scss';
import { animatedItemList, animatedItemMobileList } from './data';

const IntroAnimationWidget = ({ ...props }) => {
  return (
    <IntroAnimation
      {...props}
      navigationTitle="Marketplace for zero-knowledge proofs"
      navigationLinkText="Go to Proof Market"
      navigationLink="https://proof.market/#/market/account_mina"
      animatedContainerClassName={s.animatedContainer}
    />
  );
};

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
              text="Get Ethereum-verifiable proofs tailored to your application requirements. Benefit from decentralized network of proof producers with the first marketplace for zkProof generation."
              isVisible={isVisible}
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
