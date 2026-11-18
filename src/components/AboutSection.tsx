import {ArrowRight} from 'lucide-react';
import {BUSINESS_INFO} from '../data/business';
import {SafeImage} from './SafeImage';

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          {/* Left Column: Story & Introduction */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#8C6B27] mb-3">
              About PARADISE CAB
            </p>

            <h2
              className="font-display text-3xl sm:text-4xl font-semibold text-[#133024] leading-tight mb-6"
              style={{textWrap: 'balance'}}
            >
              Your Journey, Your Way Across Sri Lanka
            </h2>

            <div className="space-y-4 text-base text-[#4C554F] leading-relaxed">
              <p>
                Welcome to PARADISE CAB, your trusted partner for comfortable private transportation
                and personalized travel experiences in Sri Lanka.
              </p>
              <p>
                Whether you need an airport transfer, a private vehicle for sightseeing or a
                customized multi-day journey, we are here to help you explore Sri Lanka comfortably
                and conveniently.
              </p>
              <p>Our goal is to make every journey simple, enjoyable and memorable.</p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E6E0D2] flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#4C554F]">
              <span>{BUSINESS_INFO.registrationNote}</span>
              <span aria-hidden="true" className="text-[#C5A059]">
                ·
              </span>
              <span>Private Island-Wide Transfers</span>
              <span aria-hidden="true" className="text-[#C5A059]">
                ·
              </span>
              <span>Direct WhatsApp Assistance</span>
            </div>

            <div className="mt-8">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#133024] hover:bg-[#1B4332] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#133024]"
              >
                <span>Let&apos;s Plan Your Sri Lankan Journey</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059]" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Authentic Coastal Journey Image */}
          <div className="lg:col-span-6">
            <div className="h-full min-h-[320px] lg:min-h-[460px] rounded-xl overflow-hidden bg-[#F6F3EC]">
              <SafeImage
                src={BUSINESS_INFO.aboutImage}
                alt="Palm-fringed coastal road alongside turquoise waters in southern Sri Lanka"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
