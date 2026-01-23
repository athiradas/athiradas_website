import Parser from 'rss-parser'
import { BlogPost } from '@/types/blog'

const parser = new Parser()
const SUBSTACK_URL = 'https://blog.athiradas.com/feed'

// Cache for RSS feed data
let cachedPosts: BlogPost[] | null = null
let lastFetchTime = 0
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  // Strip HTML tags for accurate word count
  const text = content.replace(/<[^>]*>/g, '')
  const wordCount = text.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

function extractFirstImage(content: string): string | undefined {
  const imgMatch = content.match(/<img[^>]+src="([^">]+)"/)
  return imgMatch ? imgMatch[1] : undefined
}

function createSlugFromTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export async function getAllPosts(): Promise<BlogPost[]> {
  // Return cached posts if available and not expired
  const now = Date.now()
  if (cachedPosts && now - lastFetchTime < CACHE_DURATION) {
    return cachedPosts
  }

  try {
    const feed = await parser.parseURL(SUBSTACK_URL)

    const posts: BlogPost[] = (feed.items || []).map((item) => {
      const content = item['content:encoded'] || item.content || ''
      const description = item.contentSnippet || item.description || ''

      return {
        slug: item.guid || createSlugFromTitle(item.title || ''),
        title: item.title || 'Untitled',
        description: description.substring(0, 200),
        date: item.isoDate || item.pubDate || new Date().toISOString(),
        author: item.creator || 'Athira Das',
        content,
        readingTime: calculateReadingTime(content),
        featured: false,
        image: extractFirstImage(content),
        tags: item.categories || [],
        link: item.link,
      }
    })

    // Update cache
    cachedPosts = posts
    lastFetchTime = now

    return posts
  } catch (error) {
    console.error('Error fetching Substack feed:', error)
    // Return cached posts if available, even if expired
    return cachedPosts || []
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts()
  return posts.find((post) => post.slug === slug) || null
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const posts = await getAllPosts()
  return posts.slice(0, 3)
}
