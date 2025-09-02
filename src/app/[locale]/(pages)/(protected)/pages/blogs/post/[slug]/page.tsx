import Navbar from '@/components/layout/Navbar'
import Hero from './components/Hero'
import PostContent from './components/PostContent'
import PostNavigation from './components/PostNavigation'
import Comments from './components/Comments'
import Footer3 from '@/components/common/Footer3'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog Post',
}

const Post = () => {
  return (
    <>
      <Navbar buttonVariant="outline-secondary" centered />
      <Hero />
      <PostContent />
      <PostNavigation />
      <Comments />
      <Footer3 />
    </>
  )
}
export default Post
