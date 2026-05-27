export const WHATSAPP_NUMBERS = {
  primary: '+254703193721',
  secondary: '+254794511771',
};

export const EMAIL = 'mojakwamojatours@gmail.com';

export const HERO_SLIDES = [
  {
    image: 'https://images.pexels.com/photos/37475788/pexels-photo-37475788.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920',
    title: 'Where Every Sunrise Tells a Story',
    subtitle: 'Hot air balloons drift silently over the Maasai Mara as dawn paints the savannah in gold',
    location: 'Maasai Mara, Kenya',
  },
  {
    image: 'https://images.pexels.com/photos/33734692/pexels-photo-33734692.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920',
    title: 'Witness the Great Migration',
    subtitle: 'Over a million wildebeest thunder across the Mara in nature\'s greatest spectacle',
    location: 'Maasai Mara, Kenya',
  },
  {
    image: 'https://images.pexels.com/photos/35718707/pexels-photo-35718707.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920',
    title: 'Giants of Amboseli',
    subtitle: 'Elephants roam freely beneath the snow-capped peak of Mount Kilimanjaro',
    location: 'Amboseli National Park',
  },
  {
    image: 'https://images.pexels.com/photos/28388503/pexels-photo-28388503.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920',
    title: 'The African Golden Hour',
    subtitle: 'Ancient acacia silhouettes stand guard as the savannah glows with the last light of day',
    location: 'Kenyan Savannah',
  },
  {
    image: 'https://images.pexels.com/photos/5521696/pexels-photo-5521696.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920',
    title: 'Adventures That Move You',
    subtitle: 'Every game drive is a chapter in your personal African story',
    location: 'Maasai Mara, Kenya',
  },
  {
    image: 'https://images.pexels.com/photos/27742235/pexels-photo-27742235.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920',
    title: 'Where Land Meets Ocean',
    subtitle: 'Kenya\'s pristine coastline offers paradise after the plains',
    location: 'Diani Beach, Kenya',
  },
];

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  duration: string;
  price: string;
  priceNote: string;
  highlights: string[];
  inclusions: string[];
  itinerary: { day: string; title: string; description: string }[];
  images: string[];
  activities: string[];
  accommodation: string;
  bestTime: string;
  groupSize: string;
}

