import readingTime from 'reading-time'

export function getReadingTime(text: string): number {
  const stats = readingTime(text)
  return Math.ceil(stats.minutes)
}

export function formatReadingTime(minutes: number): string {
  if (minutes === 1) {
    return '1 min read'
  }
  return `${minutes} min read`
}
