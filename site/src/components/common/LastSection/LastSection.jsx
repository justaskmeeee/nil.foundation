import React from 'react';
import { bool } from 'prop-types';
import cx from 'classnames';

import { useViewport } from 'hooks/useViewport';

import WhiteRectangle from 'components/WhiteRectangle';

import s from './LastSection.module.scss';

const LastSection = ({ className, withBackground }) => {
  const { isMobile } = useViewport();

  return (
    <div
      className={cx(s.wrapper, className, { [s.background]: withBackground })}
    >
      <div className={s.wrapper}>
        <div className={cx(s.box, s.box1)}>
          {!isMobile && <WhiteRectangle />}
        </div>
        {!isMobile && (
          <>
            <div className={cx(s.box, s.box2)}>
              <WhiteRectangle />
            </div>
            <div className={cx(s.box, s.box3)}>
              <WhiteRectangle />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

LastSection.propTyps = {
  withBackground: bool,
};

LastSection.defaultProps = {
  withBackground: false,
};

export default LastSection;
