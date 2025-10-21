import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { PostLayout } from '@/components/journal/post-layout'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
  }
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }

  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug)
  const previousPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : undefined
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : undefined

  return (
    <PostLayout
      title={post.title}
      date={post.date}
      readingTime={post.readingTime}
      tags={post.tags}
      slug={post.slug}
      previousPost={previousPost ? {
        title: previousPost.title,
        href: previousPost.url,
      } : undefined}
      nextPost={nextPost ? {
        title: nextPost.title,
        href: nextPost.url,
      } : undefined}
    >
      <MDXRemote source={post.content} />
    </PostLayout>
  )
}
