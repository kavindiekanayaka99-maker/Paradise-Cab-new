import {BUSINESS_INFO, buildWhatsAppLink} from '../data/business';
import {DESTINATIONS} from '../data/destinations';
import {SERVICES} from '../data/services';

const FOOTER_NAV = [
  {label: 'Home', href: '#home'},
  {label: 'About Us', href: '#about'},
  {label: 'Our Services', href: '#services'},
  {label: 'Our Fleet', href: '#fleet'},
  {label: 'Destinations', href: '#destinations'},
  {label: 'Book Now', href: '#booking'},
  {label: 'Contact', href: '#contact'},
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#133024] text-[#E6E3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Summary */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#home"
              className="font-display text-2xl font-semibold tracking-wider text-white inline-block"
            >
              {BUSINESS_INFO.name}
            </a>
            <p className="text-sm text-[#D6D3C9] leading-relaxed max-w-sm">
              {BUSINESS_INFO.registrationNote}. Providing comfortable private transportation,
              airport transfers, and customized tours across Sri Lanka.
            </p>
            <div className="pt-2 space-y-1.5 text-sm">
              <p>
                <span className="text-[#C5A059] font-medium">WhatsApp: </span>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#E7CD96] transition-colors tabular-nums"
                >
                  {BUSINESS_INFO.whatsappDisplay}
                </a>
              </p>
              <p>
                <span className="text-[#C5A059] font-medium">Email: </span>
                <a
                  href={BUSINESS_INFO.emailHref}
                  className="text-white hover:text-[#E7CD96] transition-colors"
                >
                  {BUSINESS_INFO.email}
                </a>
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-base font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[#D6D3C9] hover:text-[#E7CD96] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-base font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-[#D6D3C9] hover:text-[#E7CD96] transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destination Links */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-base font-semibold text-white mb-4">Destinations</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {DESTINATIONS.map((dest) => (
                <li key={dest.id}>
                  <a
                    href="#destinations"
                    className="text-[#D6D3C9] hover:text-[#E7CD96] transition-colors"
                  >
                    {dest.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#C7C3B7]">
          <p>
            &copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <p>{BUSINESS_INFO.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
