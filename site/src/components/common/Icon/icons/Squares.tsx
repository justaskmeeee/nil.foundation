import { memo } from 'react'
import { SvgIconComponent } from '../SvgIconComponent'

const Squares: SvgIconComponent = ({ className }) => (
  <svg className={className} width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5 0H0V5H5V0ZM5 9H0V14H5V9ZM9 0H14V5H9V0ZM14 9H9V14H14V9Z'
      fill='black'
    />
  </svg>
)

export default memo(Squares)
