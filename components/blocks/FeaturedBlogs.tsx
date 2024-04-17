"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import Link from 'next/link';
import { CgArrowDown } from 'react-icons/cg';

const FeaturedBlogs = () => {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<any[]>([]);

    const getAllBlogs = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`/api/blog`);
            setResults(res.data.blogs.reverse().slice(0, 3));
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllBlogs();
    }, []);

    if (loading) {
        return <Spinner />;
    }

    return (
        <>
            <h1 className='mt-[70%] md:mt-52 ml-36 '>Latest Blogs <CgArrowDown /></h1>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-4 px-5 m-auto max-w-[80%]'>
                {results.map((blog) => (
                    <div key={blog._id} className='p-3 rounded-lg shadow-md flex flex-col items-center border-2'>
                        <img className='rounded-md' src={blog.image} alt="" />
                        <div className='flex flex-col gap-3 text-start mt-5 items-start justify-start'>
                            <h4 className='text-sm text-slate-500'>Created At : {blog.createdAt.split("T")[0]}</h4>
                            <h2 className='font-bold'> {blog.title} </h2>
                            <p className='line-clamp-2 text-slate-700'> {blog.body} </p>
                        </div>
                        <Link className='text-white mt-6 font-bold text-sm bg-slate-800 px-2 py-1 rounded-md ' href={`blogs/${blog._id}`}>Read More</Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default FeaturedBlogs;
