import Hero from '@/features/marketing/components/Hero';
import ProblemSolution from '@/features/marketing/components/ProblemSolution';
import HowItWorks from '@/features/marketing/components/HowItWorks';
import Features from '@/features/marketing/components/Features';
import Themes from '@/features/marketing/components/Themes';
import Assurances from '@/features/marketing/components/Assurances';
import WhyKoda from '@/features/marketing/components/WhyKoda';
import Pricing from '@/features/marketing/components/Pricing';
import FAQ from '@/features/marketing/components/FAQ';
import CTA from '@/features/marketing/components/CTA';

/**
 * The order is the argument, in the order a seller makes up their mind:
 * the promise, the pain they already feel, how short the path is, what they get,
 * what it looks like, the four objections, the price, the leftover questions, ask.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <Themes />
      <Assurances />
      <WhyKoda />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
