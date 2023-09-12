import { HTMLAttributes, memo } from 'react'

import { getIcon } from './utils'

export type IconProps = {
  className?: string
  name: string
  fill?: string
} & HTMLAttributes<SVGSVGElement>

function Icon({ className, name, fill, ...props }: IconProps) {
  const SVGIcon = getIcon(name)

  if (!SVGIcon) {
    return null
  }

  return <SVGIcon className={className} fill={fill} {...props} />
}

export default memo(Icon)
