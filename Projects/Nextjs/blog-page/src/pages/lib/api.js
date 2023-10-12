export async function getAllPosts() {
    // Fetch all blog posts from the server
    // Implement your own logic here, e.g., fetching from a database or API
    const res = await fetch('https://api.example.com/posts');
    const posts = await res.json();
  
    return posts;
  }
  
  export async function getPostBySlug(slug) {
    // Fetch a single blog post based on the slug from the server
    // Implement your own logic here, e.g., fetching from a database or API
    const res = await fetch(`https://api.example.com/posts/${slug}`);
    const post = await res.json();
  
    return post;
  }
  