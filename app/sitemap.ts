import { MetadataRoute } from 'next'
import { slugify } from '@/lib/slugify'

export const dynamic = 'force-dynamic'; // ✅ முக்கியம்

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const baseUrl = 'https://www.itfixer.in'
    const vendorId = '157'
    const blogApiUrl = `https://test-ecomapi.justvy.in/blog/?vendor_id=${vendorId}`
    const categoriesApiUrl = `https://test-ecomapi.justvy.in/api/categories/?vendor_id=${vendorId}`

    let blogUrls: any[] = []
    let categoryUrls: any[] = []

    // Fetch Blogs
    try {
        const res = await fetch(blogApiUrl, { cache: 'no-store' })
        if (res.ok) {
            const blogsData = await res.json()
            const blogs = blogsData.blogs || (Array.isArray(blogsData) ? blogsData : [])
            blogUrls = blogs.map((blog: any) => ({
                url: `${baseUrl}/blog/${slugify(blog.title || blog.subtitle || blog.id.toString())}`,
                lastModified: new Date(blog.updatedAt || blog.createdAt || new Date()),
                priority: 0.64,
            }))
        }
    } catch (error) {
        console.error('Sitemap blog fetch error:', error)
    }

    // Fetch Categories
    try {
        const res = await fetch(categoriesApiUrl, { cache: 'no-store' })
        if (res.ok) {
            const categoriesData = await res.json()
            const categories = categoriesData.data || (Array.isArray(categoriesData) ? categoriesData : [])
            categoryUrls = categories.map((cat: any) => ({
                url: `${baseUrl}/categories/${cat.slug || slugify(cat.name || cat.id.toString())}`,
                lastModified: new Date(),
                priority: 0.8,
            }))
        }
    } catch (error) {
        console.error('Sitemap category fetch error:', error)
    }

    const staticUrls = [
        '/',
        '/about',
        '/categories',
        '/custom-pc-build',
        '/shop',
        '/contact',
        '/blog',
        '/terms-and-conditions',
        '/privacy-policy',
        '/refund-policy',
        '/shipping-policy',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        priority: route === '/' ? 1.0 : 0.8,
    }))

    return [...staticUrls, ...categoryUrls, ...blogUrls]
}