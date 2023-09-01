import { memo } from 'react'
import { InferProps, string } from 'prop-types'

function ArrowInCircle({ className }: InferProps<typeof ArrowInCircle.propTypes>) {
  return (
    <svg className={className} width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M40 2C60.976 2 78 19.024 78 40C78 60.976 60.976 78 40 78C19.024 78 2 60.976 2 40C2 19.024 19.024 2 40 2ZM43.8 40V24.8H36.2V40H24.8L40 55.2L55.2 40H43.8Z'
        fill='white'
      />
    </svg>
  )
}

ArrowInCircle.propTypes = {
  className: string,
}

export default memo(ArrowInCircle)
