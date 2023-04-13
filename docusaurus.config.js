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
        },
        blog: {
          showReadingTime: false,
          editUrl: `${COMMON_DATA.githubRepoLink}/tree/master/`,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: '전체 글 목록',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
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
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
        disableSwitch: false,
      },
      navbar: {
        title: COMMON_DATA.title,
        logo: {
          alt: 'logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: `${COMMON_DATA.githubLink}`,
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
            title: 'Link',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'About Docusaurus',
            items: [
              {
                label: 'Homepage',
                href: 'https://docusaurus.io/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'GitHub',
                href: `${COMMON_DATA.githubLink}`,
              },
              {
                label: 'LinkedIn',
                href: `${COMMON_DATA.linkedInLink}`,
              },
              {
                label: 'Email',
                href: `mailto:${COMMON_DATA.email}`,
              },
            ],

          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Wan Sim.Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
