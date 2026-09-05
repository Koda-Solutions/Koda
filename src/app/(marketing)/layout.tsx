import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

/**
 * Chrome shared by every public marketing page. Onboarding, the dashboard and
 * storefronts each get their own group layout instead of reusing this one.
 */
export default function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
