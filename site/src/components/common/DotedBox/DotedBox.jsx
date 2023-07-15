import React from 'react';
import { string, bool } from 'prop-types';
import cx from 'classnames';

import WhiteRectangle from 'components/WhiteRectangle';

import s from './DotedBox.module.scss';

const DotedBox = ({ className, whiteTop, whiteBottom }) => (
  <div className={cx(s.root, className)}>
    {whiteTop && <WhiteRectangle />}
    <div className={s.box} />
    {whiteBottom && <WhiteRectangle />}
  </div>
);

DotedBox.propTypes = {
  className: string,
  whiteTop: bool,
  whiteBottom: bool,
};

DotedBox.defaultProps = {
  whiteTop: false,
  whiteBottom: false,
};

export default DotedBox;
