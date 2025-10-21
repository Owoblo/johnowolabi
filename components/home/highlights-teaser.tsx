'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { cardHover } from '@/lib/motion'

const highlights = [
  {
    title: "Style & Aesthetics",
    description: "Thoughts on design, fashion, and visual culture",
    image: "/images/highlights/style-1.jpg",
    href: "/highlights/style",
    category: "Style"
  },
  {
    title: "Reading & Contemplation", 
    description: "Quiet moments with books and the art of deep reading",
    image: "/images/highlights/reading-1.jpg",
    href: "/journal/reading-moment",
    category: "Reading"
  },
  {
    title: "Writing & Ideas",
    description: "Essays and thoughts on design, culture, and life", 
    image: "/images/highlights/writing-1.jpg",
    href: "/highlights/writing",
    category: "Writing"
  }
]

export function HighlightsTeaser() {
  return (
    <section className="section">
      <div className="container-safe">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-medium text-text mb-4">
            Highlights
          </h2>
          <p className="text-subtle max-w-2xl mx-auto">
            A curated collection of thoughts, work, and visual explorations across different areas of interest.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              transition={{ delay: index * 0.1 }}
            >
              <Link href={highlight.href} className="block group">
                <div className="bg-surface rounded-sm overflow-hidden border border-surface">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={highlight.image}
                      alt={highlight.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-accent font-medium mb-2">
                      {highlight.category}
                    </div>
                    <h3 className="text-lg font-medium text-text mb-2 group-hover:text-accent transition-colors duration-150">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-subtle">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/highlights"
            className="text-accent hover:text-accent/80 transition-colors duration-150"
          >
            View all highlights →
          </Link>
        </div>
      </div>
    </section>
  )
}
