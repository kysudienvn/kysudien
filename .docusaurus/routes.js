import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/simpledoc/blog',
    component: ComponentCreator('/simpledoc/blog', '72c'),
    exact: true
  },
  {
    path: '/simpledoc/blog/archive',
    component: ComponentCreator('/simpledoc/blog/archive', '22e'),
    exact: true
  },
  {
    path: '/simpledoc/blog/authors',
    component: ComponentCreator('/simpledoc/blog/authors', '70c'),
    exact: true
  },
  {
    path: '/simpledoc/blog/authors/all-nguyen-hai-ha-articles',
    component: ComponentCreator('/simpledoc/blog/authors/all-nguyen-hai-ha-articles', '39e'),
    exact: true
  },
  {
    path: '/simpledoc/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/simpledoc/blog/authors/all-sebastien-lorber-articles', '611'),
    exact: true
  },
  {
    path: '/simpledoc/blog/authors/yangshun',
    component: ComponentCreator('/simpledoc/blog/authors/yangshun', 'bfc'),
    exact: true
  },
  {
    path: '/simpledoc/blog/first-blog-post',
    component: ComponentCreator('/simpledoc/blog/first-blog-post', '4bb'),
    exact: true
  },
  {
    path: '/simpledoc/blog/long-blog-post',
    component: ComponentCreator('/simpledoc/blog/long-blog-post', 'a9d'),
    exact: true
  },
  {
    path: '/simpledoc/blog/mdx-blog-post',
    component: ComponentCreator('/simpledoc/blog/mdx-blog-post', 'd64'),
    exact: true
  },
  {
    path: '/simpledoc/blog/tags',
    component: ComponentCreator('/simpledoc/blog/tags', '438'),
    exact: true
  },
  {
    path: '/simpledoc/blog/tags/docusaurus',
    component: ComponentCreator('/simpledoc/blog/tags/docusaurus', '2c1'),
    exact: true
  },
  {
    path: '/simpledoc/blog/tags/facebook',
    component: ComponentCreator('/simpledoc/blog/tags/facebook', 'ca1'),
    exact: true
  },
  {
    path: '/simpledoc/blog/tags/hello',
    component: ComponentCreator('/simpledoc/blog/tags/hello', '477'),
    exact: true
  },
  {
    path: '/simpledoc/blog/tags/hola',
    component: ComponentCreator('/simpledoc/blog/tags/hola', '300'),
    exact: true
  },
  {
    path: '/simpledoc/blog/welcome',
    component: ComponentCreator('/simpledoc/blog/welcome', 'eca'),
    exact: true
  },
  {
    path: '/simpledoc/demo/about',
    component: ComponentCreator('/simpledoc/demo/about', '73c'),
    exact: true
  },
  {
    path: '/simpledoc/demo/image-gallery',
    component: ComponentCreator('/simpledoc/demo/image-gallery', '97c'),
    exact: true
  },
  {
    path: '/simpledoc/demo/text-reveal',
    component: ComponentCreator('/simpledoc/demo/text-reveal', '9c4'),
    exact: true
  },
  {
    path: '/simpledoc/markdown-page',
    component: ComponentCreator('/simpledoc/markdown-page', 'a0a'),
    exact: true
  },
  {
    path: '/simpledoc/docs',
    component: ComponentCreator('/simpledoc/docs', 'dc3'),
    routes: [
      {
        path: '/simpledoc/docs',
        component: ComponentCreator('/simpledoc/docs', '66d'),
        routes: [
          {
            path: '/simpledoc/docs/tags',
            component: ComponentCreator('/simpledoc/docs/tags', '481'),
            exact: true
          },
          {
            path: '/simpledoc/docs/tags/cad',
            component: ComponentCreator('/simpledoc/docs/tags/cad', '057'),
            exact: true
          },
          {
            path: '/simpledoc/docs/tags/day-trung-tinh',
            component: ComponentCreator('/simpledoc/docs/tags/day-trung-tinh', '285'),
            exact: true
          },
          {
            path: '/simpledoc/docs/tags/hvac',
            component: ComponentCreator('/simpledoc/docs/tags/hvac', '3e0'),
            exact: true
          },
          {
            path: '/simpledoc/docs/tags/khoang-cach-dau-bao-chay',
            component: ComponentCreator('/simpledoc/docs/tags/khoang-cach-dau-bao-chay', '46c'),
            exact: true
          },
          {
            path: '/simpledoc/docs/tags/nontag',
            component: ComponentCreator('/simpledoc/docs/tags/nontag', '8e8'),
            exact: true
          },
          {
            path: '/simpledoc/docs/tags/tip',
            component: ComponentCreator('/simpledoc/docs/tags/tip', '6a6'),
            exact: true
          },
          {
            path: '/simpledoc/docs/tags/vrv',
            component: ComponentCreator('/simpledoc/docs/tags/vrv', 'c45'),
            exact: true
          },
          {
            path: '/simpledoc/docs',
            component: ComponentCreator('/simpledoc/docs', '851'),
            routes: [
              {
                path: '/simpledoc/docs/CAD TIP/Copy giá trị tăng dần trong auto cad',
                component: ComponentCreator('/simpledoc/docs/CAD TIP/Copy giá trị tăng dần trong auto cad', 'fdc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/CAD TIP/kiểm tra diện tích của một hình bất kỳ bằng lips cad',
                component: ComponentCreator('/simpledoc/docs/CAD TIP/kiểm tra diện tích của một hình bất kỳ bằng lips cad', 'd31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/CAD TIP/MTEX-CHE-DOI-TUONG-AUTO-CAD',
                component: ComponentCreator('/simpledoc/docs/CAD TIP/MTEX-CHE-DOI-TUONG-AUTO-CAD', 'cd3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/CAD TIP/Vẽ máy biến áp bằng lips cad',
                component: ComponentCreator('/simpledoc/docs/CAD TIP/Vẽ máy biến áp bằng lips cad', 'd0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/CAD TIP/Vẽ ống Conduit trong auto cad bằng lips',
                component: ComponentCreator('/simpledoc/docs/CAD TIP/Vẽ ống Conduit trong auto cad bằng lips', '7da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/CAD TIP/Vẽ thang máng cáp trong Auto cad bằng lips',
                component: ComponentCreator('/simpledoc/docs/CAD TIP/Vẽ thang máng cáp trong Auto cad bằng lips', '17a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/CAD TIP/WIPEOUT',
                component: ComponentCreator('/simpledoc/docs/CAD TIP/WIPEOUT', 'ad8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/category/elt',
                component: ComponentCreator('/simpledoc/docs/category/elt', '9d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/category/hướng-dẫn-bổ-sung',
                component: ComponentCreator('/simpledoc/docs/category/hướng-dẫn-bổ-sung', '2a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/day-trung tính',
                component: ComponentCreator('/simpledoc/docs/day-trung tính', '953'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/demo',
                component: ComponentCreator('/simpledoc/docs/demo', '675'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/ELT/congratulations',
                component: ComponentCreator('/simpledoc/docs/ELT/congratulations', 'c62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/ELT/create-a-blog-post',
                component: ComponentCreator('/simpledoc/docs/ELT/create-a-blog-post', 'b89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/ELT/create-a-document',
                component: ComponentCreator('/simpledoc/docs/ELT/create-a-document', '024'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/ELT/create-a-page',
                component: ComponentCreator('/simpledoc/docs/ELT/create-a-page', '50a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/ELT/deploy-your-site',
                component: ComponentCreator('/simpledoc/docs/ELT/deploy-your-site', 'b46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/ELT/markdown-features',
                component: ComponentCreator('/simpledoc/docs/ELT/markdown-features', 'f5e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/HVAC/Hệ điều hòa VRV',
                component: ComponentCreator('/simpledoc/docs/HVAC/Hệ điều hòa VRV', 'ab4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/HVAC/Untitled',
                component: ComponentCreator('/simpledoc/docs/HVAC/Untitled', '628'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/intro',
                component: ComponentCreator('/simpledoc/docs/intro', '072'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/Solar _ PV/Untitled',
                component: ComponentCreator('/simpledoc/docs/Solar _ PV/Untitled', 'f2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/simpledoc/docs/tutorial-extras/manage-docs-versions', 'cc2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/simpledoc/docs/tutorial-extras/translate-your-site', '22e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/simpledoc/',
    component: ComponentCreator('/simpledoc/', '7a0'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
