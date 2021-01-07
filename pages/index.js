import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Josema Guzman | Front-end Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300&display=swap" rel="stylesheet" /> 
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          👋 Hi!
          <br />
          I'm Josema Guzman.
        </h1>

        <p className={styles.description}>
          Freelance Front-end Developer and UX Designer
        </p>
      </main>
    </div>
  )
}