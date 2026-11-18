import {
  CalendarCheck,
  Car,
  Compass,
  HeartHandshake,
  MapPinned,
  MessageCircle,
  Scale,
  Smile,
} from 'lucide-react';

const REASONS = [
  {
    icon: Car,
    title: 'Comfortable Private Transportation',
    description:
      'Clean, air-conditioned private vehicles dedicated exclusively to your travel party throughout the journey.',
  },
  {
    icon: Compass,
    title: 'Personalized Travel Experiences',
    description:
      'Routes and sightseeing schedules shaped around your personal interests rather than rigid group timetables.',
  },
  {
    icon: MapPinned,
    title: 'Flexible Pickup and Drop-off',
    description:
      'Door-to-door pickups and drop-offs at airports, hotels, villas, railway stations, and tourist attractions.',
  },
  {
    icon: Smile,
    title: 'Friendly Customer Service',
    description:
      'Warm Sri Lankan hospitality with attentive communication before, during, and after your transfer.',
  },
  {
    icon: MessageCircle,
    title: 'Convenient WhatsApp Bookings',
    description:
      'Fast, direct WhatsApp coordination without account registrations, complicated portals, or middlemen.',
  },
  {
    icon: Scale,
    title: 'Transparent Pricing',
    description:
      'Clear quotations discussed directly with you based on your exact route, passenger count, and requirements.',
  },
  {
    icon: CalendarCheck,
    title: 'Flexible Travel Arrangements',
    description:
      'Easy adjustments for additional scenic stops, flight timing updates, or custom multi-day itineraries.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer-Focused Service',
    description:
      'Thoughtful guidance on luggage capacity, travel times, and route planning so every ride feels effortless.',
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 lg:mb-16">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#8C6B27] mb-3">
            Why Choose PARADISE CAB
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl font-semibold text-[#133024] leading-tight mb-4"
            style={{textWrap: 'balance'}}
          >
            Hospitality, Clarity &amp; Comfort on Every Sri Lankan Road
          </h2>
          <p className="text-base text-[#4C554F] leading-relaxed">
            Designed for international visitors and local travellers alike, our service puts clear
            communication and reliable comfort first.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="pt-6 border-t border-[#E6E0D2] flex flex-col items-start"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F6F3EC] text-[#133024] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#8C6B27]" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-semibold text-[#133024] mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-[#4C554F] leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
