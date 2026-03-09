import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/home/hero-section'
import { DisciplinesSection } from '@/components/home/disciplines-section'
import { WhyUsSection } from '@/components/home/why-us-section'
import { CoachesPreviewSection } from '@/components/home/coaches-preview-section'
import { ReviewsSection } from '@/components/home/reviews-section'
import { FaqSection } from '@/components/home/faq-section'
import { CtaSection } from '@/components/home/cta-section'
import { MobileFloatingCta } from '@/components/mobile-floating-cta'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <DisciplinesSection />
        <WhyUsSection />
        <CoachesPreviewSection />
        <ReviewsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
      <MobileFloatingCta />
    </>
  )
}
