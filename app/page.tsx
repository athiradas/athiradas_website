import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Coaching } from '@/components/sections/Coaching'
import { Talk } from '@/components/sections/Talk'
import { FeaturedBlog } from '@/components/sections/FeaturedBlog'
import { getFeaturedPosts } from '@/lib/substack'

// Revalidate every 5 minutes
export const revalidate = 300

export default async function Home() {
  const featuredPosts = await getFeaturedPosts()

  return (
    <>
      <Hero />
      <Coaching />
      <Talk />
      <Experience />
      <About />
      <FeaturedBlog posts={featuredPosts} />
    </>
  )
}
