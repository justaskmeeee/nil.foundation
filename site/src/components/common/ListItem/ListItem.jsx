import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';

import s from './ListItem.module.scss';

const ListItem = ({ className, title, description }) => (
  <div className={cx(s.root, className)}>
    <div className={s.title}>{title}</div>
    {description && <p className={s.description}>{description}</p>}
  </div>
);

ListItem.propTypes = {
  className: string,
  title: string,
  description: string,
};

export default ListItem;
