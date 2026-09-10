import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Build PC in Gaming Store in Chennai | Custom Builds",
    description:
        "Build your PC at a gaming store in Chennai with quality components. Create a custom gaming setup tailored to your performance needs and budget.",
    alternates: {
        canonical: "https://www.itfixer.in/build-your-pc",
    },
    openGraph: {
        type: "website",
        title: "Build PC in Gaming Store in Chennai | Custom Builds",
        description:
            "Build your PC at a gaming store in Chennai with quality components. Create a custom gaming setup tailored to your performance needs and budget.",
        url: "https://www.itfixer.in/build-your-pc",
        siteName: "IT Fixer",
        images: [
            {
                url: "https://www.itfixer.in/assets/img/logo.png",
                width: 1200,
                height: 630,
                alt: "Build PC in Gaming Store in Chennai | Custom Builds",
            },
        ],
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Build PC in Gaming Store in Chennai | Custom Builds",
        description:
            "Build your PC at a gaming store in Chennai with quality components. Create a custom gaming setup tailored to your performance needs and budget.",
        images: ["https://www.itfixer.in/assets/img/logo.png"],
    },
};

export default function BuildYourPcLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
