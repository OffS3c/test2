import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import post1 from './blog-post.1.md.js';
import post2 from './blog-post.2.md.js';
import post3 from './blog-post.3.md.js';

const Sections = [
  { title: 'Technology', url: '/technology', slug: 'technology' },
  { title: 'Design', url: '/design', slug: 'design' },
  { title: 'Culture', url: '/culture', slug: 'culture' },
  { title: 'Business', url: '/business', slug: 'business' },
];

const AllPosts = [
  {
    id: '1',
    slug: 'post-1',
    title: 'Post 1 Title of a longer blog post',
    date: 'Nov 12',
    description:
      "Informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    linkText: 'continue reading...',
    category: 'technology',
    body: post1,
  },
  {
    id: '2',
    slug: 'post-2',
    title: 'Post 2 Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    linkText: 'continue reading...',
    category: 'technology',
    body: post2,
  },
  {
    id: '3',
    slug: 'post-3',
    title: 'Post 3 Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    linkText: 'continue reading...',
    category: 'technology',
    body: post3,
  },
  {
    id: '4',
    slug: 'post-4',
    title: 'Post 1 Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    linkText: 'continue reading...',
    category: 'design',
    body: post3,
  },
  {
    id: '5',
    slug: 'post-5',
    title: 'Post 1 Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    linkText: 'continue reading...',
    category: 'culture',
    body: post2,
  },
  {
    id: '6',
    slug: 'post-6',
    title: 'Post 1 Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    linkText: 'continue reading...',
    category: 'culture',
    body: post3,
  },
];

const Sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const Categories = Sections.map(section => section.slug);

export {
  AllPosts,
  Categories,
  Sections,
  Sidebar,
}
