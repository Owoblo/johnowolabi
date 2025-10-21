import { getAllPosts as getMDXPosts, getPostBySlug as getMDXPostBySlug, getAllTags as getMDXTags } from './mdx'

export interface Post {
  title: string
  date: string
  summary: string
  tags: string[]
  cover?: string
  published: boolean
  url: string
  slug: string
  readingTime: number
  content: string
}

export function getAllPosts(): Post[] {
  return getMDXPosts().map((post) => ({
    ...post,
    url: `/journal/${post.slug}`,
  }))
}

export function getPostBySlug(slug: string): Post | undefined {
  const post = getMDXPostBySlug(slug)
  if (!post) return undefined
  
  return {
    ...post,
    url: `/journal/${post.slug}`,
  }
}

export function getPostsByTag(tag: string): Post[] {
  return getAllPosts().filter((post) => 
    post.tags.some((postTag) => postTag.toLowerCase() === tag.toLowerCase())
  )
}

export function getAllTags(): string[] {
  return getMDXTags()
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): Post[] {
  const currentPost = getPostBySlug(currentSlug)
  if (!currentPost) return []
  
  const allPosts = getAllPosts()
  const relatedPosts = allPosts
    .filter((post) => post.slug !== currentSlug)
    .filter((post) => 
      post.tags.some((tag) => currentPost.tags.includes(tag))
    )
    .slice(0, limit)
  
  // If we don't have enough related posts, fill with recent posts
  if (relatedPosts.length < limit) {
    const recentPosts = allPosts
      .filter((post) => post.slug !== currentSlug)
      .filter((post) => !relatedPosts.some((related) => related.slug === post.slug))
      .slice(0, limit - relatedPosts.length)
    
    relatedPosts.push(...recentPosts)
  }
  
  return relatedPosts
}
