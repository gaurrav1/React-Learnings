import React, { useEffect, useRef } from 'react'
import { Form, Link, useLoaderData } from 'react-router-dom';
import { getPosts } from '../../api/posts';
import PostCard from '../PostCard';
import { getUsers } from '../../api/users';

function Posts() {
  const {posts, searchParams: {query, userId}, users} = useLoaderData();
  const queryRef = useRef();
  const userRef = useRef();


  useEffect(() => {
    queryRef.current.value = query || "";
  }, [query])

  useEffect(() => {
    userRef.current.value = userId || "";
  }, [userId])

  return (
    <>
      <h1 className="page-title">
        Posts
        <div className="title-btns">
          <Link className="btn btn-outline" to="new">New</Link>
        </div>
      </h1>
      <Form method="get" action="/posts" className="form mb-4">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="query">Query</label>
            <input type="search" name="query" id="query" ref={queryRef}/>
          </div>
          <div className="form-group">
            <label htmlFor="userId">Author</label>
            <select type="search" name="userId" id="userId" ref={userRef}>
              <option value="">Any</option>
              {users.map((user) => {
                return (
                  <option key={user.id} value={user.id}>{user.name}</option>
                )
              })}
            </select>
          </div>
          <button className="btn">Filter</button>
        </div>
      </Form>
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

async function loader({ request: { signal, url } }) {

  const searchParams = new URL(url).searchParams;
  const query = searchParams.get("query");
  const userId = searchParams.get("userId");

  const filteredParams = { q: query };
  if (userId != "") filteredParams.userId = userId;

  const posts = getPosts({ signal, params: filteredParams });
  const users = getUsers({signal});

  return { posts: await posts, searchParams: {query, userId}, users: await users}
}

export const postsRoute = {
  loader,
  element: <Posts />
}