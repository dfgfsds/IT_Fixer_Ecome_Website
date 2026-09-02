import { MetadataRoute } from 'next'
import { slugify } from '@/lib/slugify'
import ApiUrls from '@/api-endpoints/ApiUrls'

export const dynamic = 'force-dynamic'; // ✅ முக்கியம்

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const baseUrl = 'https://www.itfixer.in'
    const vendorId = '157'
    const blogApiUrl = `${ApiUrls.blog}?vendor_id=${vendorId}`
    const categoriesApiUrl = `${ApiUrls.categories}?vendor_id=${vendorId}`
    const productsApiUrl = `${ApiUrls.product}?vendor_id=${vendorId}`

    let blogUrls: any[] = []
    let categoryUrls: any[] = []
    let productUrls: any[] = []

    // Fetch Blogs
    try {
        const res = await fetch(blogApiUrl, {
            cache: 'no-store',
            headers: {
                'Origin': baseUrl
            }
        })
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
        const res = await fetch(categoriesApiUrl, {
            cache: 'no-store',
            headers: {
                'Origin': baseUrl
            }
        })
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

    // Fetch Products
    try {
        const res = await fetch(productsApiUrl, {
            cache: 'no-store',
            headers: {
                'Origin': baseUrl
            }
        })
        if (res.ok) {
            const productsData = await res.json()
            const products = productsData.data || (Array.isArray(productsData) ? productsData : [])
            productUrls = products.map((product: any) => ({
                url: `${baseUrl}/shop/${slugify(product.name || product.id.toString())}`,
                lastModified: new Date(product.updatedAt || product.createdAt || new Date()),
                priority: 0.8,
            }))
        }
    } catch (error) {
        console.error('Sitemap product fetch error:', error)
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
        '/connect',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        priority: route === '/' ? 1.0 : 0.8,
    }))

    return [...staticUrls, ...categoryUrls, ...blogUrls, ...productUrls]
}

