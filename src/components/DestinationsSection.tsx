import {useEffect, useState} from 'react';
import {ArrowRight, Check, MapPin, X} from 'lucide-react';
import {DESTINATIONS, DestinationItem} from '../data/destinations';
import {BookingPrefill} from '../types/booking';
import {SafeImage} from './SafeImage';

interface DestinationsSectionProps {
  onSelectBookingPrefill: (prefill: Omit<BookingPrefill, 'timestamp'>) => void;
}

export function DestinationsSection({onSelectBookingPrefill}: DestinationsSectionProps) {
  const [activeDestination, setActiveDestination] = useState<DestinationItem | null>(null);

  useEffect(() => {
    if (!activeDestination) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDestination(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeDestination]);

  const handleEnquireDestination = (destination: DestinationItem) => {
    setActiveDestination(null);
    onSelectBookingPrefill({
      dropOffLocation: `${destination.name}, Sri Lanka`,
      additionalRequirements: `Destination Enquiry: Exploring ${destination.name}`,
    });
  };

  return (
    <section id="destinations" className="py-20 lg:py-28 bg-[#F6F3EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 lg:mb-16">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#8C6B27] mb-3">
            Explore Sri Lanka
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl font-semibold text-[#133024] leading-tight mb-4"
            style={{textWrap: 'balance'}}
          >
            Iconic Landscapes, Cultural Capitals &amp; Golden Coastlines
          </h2>
          <p className="text-base text-[#4C554F] leading-relaxed">
            Discover Sri Lanka&apos;s most celebrated destinations with private door-to-door
            transportation arranged around your pace and interests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((destination, index) => {
            const isWideFeature = index === 0 || index === DESTINATIONS.length - 1;
            return (
              <article
                key={destination.id}
                className={`group bg-white rounded-xl overflow-hidden border border-[#E6E0D2] flex flex-col transition-transform duration-200 hover:-translate-y-1 ${
                  isWideFeature ? 'lg:col-span-2' : ''
                }`}
              >
                <div
                  className={`overflow-hidden bg-[#EAE4D5] ${
                    isWideFeature ? 'aspect-[16/9] lg:aspect-[21/10]' : 'aspect-[4/3]'
                  }`}
                >
                <SafeImage
                  src={destination.image}
                  alt={destination.alt}
                  fallbackLabel={destination.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <p className="text-xs font-medium text-[#8C6B27] mb-2">{destination.region}</p>

                <h3 className="font-display text-2xl font-semibold text-[#133024] mb-2.5">
                  {destination.name}
                </h3>

                <p className="text-sm sm:text-[15px] text-[#4C554F] leading-relaxed mb-6 flex-1">
                  {destination.shortDescription}
                </p>

                <div className="pt-4 border-t border-[#ECE6D8] flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveDestination(destination)}
                    className="inline-flex items-center justify-center px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#133024] border border-[#D4CCB9] hover:border-[#133024] hover:bg-[#F6F3EC] rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#133024]"
                  >
                    Explore Destination
                  </button>

                  <button
                    type="button"
                    onClick={() => handleEnquireDestination(destination)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#133024] bg-[#C5A059] hover:bg-[#B38C43] rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#133024]"
                  >
                    <span>Enquire About This Destination</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
            );
          })}
        </div>
      </div>

      {/* Accessible Destination Detail Modal */}
      {activeDestination && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="destination-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs"
          onClick={() => setActiveDestination(null)}
        >
          <div
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E6E0D2]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-[#EAE4D5]">
              <SafeImage
                src={activeDestination.image}
                alt={activeDestination.alt}
                fallbackLabel={activeDestination.name}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setActiveDestination(null)}
                aria-label="Close destination details"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 text-[#133024] flex items-center justify-center hover:bg-white shadow-md transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#133024]"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-medium text-[#8C6B27] mb-2">
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{activeDestination.region}</span>
              </div>

              <h3
                id="destination-modal-title"
                className="font-display text-2xl sm:text-3xl font-semibold text-[#133024] mb-4"
              >
                {activeDestination.name}
              </h3>

              <p className="text-base text-[#4C554F] leading-relaxed mb-6">
                {activeDestination.overview}
              </p>

              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#133024] mb-3">
                  Journey Highlights
                </p>
                <ul className="space-y-2.5">
                  {activeDestination.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2.5 text-sm text-[#1E2420]"
                    >
                      <Check
                        className="w-4 h-4 text-[#8C6B27] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-[#E6E0D2]">
                <button
                  type="button"
                  onClick={() => handleEnquireDestination(activeDestination)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#133024] bg-[#C5A059] hover:bg-[#B38C43] rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Enquire About {activeDestination.name}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveDestination(null)}
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#4C554F] hover:text-[#133024] border border-[#D4CCB9] rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  Back to Destinations
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
