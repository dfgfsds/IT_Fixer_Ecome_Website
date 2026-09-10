import { Metadata } from "next";
import ContactPage from "./Client";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Gaming Computer Shop Chennai | Contact Us",

        description:
            "Contact our gaming computer shop in Chennai for gaming PCs, laptops, components, and accessories. Get expert help, product details, and pricing.",

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
            title: "Gaming Computer Shop Chennai | Contact Us",
            description:
                "Contact our gaming computer shop in Chennai for gaming PCs, laptops, components, and accessories. Get expert help, product details, and pricing.",
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
            title: "Gaming Computer Shop Chennai | Contact Us",
            description:
                "Contact our gaming computer shop in Chennai for gaming PCs, laptops, components, and accessories. Get expert help, product details, and pricing.",
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