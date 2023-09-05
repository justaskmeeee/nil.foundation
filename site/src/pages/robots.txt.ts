import { GetServerSidePropsContext } from "next"

const Robots = () => {}

export const getServerSideProps = ({ res }: GetServerSidePropsContext) => {
  const robots =
    process.env.NODE_ENV === 'development'
      ? `User-agent: *\nDisallow: /`
      : `User-agent: *\nAllow: / \nSitemap: ${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml\nHost: ${process.env.NEXT_PUBLIC_BASE_URL}`

  res.setHeader('Content-Type', 'text/plain')
  res.write(robots)
  res.end()

  return {
    props: {},
  }
}

export default Robots
