import Link from 'next/link'
import { Container } from '@/components/ui/container'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Highlights', href: '/highlights' },
  { name: 'Journal', href: '/journal' },
  { name: 'Little World', href: '/little-world' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  return (
    <header className="border-b border-surface relative">
      {/* Subtle masthead rule */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent/20"></div>
      <Container>
        <div className="flex items-center justify-between py-6">
          {/* Left-aligned wordmark */}
          <Link 
            href="/" 
            className="text-xl font-serif font-medium text-text hover:text-accent transition-colors duration-150"
          >
            John Owolabi
          </Link>
          
          {/* Right-aligned compact nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-text hover:text-accent transition-colors duration-150"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-text hover:text-accent transition-colors duration-150">
            <span className="sr-only">Open menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </Container>
    </header>
  )
}
