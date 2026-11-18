export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  description: string;
  enquiryPrompt: string;
  image: string;
  alt: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'airport-transfers',
    index: '01',
    title: 'Airport Transfers',
    description:
      'Convenient private transportation to and from Bandaranaike International Airport and other destinations.',
    enquiryPrompt: 'Airport Transfer (Bandaranaike International Airport)',
    image: '/src/assets/images/fleet_sedan_private_1795019607379.jpg',
    alt: 'Private executive sedan prepared for Sri Lanka airport transfers',
  },
  {
    id: 'private-taxi-services',
    index: '02',
    title: 'Private Taxi Services',
    description:
      'Comfortable private transportation for short and long-distance journeys.',
    enquiryPrompt: 'Private Taxi Service',
    image: '/src/assets/images/about_sri_lanka_journey_1795019606275.jpg',
    alt: 'Scenic palm-lined coastal road in Sri Lanka for private taxi journeys',
  },
  {
    id: 'private-day-tours',
    index: '03',
    title: 'Private Day Tours',
    description:
      "Explore Sri Lanka's attractions with flexible private transportation.",
    enquiryPrompt: 'Private Day Tour',
    image: '/src/assets/images/dest_sigiriya_rock_1795019609217.jpg',
    alt: 'Sigiriya Lion Rock fortress at sunrise for Sri Lanka private day tours',
  },
  {
    id: 'multi-day-tours',
    index: '04',
    title: 'Multi-Day Sri Lanka Tours',
    description:
      'Personalized transportation arrangements for multi-day holidays.',
    enquiryPrompt: 'Multi-Day Sri Lanka Tour',
    image: '/src/assets/images/dest_ella_bridge_1795019608772.jpg',
    alt: 'Nine Arch Bridge in Ella highlands along a multi-day Sri Lanka tour route',
  },
  {
    id: 'hotel-transfers',
    index: '05',
    title: 'Hotel Transfers',
    description:
      'Convenient transfers between hotels, destinations and tourist attractions.',
    enquiryPrompt: 'Hotel-to-Hotel Transfer',
    image: '/src/assets/images/fleet_wagon_private_1795019607588.jpg',
    alt: 'Spacious touring wagon parked at a hillside hotel driveway in Sri Lanka',
  },
  {
    id: 'customized-packages',
    index: '06',
    title: 'Customized Travel Packages',
    description:
      "Flexible travel arrangements based on customers' interests, schedules and requirements.",
    enquiryPrompt: 'Customized Travel Package',
    image: '/src/assets/images/fleet_suv_private_1795019608373.jpg',
    alt: 'Comfortable SUV overlooking Sri Lankan mountain tea estates for custom packages',
  },
];
