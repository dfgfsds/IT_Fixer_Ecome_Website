// import { MetadataRoute } from 'next'
// import { slugify } from '@/lib/slugify'

// export const dynamic = 'force-dynamic'; // ✅ முக்கியம்

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

//     const baseUrl = 'https://www.itfixer.in'
//     const vendorId = '157'
//     const blogApiUrl = `https://test-ecomapi.justvy.in/blog/?vendor_id=${vendorId}`
//     const categoriesApiUrl = `https://test-ecomapi.justvy.in/api/categories/?vendor_id=${vendorId}`

//     let blogUrls: any[] = []
//     let categoryUrls: any[] = []

//     // Fetch Blogs
//     try {
//         const res = await fetch(blogApiUrl, { cache: 'no-store' })
//         if (res.ok) {
//             const blogsData = await res.json()
//             const blogs = blogsData.blogs || (Array.isArray(blogsData) ? blogsData : [])
//             blogUrls = blogs.map((blog: any) => ({
//                 url: `${baseUrl}/blog/${slugify(blog.title || blog.subtitle || blog.id.toString())}`,
//                 lastModified: new Date(blog.updatedAt || blog.createdAt || new Date()),
//                 priority: 0.64,
//             }))
//         }
//     } catch (error) {
//         console.error('Sitemap blog fetch error:', error)
//     }

//     // Fetch Categories
//     try {
//         const res = await fetch(categoriesApiUrl, { cache: 'no-store' })
//         if (res.ok) {
//             const categoriesData = await res.json()
//             const categories = categoriesData.data || (Array.isArray(categoriesData) ? categoriesData : [])
//             categoryUrls = categories.map((cat: any) => ({
//                 url: `${baseUrl}/categories/${cat.slug || slugify(cat.name || cat.id.toString())}`,
//                 lastModified: new Date(),
//                 priority: 0.8,
//             }))
//         }
//     } catch (error) {
//         console.error('Sitemap category fetch error:', error)
//     }

//     const staticUrls = [
//         '/',
//         '/about',
//         '/categories',
//         '/custom-pc-build',
//         '/shop',
//         '/contact',
//         '/blog',
//         '/terms-and-conditions',
//         '/privacy-policy',
//         '/refund-policy',
//         '/shipping-policy',
//     ].map((route) => ({
//         url: `${baseUrl}${route}`,
//         lastModified: new Date(),
//         priority: route === '/' ? 1.0 : 0.8,
//     }))

//     return [...staticUrls, ...categoryUrls, ...blogUrls]
// }

import { MetadataRoute } from "next";
import { slugify } from "@/lib/slugify";

export const dynamic = "force-dynamic";

const BASE_URL = "https://www.itfixer199.com";
const VENDOR_ID = "157";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const blogApiUrl = `https://test-ecomapi.justvy.in/blog/?vendor_id=${VENDOR_ID}`;
  const categoryApiUrl = `https://test-ecomapi.justvy.in/api/categories/?vendor_id=${VENDOR_ID}`;

  let blogUrls: MetadataRoute.Sitemap = [];
  let categoryUrls: MetadataRoute.Sitemap = [];

  // ============================
  // Blogs
  // ============================

  try {
    const res = await fetch(blogApiUrl, {
      cache: "no-store",
    });

    if (res.ok) {
      const data = await res.json();

      const blogs =
        data.blogs || (Array.isArray(data) ? data : []);

      blogUrls = blogs.map((blog: any) => ({
        url: `${BASE_URL}/blog/${slugify(
          blog.title || blog.subtitle || String(blog.id)
        )}`,
        lastModified: new Date(
          blog.updatedAt || blog.createdAt || lastModified
        ),
        changeFrequency: "weekly",
        priority: 0.8,
      }));
    }
  } catch (err) {
    console.error("Blog Sitemap Error:", err);
  }

  // ============================
  // Categories
  // ============================

  try {
    const res = await fetch(categoryApiUrl, {
      cache: "no-store",
    });

    if (res.ok) {
      const data = await res.json();

      const categories =
        data.data || (Array.isArray(data) ? data : []);

      categoryUrls = categories.map((category: any) => ({
        url: `${BASE_URL}/categories/${
          category.slug || slugify(category.name || String(category.id))
        }`,
        lastModified,
        changeFrequency: "weekly",
        priority: 0.9,
      }));
    }
  } catch (err) {
    console.error("Category Sitemap Error:", err);
  }

  // ============================
  // Static Pages
  // ============================

  const staticPages = [
    {
      route: "/",
      priority: 1.0,
      changeFrequency: "daily" as const,
    },
    {
      route: "/about",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      route: "/services",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      route: "/categories",
      priority: 0.9,
      changeFrequency: "daily" as const,
    },
    {
      route: "/products",
      priority: 0.9,
      changeFrequency: "daily" as const,
    },
    {
      route: "/shop",
      priority: 0.9,
      changeFrequency: "daily" as const,
    },
    {
      route: "/custom-pc-build",
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    {
      route: "/blog",
      priority: 0.8,
      changeFrequency: "daily" as const,
    },
    {
      route: "/contact",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      route: "/privacy-policy",
      priority: 0.5,
      changeFrequency: "yearly" as const,
    },
    {
      route: "/terms-and-conditions",
      priority: 0.5,
      changeFrequency: "yearly" as const,
    },
    {
      route: "/refund-policy",
      priority: 0.5,
      changeFrequency: "yearly" as const,
    },
    {
      route: "/shipping-policy",
      priority: 0.5,
      changeFrequency: "yearly" as const,
    },
  ];

  const staticUrls: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${BASE_URL}${page.route}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  return [
    ...staticUrls,
    ...categoryUrls,
    ...blogUrls,
  ];
}