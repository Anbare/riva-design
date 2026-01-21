import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/', // Questo blocca tutto il sito
    },
    // Non includiamo la sitemap perché non vogliamo essere indicizzati
  }
}