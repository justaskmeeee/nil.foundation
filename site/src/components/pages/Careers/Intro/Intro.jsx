import React from 'react';
import { string, shape } from 'prop-types';
import cx from 'classnames';

import { useViewport } from 'hooks/useViewport';

import HeadingSection from 'components/HeadingSection';
import WhiteRectangle from 'components/WhiteRectangle';

import s from './Intro.module.scss';

const Intro = ({ className, data: { title, description, text } }) => {
  const { isMobile } = useViewport();

  return (
    <div className={cx(s.wrapper, className)}>
      <div className={s.main}>
        <HeadingSection
          className={s.head}
          title={title}
          description={description}
        />
        <div className={s.footer}>
          <WhiteRectangle />
          <div>
            <p className={s.text}>{text}</p>
            <WhiteRectangle />
          </div>
        </div>
        {isMobile && <WhiteRectangle />}
      </div>
      {!isMobile && (
        <div className={s.wrapper}>
          <div className={cx(s.box, s.box1)}>
            <WhiteRectangle />
          </div>
          <div className={cx(s.box, s.box2)}>
            <WhiteRectangle />
          </div>
        </div>
      )}
    </div>
  );
};

Intro.propTypes = {
  className: string,
  data: shape({
    title: string,
    description: string,
    text: string,
  }),
};

export default Intro;
