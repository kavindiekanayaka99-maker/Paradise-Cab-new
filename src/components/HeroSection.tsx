import {ArrowRight, Compass} from 'lucide-react';
import {BUSINESS_INFO} from '../data/business';
import {SafeImage} from './SafeImage';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[82vh] lg:min-h-[88vh] flex items-center bg-[#133024] overflow-hidden"
    >
      {/* Full-bleed Sri Lanka background photograph */}
      <div className="absolute inset-0">
        <SafeImage
          src={BUSINESS_INFO.heroImage}
          alt="Scenic Sri Lankan tea plantations and winding highland road at golden hour"
          loading="eager"
          fallbackLabel="PARADISE CAB · Sri Lanka"
          className="w-full h-full object-cover object-center"
        />
        {/* Measured contrast scrim for WCAG AA text legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0C1F17]/88 via-[#133024]/70 to-[#133024]/35"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#E7CD96] mb-4">
            PARADISE CAB · {BUSINESS_INFO.registrationNote}
          </p>

          <h1
            className="font-display text-white font-semibold tracking-tight leading-[1.1] mb-6"
            style={{
              fontSize: 'clamp(2.35rem, 4.8vw, 4.15rem)',
              textWrap: 'balance',
            }}
          >
            Discover Sri Lanka in Comfort
          </h1>

          <p className="text-base sm:text-lg text-[#F1EFE9] leading-relaxed max-w-xl mb-9">
            Explore the beauty of Sri Lanka with comfortable private transportation, personalized
            journeys and exceptional Sri Lankan hospitality.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-semibold text-[#133024] bg-[#C5A059] hover:bg-[#D5B26E] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span>Book Your Ride</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>

            <a
              href="#destinations"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-semibold text-white border border-white/60 hover:bg-white/10 rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059]"
            >
              <Compass className="w-4 h-4 text-[#E7CD96]" aria-hidden="true" />
              <span>Explore Sri Lanka</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
