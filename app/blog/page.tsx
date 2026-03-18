
import BlogHeroSection from "@/components/BlogHeroSection";
import BlogCardSection from "@/components/BlogCardSection";
import BlogTriggerSection from "@/components/BlogTriggerSection";
import { getBlogsApi } from "@/api-endpoints/authendication";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Gaming & PC Build Blog | IT Fixer Insights",
        description:
            "Read expert blogs on gaming PCs, editing setups, streaming builds, and latest tech trends.",
        keywords: [
            "gaming blog India",
            "pc build guide Chennai",
            "editing pc tips",
        ],
        alternates: {
            canonical: "https://www.itfixer.in/blog",
        },
        openGraph: {
            type: "website",
            title: "Gaming & PC Build Blog | IT Fixer",
            description:
                "Explore gaming PC builds, editing setups, and streaming guides with IT Fixer experts.",
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
            title: "IT Fixer Blog | PC Build Guides",
            description:
                "Learn gaming, editing, and streaming PC setups from experts.",
            images: ["https://www.itfixer.in/assets/img/logo.png"],
        },
    };
}

export default async function BlogPage() {
    const vendorId = "157";
    const response = await getBlogsApi(`?vendor_id=${vendorId}`);
    const blogs = response?.data?.blogs ?? [];

    return (
        <div>
            <div id="smooth-content">
                <BlogHeroSection />
                <BlogCardSection blogs={blogs} />
                <BlogTriggerSection />
            </div>
        </div>
    );
}