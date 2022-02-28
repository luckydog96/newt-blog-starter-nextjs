import { AppMeta } from "newt-client-js";
import Head from "next/head";
import { Cover } from "../../../components/Cover";
import { Layout } from "../../../components/Layout";
import { fetchApp } from "../../../lib/api";

export default function Category({ app }: { app: AppMeta }) {
  return (
    <Layout app={app}>
      <Head>
        <title>{app?.name || app?.uid || ""}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {app.cover?.value && <Cover app={app} />}
    </Layout>
  );
}

export async function getStaticProps() {
  const app = await fetchApp();
  return {
    props: {
      app,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: "test-category",
        },
      },
    ],
    fallback: "blocking",
  };
}
