import Layout from "@/site/components/Layout";
import { ClinicalHero } from "@/site/components/heroes";
import heroPhoto from "@/assets/site/hero-dental-lab.jpg";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { usePageMeta } from "@/site/components/usePageMeta";

const WHATSAPP = "https://wa.me/2349017758165?text=Hello%20I%20would%20like%20to%20know%20more%20about%20Clinexus%20dental%20lab%20pricing";

const tiers = [
  { name: "Starter", cases: "Up to 100 cases / month", price: "₦500", unit: "per case", points: ["All features included", "Up to 5 staff", "Email & WhatsApp support"] },
  { name: "Growth", cases: "101 – 500 cases / month", price: "₦400", unit: "per case", points: ["Everything in Starter", "Unlimited staff", "CAD/CAM & outsourcing"], featured: true },
  { name: "Production", cases: "500+ cases / month", price: "Custom", unit: "volume rate", points: ["Everything in Growth", "Multiple branches", "Dedicated onboarding"] },
];

const DentalLabPricing = () => {
  usePageMeta(
    "Dental Lab Pricing | Clinexus",
    "Simple case-volume pricing for dental labs. Pay per case, no monthly subscription.",
  );
  return (
    <Layout>
      <ClinicalHero
        kicker="Dental lab pricing"
        title="Pay for the cases you produce."
        description="A one-time setup, then a per-case rate that drops as your volume grows."
        primary={{ label: "Talk to us on WhatsApp", href: WHATSAPP, external: true }}
        secondary={{ label: "See features", href: "/industries/dental-labs/features" }}
        photo={{ src: heroPhoto, alt: "Dental lab technician at work" }}
      />
      <div className="mx-auto max-w-5xl space-y-12 px-4 py-12 sm:px-6">
        <section className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border p-6 ${t.featured ? "border-primary bg-primary/5" : "border-border bg-background"}`}>
              <h2 className="text-lg font-semibold text-foreground">{t.name}</h2>
              <p className="mb-4 text-xs text-muted-foreground">{t.cases}</p>
              <p className="text-3xl font-bold text-primary">{t.price}</p>
              <p className="mb-4 text-xs text-muted-foreground">{t.unit}</p>
              <ul className="space-y-2">
                {t.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-[13px] text-muted-foreground"><Check className="h-3.5 w-3.5 text-primary" />{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <p className="text-center text-xs text-muted-foreground">One-time setup from ₦30,000. No monthly subscription.</p>
        <section className="rounded-3xl border border-primary/20 bg-primary/5 p-6 text-center sm:p-8">
          <h2 className="mb-2 text-xl font-bold text-foreground">Get your lab live this week</h2>
          <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/signup" className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">Get started</Link>
            <Link to="/industries/dental-labs/features" className="inline-flex items-center justify-center rounded-xl border border-primary px-6 py-3 font-semibold text-primary hover:bg-primary/10">See all features</Link>
            <Link to="/industries/dental-labs" className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 font-semibold text-foreground hover:bg-muted">Lab overview</Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DentalLabPricing;
