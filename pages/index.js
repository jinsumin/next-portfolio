import Head from "next/head";
import Layout from "../components/layout";
import Main from "./main";
import About from "./about";
import Experience from "./experience";
import Projects from "./projects";
import Skills from "./skills";
import Contacts from "./contacts";
import { TOKEN, DATABASE_ID } from "../config";
import Awards from "./awards";
import { useEffect } from "react";

export default function Home({ projects }) {
  const recordVisitor = async () => {
    try {
      const res = await fetch("https://dev.soomin.world/api/record-visitor", {
        method: "POST",
        body: JSON.stringify({ visitedTime: new Date() }),
      });

      if (res.status === 201) {
        console.log("방문시간 기록 완료");
      } else {
        console.log("방문시간 기록 실패");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    recordVisitor();
  }, []);

  return (
    <Layout>
      <Head>
        <title>SOOMIN`s PORTFOLIO</title>
        <meta name="description" content="진수민의 포트폴리오 사이트입니다" />
        <link rel="icon" href="/dev.png" />

        {/* Open Graph tags for social media preview */}
        <meta property="og:title" content="SOOMIN`s PORTFOLIO" />
        <meta property="og:description" content="진수민의 포트폴리오 사이트입니다" />
        <meta property="og:image" content="https://dev.soomin.world/og-image.png" />
        <meta property="og:url" content="https://dev.soomin.world" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SOOMIN`s PORTFOLIO" />

        {/* Twitter Card tags for better Twitter integration */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SOOMIN`s PORTFOLIO" />
        <meta name="twitter:description" content="진수민의 포트폴리오 사이트입니다" />
        <meta name="twitter:image" content="https://dev.soomin.world/og-image.png" />
      </Head>
      <div>
        <Main />
        <About />
        <Awards />
        <Skills />
        <Experience />
        <Projects projects={projects} />
        <Contacts />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-02-22",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const response = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  let projects = null;
  projects = await response.json();

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
