'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/motion'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Here you would integrate with your email service
    console.log('Submitting:', formData)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (isSubmitted) {
    return (
      <motion.section 
        className="section"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="container-safe">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-serif font-medium text-text mb-6">
              Thank you
            </h1>
            <p className="text-lg text-subtle mb-8">
              Your message has been sent. I'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-accent hover:text-accent/80 transition-colors duration-150"
            >
              Send another message
            </button>
          </div>
        </div>
      </motion.section>
    )
  }

  return (
    <motion.section 
      className="section"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <div className="container-safe">
        <div className="max-w-2xl mx-auto">
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-serif font-medium text-text mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-subtle">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you're looking for design work, collaboration, or just want to chat about ideas, 
              I'd love to hear from you.
            </p>
          </motion.div>
          
          <motion.form
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-surface rounded-sm text-text placeholder-subtle focus:outline-none focus:border-accent transition-colors duration-150"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-surface rounded-sm text-text placeholder-subtle focus:outline-none focus:border-accent transition-colors duration-150"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-surface rounded-sm text-text placeholder-subtle focus:outline-none focus:border-accent transition-colors duration-150"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-background border border-surface rounded-sm text-text placeholder-subtle focus:outline-none focus:border-accent transition-colors duration-150 resize-vertical"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-accent text-accent-contrast font-medium rounded-sm hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
          
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            className="mt-12 pt-8 border-t border-surface"
          >
            <div className="text-center">
              <h3 className="text-lg font-medium text-text mb-4">Other ways to connect</h3>
              <div className="space-y-2 text-subtle">
                <p>
                  <a 
                    href="mailto:hello@johnowolabi.com" 
                    className="hover:text-accent transition-colors duration-150"
                  >
                    hello@johnowolabi.com
                  </a>
                </p>
                <p>
                  <a 
                    href="https://twitter.com/johnowolabi" 
                    className="hover:text-accent transition-colors duration-150"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @johnowolabi
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
