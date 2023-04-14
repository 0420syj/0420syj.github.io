---.
sidebar_position: 1
---]

# Getting started

:::info

part of the content was generated utilizing ChatGPT-4.

:::

The blog you are viewing was created utilizing [Docusaurus](https://docusaurus.io).

Docusaurus is an open-source static website creation tool built on Meta, React, and Markdown.
In this guide, we'll show you how to create your own GitHub.io blog using Docusaurus.

## Preparation.

- [Node.js](https://nodejs.org/en/download) (v16.14 or later)
- [Yarn](https://classic.yarnpkg.com/lang/en/) (optional, npm is fine to use)
- [GitHub](https://github.com/) account

## 1. Create the Docusaurus project

First, create a Docusaurus project by running the following command in the terminal.

```bash
npx create-docusaurus@latest my-blog classic
cd my-blog
```

You can also use TypeScript by using the `--typescript` option.

```bash
npx create-docusaurus@latest my-blog classic --typescript
cd my-blog
```

## 2. Configure the Docusaurus project

Edit the docusaurus.config.js file in your project folder to set up the metadata for your website.

```javascript
module.exports = {
  title: 'My Blog',
  tagline: 'A blog created with Docusaurus',
  url: 'https://<your-github-username>.github.io',
  baseUrl: '/',
  ...
};
```

## 3. Write a blog post

You can add a blog post by creating a new Markdown file in the `my-blog/blog` folder.

For example, create a file called `2023-04-13-my-first-post.md` and add the following content.

```markdown
---''
title: "My first post"
author: "Hong Gil-dong"
author_url: "https://github.com/<your-github-username>"
author_image_url: "https://github.com/<your-github-username>.png"
tags: [hello, docusaurus]
date: 2023-04-13
---.

This is my first blog post! I'm using Docusaurus to create a blog on GitHub.io.
```

## 4. Run the blog locally

You can run the blog locally by executing the following command and access [http://localhost:3000] in a browser.

```bash
yarn start
```
