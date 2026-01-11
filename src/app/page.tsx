import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Integrations from '@/components/Integrations';
import PainPoints from '@/components/PainPoints';
import Solution from '@/components/Solution';
import GuidanceSection from '@/components/GuidanceSection';
import TrustStats from '@/components/TrustStats';
import ServicesEcosystem from '@/components/ServicesEcosystem';
import ComparisonSection from '@/components/ComparisonSection';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Integrations />
      <PainPoints />
      <Solution />
      <GuidanceSection />
      <TrustStats />
      <ServicesEcosystem />
      <ComparisonSection />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
