import { Target, Compass } from "lucide-react";
import AboutHeroSection from "@/components/AboutHeroSection";
import GamingZoneSection from "@/components/GamingZoneSection";
import TopFeaturesSection from "@/components/TopFeaturesSection";
import GameplaySection from "@/components/GameplaySection";
import AboutTestimonialSection from "@/components/AboutTestimonialSection";
import ImageSliderSection from "@/components/ImageSliderSection";
import AboutBrandSection from "@/components/AboutBrandSection";
import TriggerSection from "@/components/TriggerSection";
import BrandSection from "@/components/BrandSection";

export default function AboutPage() {
    return (
        <div>
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 991px) {
                    .leadership-sec { padding: 40px 0 0 !important; }
                    .leader-profile { padding-left: 0 !important; border-left: none !important; margin-bottom: 30px; }
                    .leader-bio p { font-size: 15px; }
                    .mission-vision-sec { padding: 50px 0 40px !important; }
                }
                @media (max-width: 767px) {
                    .mission-vision-sec { padding: 30px 0 35px !important; }
                    .mission-item-box { padding: 25px !important; border-radius: 20px !important; }
                }
            `}} />
            <div id="smooth-content">
                <AboutHeroSection />
                <GamingZoneSection />
                <TopFeaturesSection />

                {/* TRENDING LEADERSHIP SECTION */}
                <section className="leadership-sec" style={{ padding: '60px 0 30px', background: 'transparent', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.03, backgroundImage: 'radial-gradient(#cbfe1c 1px, transparent 1px)', backgroundSize: '30px 30px', pointerEvents: 'none' }}></div>
                    <div className="container position-relative">
                        <div className="section-title text-center mb-5">
                            <h6 className="subtitle text-uppercase" style={{ color: '#cbfe1c', letterSpacing: '2px', fontWeight: '600' }}>Executive Team</h6>
                            <h2 className="tx-title sec_title text-white text-uppercase">Our Leadership</h2>
                        </div>

                        <div className="leader-sec row g-3 g-md-4 g-lg-5">
                            {/* RAMESH S */}
                            <div className="col-lg-6">
                                <div className="leader-profile" style={{ position: 'relative', paddingLeft: '30px', borderLeft: '1.5px solid #cbfe1c' }}>
                                    <div className="mb-3">
                                        <h3 className="text-white mb-2">Ramesh S</h3>
                                        <div style={{ display: 'inline-block', padding: '4px 12px', background: 'rgba(203, 254, 28, 0.1)', borderRadius: '0px', border: '1px solid rgba(203, 254, 28, 0.2)' }}>
                                            <span style={{ color: '#cbfe1c', fontSize: '14px', fontWeight: '600' }}>Managing Director | M.Com., PGDMM</span>
                                        </div>
                                    </div>
                                    <div className="leader-bio" style={{ color: '#a0a0a0', lineHeight: '1.8' }}>
                                        <p>Ramesh S is the Managing Director of IT Fixer, bringing over 27 years of extensive business experience across diverse international markets. With global exposure spanning Singapore, the UAE, and multiple African countries, he has developed a deep understanding of market dynamics, customer behavior, and scalable business strategies.</p>
                                        <p className="mt-3">His leadership is driven by a clear vision - to make high-performance technology accessible, reliable, and customer-focused. With a strong foundation in commerce and marketing management, Ramesh S combines strategic insight with practical execution, ensuring IT Fixer delivers both quality and value.</p>
                                        <p className="mt-3 italic" style={{ paddingLeft: '0px', fontStyle: 'italic' }}>"Under his guidance, IT Fixer is built on the principles of innovation, affordability, and exceptional customer experience, setting new standards in the gaming and editing PC industry."</p>
                                    </div>
                                </div>
                            </div>

                            {/* SUBASHINI */}
                            <div className="col-lg-6">
                                <div className="leader-profile" style={{ position: 'relative', paddingLeft: '30px', borderLeft: '1.5px solid #cbfe1c' }}>
                                    <div className="mb-4">
                                        <h3 className="text-white mb-2">Subashini Kesavalu</h3>
                                        <div style={{ display: 'inline-block', padding: '4px 12px', background: 'rgba(203, 254, 28, 0.1)', borderRadius: '0px', border: '1px solid rgba(203, 254, 28, 0.2)' }}>
                                            <span style={{ color: '#cbfe1c', fontSize: '14px', fontWeight: '600' }}>Director | MBA in Human Resources</span>
                                        </div>
                                    </div>
                                    <div className="leader-bio" style={{ color: '#a0a0a0', lineHeight: '1.8' }}>
                                        <p>Subashini Kesavalu serves as the Director of IT Fixer, bringing over 15 years of professional experience in the United States, with a strong background in human resources and corporate operations. She has worked with globally recognized organizations, including Nestlé, gaining valuable expertise in people management, organizational development, and business processes.</p>
                                        <p className="mt-3">Her international exposure and structured approach contribute to building a customer-centric and performance-driven culture at IT Fixer. She plays a key role in strengthening team efficiency, enhancing customer experience, and ensuring seamless operational execution.</p>
                                        <p className="mt-3 italic" style={{ paddingLeft: '15px', fontStyle: 'italic' }}>"With a focus on people, process, and performance, Subashini Kesavalu is instrumental in shaping IT Fixer into a reliable and professionally driven technology brand."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MISSION & VISION */}
                <section className="mission-vision-sec" style={{ padding: '60px 0 40px', background: 'transparent' }}>
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="mission-item-box" style={{ background: 'transparent', padding: '30px', borderRadius: '0px', border: '1px solid rgba(255, 255, 255, 0.2)', height: '100%' }}>
                                    <div className="d-flex align-items-center gap-3 mb-4">
                                        <div style={{ width: '50px', height: '50px', background: '#1C1D20', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Target color="#cbfe1c" size={24} />
                                        </div>
                                        <h4 className="text-white mb-0">Our Mission</h4>
                                    </div>
                                    <p style={{ color: '#a0a0a0', lineHeight: '1.8', margin: 0 }}>To deliver high-quality gaming and editing solutions with exceptional service, making advanced technology accessible to every customer at an affordable price. We are committed to helping users make the right choice by providing hands-on experience, expert guidance, and reliable performance.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mission-item-box" style={{ background: 'transparent', padding: '30px', borderRadius: '0px', border: '1px solid rgba(255, 255, 255, 0.2)', height: '100%' }}>
                                    <div className="d-flex align-items-center gap-3 mb-4">
                                        <div style={{ width: '50px', height: '50px', background: '#1C1D20', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Compass color="#cbfe1c" size={24} />
                                        </div>
                                        <h4 className="text-white mb-0">Our Vision</h4>
                                    </div>
                                    <p style={{ color: '#a0a0a0', lineHeight: '1.8', margin: 0 }}>To become a leading technology brand that bridges the gap between premium performance and affordability, empowering gamers and creators with powerful systems and a seamless customer experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <GameplaySection /> */}
                <AboutTestimonialSection />
                {/* <ImageSliderSection /> */}
                <AboutBrandSection />
                <TriggerSection />
            </div>
        </div>
    );
}
