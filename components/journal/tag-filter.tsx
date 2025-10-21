'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface TagFilterProps {
  tags: string[]
  activeTag: string
  onTagChange: (tag: string) => void
}

export function TagFilter({ tags, activeTag, onTagChange }: TagFilterProps) {
  const allTags = ['all', ...tags]

  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-2 justify-center">
        {allTags.map((tag) => (
          <motion.button
            key={tag}
            onClick={() => onTagChange(tag)}
            className={`px-4 py-2 text-sm font-medium rounded-sm transition-colors duration-150 ${
              activeTag === tag
                ? 'text-accent border-b-2 border-accent'
                : 'text-subtle hover:text-text'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tag === 'all' ? 'All' : tag}
          </motion.button>
        ))}
      </div>
    </div>
  )
}
