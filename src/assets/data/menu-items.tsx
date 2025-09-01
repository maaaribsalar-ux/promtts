import { ReactNode } from 'react'

export type MenuItemTypes = {
  key: string
  label: string
  isTitle?: boolean
  icon?: ReactNode
  iconVariant?: string
  url?: string
  badge?: {
    variant: string
    text: string
  }
  isDivider?: boolean
  parentKey?: string
  target?: string
  children?: MenuItemTypes[]
}

const MENU_ITEMS: MenuItemTypes[] = [
  {
    key: 'home',
    label: 'Home',
    url: '/home',
    isTitle: false,
  },
  {
    key: 'tiktok-downloader',
    label: 'Tiktok Downloader',
    isTitle: false,
    children: [
      {
        key: 'tiktok-story-downloader',
        label: 'Tiktok Story Downloader',
        url: '/tiktok-downloader/tiktok-story-downloader',
        parentKey: 'tiktok-downloader',
      },
    ],
  },
  {
    key: 'pages',
    label: 'Pages',
    isTitle: false,
    children: [
      {
        key: 'company',
        label: 'Company',
        url: '/pages/company',
        parentKey: 'pages',
      },
      {
        key: 'dashboard',
        label: 'Dashboard',
        url: '/dashboard',
        parentKey: 'pages',
      },
      {
        key: 'career',
        label: 'Career',
        url: '/pages/career',
        parentKey: 'pages',
      },
      {
        key: 'pricing',
        label: 'Pricing',
        url: '/pages/pricing',
        parentKey: 'pages',
      },
      {
        key: 'setting',
        label: 'Setting',
        url: '/setting',
        parentKey: 'pages',
      },
      {
        key: 'help',
        label: 'Help',
        url: '/pages/help',
        parentKey: 'pages',
      },
    ],
  },
  {
    key: 'portfolio',
    label: 'Portfolio',
    isTitle: false,
    children: [
      {
        key: 'portfolio-grid',
        url: '/pages/portfolio/grid',
        label: 'Portfolio Grid',
        parentKey: 'portfolio',
      },
      {
        key: 'portfolio-masonry',
        url: '/pages/portfolio/masonry',
        label: 'Portfolio Masonry',
        parentKey: 'portfolio',
      },
      {
        key: 'portfolio-item',
        url: '/pages/portfolio/item',
        label: 'Portfolio Item',
        parentKey: 'portfolio',
      },
    ],
  },
  {
    key: 'blogs',
    label: 'Blog',
    parentKey: 'Pages',
    isDivider: false,
    children: [
      {
        key: 'blog-page',
        label: 'Blog',
        url: '/pages/blogs/list',
        parentKey: 'blogs',
      },
      {
        key: 'blog-post',
        label: 'Blog Post',
        url: '/pages/blogs/post',
        parentKey: 'blogs',
      },
    ],
  },
  {
    key: 'auth',
    label: 'Account',
    isTitle: false,
    children: [
      {
        key: 'auth-login',
        label: 'Login',
        url: '/auth/login',
        parentKey: 'auth',
      },
      {
        key: 'auth-register',
        label: 'Sign Up',
        url: '/auth/register',
        parentKey: 'auth',
      },
      {
        key: 'auth-forgot-password',
        label: 'Forget Password',
        url: '/auth/forgot-password',
        parentKey: 'auth',
      },
      {
        key: 'auth-confirm-account',
        label: 'Confirm Account',
        url: '/auth/confirm-account',
        parentKey: 'auth',
      },
    ],
  },
  {
    key: 'contact-us',
    label: 'Contact us',
    url: '/contact-us',
    isTitle: false,
  },
]

