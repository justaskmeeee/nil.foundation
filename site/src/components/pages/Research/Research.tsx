import ResearchCard from 'components/ResearchCard'
import s from './Research.module.scss'
import { Post } from 'entities/Post'

type ResearchProps = {
  data: {
    posts: Post[]
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
