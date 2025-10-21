'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/motion'

interface PostHeaderProps {
  title: string
  date: string
  readingTime: string
  tags: string[]
}

export function PostHeader({ title, date, readingTime, tags }: PostHeaderProps) {
  return (
    <motion.header 
      className="mb-12"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <div className="container-safe">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-sm text-accent font-medium mb-4"
          >
            {date} • {readingTime}
          </motion.div>
          
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-text mb-6"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h1>
          
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2"
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-subtle bg-surface px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}
