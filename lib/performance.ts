// Performance optimization utilities

export const imageOptimization = {
  // Next.js Image component settings for optimal performance
  defaultProps: {
    quality: 85,
    priority: false,
    placeholder: 'blur',
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
  }
}

export const fontLoading = {
  // Optimized font loading strategy
  strategy: 'swap', // Use font-display: swap for better performance
  preload: true,    // Preload critical fonts
  fallbacks: [
    'system-ui',
    '-apple-system', 
    'BlinkMacSystemFont',
    'Segoe UI',
    'sans-serif'
  ]
}

export const coreWebVitals = {
  // Target metrics for Core Web Vitals
  targets: {
    LCP: 2.5, // Largest Contentful Paint (seconds)
    FID: 100, // First Input Delay (milliseconds)  
    CLS: 0.1  // Cumulative Layout Shift
  },
  
  // Optimization strategies
  strategies: {
    LCP: [
      'Optimize images with Next.js Image component',
      'Preload critical fonts',
      'Minimize render-blocking resources',
      'Use efficient image formats (WebP, AVIF)'
    ],
    FID: [
      'Minimize JavaScript execution time',
      'Use code splitting and lazy loading',
      'Optimize third-party scripts',
      'Implement proper caching strategies'
    ],
    CLS: [
      'Set explicit dimensions for images and videos',
      'Avoid inserting content above existing content',
      'Use CSS transforms instead of changing layout properties',
      'Preload fonts to avoid font swap layout shifts'
    ]
  }
}

export const caching = {
  // Cache strategies for different resource types
  static: {
    'max-age': 31536000, // 1 year
    'immutable': true
  },
  dynamic: {
    'max-age': 0,
    'must-revalidate': true
  },
  images: {
    'max-age': 2592000, // 30 days
    'stale-while-revalidate': 86400 // 1 day
  }
}
