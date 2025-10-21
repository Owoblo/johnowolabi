import Link from 'next/link'
import { Container } from '@/components/ui/container'

const footerNavigation = [
  { name: 'About', href: '/about' },
  { name: 'Highlights', href: '/highlights' },
  { name: 'Journal', href: '/journal' },
  { name: 'Little World', href: '/little-world' },
  { name: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-surface">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column - Contact info */}
          <div>
            <h3 className="text-sm font-medium text-text mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-subtle">
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
          
          {/* Right column - Small nav */}
          <div>
            <h3 className="text-sm font-medium text-text mb-4">Navigation</h3>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {footerNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-subtle hover:text-accent transition-colors duration-150"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="py-6 border-t border-surface">
          <p className="text-xs text-subtle text-center">
            © {new Date().getFullYear()} John Owolabi. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
