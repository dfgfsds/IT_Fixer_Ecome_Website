import { Metadata } from "next";
import Categories from "./Client";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Explore PC Components & Gaming Categories | IT Fixer",

        description:
            "Browse categories like gaming PCs, processors, GPUs, RAM, SSDs and more. Build powerful setups for gaming, editing & streaming.",

        keywords: [
            "pc components Chennai",
            "gaming categories India",
            "gpu Chennai",
            "processor India",
            "RAM SSD Chennai",
            "IT Fixer categories",
        ],

        alternates: {
            canonical: "https://www.itfixer.in/categories",
        },

        openGraph: {
            type: "website",
            title: "PC Components & Gaming Categories | IT Fixer",
            description:
                "Browse gaming PCs, GPUs, processors, RAM, SSDs and more. Build powerful setups.",
            url: "https://www.itfixer.in/categories",
            siteName: "IT Fixer",
            locale: "en_IN",
            images: [
                {
                    url: "https://www.itfixer.in/images/categories.jpg",
                    width: 1200,
                    height: 630,
                    alt: "IT Fixer Categories",
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: "Gaming PC Categories | IT Fixer",
            description:
                "Explore GPUs, CPUs, RAM, SSDs and more for gaming and editing builds.",
            images: ["https://www.itfixer.in/images/categories.jpg"],
        },
    };
}

export default function Page() {
    return (
        <>
            {/* OPTIONAL: Category Schema */}
            <Script
                id="category-schema"
                type="application/ld+json"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        name: "PC Components Categories",
                        url: "https://www.itfixer.in/categories",
                        description:
                            "Browse gaming PCs, GPUs, processors, RAM, SSDs and more.",
                    }),
                }}
            />

            <Categories />
        </>
    );
}