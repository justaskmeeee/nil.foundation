import { memo } from 'react';
import { string } from 'prop-types';

const Rollup = ({ className }) => (
  <svg
    className={className}
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M77.3181 30.6515L39.957 9.08105L2.59595 30.6515L18.5574 39.8668L6.34092 46.92L2.59595 49.0821L6.34092 51.2443L36.212 68.4904L39.957 70.6526L43.702 68.4904L73.5731 51.2443L77.3181 49.0821L73.5731 46.92L61.3567 39.8668L77.3181 30.6515ZM22.3023 42.029L39.957 52.2219L57.6117 42.029L69.8281 49.0821L39.957 66.3282L10.0859 49.0821L22.3023 42.029Z"
      fill="currentColor"
    />
  </svg>
);

Rollup.propTypes = {
  className: string,
};

export default memo(Rollup);
