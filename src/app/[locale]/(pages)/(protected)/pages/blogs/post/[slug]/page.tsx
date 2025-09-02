import { useTranslations } from 'next-intl';
import { Link } from 'next-intl/client';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Hero from './components/Hero';
import PostContent from './components/PostContent';
import PostNavigation from './components/PostNavigation';
import Comments from './components/Comments';
import AddComment from './components/AddComment';
import Footer3 from '@/components/common/Footer3';
import { blogPosts } from './data';

export async function generateMetadata({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}): Promise<Metadata> {
  const t = useTranslations('blogs.post');
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: t('notFoundTitle', { defaultMessage: 'Post Not Found' }),
    };
  }

  return {
    title: post.title,
    description: post.excerpt || 'Read the full blog post on our site.',
  };
}

export default function BlogPost({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}) {
  const t = useTranslations('blogs.post');
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar buttonVariant="outline-secondary" centered />
      <Hero post={post} />
      <div className="container">
        <Link href="/blogs" className="back-link">
          {t('backToBlogs', { defaultMessage: 'Back to Blogs' })}
        </Link>
        <PostContent content={post.content} />
        <PostNavigation prevPost={post.prev} nextPost={post.next} />
        <Comments comments={post.comments} />
        <AddComment postId={post.id} />
      </div>
      <Footer3 />
    </>
  );
}

