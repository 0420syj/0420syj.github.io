import React from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

interface GiscusComponentProps {
  repoId: string;
  category: string;
  categoryId: string;
}

const GiscusComponent: React.FC<GiscusComponentProps> = () => {
  const { colorMode } = useColorMode();

  const giscusComponentProps: GiscusComponentProps = {
    repoId: process.env.REPO_ID,
    category: process.env.CATEGORY_NAME,
    categoryId: process.env.CATEGORY_ID,
  };

  return (
    <Giscus
      repo="0420syj/0420syj.github.io"
      repoId={giscusComponentProps.repoId}
      category={giscusComponentProps.category}
      categoryId={giscusComponentProps.categoryId}
      mapping="url"
      term="Welcome to @giscus/react component!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="en"
      loading="lazy"
    />
  );
};

export default GiscusComponent;
