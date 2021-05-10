import Head from "next/head";

const SEO = (props) => (
  <Head>
    <title>{props.title ? props.title : 'Fast Greek Lexicon'}</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default SEO;