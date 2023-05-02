import Head from 'next/head'
import styles from '@/styles/home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Самые популярные бренды | boutiqueme.ru</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.root}>
        <div className={styles.content}>
          <div className={styles.logo}>
            BoutiqueMe<small>.ru</small>
          </div>
          <div className={styles.disclaimer}>
            Скоро открытие
          </div>
        </div>
      </div>
    </>
  )
}
