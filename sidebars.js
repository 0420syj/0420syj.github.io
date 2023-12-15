/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  tutorialSidebar: [
    'welcome',
    {
      type: 'category',
      label: 'Docusaurus 튜토리얼 🦖',
      items: [
        {
          type: 'doc',
          id: 'docusaurus-tutorial/intro',
        },
        {
          type: 'category',
          label: '기본 🐤',
          items: ['docusaurus-tutorial/basic/getting-started', 'docusaurus-tutorial/basic/deploy',],
        },
        {
          type: 'category',
          label: '심화 🐔',
          items: ['docusaurus-tutorial/advanced/i18n'],
        }
      ],
    },
    {
      type: 'category',
      label: 'JavaScript 🌐',
      items: [
        {
          type: 'doc',
          id: 'javascript/javascript-essentials',
        }
      ]
    }
  ],

};

module.exports = sidebars;
