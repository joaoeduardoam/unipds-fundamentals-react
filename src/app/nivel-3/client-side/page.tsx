// 'use client';

import { Suspense } from 'react';

import Posts from '@/components/nivel-3/Posts';
import { Post } from '@/app/types';



const getPosts = async () => {
  const response = await fetch("https://api.vercel.app/blog");

  const posts: Post[]= await response.json();

  return posts;
}

 
export default function Page() {
  // Don't await the data fetching function
  const posts = getPosts();
 
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Posts posts={posts} />
    </Suspense>
  )
}


