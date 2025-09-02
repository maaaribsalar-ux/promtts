import { useTranslations } from 'next-intl';
import { Link } from 'next-intl/navigation';
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
    title: `${post.title} | Premium Landing Pages`,
    description: post.excerpt || t('defaultDescription', { defaultMessage: 'Read the full blog post on our site.' }),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/${locale}/blogs/post/${post.slug}`,
      type: 'article',
      publishedTime: post.createdAt,
      authors: [post.author],
    },
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
    <div className="blog-post-page">
      <Navbar buttonVariant="outline-secondary" centered />
      <Hero post={post} />
      <div className="container py-4">
        <Link href="/blogs" className="back-link mb-4 d-inline-block">
          {t('backToBlogs', { defaultMessage: 'Back to Blogs' })}
        </Link>
        <PostContent content={post.content} />
        <PostNavigation prevPost={post.prev} nextPost={post.next} author={post.author} />
        <Comments comments={post.comments} />
        <AddComment postId={post.id} />
      </div>
      <Footer3 />
    </div>
  );
}
