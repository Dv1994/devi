import React from 'react';
import Link from 'next/link';
import { getAllPosts } from './lib/api';

const Home = ({ posts }) => {
  return (
    <div>
      <h2>Latest Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
    revalidate: 60, // Re-generate the page every 60 seconds
  };
}

export default Home;
