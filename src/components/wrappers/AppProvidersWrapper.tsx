'use client'
import type { ChildrenType } from '@/types/component-props'
import { SessionProvider } from 'next-auth/react'
import { useEffect } from 'react'
import Aos from 'aos'
import { NotificationProvider } from '@/context/useNotificationContext'

const AppProvidersWrapper = ({ children }: ChildrenType) => {
  useEffect(() => {
    Aos.init()
    if (document) {
      const e = document.querySelector<HTMLDivElement>('#__next_splash')
      if (e?.hasChildNodes()) {
        document.querySelector('#splash-screen')?.classList.add('remove')
      }
      e?.addEventListener('DOMNodeInserted', () => {
        document.querySelector('#splash-screen')?.classList.add('remove')
      })
    }
  }, [])

  return (
    <SessionProvider>
      <NotificationProvider>{children}</NotificationProvider>
    </SessionProvider>
  )
}
export default AppProvidersWrapper
