import React from 'react';
import { getPostBySlug, getAllPosts } from '../../lib/api';

const Post = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <div>{post.content}</div>
    </div>
  );
};

export async function getStaticPaths() {
  const posts = await getAllPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: 'blocking', // Show fallback while generating static page
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 60, // Re-generate the page every 60 seconds
  };
}

export default Post;
