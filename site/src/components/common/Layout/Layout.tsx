import { any, bool } from 'prop-types'

import Header from 'components/Header'
import Footer from 'components/Footer'
import Script from 'next/script'

import s from './Layout.module.scss'
import { ReactNode } from 'react'
import { SiteConfig } from 'src/strapi/SiteConfig'

type LayoutProps = {
  children: ReactNode
  withFooter?: boolean
  config: SiteConfig
}

const Layout = ({ children, withFooter = true, config }: LayoutProps) => (
  <>
    <Script src='https://www.googletagmanager.com/gtag/js?id=G-CB8D65YWRZ' />
    <Script id='google-analytics'>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-CB8D65YWRZ');
      `}
    </Script>
    <Header config={config} />
    <div className={s.wrapper}>{children}</div>
    {withFooter && <Footer />}
  </>
)

export default Layout
