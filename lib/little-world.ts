import { getAllLittleWorldEntries as getMDXEntries, getLittleWorldEntryBySlug as getMDXEntryBySlug } from './mdx'

export interface LittleWorldEntry {
  title: string
  date: string
  type: 'song' | 'video' | 'object' | 'quote'
  link?: string
  caption: string
  image?: string
  url: string
  slug: string
  content: string
}

export function getAllLittleWorldEntries(): LittleWorldEntry[] {
  return getMDXEntries().map((entry) => ({
    ...entry,
    url: `/little-world/${entry.slug}`,
  }))
}

export function getLittleWorldEntryBySlug(slug: string): LittleWorldEntry | undefined {
  const entry = getMDXEntryBySlug(slug)
  if (!entry) return undefined
  
  return {
    ...entry,
    url: `/little-world/${entry.slug}`,
  }
}

export function getLittleWorldEntriesByType(type: string): LittleWorldEntry[] {
  return getAllLittleWorldEntries().filter((entry) => entry.type === type)
}
