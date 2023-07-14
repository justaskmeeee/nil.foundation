import { memo } from 'react';
import { string } from 'prop-types';

import { getIcon } from './utils';

const Icon = ({ className, name, fill, ...props }) => {
  const SVGIcon = getIcon(name);

  return (
    <SVGIcon
      className={className}
      fill={fill}
      {...props}
    />
  );
};

Icon.propTypes = {
  className: string,
  fill: string,
  name: string.isRequired,
};

export default memo(Icon);
