import { Metadata } from "next";
import AboutPage from "./Client";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "About IT Fixer | Trusted Gaming PC Store in Chennai",

        description:
            "IT Fixer is a leading computer store in Chennai offering gaming PCs, editing systems, and high-performance components.",

        keywords: [
            "about IT Fixer Chennai",
            "computer shop Chennai",
            "gaming pc store India",
        ],

        alternates: {
            canonical: "https://www.itfixer.in/about",
        },

        openGraph: {
            type: "website",
            title: "About IT Fixer | Gaming PC Store Chennai",
            description:
                "Leading computer store in Chennai offering gaming PCs, editing systems, and high-performance components.",
            url: "https://www.itfixer.in/about",
            siteName: "IT Fixer",
            locale: "en_IN",
            images: [
                {
                    url: "https://www.itfixer.in/assets/img/home-3/top-feature.png",
                    width: 1200,
                    height: 630,
                    alt: "About IT Fixer",
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: "About IT Fixer Chennai",
            description:
                "Trusted gaming PC and computer components store in Chennai.",
            images: ["https://www.itfixer.in/assets/img/home-3/top-feature.png"],
        },
    };
}

export default function Page() {
    return (
        <>
            {/* Schema (About Page SEO boost 🔥) */}
            <Script
                id="about-schema"
                type="application/ld+json"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "IT Fixer",
                        url: "https://www.itfixer.in/about",
                        logo: "https://www.itfixer.in/assets/img/home-3/top-feature.png",
                        description:
                            "IT Fixer is a trusted gaming PC store in Chennai offering high-performance computers and components.",
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Chennai",
                            addressCountry: "IN",
                        },
                    }),
                }}
            />

            <AboutPage />
        </>
    );
}