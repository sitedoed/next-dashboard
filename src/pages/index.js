import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout'
import MainCards from '@/components/MainCards'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <MainCards />
      <main className={styles.main}>
        <div className={styles.center}>
        </div>

        <div className={styles.grid}>
          Index
        </div>
      </main>
    </Layout>
  )
}
