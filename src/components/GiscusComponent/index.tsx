import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

interface GiscusProps {
  repoId: string;
  category: string;
  categoryId: string;
}

const GiscusComponent: React.FC = () => {
  const { colorMode } = useColorMode();

  const {
    siteConfig: {
      customFields: { repoId, category, categoryId },
    },
  } = useDocusaurusContext() as unknown as {
    siteConfig: { customFields: GiscusProps };
  };

  return (
    <Giscus
      repo="0420syj/0420syj.github.io"
      repoId={repoId}
      category={category}
      categoryId={categoryId}
      mapping="url"
      term="Welcome to Wanny's Blog"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="en"
      loading="eager"
    />
  );
};

export default GiscusComponent;
