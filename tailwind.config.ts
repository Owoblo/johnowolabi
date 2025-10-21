import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Color tokens following the warm, minimal aesthetic
      colors: {
        background: '#FAFAF7', // warm white - primary background
        surface: '#EAE9E4',    // soft gray - cards, sections
        text: '#111215',       // charcoal - primary text
        subtle: '#6B7280',     // muted gray - secondary text, captions
        accent: '#4C5A3C',     // olive - links, highlights, CTAs
        'accent-contrast': '#FFFFFF', // white - text on accent backgrounds
      },
      
      // Refined typography scale with gentler proportions
      fontSize: {
        'xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',     // 12-14px
        'sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',       // 14-16px
        'base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',       // 16-18px
        'lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',      // 18-20px
        'xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',       // 20-24px
        '2xl': 'clamp(1.5rem, 1.3rem + 1vw, 1.875rem)',        // 24-30px (gentler)
        '3xl': 'clamp(1.875rem, 1.6rem + 1.25vw, 2.25rem)',    // 30-36px (more refined)
        '4xl': 'clamp(2.25rem, 1.9rem + 1.5vw, 2.75rem)',      // 36-44px (hero sizing)
      },
      
      // Spacing scale that starts at 2 and grows gently
      spacing: {
        '2': '0.5rem',   // 8px
        '4': '1rem',     // 16px
        '6': '1.5rem',   // 24px
        '8': '2rem',     // 32px
        '12': '3rem',    // 48px
        '16': '4rem',    // 64px
        '24': '6rem',    // 96px
        '32': '8rem',    // 128px
        '48': '12rem',   // 192px
        '64': '16rem',   // 256px
      },
      
      // Container widths with safe gutters
      maxWidth: {
        'prose': '70ch',        // Optimal reading line length
        'prose-wide': '78ch',   // Slightly wider for some content
        'container': '1200px',  // Main container max width
      },
      
      // Font families with system fallbacks
      fontFamily: {
        'serif': ['Fraunces', 'Canela', 'Georgia', 'serif'],
        'sans': ['Inter', 'Söhne', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      
      // Line heights for generous, readable text
      lineHeight: {
        'relaxed': '1.6',
        'loose': '1.7',
      },
      
      // Animation durations for subtle motion
      transitionDuration: {
        '150': '150ms',
        '180': '180ms',
      },
      
      // Custom easing for gentle motion
      transitionTimingFunction: {
        'ease-out-subtle': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // Custom prose theme for muted, readable content
    function({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        '.prose-muted': {
          'max-width': '70ch',
          'line-height': '1.65',
          'color': '#111215',
          '& h1, & h2, & h3, & h4, & h5, & h6': {
            'font-family': 'Fraunces, Canela, Georgia, serif',
            'font-weight': '500',
            'letter-spacing': '-0.025em',
            'color': '#111215',
            'margin-top': '2rem',
            'margin-bottom': '1rem',
          },
          '& h1': {
            'font-size': 'clamp(1.875rem, 1.6rem + 1.25vw, 2.25rem)',
            'line-height': '1.2',
          },
          '& h2': {
            'font-size': 'clamp(1.5rem, 1.3rem + 1vw, 1.875rem)',
            'line-height': '1.3',
          },
          '& h3': {
            'font-size': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
            'line-height': '1.4',
          },
          '& p': {
            'font-size': 'clamp(1rem, 1.2vw + 0.75rem, 1.125rem)',
            'line-height': '1.65',
            'margin-top': '1rem',
            'margin-bottom': '1rem',
          },
          '& a': {
            'color': '#4C5A3C',
            'text-decoration': 'none',
            'border-bottom': '1px solid rgba(76, 90, 60, 0.3)',
            'transition': 'border-color 0.2s ease',
            '&:hover': {
              'border-bottom-color': '#4C5A3C',
            },
          },
          '& blockquote': {
            'border-left': '2px solid #4C5A3C',
            'padding-left': '1.5rem',
            'margin': '2rem 0',
            'font-style': 'italic',
            'font-size': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
            'color': '#6A6B6E',
            '& p': {
              'margin': '0',
            },
          },
          '& code': {
            'background-color': '#EAE9E4',
            'padding': '0.125rem 0.25rem',
            'border-radius': '0.25rem',
            'font-size': '0.875em',
            'color': '#111215',
          },
          '& pre': {
            'background-color': '#EAE9E4',
            'padding': '1rem',
            'border-radius': '0.5rem',
            'overflow-x': 'auto',
            'margin': '1.5rem 0',
            '& code': {
              'background-color': 'transparent',
              'padding': '0',
            },
          },
          '& ul, & ol': {
            'margin': '1rem 0',
            'padding-left': '1.5rem',
          },
          '& li': {
            'margin': '0.5rem 0',
          },
        },
      })
    },
  ],
}

export default config
