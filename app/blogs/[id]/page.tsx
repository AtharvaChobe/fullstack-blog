"use client"
import BlogById from '@/components/blocks/BlogById'
import { usePathname, useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const page = () => {
  const path = usePathname();
  const p = path.split("/");
  const id = p[2];
  // console.log(id)

  return (
    <BlogById blogId={id}/>
  )
}

export default page