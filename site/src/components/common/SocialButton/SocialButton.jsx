import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';

import Icon from 'components/Icon';
import Button from 'components/Button';

import s from './SocialButton.module.scss';

const SocialButton = ({ className, icon, href }) => (
  <Button
    className={cx(s.root, className)}
    href={href}
  >
    <Icon name={icon} />
  </Button>
);

SocialButton.propTypes = {
  className: string,
  icon: string,
  href: string,
};

export default SocialButton;
