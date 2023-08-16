import { useRef, useState, useEffect, useCallback } from 'react'
import { string } from 'prop-types'
import cx from 'classnames'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import s from './Item.module.scss'

const Item = ({ className, title, children, onClick, index, activeIndex }) => {
  const wrapRef = useRef()
  const [height, setHeight] = useState(0)

  const isActive = activeIndex === index

  const handleClick = useCallback(() => onClick(index), [index, onClick])

  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 400)
  }, [height])

  useEffect(() => {
    const handleResize = () => {
      setHeight(wrapRef.current.scrollHeight)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className={cx(s.root, className, { [s.opened]: isActive })}>
      <div className={s.head} onClick={handleClick}>
        {title} <div className={s.plus} />
      </div>
      <div className={s.wrapper} ref={wrapRef} style={{ maxHeight: `${isActive ? height : 0}px` }}>
        {children}
      </div>
    </div>
  )
}

Item.propTypes = {
  className: string,
}

export default Item
