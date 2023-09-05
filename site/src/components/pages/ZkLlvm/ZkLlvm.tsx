import Container from 'components/Container'

import JoinNil from 'pages/Home/JoinNil'
import About from 'pages/Home/About'
import ZkProof from 'pages/Home/ZkProof'

import FooterAnimationSection from 'components/FooterAnimationSection'
import Hero from './Hero'
import FullCycle from './FullCycle'
import Accelerating from './Accelerating'

import Intro from './Intro'

import s from './ZkLlvm.module.scss'
import { zkllvmPageData } from 'stubs/zkllvmPageData'

type ZkLlvmProps = {
  data: typeof zkllvmPageData
}

const ZkLlvm = ({ data }: ZkLlvmProps) => (
  <Container>
    <Intro />
    <div className={s.wrapper}>
      <div className={s.content}>
        <Hero data={data.hero} />
        <Accelerating data={data.accelerating} />
        <ZkProof data={data.zkProof} />
        <FullCycle data={data.fullCycle} />
        <JoinNil data={data.joinNil} withMargin />
        <About data={data.about} />
      </div>
    </div>
    <FooterAnimationSection link='/about' linkText='Learn more' />
  </Container>
)

export default ZkLlvm