export const DESTINATIONS: Destination[] = [
  {
    id: 'maasai-mara',
    name: 'Maasai Mara Safari',
    tagline: 'The Crown Jewel of African Safari',
    description: 'Lose yourself in the endless golden plains where lions prowl and the Great Migration thunders. The Maasai Mara is not just a destination — it\'s a feeling that stays with you forever.',
    longDescription: 'The Maasai Mara National Reserve is Kenya\'s most celebrated wildlife sanctuary, a vast expanse of rolling grasslands where the drama of the wild unfolds every single day. Here, you\'ll witness the thundering hooves of the Great Migration, the silent stalk of a leopard at dusk, and the tender moments of an elephant family at dawn. The Mara is more than a safari — it\'s the heartbeat of Africa itself.',
    duration: '4 Days / 3 Nights',
    price: 'From $1,450',
    priceNote: 'per person sharing',
    highlights: ['Great Migration viewing', 'Big Five encounters', 'Maasai cultural visit', 'Sundowner experiences', 'Hot air balloon safari (optional)', 'Night game drives'],
    inclusions: ['Park entry fees', 'Professional safari guide', 'Safari vehicle', 'Full board accommodation', 'Airport/hotel transfers', 'Drinking water on safari'],
    itinerary: [
      { day: 'Day 1', title: 'Nairobi to Maasai Mara', description: 'Depart Nairobi early morning, arriving at the Mara in time for an afternoon game drive as the savannah comes alive with golden light.' },
      { day: 'Day 2', title: 'Full Day Safari', description: 'A full day exploring the Mara\'s vast plains. Track the Big Five, witness river crossings, and discover hidden valleys teeming with wildlife.' },
      { day: 'Day 3', title: 'Cultural & Wildlife', description: 'Morning game drive followed by a visit to a Maasai village. Experience traditional dances, learn about ancient customs, and enjoy a spectacular sunset.' },
      { day: 'Day 4', title: 'Final Drive & Return', description: 'An early morning game drive captures the magic of dawn on the savannah. Return to Nairobi with memories of a lifetime.' },
    ],
    images: [
      'https://images.pexels.com/photos/23886628/pexels-photo-23886628.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
      'https://images.pexels.com/photos/31055420/pexels-photo-31055420.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
      'https://images.pexels.com/photos/33720956/pexels-photo-33720956.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
      'https://images.pexels.com/photos/15815055/pexels-photo-15815055.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    ],
    activities: ['Game drives', 'Hot air balloon rides', 'Cultural visits', 'Photography', 'Bird watching', 'Bush walks'],
    accommodation: 'Premium tented camps & safari lodges',
    bestTime: 'July – October (Migration), Year-round',
    groupSize: '2–8 guests',
  },
  {
    id: 'amboseli',
    name: 'Amboseli Explorer',
    tagline: 'In the Shadow of Kilimanjaro',
    description: 'Walk in the footsteps of giants. Amboseli\'s vast plains stretch endlessly beneath Africa\'s highest peak, where elephant herds paint silhouettes against a snow-capped horizon.',
    longDescription: 'Amboseli National Park offers one of Africa\'s most iconic views — large elephant herds crossing the dusty plains with the majestic Mount Kilimanjaro rising dramatically in the background. This is where the air shimmers with heat, where ancient elephants move in timeless processions, and where every photograph becomes a masterpiece painted by nature herself.',
    duration: '3 Days / 2 Nights',
    price: 'From $980',
    priceNote: 'per person sharing',
    highlights: ['Kilimanjaro views', 'Large elephant herds', 'Observation Hill hike', 'Swamp wildlife viewing', 'Cultural encounters', 'Scenic photography'],
    inclusions: ['Park entry fees', 'Professional guide', 'Safari vehicle', 'Full board accommodation', 'Nairobi transfers', 'Drinking water'],
    itinerary: [
      { day: 'Day 1', title: 'Journey to Amboseli', description: 'Drive through rolling Athi Plains to Amboseli. Afternoon game drive with Kilimanjaro\'s snow-capped peak as your backdrop.' },
      { day: 'Day 2', title: 'Full Day Exploration', description: 'Dawn and afternoon game drives through marshes and open plains. Visit Observation Hill for panoramic views of the entire park.' },
      { day: 'Day 3', title: 'Sunrise & Return', description: 'A magical sunrise game drive captures elephants silhouetted against Kilimanjaro before returning to Nairobi.' },
    ],
    images: [
      'https://images.pexels.com/photos/19530816/pexels-photo-19530816.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
      'https://images.pexels.com/photos/19530818/pexels-photo-19530818.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
      'https://images.pexels.com/photos/18960157/pexels-photo-18960157.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    ],
    activities: ['Game drives', 'Observation Hill hike', 'Swamp visits', 'Photography', 'Cultural visits'],
    accommodation: 'Safari lodges with Kilimanjaro views',
    bestTime: 'June – October (dry season)',
    groupSize: '2–8 guests',
  },
  {
    id: 'lake-nakuru',
    name: 'Lake Nakuru Discovery',
    tagline: 'A Jewel in the Rift Valley',
    description: 'Discover the flamingo-painted shores and rhino sanctuaries of Lake Nakuru, nestled in the Great Rift Valley like a precious emerald among ancient hills.',
    longDescription: 'Lake Nakuru National Park is a compact paradise in Kenya\'s Great Rift Valley. Famous for its flocks of flamingos that paint the shoreline pink, it\'s also one of the best places in Kenya to spot both black and white rhinos. The park\'s diverse habitats — from lake shores to rocky cliffs, acacia forests to open grasslands — support an extraordinary variety of wildlife in a breathtaking setting.',
    duration: '2 Days / 1 Night',
    price: 'From $620',
    priceNote: 'per person sharing',
    highlights: ['Flamingo spectacle', 'Rhino sanctuary', 'Baboon Cliff viewpoint', 'Diverse birdlife', 'Scenic lake drives', 'Rift Valley views'],
    inclusions: ['Park entry fees', 'Professional guide', 'Safari vehicle', 'Full board accommodation', 'Nairobi transfers', 'Drinking water'],
    itinerary: [
      { day: 'Day 1', title: 'Into the Rift Valley', description: 'Journey through the escarpment into the Rift Valley. Afternoon game drive along the lake\'s shores, watching flamingos and searching for rhinos.' },
      { day: 'Day 2', title: 'Full Exploration & Return', description: 'Morning drive to Baboon Cliff for stunning panoramic views, then explore the forest zone before returning to Nairobi.' },
    ],
    images: [
      'https://images.pexels.com/photos/33473218/pexels-photo-33473218.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
      'https://images.pexels.com/photos/7564579/pexels-photo-7564579.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
      'https://images.pexels.com/photos/26729466/pexels-photo-26729466.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    ],
    activities: ['Game drives', 'Bird watching', 'Scenic viewpoints', 'Photography', 'Nature walks'],
    accommodation: 'Rift Valley safari lodges',
    bestTime: 'Year-round',
    groupSize: '2–8 guests',
  },
  {
    id: 'diani-beach',
    name: 'Diani Beach Escape',
    tagline: 'Paradise on the Indian Ocean',
    description: 'Let the turquoise waters of the Indian Ocean wash away the dust of the savannah. Diani Beach is Kenya\'s coastal treasure — a place where palm trees sway and time slows down.',
    longDescription: 'Diani Beach consistently ranks among the world\'s best beaches, and one visit explains why. Miles of pristine white sand meet the warm, turquoise waters of the Indian Ocean. Coral reefs teem with marine life just offshore, while palm-lined shores offer the perfect setting for relaxation after an exhilarating safari. It\'s the perfect complement to any Kenya adventure — where the rhythm of the waves replaces the roar of the lion.',
    duration: '4 Days / 3 Nights',
    price: 'From $890',
    priceNote: 'per person sharing',
    highlights: ['White sand beaches', 'Snorkeling & diving', 'Dhow sailing', 'Marine park visits', 'Swahili culture', 'Seafood dining'],
    inclusions: ['Beach resort accommodation', 'Airport transfers', 'Breakfast daily', 'Snorkeling excursion', 'Dhow cruise', 'Beach activities'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival at the Coast', description: 'Transfer to your beachfront resort. Settle in as the Indian Ocean breeze welcomes you to paradise.' },
      { day: 'Day 2', title: 'Ocean Adventures', description: 'Snorkeling in the marine park, kayaking through mangroves, and a traditional dhow sailing experience at sunset.' },
      { day: 'Day 3', title: 'Culture & Relaxation', description: 'Explore Swahili heritage in the old town, enjoy fresh seafood, and relax on pristine white sands.' },
      { day: 'Day 4', title: 'Farewell to the Coast', description: 'A morning beach walk and leisurely breakfast before your transfer.' },
    ],
    images: [
      'https://images.pexels.com/photos/27742235/pexels-photo-27742235.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
      'https://images.pexels.com/photos/20693413/pexels-photo-20693413.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
      'https://images.pexels.com/photos/37476352/pexels-photo-37476352.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    ],
    activities: ['Snorkeling', 'Diving', 'Dhow sailing', 'Beach relaxation', 'Cultural tours', 'Water sports'],
    accommodation: 'Beachfront resort',
    bestTime: 'October – March (dry & warm)',
    groupSize: '2–12 guests',
  },
  {
    id: 'safari-beach-combo',
    name: 'Safari & Beach Combo',
    tagline: 'The Ultimate Kenya Experience',
    description: 'Experience the best of both worlds — the thrill of the safari and the serenity of the coast. This is Kenya at its most extraordinary.',
    longDescription: 'Why choose between the bush and the beach when you can have both? This signature journey takes you from the sweeping plains of the Maasai Mara, where the Big Five roam, to the crystal-clear waters of Diani Beach. It\'s a story that begins with thundering hooves and ends with gentle waves — the ultimate Kenyan adventure that feeds both the soul of the explorer and the spirit of the wanderer.',
    duration: '7 Days / 6 Nights',
    price: 'From $2,380',
    priceNote: 'per person sharing',
    highlights: ['Maasai Mara safari', 'Big Five tracking', 'Diani Beach relaxation', 'Cultural experiences', 'Marine park snorkeling', 'Sunset dhow cruise'],
    inclusions: ['All park fees', 'Professional guide', 'Safari vehicle', 'Full board on safari', 'Beach resort B&B', 'All transfers & domestic flight', 'Snorkeling excursion'],
    itinerary: [
      { day: 'Days 1-2', title: 'Maasai Mara Safari', description: 'Fly into the Mara for two days of incredible game drives across endless plains.' },
      { day: 'Day 3', title: 'Culture & Migration', description: 'Visit a Maasai village and experience the raw beauty of the migration crossing points.' },
      { day: 'Day 4', title: 'Fly to the Coast', description: 'Morning flight from the Mara to the Kenya coast. Arrive at your beach resort by afternoon.' },
      { day: 'Days 5-6', title: 'Beach Paradise', description: 'Snorkeling, dhow sailing, Swahili cultural tours, and pure beach bliss.' },
      { day: 'Day 7', title: 'Departure', description: 'Leisurely morning before your transfer with memories from bush to beach.' },
    ],
    images: [
      'https://images.pexels.com/photos/15994203/pexels-photo-15994203.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
      'https://images.pexels.com/photos/33629231/pexels-photo-33629231.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
      'https://images.pexels.com/photos/28884379/pexels-photo-28884379.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
      'https://images.pexels.com/photos/20501201/pexels-photo-20501201.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    ],
    activities: ['Game drives', 'Bush walks', 'Cultural visits', 'Snorkeling', 'Dhow sailing', 'Beach relaxation'],
    accommodation: 'Safari lodge + Beach resort',
    bestTime: 'July – March',
    groupSize: '2–8 guests',
  },
  {
    id: 'migration-special',
    name: 'Great Migration Special',
    tagline: 'Nature\'s Greatest Spectacle',
    description: 'Join the thundering herds on their ancient journey. The Great Migration is the world\'s most awe-inspiring wildlife event — and you can be part of it.',
    longDescription: 'Every year, over 1.5 million wildebeest, zebra, and gazelle follow ancient instincts on a 1,200-mile circular journey through the Serengeti-Mara ecosystem. The river crossings of the Mara are among the most dramatic wildlife spectacles on Earth — raw, primal, and utterly unforgettable. This carefully timed safari places you in the heart of the migration, with expert guides who know exactly where nature\'s greatest show will unfold.',
    duration: '5 Days / 4 Nights',
    price: 'From $2,100',
    priceNote: 'per person sharing',
    highlights: ['River crossing viewpoints', 'Migration tracking', 'Predator-prey encounters', 'Hot air balloon option', 'Expert migration guides', 'Premium camp positioning'],
    inclusions: ['All park fees', 'Migration specialist guide', 'Safari vehicle', 'Full board accommodation', 'Nairobi transfers', 'Binoculars on loan'],
    itinerary: [
      { day: 'Day 1', title: 'Arrive in the Mara', description: 'Fly or drive to the Mara. Afternoon game drive following fresh migration trails.' },
      { day: 'Day 2', title: 'Migration Tracking', description: 'Full day tracking the herds with our expert migration guide. Position for potential river crossings.' },
      { day: 'Day 3', title: 'River Crossings', description: 'Dawn to dusk at the river crossing points. Witness nature\'s most dramatic moments unfold.' },
      { day: 'Day 4', title: 'Predators & Plains', description: 'Follow the predators that follow the migration — lions, cheetahs, and hyenas in action.' },
      { day: 'Day 5', title: 'Final Dawn & Return', description: 'One last sunrise on the migration plains before returning to Nairobi.' },
    ],
    images: [
      'https://images.pexels.com/photos/30705108/pexels-photo-30705108.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
      'https://images.pexels.com/photos/33650755/pexels-photo-33650755.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
      'https://images.pexels.com/photos/13697474/pexels-photo-13697474.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
      'https://images.pexels.com/photos/29415794/pexels-photo-29415794.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    ],
    activities: ['Migration tracking', 'River crossing viewing', 'Game drives', 'Balloon safari', 'Photography', 'Bush dining'],
    accommodation: 'Migration-positioned tented camps',
    bestTime: 'July – October',
    groupSize: '2–6 guests',
  },
];

export const SAFARI_TIMELINE = [
  {
    time: '5:00 AM',
    title: 'The Wild Awakens',
    description: 'The first pale light creeps across the horizon. Mist hangs low over the savannah like a silk curtain. You hear the distant call of a fish eagle as your guide whispers, "It\'s time." The balloon inflates silently, and within minutes, you\'re floating above a golden world that stretches to eternity. Below, the Mara River winds like a silver ribbon, and the herds begin to stir.',
    image: 'https://images.pexels.com/photos/15994191/pexels-photo-15994191.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
  },
  {
    time: '7:00 AM',
    title: 'Among the Wildlife',
    description: 'The morning light is liquid gold. A pride of lions lounges beneath a lone acacia, their cubs tumbling in the dewy grass. Zebras graze in perfect formation, their stripes shimmering like a living painting. Your safari vehicle moves slowly through the golden grasslands, and suddenly — a cheetah, poised on a termite mound, scanning the plains with laser focus. Your heart pounds.',
    image: 'https://images.pexels.com/photos/20501201/pexels-photo-20501201.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
  },
  {
    time: '1:00 PM',
    title: 'Back at Camp',
    description: 'The midday sun bathes the camp in warm light. You settle into a canvas chair on your private deck, cold drink in hand, as the breeze carries the scent of wild sage and warm earth. The lodge is a sanctuary — elegant linens, handcrafted furniture, and the gentle hum of the African bush. Lunch is served under a shaded veranda: fresh salads, grilled meats, and stories shared with fellow travelers.',
    image: 'https://images.pexels.com/photos/17831034/pexels-photo-17831034.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
  },
  {
    time: '6:30 PM',
    title: 'Sunset Over the Savannah',
    description: 'The sky catches fire. Crimson, amber, and violet streak across the horizon as the sun descends behind a silhouetted acacia. Your guide parks the vehicle on a hilltop, pours sundowners, and for a moment, the world is still. A campfire crackles nearby as stars begin to emerge, and the sounds of the African night begin their ancient symphony. This is the moment you\'ll remember forever.',
    image: 'https://images.pexels.com/photos/31848298/pexels-photo-31848298.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
  },
];

export const REVIEWS = [
  {
    name: 'Sarah & James',
    location: 'London, UK',
    text: 'We had such a wonderful time in the Mara. Our guide knew exactly where to find the lions, and seeing a leopard on our last morning was incredible. The camp was simple but comfortable, and the food was great. Would definitely recommend.',
    rating: 5,
    safari: 'Maasai Mara Safari',
  },
  {
    name: 'Michael C.',
    location: 'Singapore',
    text: 'The personal attention made all the difference. When I mentioned wanting photos of elephants with Kilimanjaro, our guide took us to the perfect spot and waited patiently until the light was right. Small company, big heart.',
    rating: 5,
    safari: 'Amboseli Explorer',
  },
  {
    name: 'Anna & Peter',
    location: 'Munich, Germany',
    text: 'We did safari and beach — best decision. The Mara was exciting and dusty, then Diani was peaceful and beautiful. Everything was well organized. Nice to deal with real people instead of a big corporate agency.',
    rating: 5,
    safari: 'Safari & Beach Combo',
  },
  {
    name: 'Amara J.',
    location: 'Atlanta, USA',
    text: 'Traveled solo and felt completely safe the whole time. Quick responses on WhatsApp, friendly guide, and I saw all the Big Five! The team genuinely cares about making your trip special. Thank you!',
    rating: 5,
    safari: 'Maasai Mara Safari',
  },
];

export function generateWhatsAppLink(params: {
  name?: string;
  destination?: string;
  dates?: string;
  guests?: string;
  requests?: string;
}) {
  const message = `Hello Moja kwa Moja Tours,\n\nI would like to reserve a safari experience.\n\nName: ${params.name || ''}\nDestination: ${params.destination || ''}\nTravel Dates: ${params.dates || ''}\nNumber of Guests: ${params.guests || ''}\nSpecial Requests: ${params.requests || ''}\n\nPlease guide me through the next steps and reservation process.`;
  
  return `https://wa.me/${WHATSAPP_NUMBERS.primary.replace('+', '')}?text=${encodeURIComponent(message)}`;
}
