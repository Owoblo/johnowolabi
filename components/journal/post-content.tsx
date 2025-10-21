'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/motion'

interface PostContentProps {
  children: React.ReactNode
}

export function PostContent({ children }: PostContentProps) {
  return (
    <motion.article
      className="prose prose-wide"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={{ delay: 0.2 }}
    >
      <div className="container-safe">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </div>
    </motion.article>
  )
}
