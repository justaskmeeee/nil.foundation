import Container from 'components/Container'

import SideNavigation from 'components/SideNavigation'
import Button from 'components/Button'
import Icon from 'components/Icon'
import { useRouter } from 'next/router'
import SocialButton from 'components/SocialButton'
import FooterAnimationSection from 'components/FooterAnimationSection'
import WhiteRectangle from 'components/WhiteRectangle'
import LastSection from 'components/LastSection'
import s from './WordPage.module.scss'

const ArrowButton = () => (
  <Button href='/glossary' className={s.centerItems}>
    <Icon name='arrow-up' className={s.arrow} />
    <p className={s.paragraph}>Glossary</p>
  </Button>
)

const WordPage = ({ data }) => {
  const router = useRouter()
  const stubSocialLinks = [
    {
      icon: 'linkedin',
      link: `https://www.linkedin.com/shareArticle?mini=true&url=${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}&title=${data.word}`,
    },
    {
      icon: 'telegram',
      link: `https://t.me/share/url?url=${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`,
    },
    {
      icon: 'twitter',
      link: `https://twitter.com/intent/tweet?text=${data.word} ${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`,
    },
  ]
  return (
    <Container className={s.container}>
      <SideNavigation className={s.sideNavigation} title={<ArrowButton />} titleAnimation={false}>
        <div className={s.social}>
          <p className={s.paragraph}>Share</p>
          <div className={s.socialInfo}>
            {stubSocialLinks.map((item) => (
              <SocialButton className={s.socialLink} key={item.icon} href={item.link} icon={item.icon} />
            ))}
          </div>
        </div>
      </SideNavigation>
      <div className={s.root}>
        <div className={s.pageContent}>
          <div className={s.backButton}>
            <Button href='/glossary' className={s.centerItems}>
              <Icon name='arrow-up' className={s.arrow} />
              <p className={s.paragraph}>Glossary</p>
            </Button>
          </div>
          <div className={s.info}>
            <div className={s.textWrapper}>
              <h1 className={s.pageTitle}>{data.word}</h1>
            </div>
            <div className={s.textWrapper}>
              <p className={s.pageSubtitle}>{data.description}</p>
              {data.paragraphs?.map((el) => (
                <p key={el.id} className={s.pageParagraph}>
                  {el.Paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={s.socialMobile}>
        <p className={s.paragraph}>Share</p>
        <div className={s.socialInfo}>
          {stubSocialLinks.map((item) => (
            <SocialButton className={s.socialLink} key={item.icon} href={item.link} icon={item.icon} />
          ))}
        </div>
      </div>
      <div className={s.lastSection}>
        <div className={s.lastSectionWrapper}>
          <WhiteRectangle />
          <LastSection withBackground />
        </div>
      </div>
      <FooterAnimationSection className={s.footerSection} />
    </Container>
  )
}

export default WordPage
