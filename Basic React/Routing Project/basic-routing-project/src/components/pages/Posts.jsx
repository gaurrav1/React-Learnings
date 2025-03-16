import axios from 'axios';
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { getPosts } from '../../api/posts';
import PostCard from '../PostCard';

function Posts() {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <>
      <h1 className="page-title">Posts</h1>
      <div className="card-grid">
        {posts.map((post) => {
          return (
              <PostCard key={post.id} post={post} />
          )
        })}
      </div>

    </>
  )
}

function loader({ request: { signal } }) {
  return getPosts( { signal } );
}

export const postsRoute = {
  loader,
  element: <Posts />
}