const HORIZONTAL_MENU_ITEMS: MenuItemTypes[] = [
  {
    key: 'home',
    label: 'Home',
    url: '/',
    isTitle: true,
  },
  {
    key: 'tiktok-downloader',
    label: 'Tiktok Downloader',
    isTitle: true,
    children: [
      {
        key: 'tiktok-story-downloader',
        label: 'Tiktok Story Downloader',
        url: '/tiktok-downloader/tiktok-story-downloader',
        parentKey: 'tiktok-downloader',
      },
    ],
  },
  {
    key: 'pages',
    label: 'Pages',
    isTitle: true,
    children: [
      {
        key: 'pages-auth',
        label: 'Account',
        parentKey: 'pages',
        children: [
          {
            key: 'auth-login',
            label: 'Login',
            url: '/auth/login',
            parentKey: 'pages-auth',
          },
          {
            key: 'auth-register',
            label: 'Sign Up',
            url: '/auth/register',
            parentKey: 'pages-auth',
          },
          {
            key: 'auth-forgot-password',
            label: 'Forget Password',
            url: '/auth/forgot-pass',
            parentKey: 'pages-auth',
          },
          {
            key: 'auth-confirm-account',
            label: 'Confirm Account',
            url: '/auth/confirm-account',
            parentKey: 'pages-auth',
          },
        ],
      },
      {
        key: 'pages-blogs',
        label: 'Blog',
        parentKey: 'pages',
        isDivider: true,
        children: [
          {
            key: 'blog',
            label: 'Blog',
            url: '/pages/blogs/list',
            parentKey: 'pages-blogs',
          },
          {
            key: 'blog-post',
            label: 'Blog Post',
            url: '/pages/blogs/post',
            parentKey: 'pages-blogs',
          },
        ],
      },
      {
        key: 'pages-company',
        label: 'Company',
        url: '/pages/company',
        parentKey: 'pages',
      },
      {
        key: 'contact-us',
        label: 'Contact',
        url: '/pages/contact',
        parentKey: 'pages',
      },
      {
        key: 'pages-dashboard',
        label: 'Dashboard',
        url: '/dashboard',
        parentKey: 'pages',
      },
      {
        key: 'setting',
        label: 'Setting',
        url: '/setting',
        parentKey: 'pages',
      },
      {
        key: 'pages-career',
        label: 'Career',
        url: '/pages/career',
        parentKey: 'pages',
      },
      {
        key: 'pages-pricing',
        label: 'Pricing',
        url: '/pages/pricing',
        parentKey: 'pages',
      },
      {
        key: 'pages-portfolio',
        label: 'Portfolio',
        parentKey: 'pages',
        isDivider: true,
        children: [
          {
            key: 'portfolio-grid',
            url: '/pages/portfolio/grid',
            label: 'Portfolio Grid',
            parentKey: 'pages-portfolio',
          },
          {
            key: 'portfolio-masonry',
            url: '/pages/portfolio/masonry',
            label: 'Portfolio Masonry',
            parentKey: 'pages-portfolio',
          },
          {
            key: 'portfolio-item',
            url: '/pages/portfolio/item',
            label: 'Portfolio Item',
            parentKey: 'pages-portfolio',
          },
        ],
      },
      {
        key: 'pages-help',
        label: 'Help',
        url: '/pages/help',
        parentKey: 'pages',
      },
    ],
  },
  {
    key: 'docs',
    label: 'Docs',
    isTitle: true,
    children: [
      {
        key: 'colors',
        label: 'Colors',
        url: '/docs/colors',
        parentKey: 'docs',
      },
      {
        key: 'typography',
        label: 'Typography',
        url: '/docs/typography',
        parentKey: 'docs',
      },
      {
        key: 'components',
        label: 'Components',
        url: '/docs/ui',
        parentKey: 'docs',
      },
      {
        key: 'custom',
        label: 'Custom',
        url: '/docs/custom',
        parentKey: 'docs',
      },
      {
        key: 'plugin',
        label: 'Plugin',
        url: '/docs/plugins',
        parentKey: 'docs',
      },
    ],
  },
]

export { HORIZONTAL_MENU_ITEMS, MENU_ITEMS }
