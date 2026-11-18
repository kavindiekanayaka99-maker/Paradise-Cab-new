export const BUSINESS_INFO = {
  name: 'PARADISE CAB',
  tagline: 'Discover Sri Lanka in Comfort',
  registrationNote: 'Registered Sri Lankan Rent a Car and Taxi Service',
  whatsappDisplay: '+94 77 387 9691',
  whatsappNumberRaw: '94773879691',
  whatsappUrl: 'https://wa.me/94773879691',
  email: 'paradisecab01@gmail.com',
  emailHref: 'mailto:paradisecab01@gmail.com',
  heroImage: '/src/assets/images/hero_sri_lanka_scenic_1795019605826.jpg',
  aboutImage: '/src/assets/images/about_sri_lanka_journey_1795019606275.jpg',
} as const;

export function buildWhatsAppLink(message?: string): string {
  if (!message) {
    return BUSINESS_INFO.whatsappUrl;
  }
  return `${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
