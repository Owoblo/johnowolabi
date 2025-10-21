'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { cardHover } from '@/lib/motion'

const categories = [
  {
    title: "Style",
    description: "Thoughts on design, fashion, and visual culture",
    image: "/images/highlights/style-1.jpg",
    href: "/highlights/style",
    count: 12
  },
  {
    title: "Travel", 
    description: "Places, experiences, and moments worth remembering",
    image: "/images/highlights/travel-1.jpg",
    href: "/highlights/travel",
    count: 8
  },
  {
    title: "Work",
    description: "Behind the scenes of design and creative work", 
    image: "/images/highlights/work-1.jpg",
    href: "/highlights/work",
    count: 15
  },
  {
    title: "Writing",
    description: "Essays and thoughts on design, culture, and life",
    image: "/images/highlights/writing-1.jpg", 
    href: "/highlights/writing",
    count: 6
  }
]

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {categories.map((category, index) => (
        <motion.div
          key={category.title}
          variants={cardHover}
          initial="rest"
          whileHover="hover"
          transition={{ delay: index * 0.1 }}
        >
          <Link href={category.href} className="block group">
            <div className="bg-surface rounded-sm overflow-hidden border border-surface">
              <div className="aspect-[4/3] relative">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-text">
                    {category.count}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-medium text-text mb-2 group-hover:text-accent transition-colors duration-150">
                  {category.title}
                </h3>
                <p className="text-subtle">
                  {category.description}
                </p>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
