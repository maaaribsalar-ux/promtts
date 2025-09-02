import { useTranslations } from 'next-intl';
import { Link } from 'next-intl/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Hero from './components/Hero';
import PostContent from './components/PostContent';
import PostNavigation from './components/PostNavigation';
import Comments from './components/Comments';
import AddComment from './components/AddComment';
import Footer3 from '@/components/common/Footer3';
import { blogPosts, CommentType } from './data';

// Define prop interfaces for components
interface PostContentProps {
  content: string;
}

interface PostNavigationProps {
  prevPost: { slug: string; title: string } | null;
  nextPost: { slug: string; title: string } | null;
}

interface CommentsProps {
  comments: CommentType[];
}

interface AddCommentProps {
  postId: string;
}

// Update component imports with types
const TypedPostContent = PostContent as React.FC<PostContentProps>;
const TypedPostNavigation = PostNavigation as React.FC<PostNavigationProps>;
const TypedComments = Comments as React.FC<CommentsProps>;
const TypedAddComment = AddComment as React.FC<AddCommentProps>;

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
        <TypedPostContent content={post.content} />
        <TypedPostNavigation prevPost={post.prev} nextPost={post.next} />
        <TypedComments comments={post.comments} />
        <TypedAddComment postId={post.id} />
      </div>
      <Footer3 />
    </div>
  );
}
