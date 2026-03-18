import { Metadata } from "next";
import ContactPage from "./Client";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Contact IT Fixer | Gaming PC Experts in Chennai",

        description:
            "Get in touch with IT Fixer for custom PC builds, support, and product inquiries. Visit our Chennai store or contact online.",

        keywords: [
            "contact IT Fixer",
            "pc shop Chennai contact",
            "gaming pc support India",
        ],

        alternates: {
            canonical: "https://www.itfixer.in/contact",
        },

        openGraph: {
            type: "website",
            title: "Contact IT Fixer | PC Experts Chennai",
            description:
                "Reach IT Fixer for custom PC builds, support, and product inquiries in Chennai.",
            url: "https://www.itfixer.in/contact",
            siteName: "IT Fixer",
            locale: "en_IN",
            images: [
                {
                    url: "https://www.itfixer.in/assets/img/logo.png",
                    width: 1200,
                    height: 630,
                    alt: "Contact IT Fixer",
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: "Contact IT Fixer",
            description:
                "Get support and expert guidance for gaming PC builds.",
            images: ["https://www.itfixer.in/assets/img/logo.png"],
        },
    };
}

export default function Page() {
    return (
        <>
            {/* Local Business Schema (VERY IMPORTANT 🔥) */}
            <Script
                id="contact-schema"
                type="application/ld+json"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ComputerStore",
                        name: "IT Fixer",
                        url: "https://www.itfixer.in/contact",
                        image: "https://www.itfixer.in/assets/img/logo.png",
                        description:
                            "Gaming PC experts in Chennai offering custom builds and support.",
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Chennai",
                            addressCountry: "IN",
                        },
                        areaServed: "India",
                        contactPoint: {
                            "@type": "ContactPoint",
                            contactType: "customer support",
                            availableLanguage: ["English", "Tamil"],
                        },
                    }),
                }}
            />

            <ContactPage />
        </>
    );
}