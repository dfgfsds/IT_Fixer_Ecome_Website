import ContactHeroSection from "@/components/ContactHeroSection";
import ContactFormSection from "@/components/ContactFormSection";
import ContactMapSection from "@/components/ContactMapSection";
import ContactTriggerSection from "@/components/ContactTriggerSection";

export default function ContactPage() {
    return (
        <div>
            <div id="smooth-content">
                <ContactHeroSection />
                <ContactFormSection />
                <ContactMapSection />
                <ContactTriggerSection />
            </div>
        </div>
    );
}
