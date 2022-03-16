import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fun Cat Facts</title>
        <meta name="description" content="{fact}" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.info}>Cat Fact:</h1>
      <h1 className={styles.fact}>{data.fact}</h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  let res = await fetch("https://catfact.ninja/fact");
  let data = await res.json();

  return {
    props: { data },
  };
}
