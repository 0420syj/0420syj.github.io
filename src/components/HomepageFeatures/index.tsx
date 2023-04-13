import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Translate, { translate } from "@docusaurus/Translate";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      id: "feature-공부",
      message: "공부",
      description: "The title of the website",
    }),
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <Translate>
        새로운 기술을 공부하고, 기존 기술을 더 깊이 이해합니다.
      </Translate>
    ),
  },
  {
    title: translate({
      id: "feature-기록",
      message: "기록",
      description: "The title of the website",
    }),
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <Translate>
        기록을 하면서 더 깊이 이해하고, 더 나은 개발자가 되기 위해 노력합니다.
      </Translate>
    ),
  },
  {
    title: translate({
      id: "feature-공유",
      message: "공유",
      description: "The title of the website",
    }),
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <Translate>공유를 통해 생각과 경험을 나눕니다.</Translate>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
