import ContactHeroSection from "@/components/ContactHeroSection";
import ContactFormSection from "@/components/ContactFormSection";
import ContactMapSection from "@/components/ContactMapSection";
import TriggerSection from "@/components/TriggerSection";

export default function ContactPage() {
    return (
        <div>

            <div id="smooth-content">
                <ContactHeroSection />
                <ContactFormSection />
                <ContactMapSection />
                <TriggerSection />
            </div>

        </div>
    );
}
