import { memo } from 'react'
import { string } from 'prop-types'

// TODO: need logo
const Dh = ({ className }) => (
  <svg className={className} width='34' height='34' viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g clip-path='url(#clip0_827_14171)' />
  </svg>
)

Dh.propTypes = {
  className: string,
}

export default memo(Dh)
