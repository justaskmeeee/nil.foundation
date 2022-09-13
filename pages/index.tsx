import { Layout } from '@nilfoundation/react-components'
import Head from '../components/Head/Head'
import Header from '../components/Header/Header'
import type { NextPage } from 'next'

/**
 * Main page.
 * 
 * @returns NextPage.
 */
const Home: NextPage = () => {
  return (
    <Layout navbar={<Header />}>
      <Head />
    </Layout>
  )
}

export default Home
