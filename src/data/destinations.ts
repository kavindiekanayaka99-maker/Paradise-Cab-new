export interface DestinationItem {
  id: string;
  name: string;
  region: string;
  shortDescription: string;
  overview: string;
  highlights: string[];
  image: string;
  alt: string;
}

/**
 * OWNER-EDITABLE DESTINATIONS GALLERY
 * Add, reorder, or update destination descriptions and photos here.
 */
export const DESTINATIONS: DestinationItem[] = [
  {
    id: 'sigiriya',
    name: 'Sigiriya',
    region: 'Cultural Triangle · Central North',
    shortDescription:
      'Ancient rock fortress surrounded by royal water gardens, frescoes, and sweeping jungle views.',
    overview:
      'Rising dramatically above the surrounding forest canopy, Sigiriya is one of Sri Lanka’s most celebrated heritage landmarks. Travel comfortably from the airport, Colombo, or Kandy in your private vehicle with flexible morning arrival for cooler climbing hours.',
    highlights: [
      'UNESCO-listed 5th-century Lion Rock citadel & water gardens',
      'Optional nearby stop at Pidurangala Rock or Dambulla Cave Temple',
      'Direct private transfers from Colombo Airport, Negombo, or Kandy',
    ],
    image: '/src/assets/images/dest_sigiriya_rock_1795019609217.jpg',
    alt: 'Sigiriya Lion Rock fortress rising above lush jungle and water gardens at sunrise in Sri Lanka',
  },
  {
    id: 'ella',
    name: 'Ella',
    region: 'Uva Highlands · Hill Country',
    shortDescription:
      'Misty mountain valleys, tea-covered ridges, waterfalls, and the iconic Nine Arch Bridge.',
    overview:
      'Set high in Sri Lanka’s scenic hill country, Ella blends cool mountain air with relaxed hillside hospitality. Enjoy private door-to-door transport along winding highland passes with convenient stops at scenic viewpoints and waterfalls.',
    highlights: [
      'Nine Arch Bridge, Little Adam’s Peak, and Ravana Falls',
      'Flexible luggage transport while you ride the scenic Kandy–Ella train',
      'Seamless onward connections toward Yala, Udawalawe, or the south coast',
    ],
    image: '/src/assets/images/dest_ella_bridge_1795019608772.jpg',
    alt: 'Nine Arch Bridge in Ella surrounded by highland tea estates and misty hills in Sri Lanka',
  },
  {
    id: 'kandy',
    name: 'Kandy',
    region: 'Central Province · Cultural Capital',
    shortDescription:
      'Hillside lake city home to the sacred Temple of the Tooth Relic and botanical gardens.',
    overview:
      'Nestled around a serene central lake and misty green hills, Kandy preserves Sri Lanka’s living royal and cultural traditions. Travel directly from the airport or explore local artisan villages, spice gardens, and botanical paths at your own pace.',
    highlights: [
      'Temple of the Sacred Tooth Relic & Kandy Lake promenade',
      'Royal Botanic Gardens at Peradeniya',
      'Gateway stop between the Cultural Triangle and Tea Country',
    ],
    image: '/src/assets/images/dest_kandy_lake_1795019609736.jpg',
    alt: 'Kandy Lake and the Temple of the Sacred Tooth Relic waterfront illuminated at dusk in Sri Lanka',
  },
  {
    id: 'nuwara-eliya',
    name: 'Nuwara Eliya',
    region: 'Central Highlands · Tea Country',
    shortDescription:
      'Cool emerald tea plantations, misty peaks, colonial bungalows, and scenic highland lakes.',
    overview:
      'Known affectionately as Little England, Nuwara Eliya invites travellers into rolling Ceylon tea country, crisp mountain breezes, and waterfall-lined valleys. Private transportation makes touring tea factories, Gregory Lake, and Horton Plains effortless.',
    highlights: [
      'Working Ceylon tea estate tours and factory tastings',
      'Gregory Lake, Victoria Park, and Ramboda Falls route stops',
      'Comfortable hill-country driving with flexible sightseeing pauses',
    ],
    image: '/src/assets/images/dest_nuwara_eliya_1795019608945.jpg',
    alt: 'Rolling emerald tea plantations shrouded in morning mist in Nuwara Eliya, Sri Lanka',
  },
  {
    id: 'galle',
    name: 'Galle',
    region: 'Southern Province · Historic Coast',
    shortDescription:
      '17th-century coastal Dutch Fort with cobbled streets, boutique cafés, and sunset ramparts.',
    overview:
      'Galle Fort pairs centuries-old maritime ramparts with sunlit courtyards, independent galleries, and oceanfront walks. Arrive easily via the Southern Expressway from Colombo or Bandaranaike International Airport.',
    highlights: [
      'Galle Dutch Fort ramparts and iconic white lighthouse',
      'Artisan boutiques, cafés, and heritage architecture walks',
      'Fast expressway transfers from Colombo Airport or nearby coastal villas',
    ],
    image: '/src/assets/images/dest_galle_fort_1795019610688.jpg',
    alt: 'Historic Galle Dutch Fort lighthouse and stone ocean ramparts at sunset in Sri Lanka',
  },
  {
    id: 'mirissa',
    name: 'Mirissa',
    region: 'Southern Coast · Tropical Bay',
    shortDescription:
      'Palm-fringed crescent bay renowned for ocean horizons, relaxed beaches, and coastal sunrises.',
    overview:
      'Mirissa offers warm Indian Ocean waters, Coconut Tree Hill viewpoints, and laid-back beachside dining. Whether transferring straight from the airport or touring the southern coastline, PARADISE CAB brings you right to your beachfront hotel.',
    highlights: [
      'Coconut Tree Hill & Secret Beach coastal viewpoints',
      'Seasonal marine & whale watching departure harbour access',
      'Easy coastal hops to Weligama, Ahangama, and Galle',
    ],
    image: '/src/assets/images/dest_mirissa_bay_1795019610971.jpg',
    alt: 'Palm-topped Coconut Tree Hill overlooking Mirissa crescent bay at golden hour in Sri Lanka',
  },
  {
    id: 'yala',
    name: 'Yala',
    region: 'Southeast Coast · Wildlife Wilderness',
    shortDescription:
      'Sri Lanka’s iconic dry-zone national park of lagoons, rocky outcrops, and diverse wildlife.',
    overview:
      'Stretching along the southeast coast, Yala National Park brings together scrub forests, coastal lagoons, and dramatic granite formations. We arrange comfortable private transfers directly to your Tissamaharama or Yala eco-lodge.',
    highlights: [
      'Direct private transport to Yala & Tissamaharama safari lodges',
      'Convenient route pairing with Ella, Tangalle, or Mirissa',
      'Coordinated pickup schedules tailored to early-morning safari departures',
    ],
    image: '/src/assets/images/dest_yala_safari_1795019611013.jpg',
    alt: 'Yala National Park rocky outcrops and calm lagoon with birds at golden hour in Sri Lanka',
  },
  {
    id: 'udawalawe',
    name: 'Udawalawe',
    region: 'Sabaragamuwa & Uva · Savanna Park',
    shortDescription:
      'Expansive golden grasslands and reservoir plains famed for wild Asian elephant herds.',
    overview:
      'Set against a sweeping mountain backdrop, Udawalawe National Park offers open-horizon wildlife viewing and peaceful lakeside stays. It sits naturally along the scenic route connecting the hill country with the southern beaches.',
    highlights: [
      'Direct private drops at Udawalawe lodges and Elephant Transit Home',
      'Ideal midway stop between Ella highlands and the south coast',
      'Spacious luggage-ready vehicles for onward coastal or airport travel',
    ],
    image: '/src/assets/images/dest_udawalawe_elephants_1795019612179.jpg',
    alt: 'Family of wild Asian elephants crossing golden grasslands in Udawalawe National Park, Sri Lanka',
  },
  {
    id: 'bentota',
    name: 'Bentota',
    region: 'Southwest Coast · Beach & Lagoon',
    shortDescription:
      'Golden sandy shoreline bordered by tranquil river lagoons and palm-shaded luxury resorts.',
    overview:
      'Just south of Colombo via the coastal expressway, Bentota is a serene retreat of broad golden beaches, river safaris, and Geoffrey Bawa architectural gardens. Enjoy smooth, restful transfers straight from arrivals.',
    highlights: [
      'Bentota golden beach and calm Bentota Ganga river lagoon',
      'Brief Garden & Lunuganga estate cultural visits nearby',
      'Quick private transfers from Bandaranaike International Airport',
    ],
    image: '/src/assets/images/dest_bentota_beach_1795019611644.jpg',
    alt: 'Bentota golden sandy coastline and calm palm-lined river lagoon in Sri Lanka',
  },
  {
    id: 'anuradhapura',
    name: 'Anuradhapura',
    region: 'North Central · Sacred Ancient City',
    shortDescription:
      'Timeless sacred capital of towering white stupas, ancient reservoirs, and heritage monasteries.',
    overview:
      'One of the oldest continuously inhabited cities in the world, Anuradhapura offers monumental white dagobas, serene monastic parks, and the sacred Jaya Sri Maha Bodhi. Private transport allows unhurried exploration across its expansive heritage grounds.',
    highlights: [
      'Ruwanwelisaya, Jetavanaramaya, and sacred Jaya Sri Maha Bodhi',
      'Mihintale hilltop views and ancient man-made reservoirs',
      'Private multi-day or day-trip routing through Sri Lanka’s Cultural Triangle',
    ],
    image: '/src/assets/images/dest_anuradhapura_stupa_1795019612259.jpg',
    alt: 'Ancient white stupa rising above lush green trees in Anuradhapura, Sri Lanka',
  },
];
