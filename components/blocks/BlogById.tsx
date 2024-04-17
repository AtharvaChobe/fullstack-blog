import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import { ImBin } from 'react-icons/im';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface Props {
    blogId: string;
}

const BlogById: React.FC<Props> = ({ blogId }) => {

    const [blog, setBlog] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const getBlog = async () => {
            try {
                const res = await axios.get(`/api/blog/${blogId}`);
                // console.log(res.data);
                setBlog(res.data.blog_by_id);
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };

        getBlog();

    }, [blogId]);

    const deleteBlog = async () =>{
        try {
            alert("Are you sure you want to delete this blog?")
            const res = await axios.delete(`/api/blog/${blogId}`);
            // console.log(res);
            if(res.status == 200){
                toast.success("blog deleted sucessfully");
                router.push("/blogs")
            }
        } catch (error) {
            console.log(error);
            toast.error("Failed to delete");
        }
    }

    if (loading) {
        return (
            <Spinner />
        )
    }


    if (blog) {
        return (
            <div className='flex items-center justify-center p-7 flex-col gap-14'>
                <div className='w-full h-fit'>
                    <button onClick={deleteBlog} className='bg-red-500 text-white p-3 rounded my-3'> <ImBin /> </button>
                    <img className='w-1/2 rounded shadow-md mx-auto' src={blog.image} alt="" />
                </div>

                <div className='flex flex-col items-center justify-center gap-5 w-11/12 md:w-3/4'>
                    <h1 className='text-2xl md:text-5xl font-bold'> {blog.title} </h1>
                    <p className='text-lg text-slate-600 text-justify leading-relaxed'>
                        {blog.body}
                    </p>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default BlogById;
