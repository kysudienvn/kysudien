// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Electric source',
  tagline: 'Electrical!',
  favicon: 'img/favicon.ico',

  // Cấu hình URL chính xác để deploy trên GitHub Pages
  url: 'https://nguyenhaiha269.github.io',  // Cập nhật URL từ thông tin bạn đã cung cấp
  baseUrl: '/simpledoc/',  // Cập nhật baseUrl từ thông tin bạn đã cung cấp

  // Cấu hình GitHub Pages để deploy đúng
  organizationName: 'kysudienvn', // Đã thay đổi thành GitHub username mới
  projectName: 'kysudien', // Đã thay đổi tên repo mới
  deploymentBranch: 'gh-pages', // Nhánh được dùng để deploy

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false, // Tránh lỗi trang 404 khi truy cập đường dẫn

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [require.resolve('docusaurus-lunr-search')],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/kysudienvn/kysudien/edit/main/',  // Cập nhật URL GitHub mới
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/kysudienvn/kysudien/edit/main/',  // Cập nhật URL GitHub mới
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'image_banner',
        content:
          '<a href="https://vnstocks.com/lp-khoa-hoc-python-chung-khoan"><img src="https://vnstocks.com/img/python_chung_khoan_banner.png" alt="Banner" class="announcement-bar-image" /></a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },

      image: 'img/favicon.png',
      navbar: {
        title: 'ELECTRICAL',
        logo: {
          alt: 'ELECTRICAL KNOWLEDGE',
          src: 'img/favicon.png',
        },
        items: [
          { to: '/docs/intro', position: 'left', label: 'Tutorial' },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/docs/demo/', label: 'Thư viện mẫu', position: 'left' },
          { to: '/markdown-page', label: 'Trang Markdown', position: 'left' },

          // Thêm Dropdown cho các tags (FA, ELV, CCTV)
          {
            type: 'dropdown',
            label: 'FA', // Tiêu đề dropdown
            position: 'left',
            items: [
              { label: 'FA Documentation 1', to: '/docs/FA/doc1' },
              { label: 'FA Documentation 2', to: '/docs/FA/doc2' },
              // Thêm các tài liệu có tag FA
            ],
          },
          {
            type: 'dropdown',
            label: 'ELV', // Tiêu đề dropdown
            position: 'left',
            items: [
              { label: 'ELV Documentation 1', to: '/docs/ELV/doc1' },
              { label: 'ELV Documentation 2', to: '/docs/ELV/doc2' },
              // Thêm các tài liệu có tag ELV
            ],
          },
          {
            type: 'dropdown',
            label: 'CCTV', // Tiêu đề dropdown
            position: 'left',
            items: [
              { label: 'CCTV Documentation 1', to: '/docs/CCTV/doc1' },
              { label: 'CCTV Documentation 2', to: '/docs/CCTV/doc2' },
              // Thêm các tài liệu có tag CCTV
            ],
          },

          // Liên kết GitHub
          { href: 'https://github.com/kysudienvn/kysudien', label: 'GitHub', position: 'right' },  // Cập nhật GitHub URL mới
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [{ label: 'Tutorial', to: '/docs/intro' }],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'Blog', to: '/blog' },
              {
                label: 'GitHub',
                href: 'https://github.com/kysudienvn/kysudien',  // Cập nhật GitHub URL mới
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Awesome Docusaurus, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
