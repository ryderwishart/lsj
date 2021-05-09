import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { server } from "../../config";

export default function Home(props) {
  console.log({ props });
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Search for a <a href="">Greek Word</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}></div>
        <ul></ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps(context) {
  try {
    const response = await (await fetch(`${server}/api`)).json();

    return {
      props: {
        wordIndices: response,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}
