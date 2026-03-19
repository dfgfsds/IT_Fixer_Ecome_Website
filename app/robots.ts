import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/login', '/signup', '/cart', '/checkout'],
            },
        ],
        sitemap: 'https://www.itfixer.in/sitemap.xml',
    }
}