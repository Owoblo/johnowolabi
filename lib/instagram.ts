// Instagram Basic Display API integration
// You'll need to set up an Instagram App and get access tokens

interface InstagramMedia {
  id: string
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  media_url: string
  permalink: string
  caption?: string
  timestamp: string
}

export async function getInstagramPosts(accessToken: string): Promise<InstagramMedia[]> {
  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption,timestamp&access_token=${accessToken}`
    )
    
    if (!response.ok) {
      throw new Error('Failed to fetch Instagram posts')
    }
    
    const data = await response.json()
    return data.data || []
  } catch (error) {
    console.error('Instagram API error:', error)
    return []
  }
}

export function categorizeInstagramPost(post: InstagramMedia): string {
  const caption = post.caption?.toLowerCase() || ''
  
  // Simple categorization based on hashtags or keywords
  if (caption.includes('#design') || caption.includes('#work')) return 'work'
  if (caption.includes('#travel') || caption.includes('#wanderlust')) return 'travel'
  if (caption.includes('#style') || caption.includes('#fashion')) return 'style'
  if (caption.includes('#writing') || caption.includes('#thoughts')) return 'writing'
  
  return 'general'
}

// Usage example:
// const posts = await getInstagramPosts(process.env.INSTAGRAM_ACCESS_TOKEN)
// const categorizedPosts = posts.map(post => ({
//   ...post,
//   category: categorizeInstagramPost(post)
// }))
