import FeaturedBlogs from '@/components/blocks/FeaturedBlogs'
import HeroSection from '@/components/blocks/HeroSection'
import { ProjectTabs } from '@/components/blocks/ProjectTabs'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection />

      <ProjectTabs />

      <FeaturedBlogs />

    </div>
  )
}

export default page