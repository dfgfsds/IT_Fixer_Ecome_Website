import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
    Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail,
    MessageCircle, Clock, Star, Monitor, Laptop, Briefcase,
    Gamepad2, Video, ChevronRight, PenTool
} from 'lucide-react';
import {
    FaXTwitter, FaRedditAlien, FaQuora, FaPinterestP, FaThreads
} from 'react-icons/fa6';

export const metadata: Metadata = {
    title: 'IT Fixer Computers | High-Performance Gaming, Editing & Laptop Solutions in Chennai',
    description: 'Connect with IT Fixer Computers across social media, leave a Google review, visit our Chennai store, and explore gaming PCs, editing PCs, gaming laptops, and high-performance laptops.',
    alternates: {
        canonical: 'https://www.itfixer.in/connect',
    }
};

export default function ConnectPage() {
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://www.itfixer.in/#organization",
        "name": "IT Fixer Computers",
        "url": "https://www.itfixer.in",
        "logo": "https://www.itfixer.in/logo.png",
        "telephone": "+91-8585858768",
        "sameAs": [
            "https://www.facebook.com/itfixer7/",
            "https://www.instagram.com/brilliant_memory_computers/",
            "https://x.com/itfixer7",
            "https://www.youtube.com/@Itfixer_fix-it-fast",
            "https://www.reddit.com/user/Itfixer_fix-it-fast/",
            "https://www.quora.com/profile/It-Fixer-3",
            "https://www.threads.com/@it__fixer",
            "https://www.linkedin.com/in/it-fixer-/",
            "https://in.pinterest.com/itfixer7/",
            "https://maps.app.goo.gl/D5jwzbv3wDTbaUFr5"
        ]
    };

    const localBizSchema = {
        "@context": "https://schema.org",
        "@type": "ComputerStore",
        "@id": "https://www.itfixer.in/#localbusiness",
        "name": "IT Fixer Computers",
        "url": "https://www.itfixer.in",
        "telephone": "+91-8585858768",
        "priceRange": "₹₹",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "New No 29, Old No 31 & 32, Anjugam Nagar, 1st Street, Jafferkhanpet",
            "addressLocality": "Ashok Nagar",
            "addressRegion": "Tamil Nadu",
            "postalCode": "600083",
            "addressCountry": "IN"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                ],
                "opens": "09:00",
                "closes": "21:00"
            }
        ],
        "hasMap": "https://maps.app.goo.gl/D5jwzbv3wDTbaUFr5",
        "areaServed": "Chennai"
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.itfixer.in/connect/#webpage",
        "url": "https://www.itfixer.in/connect",
        "name": "IT Fixer Computers Social Hub",
        "description": "Connect with IT Fixer Computers across social media, leave a Google review, visit our Chennai store, and explore gaming PCs, editing PCs, gaming laptops, and high-performance laptops.",
        "publisher": {
            "@id": "https://www.itfixer.in/#organization"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.itfixer.in/connect/#breadcrumb",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.itfixer.in/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Social Hub",
                "item": "https://www.itfixer.in/connect"
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": "https://www.itfixer.in/connect/#faq",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What products does IT Fixer Computers specialize in?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "IT Fixer Computers specializes in gaming PCs, editing workstations, gaming laptops, and high-performance laptops for professionals, creators, and gamers."
                }
            },
            {
                "@type": "Question",
                "name": "Where is IT Fixer Computers located?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "IT Fixer Computers is located at New No 29, Old No 31 & 32, Anjugam Nagar, 1st Street, Jafferkhanpet, Ashok Nagar, Chennai 600083."
                }
            },
            {
                "@type": "Question",
                "name": "What are the business hours of IT Fixer Computers?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "IT Fixer Computers is open Monday through Sunday from 9:00 AM to 9:00 PM."
                }
            },
            {
                "@type": "Question",
                "name": "How can I contact IT Fixer Computers?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can contact IT Fixer Computers by calling +91 8585858768 or through their social media channels."
                }
            },
            {
                "@type": "Question",
                "name": "Can I leave a Google review for IT Fixer Computers?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Customers can scan the Google Review QR code available on the Social Hub page and leave their feedback."
                }
            }
        ]
    };

    const businessHours = [
        { day: 'Monday', hours: '9:00 AM – 9:00 PM' },
        { day: 'Tuesday', hours: '9:00 AM – 9:00 PM' },
        { day: 'Wednesday', hours: '9:00 AM – 9:00 PM' },
        { day: 'Thursday', hours: '9:00 AM – 9:00 PM' },
        { day: 'Friday', hours: '9:00 AM – 9:00 PM' },
        { day: 'Saturday', hours: '9:00 AM – 9:00 PM' },
        { day: 'Sunday', hours: '9:00 AM – 9:00 PM' },
    ];

    const socialLinks = [
        { name: 'Website', url: 'http://www.itfixer.in', icon: <Monitor size={32} /> },
        { name: 'Facebook', url: 'https://www.facebook.com/itfixer7/', icon: <Facebook size={32} color="#1877F2" /> },
        { name: 'Instagram', url: 'https://www.instagram.com/it__fixer/ ', icon: <Instagram size={32} color="#E4405F" /> },
        { name: 'X (Twitter)', url: 'https://x.com/itfixer7', icon: <FaXTwitter size={32} /> },
        { name: 'YouTube', url: 'https://www.youtube.com/@Itfixer_fix-it-fast', icon: <Youtube size={32} color="#FF0000" /> },
        { name: 'Reddit', url: 'https://www.reddit.com/user/Itfixer_fix-it-fast/', icon: <FaRedditAlien size={32} color="#FF4500" /> },
        { name: 'Quora', url: 'https://www.quora.com/profile/It-Fixer-3', icon: <FaQuora size={32} color="#B92B27" /> },
        { name: 'Threads', url: 'https://www.threads.com/@it__fixer', icon: <FaThreads size={32} /> },
        // { name: 'LinkedIn', url: 'https://www.linkedin.com/in/it-fixer-/', icon: <Linkedin size={32} color="#0A66C2" /> },
        { name: 'Pinterest', url: 'https://in.pinterest.com/itfixer7/', icon: <FaPinterestP size={32} color="#E60023" /> },
    ];

    return (
        <main style={{ backgroundColor: '#0a0a0a', color: '#fff', overflowX: 'hidden' }}>
            {/* Schema Injections */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Custom Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .social-link-card:hover {
                    border-color: #CBFE1C !important;
                    transform: translateY(-5px);
                }
            `}} />

            {/* Hero Section */}
            <section className="py-5 position-relative" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', backgroundColor: '#CBFE1C', opacity: 0.05, filter: 'blur(100px)', borderRadius: '50%', zIndex: 0 }}></div>
                <div className="container position-relative z-1 text-center py-5 mt-5">
                    <h1 className="display-3 fw-bolder mb-4">
                        IT Fixer Computers <br />
                        <span style={{ color: '#CBFE1C' }} className="fs-2 d-block mt-2">High-Performance Gaming, Editing & Laptop Solutions in Chennai</span>
                    </h1>

                    <p className="lead mx-auto mb-4 text-light" style={{ maxWidth: '800px', lineHeight: '1.8' }}>
                        Looking for a powerful PC or laptop that can keep up with your work, creativity, and gaming needs?
                        IT Fixer Computers brings you high-end systems built for performance, speed, and reliability. From gaming PCs and editing workstations to gaming laptops and high-performance laptops, we help you choose the right technology for your goals.
                    </p>
                    <p className="text-secondary mx-auto mb-5" style={{ maxWidth: '700px' }}>
                        Visit our store in Ashok Nagar, Chennai or connect with us online to explore our latest solutions, check updates, leave a Google review, and get expert support.
                    </p>

                    <div className="d-flex flex-wrap justify-content-center gap-3">
                        <a href="#store" className="btn btn-lg fw-bold d-flex align-items-center gap-2" style={{ backgroundColor: '#CBFE1C', color: '#000', padding: '15px 30px', borderRadius: '8px' }}>
                            <MapPin size={20} /> Visit Our Store
                        </a>
                        <a href="tel:+918585858768" className="btn btn-lg fw-bold d-flex align-items-center gap-2" style={{ backgroundColor: 'transparent', border: '2px solid #CBFE1C', color: '#CBFE1C', padding: '15px 30px', borderRadius: '8px' }}>
                            <Phone size={20} /> Call Now
                        </a>
                    </div>
                </div>
            </section>

            {/* Social Connect Hub */}
            <section className="py-5" style={{ backgroundColor: '#111', borderTop: '1px solid #222', borderBottom: '1px solid #222' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bold mb-3">Connect With <span style={{ color: '#CBFE1C' }}>Us</span></h2>
                        <p className="text-secondary mx-auto" style={{ maxWidth: '600px' }}>Stay connected with IT Fixer Computers on your favorite platforms for the latest updates, builds, and tech tips.</p>
                    </div>

                    <div className="row justify-content-center g-4">
                        {socialLinks?.map((link, idx) => (
                            <div className="col-6 col-md-4 col-lg-2" key={idx}>
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="d-flex flex-column align-items-center justify-content-center p-4 rounded text-decoration-none h-100 social-link-card"
                                    style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', transition: 'all 0.3s ease' }}
                                >
                                    <div className="mb-3 text-white">{link.icon}</div>
                                    <span className="fw-semibold text-light">{link.name}</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Services & Who Can Benefit */}
            <section className="py-5">
                <div className="container py-4">
                    <div className="row g-5">
                        {/* Featured Services */}
                        <div className="col-lg-6">
                            <h2 className="fw-bold mb-4 d-flex align-items-center gap-3">
                                <Star style={{ color: '#CBFE1C' }} /> Featured Services
                            </h2>
                            <p className="text-secondary mb-4">We specialize in performance-focused solutions for different types of users:</p>
                            <ul className="list-unstyled d-flex flex-column gap-3">
                                {[
                                    { icon: <Gamepad2 size={24} style={{ color: '#CBFE1C' }} />, text: 'High-End Gaming PCs' },
                                    { icon: <Video size={24} style={{ color: '#CBFE1C' }} />, text: 'Editing PCs for Video and Creative Work' },
                                    { icon: <Laptop size={24} style={{ color: '#CBFE1C' }} />, text: 'Gaming Laptops' },
                                    { icon: <Briefcase size={24} style={{ color: '#CBFE1C' }} />, text: 'High-Performance Laptops' },
                                    { icon: <MessageCircle size={24} style={{ color: '#CBFE1C' }} />, text: 'PC Guidance and Support' },
                                    { icon: <PenTool size={24} style={{ color: '#CBFE1C' }} />, text: 'Upgrade-Friendly System Recommendations' }
                                ].map((service, idx) => (
                                    <li key={idx} className="d-flex align-items-center gap-4 p-3 rounded" style={{ backgroundColor: '#111', border: '1px solid #222' }}>
                                        {service.icon}
                                        <span className="fw-semibold text-light">{service.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Who Can Benefit */}
                        <div className="col-lg-6">
                            <h2 className="fw-bold mb-4 d-flex align-items-center gap-3">
                                <Monitor style={{ color: '#CBFE1C' }} /> Who Can Benefit?
                            </h2>
                            <p className="text-secondary mb-4">IT Fixer Computers is a great choice for:</p>
                            <div className="d-flex flex-column gap-4 mt-2">
                                {[
                                    { title: 'Gamers', desc: 'who need smooth performance and powerful graphics' },
                                    { title: 'Video Editors & Creators', desc: 'who need fast systems for rendering and multitasking' },
                                    { title: 'Students & Professionals', desc: 'looking for high-performance laptops for heavy workloads' },
                                    { title: 'Business Users', desc: 'who want reliable, speed-focused machines' },
                                    { title: 'Tech Enthusiasts', desc: 'Anyone searching for expert advice before buying a high-end PC or laptop' }
                                ].map((item, idx) => (
                                    <div key={idx} className="d-flex align-items-start gap-3">
                                        <ChevronRight style={{ color: '#CBFE1C', flexShrink: 0, marginTop: '3px' }} />
                                        <div>
                                            <h4 className="fw-bold text-white fs-5 mb-1">{item.title}</h4>
                                            <p className="text-secondary mb-0">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Information Grid: Store, Contact, Hours, Review */}
            <section className="py-5" style={{ backgroundColor: '#111', borderTop: '1px solid #222' }} id="store">
                <div className="container py-4">
                    <div className="row g-4 justify-content-center">

                        {/* Store Info */}
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="p-4 rounded h-100 d-flex flex-column" style={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
                                <div className="mb-4 d-inline-flex p-3 rounded-circle align-self-start" style={{ backgroundColor: 'rgba(203, 254, 28, 0.1)' }}>
                                    <MapPin style={{ color: '#CBFE1C' }} size={24} />
                                </div>
                                <h3 className="fs-5 fw-bold mb-3" style={{ textTransform: 'capitalize' }}>Visit Our Store</h3>
                                <h4 className="fs-6 fw-semibold text-white mb-2" style={{ textTransform: 'capitalize' }}>IT Fixer Computers</h4>
                                <p className="text-secondary mb-4 flex-grow-1" style={{ lineHeight: '1.6', fontSize: '0.95rem', textTransform: 'none' }}>
                                    New No 29, Old No 31 & 32, Anjugam Nagar, 1st Street,<br />
                                    Jafferkhanpet (Opp to Kasi Theatre),<br />
                                    Ashok Nagar, Chennai 600083
                                </p>
                                <a href="https://maps.app.goo.gl/D5jwzbv3wDTbaUFr5" target="_blank" rel="noopener noreferrer" className="fw-semibold text-decoration-none d-inline-flex align-items-center gap-2 mt-auto" style={{ color: '#CBFE1C', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                                    Open Google Map <ChevronRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="p-4 rounded h-100 d-flex flex-column" style={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
                                <div className="mb-4 d-inline-flex p-3 rounded-circle align-self-start" style={{ backgroundColor: 'rgba(203, 254, 28, 0.1)' }}>
                                    <Phone style={{ color: '#CBFE1C' }} size={24} />
                                </div>
                                <h3 className="fs-5 fw-bold mb-3" style={{ textTransform: 'capitalize' }}>Contact Information</h3>
                                <ul className="list-unstyled d-flex flex-column gap-3 text-light mt-2 mb-0">
                                    <li className="d-flex align-items-center gap-3">
                                        <Phone size={18} className="text-secondary flex-shrink-0" />
                                        <a href="tel:+918585858768" className="text-light text-decoration-none" style={{ textTransform: 'none' }}>+91 8585858768</a>
                                    </li>
                                    <li className="d-flex align-items-center gap-3">
                                        <Mail size={18} className="text-secondary flex-shrink-0" />
                                        <a href="mailto:info@itfixer.in" className="text-light text-decoration-none text-break" style={{ textTransform: 'lowercase' }}>info@itfixer.in</a>
                                    </li>
                                    <li className="d-flex align-items-start gap-3 mt-1">
                                        <MessageCircle size={18} className="text-secondary flex-shrink-0 mt-1" />
                                        <div style={{ textTransform: 'none' }}>
                                            <span className="d-block text-secondary" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>WhatsApp</span>
                                            <span>8585858768</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="p-4 rounded h-100 d-flex flex-column" style={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
                                <div className="mb-4 d-inline-flex p-3 rounded-circle align-self-start" style={{ backgroundColor: 'rgba(203, 254, 28, 0.1)' }}>
                                    <Clock style={{ color: '#CBFE1C' }} size={24} />
                                </div>
                                <h3 className="fs-5 fw-bold mb-4" style={{ textTransform: 'capitalize' }}>Business Hours</h3>
                                <ul className="list-unstyled mb-0 flex-grow-1 d-flex flex-column justify-content-between">
                                    {businessHours.map((time, idx) => (
                                        <li key={idx} className="d-flex justify-content-between align-items-center pb-2 mb-2" style={{ borderBottom: idx !== businessHours.length - 1 ? '1px solid #222' : 'none' }}>
                                            <span className="text-secondary" style={{ fontSize: '0.85rem', textTransform: 'capitalize' }}>{time.day}</span>
                                            <span className="fw-medium text-light text-end" style={{ fontSize: '0.85rem', textTransform: 'none', whiteSpace: 'nowrap' }}>{time.hours}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Leave a Review */}
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="p-4 rounded h-100 position-relative overflow-hidden d-flex flex-column" style={{ background: 'linear-gradient(135deg, #1a1c23 0%, #111 100%)', border: '1px solid rgba(203, 254, 28, 0.3)' }}>
                                <div style={{ position: 'absolute', top: 0, right: 0, width: '120px', height: '120px', backgroundColor: 'rgba(203, 254, 28, 0.1)', borderRadius: '50%', filter: 'blur(30px)' }}></div>
                                <div className="mb-4 d-inline-flex p-3 rounded-circle align-self-start" style={{ backgroundColor: 'rgba(203, 254, 28, 0.2)' }}>
                                    <Star style={{ color: '#CBFE1C' }} fill="currentColor" size={24} />
                                </div>
                                <h3 className="fs-5 fw-bold mb-3 text-white" style={{ textTransform: 'capitalize' }}>Leave a Google Review</h3>
                                <p className="text-secondary mb-4 flex-grow-1" style={{ fontSize: '0.9rem', textTransform: 'none', lineHeight: '1.6' }}>
                                    Your feedback helps us grow and serve you better. If you have purchased from us or visited our store, please share your experience!
                                </p>
                                <a
                                    href="https://maps.app.goo.gl/D5jwzbv3wDTbaUFr5"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn fw-bold w-100 d-block mt-auto"
                                    style={{ backgroundColor: '#fff', color: '#000', padding: '12px', textTransform: 'uppercase', fontSize: '0.9rem' }}
                                >
                                    Write a Review
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-5 position-relative overflow-hidden">
                <div className="container py-5 position-relative z-1 text-center">
                    <h2 className="display-6 fw-bold mb-4">Get the Right Technology for Your Needs</h2>
                    <p className="fs-5 text-secondary mx-auto mb-5" style={{ maxWidth: '800px', lineHeight: '1.6' }}>
                        At IT Fixer Computers, we believe the right system should match your work, your style, and your performance needs. Whether you need a powerful desktop for gaming, a workstation for editing, or a laptop for heavy daily use, our team is here to guide you toward the best choice.
                    </p>
                    <div className="p-5 rounded mx-auto" style={{ backgroundColor: '#111', border: '1px solid #333', maxWidth: '800px' }}>
                        <h3 className="fs-3 fw-bold mb-3">Ready to upgrade your setup?</h3>
                        <p className="text-secondary mb-4 fs-5">Connect with IT Fixer Computers today for the right gaming PC, editing system, or performance laptop built around your needs.</p>
                        <Link href="tel:+918585858768" className="btn btn-lg fw-bold px-5 py-3 mt-2" style={{ backgroundColor: '#CBFE1C', color: '#000', borderRadius: '50px', boxShadow: '0 0 20px rgba(203,254,28,0.2)' }}>
                            Contact Us Today
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-5" style={{ backgroundColor: '#0f0f0f', borderTop: '1px solid #222' }}>
                <div className="container py-4">
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bold mb-4">Frequently Asked <span style={{ color: '#CBFE1C' }}>Questions</span></h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-9 d-flex flex-column gap-3">
                            {[
                                { q: "What does IT Fixer Computers sell?", a: "IT Fixer Computers specializes in high-end PCs, gaming PCs, editing PCs, gaming laptops, and high-performance laptops." },
                                { q: "Where is IT Fixer Computers located?", a: "We are located at New No 29, Old No 31 & 32, Anjugam Nagar, 1st Street, Jafferkhanpet, Opp to Kasi Theatre, Ashok Nagar, Chennai 600083." },
                                { q: "What are your business hours?", a: "We are open every day from 9:00 AM to 9:00 PM." },
                                { q: "Can I leave a Google review?", a: "Yes. You can scan the Google review QR code provided in-store or click the review button on this page to share your feedback." },
                                { q: "Who should buy from IT Fixer Computers?", a: "Gamers, editors, professionals, students, and anyone looking for powerful and reliable computers can benefit from our products and support." },
                                { q: "How can I contact IT Fixer Computers?", a: "You can call or WhatsApp us at +91 8585858768 or connect through our social media channels for support and updates." }
                            ].map((faq, idx) => (
                                <div key={idx} className="p-4 rounded" style={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
                                    <h4 className="fs-5 fw-bold text-white mb-2 d-flex gap-3">
                                        <span style={{ color: '#CBFE1C' }}>Q.</span> {faq.q}
                                    </h4>
                                    <p className="text-secondary mb-0" style={{ paddingLeft: '32px' }}>{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
