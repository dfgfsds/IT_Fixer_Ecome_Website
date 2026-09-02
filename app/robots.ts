// import { MetadataRoute } from 'next'

// export default function robots(): MetadataRoute.Robots {
//     return {
//         rules: [
//             {
//                 userAgent: '*',
//                 allow: '/',
//                 disallow: ['/login', '/signup', '/cart', '/checkout'],
//             },
//         ],
//         sitemap: 'https://www.itfixer.in/sitemap.xml',
//     }
// }


import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const sitemapUrl = 'https://www.itfixer.in/sitemap.xml'

    const commonDisallows = [
        '/login/',
        '/signup/',
        '/cart/',
        '/forgot-password/',
        '/profile/',
        '/search',
        '/*?*',
        '/*sort=',
        '/*filter=',
        '/*utm_=',
        '/*session=',
        '/*ref=',
    ]

    const commonAllows = [
        '/',
        '/connect',
        '/assets/',
        '/images/',
        '/_next/',
        '/uploads/',
        '/tailwind.css',
        '/tailwind.min.css',
        '/css/',
        '/styles/',
        '/assets/css/',
        '/*.css$',
        '/*.js$',
        '/*.jpg$',
        '/*.jpeg$',
        '/*.png$',
        '/*.webp$',
        '/*.svg$',
    ]

    return {
        rules: [
            // General Search Engine Crawlers
            {
                userAgent: '*',
                allow: commonAllows,
                disallow: commonDisallows,
            },
            // Google Search + GEO Visibility
            {
                userAgent: 'Googlebot',
                allow: '/',
            },
            {
                userAgent: 'Googlebot-Image',
                allow: '/',
            },
            {
                userAgent: 'Googlebot-News',
                allow: '/',
            },
            {
                userAgent: 'Google-Extended',
                allow: '/',
            },
            // Bing / Microsoft / Copilot Search
            {
                userAgent: 'Bingbot',
                allow: '/',
            },
            {
                userAgent: 'BingPreview',
                allow: '/',
            },
            // OpenAI / ChatGPT Crawlers
            {
                userAgent: 'OAI-SearchBot',
                allow: '/',
            },
            {
                userAgent: 'GPTBot',
                allow: '/',
            },
            {
                userAgent: 'ChatGPT-User',
                allow: '/',
            },
            // Perplexity AI
            {
                userAgent: 'PerplexityBot',
                allow: '/',
            },
            {
                userAgent: 'Perplexity-User',
                allow: '/',
            },
            // Anthropic / Claude
            {
                userAgent: 'ClaudeBot',
                allow: '/',
            },
            // Common AI / Research Crawlers
            {
                userAgent: 'CCBot',
                allow: '/',
            },
            {
                userAgent: 'Applebot',
                allow: '/',
            },
            {
                userAgent: 'Applebot-Extended',
                allow: '/',
            },
            {
                userAgent: 'Meta-ExternalAgent',
                allow: '/',
            },
            {
                userAgent: 'Meta-ExternalFetcher',
                allow: '/',
            },
            {
                userAgent: 'Amazonbot',
                allow: '/',
            },
            {
                userAgent: 'Bytespider',
                allow: '/',
            },
        ],
        sitemap: sitemapUrl,
    }
}