import { AnimateSharedLayout } from 'framer-motion'
import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimateSharedLayout>
  )
}

export default MyApp
