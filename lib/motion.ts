import { Variants } from 'framer-motion'

// Subtle motion variants for micro-interactions
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.15,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

export const cardHover: Variants = {
  rest: { 
    y: 0,
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)'
  },
  hover: { 
    y: -2,
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    transition: {
      duration: 0.15,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

export const linkHover: Variants = {
  rest: { 
    backgroundSize: '0% 1px'
  },
  hover: { 
    backgroundSize: '100% 1px',
    transition: {
      duration: 0.15,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}
