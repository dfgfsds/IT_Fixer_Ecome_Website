import Login from "./clientLogin";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Best Gaming Store in Chennai | Login",
        description:
            "Login to your account at the best gaming store in Chennai. Manage orders, track purchases, view your wishlist, and access your account with ease.",
        keywords: [
            "login IT Fixer",
            "user login pc store",
            "account login India",
        ],
        alternates: {
            canonical: "https://www.itfixer.in/profile",
        },
        openGraph: {
            type: "website",
            title: "Best Gaming Store in Chennai | Login",
            description:
                "Login to your account at the best gaming store in Chennai. Manage orders, track purchases, view your wishlist, and access your account with ease.",
            url: "https://www.itfixer.in/profile",
            siteName: "IT Fixer",
            images: [
                {
                    url: "https://www.itfixer.in/public/assets/img/logo.png",
                    width: 1200,
                    height: 630,
                    alt: "IT Fixer Login",
                },
            ],
            locale: "en_IN",
        },
        twitter: {
            card: "summary_large_image",
            title: "Best Gaming Store in Chennai | Login",
            description:
                "Login to your account at the best gaming store in Chennai. Manage orders, track purchases, view your wishlist, and access your account with ease.",
            images: ["https://www.itfixer.in/public/assets/img/logo.png"],
        },
    };
}

export default function LoginPage() {
    return <Login />;
}