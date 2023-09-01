import { memo } from 'react'
import { InferProps, string } from 'prop-types'

import { getIcon } from './utils'

function Icon({ className, name, fill, ...props }: InferProps<typeof Icon.propTypes>)) {
  const SVGIcon = getIcon(name)

  return <SVGIcon className={className} fill={fill} {...props} />
}

Icon.propTypes = {
  className: string,
  fill: string,
  name: string.isRequired,
}

export default memo(Icon)
