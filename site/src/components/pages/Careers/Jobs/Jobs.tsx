import React from 'react'
import cx from 'classnames'

import { useViewport } from 'hooks/useViewport'

import HeadingSection from 'components/HeadingSection'
import WhiteRectangle from 'components/WhiteRectangle'
import Button from 'components/ArrowButton'

import s from './Jobs.module.scss'
import { careersPageData } from 'stubs/careersPageData'

type JobsProps = {
  className?: string
  data: typeof careersPageData.jobs
  isSkillsSection?: boolean
}

const Jobs = ({ className, data: { title, description, button }, isSkillsSection = false }: JobsProps) => {
  const { isMobile } = useViewport()

  return (
    <div className={cx(s.root, className, { [s.testMargin]: isSkillsSection })}>
      <div className={s.left}>
        <WhiteRectangle />
        <HeadingSection className={s.titleSection} title={title} />
        {!isMobile && <WhiteRectangle />}
      </div>
      <div className={s.right}>
        {!isMobile && <WhiteRectangle />}
        <div
          className={cx(s.description, {
            [s.testDescription]: isSkillsSection,
          })}
        >
          {description}
        </div>
        <div className={s.footer}>
          <WhiteRectangle />
          <div>
            <Button className={s.button} text={button.text} href={button.link} />
            <WhiteRectangle />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobs
