import { BioSection } from '@/components/about/bio-section'
import { NotesSection } from '@/components/about/notes-section'

export const metadata = {
  title: 'About',
  description: 'Learn more about John Owolabi, designer and writer focused on intentional, minimal experiences.',
}

export default function AboutPage() {
  return (
    <>
      <BioSection />
      <NotesSection />
    </>
  )
}
