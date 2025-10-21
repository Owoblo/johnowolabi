'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { cardHover } from '@/lib/motion'

interface MasonryItem {
  id: string
  image: string
  caption?: string
  title?: string
}

interface MasonryGridProps {
  items: MasonryItem[]
}

export function MasonryGrid({ items }: MasonryGridProps) {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          variants={cardHover}
          initial="rest"
          whileHover="hover"
          transition={{ delay: index * 0.05 }}
          className="break-inside-avoid mb-6"
        >
          <div className="bg-surface rounded-sm overflow-hidden border border-surface group">
            <div className="relative">
              <Image
                src={item.image}
                alt={item.caption || item.title || 'Highlight image'}
                width={400}
                height={600}
                className="w-full h-auto object-cover"
              />
              {(item.caption || item.title) && (
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    {item.title && (
                      <h3 className="font-medium mb-1">{item.title}</h3>
                    )}
                    {item.caption && (
                      <p className="text-sm opacity-90">{item.caption}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
