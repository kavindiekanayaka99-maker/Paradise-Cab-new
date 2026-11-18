import {ArrowRight} from 'lucide-react';
import {SERVICES, ServiceItem} from '../data/services';
import {BookingPrefill} from '../types/booking';
import {SafeImage} from './SafeImage';

interface ServicesSectionProps {
  onSelectBookingPrefill: (prefill: Omit<BookingPrefill, 'timestamp'>) => void;
}

export function ServicesSection({onSelectBookingPrefill}: ServicesSectionProps) {
  const handleServiceEnquiry = (service: ServiceItem) => {
    const isAirport = service.id === 'airport-transfers';
    onSelectBookingPrefill({
      pickupLocation: isAirport ? 'Bandaranaike International Airport (CMB)' : undefined,
      additionalRequirements: `Service Enquiry: ${service.enquiryPrompt}`,
    });
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F6F3EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 lg:mb-16">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#8C6B27] mb-3">
            Our Services
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl font-semibold text-[#133024] leading-tight mb-4"
            style={{textWrap: 'balance'}}
          >
            Private Sri Lanka Transportation Tailored to Your Schedule
          </h2>
          <p className="text-base text-[#4C554F] leading-relaxed">
            From seamless airport arrivals to multi-day island tours, every transfer is arranged
            around your itinerary and travel party.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="group bg-white rounded-xl overflow-hidden border border-[#E6E0D2] flex flex-col transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#EAE4D5]">
                <SafeImage
                  src={service.image}
                  alt={service.alt}
                  fallbackLabel={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <p className="text-xs font-semibold tracking-widest text-[#8C6B27] mb-2 tabular-nums">
                  {service.index}.
                </p>
                <h3 className="font-display text-xl font-semibold text-[#133024] mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-[#4C554F] leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                <div className="pt-4 border-t border-[#ECE6D8]">
                  <button
                    type="button"
                    onClick={() => handleServiceEnquiry(service)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#133024] hover:text-[#8C6B27] transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#133024]"
                  >
                    <span>Enquire About This Service</span>
                    <ArrowRight
                      className="w-4 h-4 text-[#C5A059] transition-transform duration-150 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
