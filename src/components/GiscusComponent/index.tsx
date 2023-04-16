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
    i18n: { currentLocale },
  } = useDocusaurusContext() as unknown as {
    siteConfig: { customFields: GiscusProps };
    i18n: { currentLocale: string };
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
      lang={currentLocale}
      loading="eager"
    />
  );
};

export default GiscusComponent;
