import Container from 'components/Container'

import JoinSection, { getJoinSectionProps } from 'components/JoinSection'
import SideNavigation from 'components/SideNavigation'
import FooterAnimationSection from 'components/FooterAnimationSection'
import Hero from './Hero'
import Partners from './Partners'
import OurTeam from './OurTeam'
import Toolchain from './Toolchain'

import s from './About.module.scss'
import { aboutPageData } from 'stubs/aboutPageData'

type AboutProps = {
  data: typeof aboutPageData
}

const About = ({ data }: AboutProps) => {
  return (
    <Container className={s.container}>
      <SideNavigation className={s.sideNavigation} title='About' titleAnimation={false} />
      <div className={s.root}>
        <div className={s.content}>
          <Hero data={data.hero} />
          <Toolchain data={data.toolchain} />
          <Partners data={data.partners} />
          <OurTeam data={data.ourTeam} />
          <JoinSection {...getJoinSectionProps(data)} />
        </div>
      </div>
      <FooterAnimationSection className={s.footerSection} />
    </Container>
  )
}

export default About
