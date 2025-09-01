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
    key: 'save-tiktok-video',
    label: 'Home',
    url: '/blogs/save-tiktok-video',
    isTitle: false,
  },
  {
    key: 'tiktok-story-downloader',
    label: 'Tiktok Story Downloader',
    url: '/tiktok-story-downloader',
    isTitle: false,
  },
  {
    key: 'tiktok-downloader',
    label: 'Tiktok Downloader',
    isTitle: false,
    children: [
      {
        key: 'tiktok-video-downloader',
        label: 'Tiktok Video Downloader',
        url: '/tiktok-video-downloader',
        parentKey: 'tiktok-downloader',
      },
      {
        key: 'download-tiktok-mp3',
        label: 'Download TikTok MP3',
        url: '/download-tiktok-mp3',
        parentKey: 'tiktok-downloader',
      },
      {
        key: 'download-tiktok-mp3',
        label: 'Download TikTok MP3',
        url: '/download-tiktok-mp3',
        parentKey: 'tiktok-downloader',
      },
      {
        key: 'tiktok-photo-downloader',
        label: 'TikTok Photo Downloader',
        url: '/tiktok-photo-downloader',
        parentKey: 'tiktok-downloader',
      },

      
    ],
  },
   
  {
    key: 'blogs',
    label: 'Blog',
    url: '/pages/blogs/list',
    parentKey: 'blogs',
    isDivider: false,
    
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
    url: '/home',
    isTitle: false,
  },
  {
    key: 'save-tiktok-video',
    label: 'Home',
    url: '/blogs/save-tiktok-video',
    isTitle: false,
  },
  {
    key: 'tiktok-story-downloader',
    label: 'Tiktok Story Downloader',
    url: '/tiktok-story-downloader',
    isTitle: false,
  },
  {
    key: 'tiktok-downloader',
    label: 'Tiktok Downloader',
    isTitle: false,
    children: [
      {
        key: 'tiktok-video-downloader',
        label: 'Tiktok Video Downloader',
        url: '/tiktok-video-downloader',
        parentKey: 'tiktok-downloader',
      },
      {
        key: 'download-tiktok-mp3',
        label: 'Download TikTok MP3',
        url: '/download-tiktok-mp3',
        parentKey: 'tiktok-downloader',
      },
      {
        key: 'download-tiktok-mp3',
        label: 'Download TikTok MP3',
        url: '/download-tiktok-mp3',
        parentKey: 'tiktok-downloader',
      },
      {
        key: 'tiktok-photo-downloader',
        label: 'TikTok Photo Downloader',
        url: '/tiktok-photo-downloader',
        parentKey: 'tiktok-downloader',
      },

      
    ],
  },
   
  {
    key: 'blogs',
    label: 'Blog',
    url: '/pages/blogs/list',
    parentKey: 'blogs',
    isDivider: false,
    
  },
  
  {
    key: 'contact-us',
    label: 'Contact us',
    url: '/contact-us',
    isTitle: false,
  },
]

export { HORIZONTAL_MENU_ITEMS, MENU_ITEMS }
