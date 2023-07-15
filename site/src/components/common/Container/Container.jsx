import React from 'react';
import { string, any } from 'prop-types';
import cx from 'classnames';

import s from './Container.module.scss';

const Container = ({ className, children }) => (
  <main className={cx(s.root, className)}>{children}</main>
);

Container.propTypes = {
  className: string,
  children: any,
};

export default Container;
