import PolicyHero from "@/components/PolicyHero";
import PolicyContent from "@/components/PolicyContent";

export default function ShippingPolicyPage() {
    return (
        <div>
            <div id="smooth-content">
                <PolicyHero title="Shipping Policy" date="February 18, 2026" />
                <PolicyContent />
            </div>
        </div>
    );
}
