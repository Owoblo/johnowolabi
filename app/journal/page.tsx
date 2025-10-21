'use client'

import { useState, useMemo } from 'react'
import { getAllPosts, getAllTags } from '@/lib/posts'
import { PostCard } from '@/components/journal/post-card'
import { TagFilter } from '@/components/journal/tag-filter'

export default function JournalPage() {
  const [activeTag, setActiveTag] = useState('all')
  const allPosts = getAllPosts()
  const allTags = getAllTags()

  const filteredPosts = useMemo(() => {
    if (activeTag === 'all') {
      return allPosts
    }
    return allPosts.filter((post) =>
      post.tags.some((tag) => tag.toLowerCase() === activeTag.toLowerCase())
    )
  }, [allPosts, activeTag])

  return (
    <section className="section">
      <div className="container-safe">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-serif font-medium text-text mb-6">
            Journal
          </h1>
          <p className="text-lg text-subtle max-w-2xl mx-auto">
            Thoughts on design, creativity, and the intersection of technology with human experience. 
            Long-form writing about the ideas that shape my work.
          </p>
        </div>
        
        <TagFilter
          tags={allTags}
          activeTag={activeTag}
          onTagChange={setActiveTag}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredPosts.map((post, index) => (
            <PostCard
              key={post.slug}
              title={post.title}
              summary={post.summary}
              date={post.date}
              readingTime={post.readingTime}
              tags={post.tags}
              href={post.url}
              cover={post.cover}
              index={index}
            />
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-subtle">No posts found for this tag.</p>
          </div>
        )}
      </div>
    </section>
  )
}
