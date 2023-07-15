import { memo } from 'react';
import { string } from 'prop-types';

const Oracles = ({ className }) => (
  <svg
    className={className}
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 16L64.0833 64.0833"
      stroke="white"
      strokeWidth="5"
    />
    <path
      d="M64.0859 16L16.0027 64.0833"
      stroke="white"
      strokeWidth="5"
    />
    <circle
      cx="39.86"
      cy="40.86"
      r="20.86"
      fill="white"
    />
    <path
      d="M30 39L37.5 46.5L51 33"
      stroke="#212121"
      strokeWidth="4"
    />
    <circle
      cx="13.2346"
      cy="13.2346"
      r="8.23457"
      fill="white"
    />
    <circle
      cx="67.2346"
      cy="13.2346"
      r="8.23457"
      fill="white"
    />
    <circle
      cx="67.2346"
      cy="67.2346"
      r="8.23457"
      fill="white"
    />
    <circle
      cx="13.2346"
      cy="67.2346"
      r="8.23457"
      fill="white"
    />
  </svg>
);

Oracles.propTypes = {
  className: string,
};

export default memo(Oracles);
