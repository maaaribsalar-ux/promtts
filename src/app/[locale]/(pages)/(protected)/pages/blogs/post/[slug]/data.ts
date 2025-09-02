import type { StaticImageData } from 'next/image';
import avatar2 from '@/assets/images/avatars/img-2.jpg';
import avatar6 from '@/assets/images/avatars/img-6.jpg';

export type CommentType = {
  name: string;
  createdAt: string;
  avatar: StaticImageData;
  description: string;
  reply?: CommentType[];
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  comments: CommentType[];
  prev: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
  author: string;
  createdAt: string;
  readTime: string;
  category: string;
};

export const userComments: CommentType[] = [
  {
    name: 'Sansa Stark',
    createdAt: '2 days ago',
    avatar: avatar2,
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.',
    reply: [
      {
        name: 'Cersei Lannister',
        createdAt: '1 day ago',
        avatar: avatar6,
        description: 'Itaque earum rerum hic tenetur sapiente delectus aut reiciendis voluptatibus maiores alias consequatur aut perferendis',
      },
    ],
  },
  {
    name: 'Sansa Stark',
    createdAt: '2 days ago',
    avatar: avatar2,
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'first-post',
    title: 'My First Blog Post',
    excerpt: 'A brief introduction to our blog, exploring key features and insights.',
    content: 'This is the full content of the first blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    comments: userComments,
    prev: null,
    next: { slug: 'second-post', title: 'My Second Blog Post' },
    author: 'Emily Blunt',
    createdAt: '11 Mar, 2020',
    readTime: '3 min read',
    category: 'Announcement',
  },
  {
    id: '2',
    slug: 'second-post',
    title: 'My Second Blog Post',
    excerpt: 'Diving deeper into advanced topics and tips for success.',
    content: 'This is the full content of the second blog post. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    comments: [userComments[1]],
    prev: { slug: 'first-post', title: 'My First Blog Post' },
    next: null,
    author: 'John Doe',
    createdAt: '12 Mar, 2020',
    readTime: '4 min read',
    category: 'Tips',
  },
];
