import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Counter from '../components/Counter';
import GitHub from '../components/GitHub';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
          Graham Boris welcomes <a href="https://nextjs.org">Next.js!</a>
        </h1>
      <Counter name={"Pablo"} mult={1} size={2}/>
      <Counter name={"Pia"} mult={2} size={0.5}/>

      <GitHub />
    </div>
  );
}
