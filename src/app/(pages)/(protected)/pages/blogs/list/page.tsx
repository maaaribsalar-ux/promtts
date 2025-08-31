import Footer3 from '@/components/common/Footer3'
import Navbar from '@/components/layout/Navbar'
import type { Metadata } from 'next'
import Blogs from './components/Blogs'
import Hero from './components/Hero'

export const metadata: Metadata = {
  title: 'Blogs',
}

const BlogList = () => {
  return (
    <>
      <div className="header-7">
        <div className="overlay"></div>
        <Navbar buttonVariant="primary" />
        <Hero />
      </div>
      <Blogs />
      <Footer3 />
    </>
  )
}
export default BlogList
