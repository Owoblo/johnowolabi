'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { cardHover } from '@/lib/motion'
import { formatReadingTime } from '@/lib/reading-time'

interface PostCardProps {
  title: string
  summary: string
  date: string
  readingTime: number
  tags: string[]
  href: string
  cover?: string
  index: number
}

export function PostCard({ 
  title, 
  summary, 
  date, 
  readingTime, 
  tags, 
  href, 
  cover,
  index 
}: PostCardProps) {
  return (
    <motion.article
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      transition={{ delay: index * 0.1 }}
      className="bg-surface rounded-sm border border-rule overflow-hidden"
    >
      <Link href={href} className="block group">
        {cover && (
          <div className="aspect-[16/9] relative overflow-hidden">
            <Image
              src={cover}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <div className="p-6">
          <div className="text-xs text-accent font-medium mb-3">
            {new Date(date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })} • {formatReadingTime(readingTime)}
          </div>
          
          <h2 className="text-xl font-serif font-medium text-text mb-3 group-hover:text-accent transition-colors duration-150 leading-tight">
            {title}
          </h2>
          
          <p className="text-subtle mb-4 line-clamp-2">
            {summary}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs text-subtle bg-background px-2 py-1 rounded border border-rule"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="text-xs text-subtle">
                +{tags.length - 3} more
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
