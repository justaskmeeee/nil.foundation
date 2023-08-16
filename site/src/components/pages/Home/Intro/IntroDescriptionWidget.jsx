import React from 'react'
import PropTypes from 'prop-types'
import { IntroDescription } from 'components/IntroAnimation'
import s from './Intro.module.scss'

const IntroDescriptionWidget = ({ isVisible }) => {
  return (
    <div className={s.descriptionMobile}>
      <IntroDescription
        isVisible={isVisible}
        text='Get Ethereum-verifiable proofs tailored to your application requirements.'
      />
      <IntroDescription
        isVisible={isVisible}
        className={s.descriptionItem}
        text='Benefit from decentralized network of proof producers with the first marketplace for zkProof generation.'
        delay={300}
      />
    </div>
  )
}

IntroDescriptionWidget.propTypes = {
  isVisible: PropTypes.bool,
}

export default IntroDescriptionWidget
