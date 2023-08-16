import { memo } from 'react'
import { string } from 'prop-types'

const Bridges = ({ className }) => (
  <svg className={className} width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M78.7042 18.1626H1.29883V62.0954H11.9942C12.0182 46.6472 24.5488 34.1313 40.0027 34.1313C55.4565 34.1313 67.9872 46.6472 68.0112 62.0954H78.7042V18.1626Z'
      fill='currentColor'
    />
  </svg>
)

Bridges.propTypes = {
  className: string,
}

export default memo(Bridges)
