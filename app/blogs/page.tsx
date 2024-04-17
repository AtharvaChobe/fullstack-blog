"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Spinner from '@/components/blocks/Spinner';

const Page = () => {
  const [results, setResults] = useState<any[]>([]);
  const [loading, setloading] = useState(false);

  const getAllBlogs = async () => {
    try {

      setloading(true);
      const res = await axios.get(`/api/blog`);
      setResults(res.data.blogs.reverse());
      // console.log(res.data.blogs)
      setTimeout(() => {
        setloading(false)
      }, 2000);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  if (loading) {
    return <Spinner />
  }

  if (results) {
    return (
      <>
        <Link className='px-2 mt-10 py-1 font-bold ml-6 rounded-md bg-slate-400 text-white' href={"create"}>Create Blog</Link>
        <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full p-5">
          {results.map((r) => (
            <div key={r._id} className="bg-white relative rounded-lg shadow-md overflow-hidden max-h-1/3">
              <img src={r.image} className='w-full h-36 object-cover object-center' alt="image" />
              <div className="p-6">
                <h3 className='text-xl font-semibold text-gray-800 mb-2'>{r.title}</h3>
                <h4 className='text-sm my-3 text-slate-400'>Created At : {r.createdAt.split("T")[0]}</h4>
                <p className='text-sm text-gray-600 mb-4 line-clamp-3'>{r.body}</p>
              </div>
              <Link className='text-white mt-6 absolute bottom-3 left-3 font-bold text-sm bg-slate-800 px-2 py-1 rounded-md ' href={`blogs/${r._id}`}>Read More</Link>
            </div>
          ))}
        </div>
      </>

    );
  }
};

export default Page;
