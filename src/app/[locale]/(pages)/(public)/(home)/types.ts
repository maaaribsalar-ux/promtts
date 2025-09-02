import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

export type Demo = {
  image: StaticImageData
  url: string
  name: string
}

export type FeatureType = {
  icon?: ReactNode
  name: string
  text?: string
}
