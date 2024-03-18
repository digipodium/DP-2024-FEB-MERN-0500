'use client';
import React, { useEffect } from 'react'

const Feed = () => {

    const fetchPostData = () => {

        fetch('http://localhost:5000/post/getall')
        .then((response) => {
            console.log(response.status);
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
      fetchPostData();
    }, []);

  return (
    <div>
        <div className='container py-4'>
            <h1 className='text-center'>Trending Posts</h1>
            <hr />
        </div>

    </div>
  )
}

export default Feed;