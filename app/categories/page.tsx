import { Metadata } from "next";
import Categories from "./Client";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Gaming Store in Chennai | Gaming PCs & Accessories",

        description:
            "Explore our gaming store in Chennai for gaming PCs, laptops, components, and accessories. Find quality products to build and upgrade your gaming setup.",

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
            title: "Gaming Store in Chennai | Gaming PCs & Accessories",
            description:
                "Explore our gaming store in Chennai for gaming PCs, laptops, components, and accessories. Find quality products to build and upgrade your gaming setup.",
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
            title: "Gaming Store in Chennai | Gaming PCs & Accessories",
            description:
                "Explore our gaming store in Chennai for gaming PCs, laptops, components, and accessories. Find quality products to build and upgrade your gaming setup.",
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