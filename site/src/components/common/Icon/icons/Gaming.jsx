import { memo } from 'react'
import { string } from 'prop-types'

const Gaming = ({ className }) => (
  <svg className={className} width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M77.4065 12.5098H2.5957V67.2682H77.4065V12.5098ZM57.3943 29.4771H50.4531V36.4183H57.3943V29.4771ZM22.6172 29.4773H29.5584V36.4186H36.4975V43.3598H29.5584V50.301H22.6172V43.3598H15.6738V36.4186H22.6172V29.4773ZM57.3887 43.3604H64.3299V50.3016H57.3887V43.3604Z'
      fill='currentColor'
    />
  </svg>
)

Gaming.propTypes = {
  className: string,
}

export default memo(Gaming)
