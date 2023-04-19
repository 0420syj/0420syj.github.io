// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// Common data
const COMMON_DATA = {
  title: `Wanny's Blog`,
  tagline: '배우고 느낀 것을 기록하는 공간입니다 💡',
  githubLink: 'https://github.com/0420syj',
  githubRepoLink: 'https://github.com/0420syj/0420syj.github.io',
  linkedInLink: 'https://www.linkedin.com/in/wansim0420/',
  email: '0420syj@naver.com',
  googleAnalyticsTrackingID: 'G-HWPS68LZ2H',
  algolia: {
    appId: 'AZOQYC8R4V',
    apiKey: '79ee993e9201fa24d7434de5983ea99b',
    indexName: `0420syjio`,
  },
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: COMMON_DATA.title,
  tagline: COMMON_DATA.tagline,
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://0420syj.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '0420syj', // Usually your GitHub org/user name.
  projectName: '0420syj.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
    path: 'i18n',
    localeConfigs: {
      ko: {
        label: '한국어',
        direction: 'ltr',
        htmlLang: 'ko',
        calendar: 'gregory',
        path: 'ko',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: `${COMMON_DATA.githubRepoLink}/tree/master/`,
          editLocalizedFiles: true,
        },
        blog: {
          editUrl: `${COMMON_DATA.githubRepoLink}/tree/master/`,
          editLocalizedFiles: true,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: '전체 글 목록',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: `${COMMON_DATA.googleAnalyticsTrackingID}`,
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.png',
      colorMode: {
        respectPrefersColorScheme: true,
        disableSwitch: false,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: `${COMMON_DATA.algolia.appId}`,

        // Public API key: it is safe to commit it
        apiKey: `${COMMON_DATA.algolia.apiKey}`,

        indexName: `${COMMON_DATA.algolia.indexName}`,

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },

      navbar: {
        title: COMMON_DATA.title,
        logo: {
          alt: 'logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/blog', label: '블로그', position: 'left' },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '튜토리얼',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: `${COMMON_DATA.githubRepoLink}`,
            'aria-label': 'GitHub',
            className: 'header-github-link',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '링크',
            items: [
              {
                label: '블로그',
                to: '/blog',
              },
              {
                label: '튜토리얼',
                to: '/docs/welcome',
              },
            ],
          },
          {
            title: 'Docusaurus 소개',
            items: [
              {
                label: '홈페이지',
                href: 'https://docusaurus.io/',
              },
              {
                label: '깃허브',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: '깃허브',
                href: `${COMMON_DATA.githubLink}`,
              },
              {
                label: '링크드인',
                href: `${COMMON_DATA.linkedInLink}`,
              },
              {
                label: '이메일',
                href: `mailto:${COMMON_DATA.email}`,
              },
            ],

          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 심완. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: require('prism-react-renderer/themes/vsDark'),
        defaultLanguage: 'javascript',
      },
    }),

  customFields: {
    repoId: process.env.REPO_ID,
    category: process.env.CATEGORY_NAME,
    categoryId: process.env.CATEGORY_ID,
  },
};

module.exports = config;
