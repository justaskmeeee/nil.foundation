import ResearchCard from 'components/ResearchCard'
import s from './Research.module.scss'
import { MappedResearch } from 'src/strapi/types/entities'

type ResearchProps = {
  data: {
    posts: MappedResearch[]
  }
}

const Research = ({ data }: ResearchProps) => {
  return (
    <section className={s.container}>
      <ul className={s.cardList}>
        {data?.posts.map((el) => (
          <li key={el.id}>
            <ResearchCard className={s.card} content={el} withTags />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Research
