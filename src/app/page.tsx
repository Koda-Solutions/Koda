import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import Solution from '@/components/Solution';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PainPoints />
      <Solution />
      <CTA />
      <Footer />
    </main>
  );
}
