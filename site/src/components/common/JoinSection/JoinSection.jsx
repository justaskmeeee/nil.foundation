import React from 'react';
import HeadingSection from 'components/HeadingSection';
import WhiteRectangle from 'components/WhiteRectangle';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import s from './JoinSection.module.scss';

const JoinSection = ({ title, leftText, rightText, social, className }) => {
  return (
    <section className={classNames(s.container, className)}>
      <div className={s.headingWrapper}>
        <WhiteRectangle />
        <HeadingSection
          title={title}
          socials={social}
          className={s.heading}
        />
      </div>
      <div className={s.contentWrapperLeft}>
        <WhiteRectangle className={s.line} />
        <p className={s.text}>{leftText}</p>
        <WhiteRectangle className={s.lineMobile} />
      </div>
      <div className={s.contentWrapperRight}>
        <WhiteRectangle className={s.line} />
        <p className={s.text}>{rightText}</p>
        <WhiteRectangle className={s.lineMobile} />
      </div>
    </section>
  );
};

JoinSection.propTypes = {
  title: PropTypes.string.isRequired,
  leftText: PropTypes.string,
  rightText: PropTypes.string,
  social: PropTypes.string,
  className: PropTypes.string,
};

export default JoinSection;
