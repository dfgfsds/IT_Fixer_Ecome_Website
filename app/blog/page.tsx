import React from "react";
import BlogHeroSection from "@/components/BlogHeroSection";
import BlogCardSection from "@/components/BlogCardSection";
import BlogTriggerSection from "@/components/BlogTriggerSection";
import { getBlogsApi } from "@/api-endpoints/authendication";

export const dynamic = "force-dynamic";

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
