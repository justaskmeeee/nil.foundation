import { forwardRef, useMemo } from 'react';
import { string, any, oneOf, func } from 'prop-types';
import Link from 'next/link';
import cx from 'classnames';

import modsClasses from 'utils/modsClasses';
import isExternalLink from 'utils/isExternalLink';

import s from './Button.module.scss';

const Button = forwardRef(
  (
    { className, cbData, children, as, href, hover, onClick, ...otherProps },
    ref
  ) => {
    const CustomTag = useMemo(() => {
      if (as) return as;
      if (href) return 'a';
      return 'button';
    }, [href, as]);

    const isExternal = useMemo(() => isExternalLink(href || ''), [href]);

    const classNames = useMemo(() => {
      const classes = modsClasses(s, {
        hover,
      });

      return cx(className, s.root, classes, {});
    }, [className, hover]);

    const handleClick = () => {
      if (onClick) onClick(cbData);
    };

    if (href && !isExternal) {
      return (
        <Link
          href={href}
          className={classNames}
          ref={ref}
          {...otherProps}
        >
          {children}
        </Link>
      );
    }

    return (
      <CustomTag
        className={classNames}
        href={href}
        ref={ref}
        rel={href && isExternal && 'noopener noreferrer'}
        target={href && isExternal && '_blank'}
        onClick={handleClick}
        {...otherProps}
      >
        {children}
      </CustomTag>
    );
  }
);

Button.propTypes = {
  className: string,
  children: any,
  as: any,
  href: string,
  onClick: func,
  hover: oneOf(['underline', 'none']),
};

Button.defaultProps = {
  hover: 'none',
};

export default Button;
