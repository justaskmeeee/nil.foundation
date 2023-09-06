import { memo } from 'react'
import { SvgIconComponent } from '../SvgIconComponent'

const Ml: SvgIconComponent = ({ className }) => (
  <svg className={className} width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect y='23' width='80' height='52' fill='white' />
    <rect x='18' y='35' width='14' height='14' fill='#212121' />
    <rect x='49' y='35' width='14' height='14' fill='#212121' />
    <rect x='32' y='61' width='16' height='6' fill='#212121' />
    <rect x='36' y='17' width='8' height='6' fill='white' />
    <rect x='27' y='5' width='26' height='12' fill='white' />
  </svg>
)

export default memo(Ml)
