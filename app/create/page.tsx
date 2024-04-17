"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Page = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState("");
    const router = useRouter();

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
}

export default Page;
