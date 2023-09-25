import { InferProps, bool, func, string } from 'prop-types'
import cx from 'classnames'

import Button from 'components/Button'

import s from './TagButton.module.scss'

function TagButton({ tag, className, onClick, href, isActive }: InferProps<typeof TagButton.propTypes>) {
  return (
    <Button
      onClick={onClick ? () => onClick(tag) : undefined}
      className={cx(s.root, isActive && s.rootActive, className)}
      href={href}
    >
      {tag}
    </Button>
  )
}

TagButton.propTypes = {
  className: string,
  tag: string,
  href: string,
  onClick: func,
  isActive: bool,
}

export default TagButton
