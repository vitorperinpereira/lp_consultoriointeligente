import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://vitorperin.com.br',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        // Add more internal pages if they exist in the future
    ]
}
