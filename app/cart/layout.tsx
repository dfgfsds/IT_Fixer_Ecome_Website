import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Custom PC Builder Chennai | Shopping Cart",
    description:
        "Build your ideal PC with a trusted custom PC builder in Chennai. Review your selected components, update your cart, and complete your order easily.",
    alternates: {
        canonical: "https://www.itfixer.in/cart",
    },
    openGraph: {
        type: "website",
        title: "Custom PC Builder Chennai | Shopping Cart",
        description:
            "Build your ideal PC with a trusted custom PC builder in Chennai. Review your selected components, update your cart, and complete your order easily.",
        url: "https://www.itfixer.in/cart",
        siteName: "IT Fixer",
        images: [
            {
                url: "https://www.itfixer.in/assets/img/logo.png",
                width: 1200,
                height: 630,
                alt: "Custom PC Builder Chennai | Shopping Cart",
            },
        ],
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom PC Builder Chennai | Shopping Cart",
        description:
            "Build your ideal PC with a trusted custom PC builder in Chennai. Review your selected components, update your cart, and complete your order easily.",
        images: ["https://www.itfixer.in/assets/img/logo.png"],
    },
};

export default function CartLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
