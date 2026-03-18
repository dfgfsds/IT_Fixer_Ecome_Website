import { Metadata } from "next";
import ShopPage from "./Client";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Shop Gaming PC Parts & Accessories Online | IT Fixer",

        description:
            "Buy gaming PC parts, accessories, and custom builds online. Best deals on GPUs, CPUs, RAM, SSDs for gaming and editing.",

        keywords: [
            "buy pc parts online India",
            "gaming accessories Chennai",
            "GPU deals India",
            "PC shop Chennai",
            "IT Fixer store",
        ],

        alternates: {
            canonical: "https://www.itfixer.in/shop",
        },

        openGraph: {
            type: "website",
            title: "Shop Gaming PC Parts Online | IT Fixer",
            description:
                "Buy gaming PC parts, accessories, GPUs, CPUs, RAM and SSDs at best prices in India.",
            url: "https://www.itfixer.in/shop",
            siteName: "IT Fixer",
            locale: "en_IN",
            images: [
                {
                    url: "https://www.itfixer.in/assets/img/logo.png",
                    width: 1200,
                    height: 630,
                    alt: "IT Fixer Shop",
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: "Buy PC Parts Online | IT Fixer",
            description:
                "Best deals on gaming PC components and accessories in India.",
            images: ["https://www.itfixer.in/assets/img/logo.png"],
        },
    };
}

export default function Page() {
    return (
        <>
            {/* Schema (IMPORTANT for SEO 🔥) */}
            <Script
                id="shop-schema"
                type="application/ld+json"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Store",
                        name: "IT Fixer Shop",
                        url: "https://www.itfixer.in/shop",
                        description:
                            "Buy gaming PC parts, accessories, GPUs, CPUs, RAM and SSDs online in India.",
                    }),
                }}
            />

            <ShopPage />
        </>
    );
}