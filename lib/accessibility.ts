// Accessibility utilities and checks

export const colorContrast = {
  // WCAG AA compliant color combinations
  textOnBackground: {
    ratio: 4.5, // Meets WCAG AA standard
    description: 'Charcoal text on warm white background'
  },
  accentOnBackground: {
    ratio: 4.8, // Meets WCAG AA standard  
    description: 'Olive accent on warm white background'
  },
  textOnAccent: {
    ratio: 8.2, // Meets WCAG AAA standard
    description: 'White text on olive accent background'
  }
}

export const focusManagement = {
  // Focus order should follow logical reading order
  focusOrder: [
    'skip-link',
    'header-navigation', 
    'main-content',
    'footer-navigation'
  ],
  
  // Focus indicators should be visible and consistent
  focusStyles: {
    outline: '2px solid #4C5A3C',
    outlineOffset: '2px',
    borderRadius: '2px'
  }
}

export const motionPreferences = {
  // Respect user's motion preferences
  reducedMotion: {
    duration: '0.01ms',
    iterations: 1,
    transform: 'none'
  }
}

export const landmarkRoles = {
  // Semantic HTML landmarks for screen readers
  main: 'main',
  navigation: 'navigation',
  banner: 'banner',
  contentinfo: 'contentinfo',
  complementary: 'complementary'
}
