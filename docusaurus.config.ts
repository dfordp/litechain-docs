import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Litechain',
  tagline: 'The zero-boilerplate LLM framework for humans.',
  favicon: 'https://github.com/litechain-ai.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'litechain', // Update to your GitHub org/user name
  projectName: 'litechain', // Update to your repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'https://github.com/litechain-ai/litechain.png',
    navbar: {
      title: 'Litechain',
      logo: {
        alt: 'Litechain Logo',
        src: 'https://github.com/litechain-ai.png',
      },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Docs' },  
        { href: 'https://github.com/litechain-ai/litechain', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Getting Started', to: '/docs/getting-started' },
            { label: 'Features', to: '/docs/features' },
            { label: 'API Reference', to: '/docs/api' },
            { label: 'Advanced', to: '/docs/advanced' },
            { label: 'Use Cases', to: '/docs/use-cases' },
            { label: 'Providers', to: '/docs/providers' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub Discussions', href: 'https://github.com/litechain/litechain/discussions' },
            { label: 'Discord', href: 'https://discord.gg/your-discord' },
            { label: 'X', href: 'https://x.com/litechain' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Litechain. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
