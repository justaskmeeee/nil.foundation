import { memo } from 'react'
import { string } from 'prop-types'

const Lightning = ({ className }) => (
  <svg className={className} width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M43.5 32.7273H68L36.5 80V47.2727H12L43.5 0V32.7273Z' fill='white' />
  </svg>
)

Lightning.propTypes = {
  className: string,
}

export default memo(Lightning)
