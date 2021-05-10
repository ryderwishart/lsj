import { server } from "../config";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import SEO from "../components/SEO";

const EpisodePage = (props) => {
  console.log(props);
  if (props.wordData) {
    return (
      <>
        <SEO title={props.wordData.id} />
        <div className={styles.container}>
          <main className={styles.main}>
            <div className={styles.card}>
              <h1>{props.wordData.id}</h1>
              <p>{props.wordData.description}</p>
            </div>
          </main>
          <footer className={styles.footer}>
            <div
              style={{
                display: "flex",
                flexFlow: "row nowrap",
              }}
            >
              {/* TODO: add keyframes and transition to previous or next episodes? */}
              {/* {previousId && (
              <Link href={`/episodes/${previousId}`}>
                <a className={styles.card}>&larr; Previous Episode</a>
              </Link>
            )}
            <Link href={`/episodes`}>
              <a className={styles.card}>&darr; Back to all episodes</a>
            </Link>
            {nextId && (
              <Link href={`/episodes/${nextId}`}>
                <a className={styles.card}>Next Episode &rarr;</a>
              </Link>
            )} */}
            </div>
          </footer>
        </div>
      </>
    );
  }
  return null;
};

export default EpisodePage;

export async function getStaticProps(context) {
  try {
    const wordData = await (
      await fetch(`${server}/api/${context.params.word}`)
    ).json();
    return {
      props: {
        wordData,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}

export const getStaticPaths = async () => {
  const response = await (await fetch(`${server}/api`)).json();
  const wordSearchStrings = response?.map((word) => word.s);
  const paths = wordSearchStrings.map((wordSearchString) => ({
    params: { word: wordSearchString.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};
