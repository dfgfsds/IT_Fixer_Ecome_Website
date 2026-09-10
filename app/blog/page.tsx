
import BlogHeroSection from "@/components/BlogHeroSection";
import BlogCardSection from "@/components/BlogCardSection";
import BlogTriggerSection from "@/components/BlogTriggerSection";
import { getBlogsApi } from "@/api-endpoints/authendication";
import { Metadata } from "next";
import Script from "next/script";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Gaming PC Shop Chennai | Gaming Guides & Tips",
        description:
            "Explore our blog for gaming PC guides, reviews, buying tips, upgrades and expert advice to help you choose the right gaming PC shop in Chennai.",
        keywords: [
            "gaming PC blog",
            "custom PC build tips",
            "PC troubleshooting guides",
            "gaming computer Chennai",
            "IT Fixer blog",
            "PC upgrade tips",
            "workstation PC blogs",
            "tech articles Chennai",
        ],
        alternates: {
            canonical: "https://www.itfixer.in/blog",
        },
        openGraph: {
            type: "website",
            title: "Gaming PC Shop Chennai | Gaming Guides & Tips",
            description:
                "Explore our blog for gaming PC guides, reviews, buying tips, upgrades and expert advice to help you choose the right gaming PC shop in Chennai.",
            url: "https://www.itfixer.in/blog",
            siteName: "IT Fixer",
            images: [
                {
                    url: "https://www.itfixer.in/assets/img/logo.png",
                    width: 1200,
                    height: 630,
                    alt: "IT Fixer Blog",
                },
            ],
            locale: "en_IN",
        },
        twitter: {
            card: "summary_large_image",
            title: "Gaming PC Shop Chennai | Gaming Guides & Tips",
            description:
                "Explore our blog for gaming PC guides, reviews, buying tips, upgrades and expert advice to help you choose the right gaming PC shop in Chennai.",
            images: ["https://www.itfixer.in/assets/img/logo.png"],
        },

        robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    };
}

export default async function BlogPage() {
    const vendorId = "157";
    const response = await getBlogsApi(`?vendor_id=${vendorId}`);
    const blogs = response?.data?.blogs ?? [];

    return (
        <>
            {/* ================= IMAGE SRC LINK ================= */}
            <link
                rel="image_src"
                href="https://www.itfixer.in/assets/img/pc-build.webp"
            />

            {/* ================= BLOG SCHEMA ================= */}
            <Script
                type="application/ld+json"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Blog",
                        "url": "https://www.itfixer.in/blog",
                        "name": "IT Fixer Tech Blog",
                        "description": "Technical blogs on gaming PCs, custom PC builds, troubleshooting guides, performance optimization tips, and the latest tech news from IT Fixer Chennai.",
                        "publisher": {
                            "@type": "Organization",
                            "name": "IT Fixer",
                            "url": "https://www.itfixer.in",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.itfixer.in/images/logo.png",
                            },
                        },
                        "image": "https://www.itfixer.in/assets/img/pc-build.webp",
                        "inLanguage": "en-IN",
                    }),
                }}
            />

            <div>
                <div id="smooth-content">
                    <BlogHeroSection />
                    <BlogCardSection blogs={blogs} />
                    <BlogTriggerSection />
                </div>
            </div>
        </>
    );
}