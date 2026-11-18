import {ArrowRight, Briefcase, Check, HelpCircle, Luggage, Users} from 'lucide-react';
import {FLEET_VEHICLES, FleetVehicle} from '../data/fleet';
import {BookingPrefill} from '../types/booking';
import {SafeImage} from './SafeImage';

interface FleetSectionProps {
  onSelectBookingPrefill: (prefill: Omit<BookingPrefill, 'timestamp'>) => void;
}

export function FleetSection({onSelectBookingPrefill}: FleetSectionProps) {
  const handleBookVehicle = (vehicle: FleetVehicle) => {
    onSelectBookingPrefill({
      vehiclePreference: vehicle.category,
    });
  };

  const handleRequestRecommendation = () => {
    onSelectBookingPrefill({
      vehiclePreference: 'Not Sure – Please Recommend a Suitable Vehicle',
    });
  };

  return (
    <section id="fleet" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#8C6B27] mb-3">
              Our Fleet
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl font-semibold text-[#133024] leading-tight mb-4"
              style={{textWrap: 'balance'}}
            >
              Well-Maintained Vehicles for Every Party &amp; Luggage Need
            </h2>
            <p className="text-base text-[#4C554F] leading-relaxed">
              Choose the category that suits your group and luggage count, or let our team match
              the best vehicle after receiving your travel details.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FLEET_VEHICLES.map((vehicle) => (
            <article
              key={vehicle.id}
              className="bg-[#F6F3EC] rounded-xl overflow-hidden border border-[#E6E0D2] flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#EAE4D5]">
                <SafeImage
                  src={vehicle.image}
                  alt={vehicle.alt}
                  fallbackLabel={vehicle.category}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div className="mb-5">
                  <h3 className="font-display text-2xl font-semibold text-[#133024] mb-1.5">
                    {vehicle.category}
                  </h3>
                  <p className="text-sm text-[#4C554F]">{vehicle.idealFor}</p>
                </div>

                {/* Capacities */}
                <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 border-y border-[#DFD8C8] mb-5 text-sm">
                  <div className="flex items-start gap-2.5">
                    <Users className="w-4 h-4 text-[#8C6B27] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <dt className="text-xs text-[#4C554F]">Passengers</dt>
                      <dd className="font-semibold text-[#133024] tabular-nums">
                        {vehicle.passengerCapacity}
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Luggage
                      className="w-4 h-4 text-[#8C6B27] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-xs text-[#4C554F]">Large Suitcases</dt>
                      <dd className="font-semibold text-[#133024] tabular-nums">
                        {vehicle.largeSuitcaseCapacity}
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Briefcase
                      className="w-4 h-4 text-[#8C6B27] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-xs text-[#4C554F]">Small Suitcases</dt>
                      <dd className="font-semibold text-[#133024] tabular-nums">
                        {vehicle.smallSuitcaseCapacity}
                      </dd>
                    </div>
                  </div>
                </dl>

                {/* Comfort & Convenience Features */}
                <div className="mb-7 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#4C554F] mb-3">
                    Comfort &amp; Convenience
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {vehicle.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-[#1E2420]"
                      >
                        <Check
                          className="w-4 h-4 text-[#133024] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => handleBookVehicle(vehicle)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#133024] hover:bg-[#1B4332] rounded-md transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#133024]"
                >
                  <span>Book This Vehicle</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A059]" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Recommendation Helper Banner */}
        <div className="mt-10 rounded-xl bg-[#133024] text-white p-7 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4 max-w-2xl">
            <HelpCircle className="w-6 h-6 text-[#C5A059] shrink-0 mt-1" aria-hidden="true" />
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-white mb-2">
                Not Sure Which Vehicle Is Right for You? We&apos;ll Help!
              </h3>
              <p className="text-sm sm:text-base text-[#E2DFD7] leading-relaxed">
                Share your passenger count and suitcase sizes in the booking form below, and our
                team will gladly recommend the most comfortable vehicle category for your route.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleRequestRecommendation}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#133024] bg-[#C5A059] hover:bg-[#D5B26E] rounded-md transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span>Request a Recommendation</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
