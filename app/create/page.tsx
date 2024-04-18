"use client"
import { useAuth } from '@clerk/nextjs';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { RiErrorWarningFill } from 'react-icons/ri';

const Page = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState("");
    const router = useRouter();
    const { userId } = useAuth();

    const postData = async (e: any) => {
        e.preventDefault();
        if (!title || !body || !image) {
            toast.error("All fields are required");
            return;
        }
        try {
            const res = await axios.post("api/blog", { title, body, image });
            console.log(res);
            if (res.status == 200) {
                setTitle("");
                setImage("");
                setBody("");
                toast.success('Blog created successfully!');
                router.push("/blogs")
            }
        } catch (error) {
            console.log(error);
        }
    }

    if (userId === process.env.NEXT_PUBLIC_ADMIN1 || userId === process.env.NEXT_PUBLIC_ADMIN2) {
        return (
            <div className='h-screen w-full flex items-center justify-center'>
                <form action="" className='bg-slate-200 gap-3 shadow-md rounded-md w-3/4 h-3/4 p-6 flex flex-col items-center justify-center'>
                    <input value={title} onChange={e => setTitle(e.target.value)} className='px-4 shadow-md py-3 rounded-md text-2xl placeholder:text-xl w-full' type="text" placeholder='Title' />
                    <input value={image} onChange={e => setImage(e.target.value)} className='px-4 shadow-md py-3 rounded-md text-2xl placeholder:text-xl w-full' type="url" placeholder='Image Url' />
                    <textarea
                        value={body}
                        onChange={e => setBody(e.target.value)}
                        className='px-4 shadow-md py-3 rounded-md text-xl placeholder:text-xl w-full h-full'
                        placeholder='Blog'
                        rows={10} // Increase rows for better usability
                    ></textarea>
                    <button onClick={postData} className='px-3 shadow-md font-bold py-2 rounded bg-slate-900 text-slate-400 mt-4'>Post</button>
                </form>
            </div>
        )
    } else {
        return (
            <div className='flex items-center justify-center w-full h-[100vh]'>
                <RiErrorWarningFill size={50}/>
                <h1 className='text-3xl'>You are not authorized to create a Blog</h1>
            </div>
        )
    }

}

export default Page;
