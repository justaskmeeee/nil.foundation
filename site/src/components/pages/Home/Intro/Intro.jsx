import React from 'react'
import IntroAnimation from 'components/IntroAnimation'
import { useViewport } from 'hooks/useViewport'
import WhiteRectangle from 'components/WhiteRectangle/WhiteRectangle'
import IntroDescriptionWidget from 'pages/Home/Intro/IntroDescriptionWidget'
import s from './Intro.module.scss'
import { animatedItemList, animatedItemMobileList } from './data'

const IntroAnimationWidget = ({ ...props }) => {
  return (
    <IntroAnimation
      {...props}
      navigationTitle='Marketplace for zero-knowledge proofs'
      navigationLinkText='Go to Proof Market'
      navigationLink='https://proof.market/#/market/account_mina'
      animatedContainerClassName={s.animatedContainer}
    />
  )
}

const Intro = () => {
  const { isMobile } = useViewport()

  return (
    <section className={s.container}>
      {isMobile ? (
        <IntroAnimationWidget key='introMobile' className={s.animationWidgetMobile} items={animatedItemMobileList}>
          {(isVisible) => <IntroDescriptionWidget isVisible={isVisible} />}
        </IntroAnimationWidget>
      ) : (
        <IntroAnimationWidget key='introDefault' className={s.animationWidget} items={animatedItemList} />
      )}
      <WhiteRectangle className={s.underPatternLine} />
    </section>
  )
}

export default Intro
