export type VehicleCategory = 'Sedan' | 'Hatchback' | 'Wagon' | 'SUV';

export interface FleetVehicle {
  id: string;
  category: VehicleCategory;
  idealFor: string;
  image: string;
  alt: string;
  passengerCapacity: string;
  largeSuitcaseCapacity: string;
  smallSuitcaseCapacity: string;
  features: string[];
}

/**
 * OWNER-EDITABLE FLEET CONFIGURATION
 * Update capacities, photographs, or comfort features below at any time.
 * Capacities reflect general category guidance rather than fixed model claims.
 */
export const FLEET_VEHICLES: FleetVehicle[] = [
  {
    id: 'sedan',
    category: 'Sedan',
    idealFor: 'Solo travellers, couples, and direct airport or city transfers',
    image: '/src/assets/images/fleet_sedan_private_1795019607379.jpg',
    alt: 'Executive white Sedan prepared for private passenger transport in Sri Lanka',
    passengerCapacity: 'Up to 3 passengers',
    largeSuitcaseCapacity: 'Up to 2 large suitcases',
    smallSuitcaseCapacity: 'Up to 2 small suitcases',
    features: [
      'Air-conditioned cabin',
      'Quiet highway ride comfort',
      'Private chauffeur-driven travel',
      'Clean, spacious rear legroom',
    ],
  },
  {
    id: 'hatchback',
    category: 'Hatchback',
    idealFor: 'Light-packing travellers, short rides, and flexible day trips',
    image: '/src/assets/images/fleet_hatchback_private_1795019606852.jpg',
    alt: 'Silver compact Hatchback parked alongside a tropical garden pathway in Sri Lanka',
    passengerCapacity: 'Up to 3 passengers',
    largeSuitcaseCapacity: '1 large suitcase',
    smallSuitcaseCapacity: 'Up to 2 small suitcases',
    features: [
      'Air-conditioned interior',
      'Nimble city & coastal road handling',
      'Private chauffeur-driven travel',
      'Foldable rear luggage flexibility',
    ],
  },
  {
    id: 'wagon',
    category: 'Wagon',
    idealFor: 'Families and multi-day tours requiring extra luggage space',
    image: '/src/assets/images/fleet_wagon_private_1795019607588.jpg',
    alt: 'Metallic grey touring Wagon parked at a hillside villa in Sri Lanka',
    passengerCapacity: 'Up to 4 passengers',
    largeSuitcaseCapacity: 'Up to 3–4 large suitcases',
    smallSuitcaseCapacity: 'Up to 3 small suitcases',
    features: [
      'Air-conditioned cabin',
      'Extended rear cargo bay',
      'Private chauffeur-driven travel',
      'Comfortable long-distance seating',
    ],
  },
  {
    id: 'suv',
    category: 'SUV',
    idealFor: 'Hill-country routes, families, and elevated touring comfort',
    image: '/src/assets/images/fleet_suv_private_1795019608373.jpg',
    alt: 'Charcoal luxury SUV overlooking emerald Sri Lankan mountain tea estates',
    passengerCapacity: 'Up to 4–5 passengers',
    largeSuitcaseCapacity: 'Up to 4 large suitcases',
    smallSuitcaseCapacity: 'Up to 3 small suitcases',
    features: [
      'Dual-zone climate comfort',
      'Elevated seating & hill-country poise',
      'Private chauffeur-driven travel',
      'Generous cabin & luggage room',
    ],
  },
];
