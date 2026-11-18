import {BUSINESS_INFO, buildWhatsAppLink} from '../data/business';

export function FloatingWhatsApp() {
  const href = buildWhatsAppLink(
    'Hello PARADISE CAB, I would like to enquire about private transportation in Sri Lanka.'
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${BUSINESS_INFO.name} on WhatsApp (${BUSINESS_INFO.whatsappDisplay})`}
      title={`Chat on WhatsApp: ${BUSINESS_INFO.whatsappDisplay}`}
      className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#133024]"
    >
      <svg
        viewBox="0 0 32 32"
        className="w-7 h-7 fill-current"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M16.004 3.2C8.94 3.2 3.2 8.94 3.2 16.004c0 2.26.59 4.467 1.71 6.41L3.09 28.8l6.544-1.716a12.74 12.74 0 0 0 6.37 1.703h.005c7.06 0 12.804-5.743 12.807-12.804.002-3.42-1.33-6.636-3.748-9.055A12.72 12.72 0 0 0 16.004 3.2Zm0 23.43h-.004a10.6 10.6 0 0 1-5.407-1.48l-.388-.23-3.883 1.018 1.036-3.786-.252-.402a10.59 10.59 0 0 1-1.622-5.647c0-5.858 4.765-10.623 10.625-10.623 2.838 0 5.504 1.106 7.51 3.112a10.556 10.556 0 0 1 3.11 7.514c-.003 5.86-4.768 10.624-10.625 10.624Zm5.825-7.957c-.32-.16-1.89-.932-2.182-1.038-.293-.107-.506-.16-.72.16-.212.32-.824 1.038-1.01 1.25-.186.214-.372.24-.692.08-.32-.16-1.348-.497-2.567-1.584-.95-.847-1.59-1.893-1.777-2.212-.186-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.186.212-.32.32-.532.105-.213.052-.4-.027-.56-.08-.16-.72-1.732-.985-2.37-.26-.624-.524-.54-.72-.55l-.613-.01c-.213 0-.56.08-.852.4-.293.32-1.118 1.092-1.118 2.663 0 1.57 1.145 3.088 1.304 3.301.16.213 2.252 3.438 5.456 4.82.762.33 1.356.526 1.82.673.765.243 1.462.208 2.012.126.614-.092 1.89-.772 2.156-1.518.266-.746.266-1.385.186-1.518-.08-.133-.293-.213-.612-.373Z" />
      </svg>
    </a>
  );
}
