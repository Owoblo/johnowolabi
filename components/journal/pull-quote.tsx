'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/motion'

interface PullQuoteProps {
  children: React.ReactNode
  attribution?: string
}

export function PullQuote({ children, attribution }: PullQuoteProps) {
  return (
    <motion.blockquote
      className="my-12 border-l-2 border-accent pl-6 italic text-lg text-subtle"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={{ delay: 0.2 }}
    >
      <p className="mb-2">
        "{children}"
      </p>
      {attribution && (
        <cite className="text-sm text-accent not-italic">
          — {attribution}
        </cite>
      )}
    </motion.blockquote>
  )
}
