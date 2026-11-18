import {useState} from 'react';
import {Menu, X} from 'lucide-react';

const NAV_LINKS = [
  {label: 'Home', href: '#home'},
  {label: 'About Us', href: '#about'},
  {label: 'Our Services', href: '#services'},
  {label: 'Our Fleet', href: '#fleet'},
  {label: 'Destinations', href: '#destinations'},
  {label: 'Contact', href: '#contact'},
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E6E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 lg:h-[72px] flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          className="font-display text-lg sm:text-xl font-semibold tracking-wider text-[#133024] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A059]"
        >
          PARADISE CAB
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#1E2420]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 whitespace-nowrap shrink-0 text-[#1E2420] hover:text-[#133024] transition-colors duration-150 after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A059]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action button (+ mobile menu toggle) */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#booking"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[#133024] bg-[#C5A059] hover:bg-[#B38C43] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#133024]"
          >
            Book Now
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-[#133024] hover:bg-[#F6F3EC] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#133024]"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Hamburger Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-white border-t border-[#E6E0D2] px-4 py-5 space-y-1 shadow-lg"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-3 text-base font-medium text-[#1E2420] hover:text-[#133024] hover:bg-[#F6F3EC] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#E6E0D2]">
            <a
              href="#booking"
              onClick={handleLinkClick}
              className="flex items-center justify-center w-full px-5 py-3 text-base font-semibold text-[#133024] bg-[#C5A059] hover:bg-[#B38C43] rounded-md transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
