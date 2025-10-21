import { notFound } from 'next/navigation'
import { getLittleWorldEntryBySlug, getAllLittleWorldEntries } from '@/lib/little-world'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface EntryPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const entries = getAllLittleWorldEntries()
  return entries.map((entry) => ({
    slug: entry.slug,
  }))
}

export async function generateMetadata({ params }: EntryPageProps) {
  const entry = getLittleWorldEntryBySlug(params.slug)
  
  if (!entry) {
    return {
      title: 'Entry Not Found',
    }
  }

  return {
    title: entry.title,
    description: entry.caption,
  }
}

export default function EntryPage({ params }: EntryPageProps) {
  const entry = getLittleWorldEntryBySlug(params.slug)
  
  if (!entry) {
    notFound()
  }

  return (
    <section className="section">
      <div className="container-safe">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="text-sm text-accent font-medium mb-4">
              {new Date(entry.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-serif font-medium text-text mb-6">
              {entry.title}
            </h1>
            
            <p className="text-lg text-subtle mb-8">
              {entry.caption}
            </p>
          </div>
          
          <div className="prose-muted">
            <MDXRemote source={entry.content} />
          </div>
        </div>
      </div>
    </section>
  )
}
