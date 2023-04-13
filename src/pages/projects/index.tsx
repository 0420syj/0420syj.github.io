// Simple docusaurus page for list my projects
// Path: src\pages\projects\index.tsx

import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Translate, { translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>갓데에에에엄 지미. 디씨ㅅ 썸 씨리어스 구르메 씟~</main>
    </Layout>
  );
}
