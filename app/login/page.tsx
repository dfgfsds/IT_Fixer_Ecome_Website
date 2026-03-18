import Login from "./clientLogin";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Login to IT Fixer Account | Secure Access",
        description:
            "Login to your IT Fixer account to manage orders, track purchases, and explore gaming PC deals.",
        keywords: [
            "login IT Fixer",
            "user login pc store",
            "account login India",
        ],
        alternates: {
            canonical: "https://www.itfixer.in/login",
        },
        openGraph: {
            type: "website",
            title: "Login | IT Fixer Account Access",
            description:
                "Secure login to your IT Fixer account to manage orders and explore deals.",
            url: "https://www.itfixer.in/login",
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
            title: "Login to IT Fixer",
            description:
                "Access your account to track orders and manage purchases.",
            images: ["https://www.itfixer.in/public/assets/img/logo.png"],
        },
    };
}

export default function LoginPage() {
    return <Login />;
}