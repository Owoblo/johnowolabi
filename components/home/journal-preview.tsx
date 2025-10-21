'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { cardHover } from '@/lib/motion'

const journalPosts = [
  {
    title: "The Quiet Power of Minimal Design",
    excerpt: "Why less is often more in creating meaningful experiences",
    date: "January 20, 2024",
    readingTime: "5 min read",
    href: "/journal/the-quiet-power-of-minimal-design",
    tags: ["design", "minimalism"]
  },
  {
    title: "Building a Sustainable Creative Process", 
    excerpt: "Thoughts on maintaining creative energy over the long term",
    date: "January 15, 2024",
    readingTime: "4 min read",
    href: "/journal/building-a-sustainable-creative-process",
    tags: ["creativity", "process"]
  },
  {
    title: "The Freedom of Constraints",
    excerpt: "How limitations can actually enhance creativity",
    date: "January 10, 2024", 
    readingTime: "6 min read",
    href: "/journal/the-freedom-of-constraints",
    tags: ["constraints", "creativity"]
  }
]

export function JournalPreview() {
  return (
    <section className="section">
      <div className="container-safe">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-medium text-text mb-4">
            Latest Writing
          </h2>
          <p className="text-subtle max-w-2xl mx-auto">
            Thoughts on design, creativity, and the intersection of technology with human experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {journalPosts.map((post, index) => (
            <motion.article
              key={post.title}
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              transition={{ delay: index * 0.1 }}
              className="bg-surface rounded-sm p-6 border border-surface"
            >
              <Link href={post.href} className="block group">
                <div className="text-xs text-accent font-medium mb-3">
                  {post.date} • {post.readingTime}
                </div>
                <h3 className="text-lg font-medium text-text mb-3 group-hover:text-accent transition-colors duration-150">
                  {post.title}
                </h3>
                <p className="text-sm text-subtle mb-4">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-subtle bg-background px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/journal"
            className="text-accent hover:text-accent/80 transition-colors duration-150"
          >
            Read more →
          </Link>
        </div>
      </div>
    </section>
  )
}
