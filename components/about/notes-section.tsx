'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/motion'

const timeline = [
  {
    year: "2024",
    title: "Independent Practice",
    description: "Focusing on intentional design and writing about the creative process"
  },
  {
    year: "2022-2023", 
    title: "Senior Designer",
    description: "Led design for consumer products at a growing startup"
  },
  {
    year: "2020-2022",
    title: "Product Designer", 
    description: "Designed user experiences for mobile and web applications"
  },
  {
    year: "2018-2020",
    title: "Design Intern",
    description: "Started my journey in digital design and user experience"
  }
]

const pullQuotes = [
  {
    quote: "Good design is as little design as possible.",
    attribution: "Dieter Rams"
  },
  {
    quote: "The details are not the details. They make the design.",
    attribution: "Charles Eames"
  }
]

export function NotesSection() {
  return (
    <motion.section 
      className="section bg-surface"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <div className="container-safe">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="prose prose-wide"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-text mb-8">
              Notes & Thoughts
            </h2>
            
            <p className="text-lg text-text mb-6">
              My approach to design is rooted in the belief that the best solutions are often the simplest ones. 
              I'm drawn to work that feels inevitable—like it couldn't exist any other way.
            </p>
            
            <p className="text-subtle mb-8">
              This philosophy extends beyond visual design to how I think about user experience, content strategy, 
              and even the tools and processes I use in my work. Every decision should serve a purpose, 
              and every element should earn its place.
            </p>
            
            {/* Pull quotes */}
            <div className="my-12 space-y-8">
              {pullQuotes.map((item, index) => (
                <motion.blockquote
                  key={index}
                  variants={fadeInUp}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="pull-quote"
                >
                  <p className="text-lg italic text-subtle mb-2">
                    "{item.quote}"
                  </p>
                  <cite className="text-sm text-accent not-italic">
                    — {item.attribution}
                  </cite>
                </motion.blockquote>
              ))}
            </div>
            
            <p className="text-subtle mb-12">
              I'm constantly learning and evolving my practice. The design landscape changes rapidly, 
              but the fundamental principles of good design remain constant: clarity, purpose, and respect for the user.
            </p>
          </motion.div>
          
          {/* Timeline */}
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            className="mt-16"
          >
            <h3 className="text-xl font-serif font-medium text-text mb-8">
              Timeline
            </h3>
            
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  variants={fadeInUp}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-6"
                >
                  <div className="flex-shrink-0 w-20 text-sm text-accent font-medium">
                    {item.year}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-text mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-subtle">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
