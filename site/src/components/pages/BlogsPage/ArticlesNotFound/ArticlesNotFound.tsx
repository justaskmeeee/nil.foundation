import { InferProps, string } from 'prop-types'
import cx from 'classnames'

import s from './ArticlesNotFound.module.scss'

function ArticlesNotFound ({ className, title }: InferProps<typeof ArticlesNotFound.propTypes>) {
  return (
    <div className={cx(s.root, className)}>
      <p className={s.text}>{title}</p>
    </div>
  )
}

ArticlesNotFound.propTypes = {
  className: string,
  title: string,
}

export default ArticlesNotFound
