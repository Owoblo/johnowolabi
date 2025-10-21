'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp } from '@/lib/motion'

export function BioSection() {
  return (
    <motion.section 
      className="section"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <div className="container-safe">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Portrait */}
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <Image
                src="/images/portrait.jpg"
                alt="John Owolabi portrait"
                width={400}
                height={500}
                className="rounded-sm border border-surface"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-sm"></div>
            </div>
          </motion.div>
          
          {/* Bio text */}
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h1 className="text-3xl md:text-4xl font-serif font-medium text-text mb-6">
              About Me
            </h1>
            
            <div className="prose prose-lg">
              <p className="text-lg text-text mb-6">
                I'm a designer and writer who believes in the power of intentional, minimal experiences. 
                My work focuses on creating digital products and written content that feel well considered 
                rather than flashy or overwhelming.
              </p>
              
              <p className="text-subtle">
                Based in San Francisco, I work with companies and individuals who value thoughtful design 
                and clear communication. When I'm not designing or writing, you'll find me exploring the city, 
                reading, or working on personal projects that explore the intersection of technology and human experience.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
