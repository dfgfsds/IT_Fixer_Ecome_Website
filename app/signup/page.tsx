
import { Metadata } from "next";
import Signup from "./clientPage";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Create Account on IT Fixer | Start Shopping PCs",
        description:
            "Sign up on IT Fixer to explore gaming PCs, editing systems, and exclusive deals on computer parts.",
        keywords: [
            "signup IT Fixer",
            "create account pc store India",
        ],
        alternates: {
            canonical: "https://www.itfixer.in/signup",
        },
        openGraph: {
            type: "website",
            title: "Sign Up | IT Fixer Account",
            description:
                "Create your IT Fixer account to shop gaming PCs and get exclusive deals.",
            url: "https://www.itfixer.in/signup",
            siteName: "IT Fixer",
            images: [
                {
                    url: "https://www.itfixer.in/assets/img/logo.png",
                    width: 1200,
                    height: 630,
                    alt: "IT Fixer Signup",
                },
            ],
            locale: "en_IN",
        },
        twitter: {
            card: "summary_large_image",
            title: "Create IT Fixer Account",
            description:
                "Sign up to explore gaming PC builds and exclusive offers.",
            images: ["https://www.itfixer.in/assets/img/logo.png"],
        },
    };
}

export default function SignupPage() {
    return <Signup />
}