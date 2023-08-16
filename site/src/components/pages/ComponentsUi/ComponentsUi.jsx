import cx from 'classnames'

import Container from 'components/Container/Container'

import WhiteRectangle from 'components/WhiteRectangle'
import Icon from 'components/Icon'
import DotedBox from 'components/DotedBox'
import SocialButton from 'components/SocialButton'
import PostCard from 'components/PostCard'
import ResearchCard from 'components/ResearchCard'
import HeadingSection from 'components/HeadingSection'
import BenefitsCard from 'components/BenefitsCard'
import LinkCard from 'components/LinkCard'
import ArrowButton from 'components/ArrowButton'
import ListItem from 'components/ListItem'

import {
  Icons,
  benefitsCards,
  cardsStubContent,
  headingContent,
  linkCards,
  benefitsIcons,
  bgIcons,
  listItem,
} from './data'

import s from './ComponentsUi.module.scss'

const ComponentsUi = () => (
  <Container className={s.root}>
    {/* Icons */}
    {Icons.map((el) => (
      <div className={s.item} key={el}>
        <div className={s.icon}>
          <Icon name={el} />
        </div>
        <div className={s.title}>{el}</div>
      </div>
    ))}

    {benefitsIcons.map((el) => (
      <div className={s.item} key={el}>
        <div>
          <Icon name={el} />
        </div>
        <div className={s.title}>{el}</div>
      </div>
    ))}

    {bgIcons.map((el) => (
      <div className={s.item} key={el}>
        <div className={cx(s.icon, s.grey)}>
          <Icon name={el} />
        </div>
        <div className={s.title}>{el}</div>
      </div>
    ))}

    <div className={s.item}>
      <SocialButton icon='github' href='/' />
      <div className={s.title}>SocialButton</div>
    </div>

    <div className={s.item}>
      <WhiteRectangle />
      <div className={s.title}>WhiteRectangle</div>
    </div>

    {/* DotedBox */}
    <div className={cx(s.item, s.dotedBox)}>
      <DotedBox className={s.doted} />
      <div className={s.title}>DotedBox</div>
    </div>
    <div className={cx(s.item, s.dotedBox)}>
      <DotedBox className={s.doted} whiteTop />
      <div className={s.title}>DotedBox whiteTop</div>
    </div>
    <div className={cx(s.item, s.dotedBox)}>
      <DotedBox className={s.doted} whiteBottom />
      <div className={s.title}>DotedBox whiteBottom</div>
    </div>
    <div className={cx(s.item, s.dotedBox)}>
      <DotedBox className={s.doted} whiteTop whiteBottom />
      <div className={s.title}>DotedBox whiteTop whiteBottom</div>
    </div>
    <div className={cx(s.item)}>
      <PostCard isBlogPost linkTo='/' content={cardsStubContent.postCard} />
      <div className={s.title}>PostCard isBlogPost</div>
    </div>
    <div className={cx(s.item)}>
      <PostCard linkTo='/' content={cardsStubContent.postCard} />
      <div className={s.title}>PostCard</div>
    </div>
    <div className={cx(s.item)}>
      <ResearchCard linkTo='/' content={cardsStubContent.researchCard} />
      <div className={s.title}>ResearchCard</div>
    </div>
    {headingContent.map((item) => (
      <div className={cx(s.item)} key={item.title}>
        <HeadingSection title={item.title} description={item.description} socials={item.socials} />
        <div className={s.title}>{item.componentTitle}</div>
      </div>
    ))}
    <div className={cx(s.item)}>
      <ArrowButton text='Button' className={s.arrowButton} />
      <div className={s.title}>ArrowButton</div>
    </div>
    {benefitsCards.map((item) => (
      <div className={cx(s.item)} key={item.icon}>
        <BenefitsCard icon={item.icon} title={item.title} description={item.description} />
        <div className={s.title}>BenefitsCard</div>
      </div>
    ))}
    {linkCards.map((item) => (
      <div className={cx(s.item)} key={item.title}>
        <LinkCard title={item.title} description={item.description} />
        <div className={s.title}>LinkCard</div>
      </div>
    ))}

    {listItem.map((el) => (
      <div className={cx(s.item)} key={el.id}>
        <ListItem title={el.title} description={el.description} />
        <div className={s.title}>ListItem</div>
      </div>
    ))}
  </Container>
)

export default ComponentsUi
