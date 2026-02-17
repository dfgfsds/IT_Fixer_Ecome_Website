import React from "react";
import BlogHeroSection from "@/components/BlogHeroSection";
import BlogCardSection from "@/components/BlogCardSection";
import BlogTriggerSection from "@/components/BlogTriggerSection";

export default function BlogPage() {
    return (
        <div>

            <div id="smooth-content">
                <BlogHeroSection />
                <BlogCardSection />
                <BlogTriggerSection />
            </div>
        </div>

    );
}
