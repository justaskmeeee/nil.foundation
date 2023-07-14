import { memo } from 'react';
import { string } from 'prop-types';

const Cross = ({ className }) => (
  <svg
    className={className}
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.6725 1.77491L10.0225 0.124989L5.89754 4.24999L1.77149 0.123931L0.121569 1.77385L4.24763 5.8999L0.123047 10.0245L1.77296 11.6744L5.89754 7.54982L10.0211 11.6733L11.671 10.0234L7.54746 5.8999L11.6725 1.77491Z"
      fill="black"
    />
  </svg>
);

Cross.propTypes = {
  className: string,
};

export default memo(Cross);
