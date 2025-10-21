'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeInUp } from '@/lib/motion'

export function Hero() {
  return (
    <motion.section 
      className="section-lg"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <div className="container-safe text-center">
        <motion.h1 
          className="text-3xl md:text-4xl lg:text-4xl font-serif font-medium text-text mb-6"
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
        >
          John Owolabi
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-subtle mb-8 max-w-2xl mx-auto"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          Designer and writer focused on intentional, minimal experiences that feel well considered.
        </motion.p>
        
        <motion.div
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-accent text-accent-contrast font-medium rounded-sm hover:bg-accent/90 transition-colors duration-150"
          >
            Get in touch
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
