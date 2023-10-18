import Container from 'components/Container'

import FooterAnimationSection from 'components/FooterAnimationSection'
import Hero from './Hero/Hero'
import Win from './Win/Win'
import ZkProof from './ZkProof'
import FullCycle from './FullCycle'
import JoinNil from './JoinNil'
import About from './About'
import Intro from './Intro'

import s from './Home.module.scss'
import { homePageData } from 'stubs/homePageData'

type HomeProps = {
  data: typeof homePageData
}

const Home = ({ data }: HomeProps) => (
  <Container className={s.root}>
    <Intro />
    <div className={s.wrapper}>
      <div className={s.content}>
        <Hero data={data.hero} />
        <Win data={data.win} />
        <ZkProof data={data.zkProof} />
        <FullCycle data={data.fullCycle} />
        <JoinNil data={data.joinNil} withMargin />
        <About data={data.about} />
      </div>
    </div>
    <FooterAnimationSection link="/about" linkText="Learn more" />
  </Container>
)

export default Home
