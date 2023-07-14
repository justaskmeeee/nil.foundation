import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';

import s from './WhiteRectangle.module.scss';

const WhiteRectangle = ({ className }) => (
  <div className={cx(s.root, className)} />
);

WhiteRectangle.propTypes = {
  className: string,
};

export default WhiteRectangle;
