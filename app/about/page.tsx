import AboutHeroSection from "@/components/AboutHeroSection";
import GamingZoneSection from "@/components/GamingZoneSection";
import TopFeaturesSection from "@/components/TopFeaturesSection";
import GameplaySection from "@/components/GameplaySection";
import AboutTestimonialSection from "@/components/AboutTestimonialSection";
import ImageSliderSection from "@/components/ImageSliderSection";
import AboutBrandSection from "@/components/AboutBrandSection";
import TriggerSection from "@/components/TriggerSection";

export default function AboutPage() {
    return (
        <div>

            <div id="smooth-content">
                <AboutHeroSection />
                <GamingZoneSection />
                <TopFeaturesSection />
                {/* <GameplaySection /> */}
                <AboutTestimonialSection />
                {/* <ImageSliderSection /> */}
                {/* <AboutBrandSection />
                <TriggerSection /> */}
            </div>

        </div>
    );
}
