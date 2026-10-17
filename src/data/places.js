// ─────────────────────────────────────────────────────────────────────────────
// Every place on the site lives here. To add a place, copy one object and edit it.
//
//  slug        unique id used in the URL (/place/<slug>)
//  category    one of the slugs in categories.js (a place can also list `alsoIn`)
//  lat / lng   map position. Set to null if you are not sure: the place then shows
//              an "Open in Google Maps" button but no pin, so nobody is sent to the
//              wrong spot.
//  approx      true when the pin is only roughly right. Please confirm on the ground.
//  photo       a file on Wikimedia Commons (see src/data/photos.js), or a path to
//              your own image in /public/photos, or null for the drawn placeholder.
//  facts       short label → value pairs shown in a side panel.
//  verify      true when a detail (hours, price, open status) needs checking.
// ─────────────────────────────────────────────────────────────────────────────

export const places = [
  // ───────────── ANCIENT SITES ─────────────
  {
    slug: 'temple-of-jupiter',
    category: 'ancient-sites',
    name: 'Temple of Jupiter',
    arabic: 'معبد جوبيتر',
    short: 'Six columns, about 20 m tall, from the largest temple the Romans ever built.',
    description: [
      'The Temple of Jupiter was the centrepiece of Roman Heliopolis. Fifty-four columns once surrounded it; six still stand, carrying their original carved beam. Each is about 20 metres tall, among the largest columns of the Roman world.',
      'Walk around the base of the temple platform to find the Trilithon: three limestone blocks of about 800 tonnes each, set about seven metres above the ground.',
    ],
    tips: [
      'Come early in the morning or late in the afternoon, when the low sun turns the stone gold.',
      'Look for the carved lion heads that once worked as rain spouts on the fallen beams.',
    ],
    facts: { Era: '1st century AD', Part_of: 'Baalbek temple complex', UNESCO: 'World Heritage Site since 1984' },
    lat: 34.00685, lng: 36.20367, approx: true,
    photo: 'jupiter',
  },
  {
    slug: 'temple-of-bacchus',
    category: 'ancient-sites',
    name: 'Temple of Bacchus',
    arabic: 'معبد باخوس',
    short: 'One of the best-preserved Roman temples anywhere, larger than the Parthenon.',
    description: [
      'Just south of Jupiter stands the Temple of Bacchus, so complete that you can walk inside it. Its walls, columns and much of its carved ceiling are still in place.',
      'Stop at the great doorway and look up: the frame is covered in vines, poppies and figures, and the ceiling around the colonnade is carved with gods and heroes.',
    ],
    tips: [
      'The Baalbeck International Festival has staged concerts among these temples since 1956.',
      'Bring a wide lens: the temple is hard to fit in one frame from inside the complex.',
    ],
    facts: { Era: 'mid-2nd century AD', Part_of: 'Baalbek temple complex' },
    lat: 34.0063, lng: 36.2039, approx: true,
    photo: 'bacchus',
  },
  {
    slug: 'baalbek-temple-complex',
    category: 'ancient-sites',
    name: 'The Temple Complex (Acropolis)',
    arabic: 'قلعة بعلبك',
    short: 'Your ticket covers Jupiter, Bacchus, the Great Court, the Hexagonal Court and a small museum.',
    description: [
      'The temples sit together on a raised acropolis that locals call the Qalaa, or citadel. You enter through the monumental staircase and the Propylaea, cross the six-sided Hexagonal Court, then the vast Great Court with its altars and pools, before reaching the Temple of Jupiter.',
      'A small museum near the exit explains how the site was built and later turned into a fortress.',
    ],
    tips: [
      'Plan 2 to 3 hours, or about 4 if you also visit the quarry.',
      'Licensed guides wait at the entrance. Agree on the price before you start.',
      'Wear good shoes: the paving is uneven and there is little shade in summer.',
    ],
    facts: {
      Entry: 'around $10 (2026 reports)',
      Hours: 'about 9:00–18:00 in summer, 9:00–16:00 in winter',
      Guide: 'around $20 at the gate',
    },
    verify: true,
    lat: 34.0067, lng: 36.2049, approx: true,
    photo: 'bacchus2',
  },
  {
    slug: 'stone-of-the-pregnant-woman',
    category: 'ancient-sites',
    name: 'Stone of the Pregnant Woman',
    arabic: 'حجر الحبلى',
    short: 'A cut stone of about 1,000 tonnes, still lying in the Roman quarry.',
    description: [
      'At the southern edge of town is the Roman quarry where the temple stones were cut. Hajar al-Hibla, the Stone of the Pregnant Woman, lies there at an angle, about 20.5 metres long and roughly 1,000 tonnes. It was never moved.',
      'In 2014 archaeologists found an even larger block beside and beneath it, estimated at about 1,650 tonnes: the largest stone block known from the ancient world.',
    ],
    tips: [
      'Climb onto the stone for the classic photo, and have someone stand at the bottom for scale.',
      'It is a short taxi ride or a 20-minute walk from the temples.',
    ],
    facts: { Length: '≈ 20.5 m', Weight: '≈ 1,000 t', 'Found in 2014': 'a ≈ 1,650 t block beside it' },
    lat: 33.99917, lng: 36.20012,
    photo: 'hibla',
  },
  {
    slug: 'temple-of-venus',
    category: 'ancient-sites',
    alsoIn: ['free'],
    name: 'Temple of Venus',
    arabic: 'معبد فينوس',
    short: 'A small, round temple with curved walls, unlike anything else in the Roman world.',
    description: [
      'Southeast of the main complex stands a little round temple traditionally linked to Venus, probably built around 200 AD. Its walls curve inward between the columns, giving it an almost scalloped outline.',
      'In Byzantine times it became a church dedicated to Saint Barbara.',
    ],
    tips: ['It stands apart from the main complex, so you can see it from the road outside.'],
    facts: { Era: 'about 200 AD', Also_called: 'the Round Temple' },
    lat: 34.006016, lng: 36.206268,
    photo: 'venus',
  },

  // ───────────── HIDDEN GEMS ─────────────
  {
    slug: 'umayyad-mosque',
    category: 'hidden-gems',
    alsoIn: ['free'],
    name: 'Umayyad Mosque',
    arabic: 'الجامع الأموي',
    short: 'An 8th-century mosque built with columns taken from the Roman ruins.',
    description: [
      'Built around 714–715 AD under the Umayyad caliph al-Walid, this mosque sits just outside the temple complex. Its builders reused stones and columns from the Roman ruins, so Roman capitals now stand in an early Islamic courtyard.',
      'It was damaged by a flood in 1318 and long left in ruins, then restored between 1996 and 1998. Look for its square, tower-like minaret.',
    ],
    tips: ['It is an active mosque: dress modestly and avoid visiting during prayer times.'],
    facts: { Built: 'about 714–715 AD', Restored: '1996–1998' },
    lat: 34.0059, lng: 36.2058, approx: true,
    photo: 'mosque',
  },
  {
    slug: 'ras-al-ain',
    category: 'hidden-gems',
    alsoIn: ['free'],
    name: 'Ras al-Ain Spring',
    arabic: 'رأس العين',
    short: 'The spring that fed Roman Baalbek, now a shady public garden.',
    description: [
      "Ras al-Ain is the spring at the head of Baalbek's water supply. In Roman times it was a sanctuary, with a spring basin, a temple built out over the water and a nymphaeum.",
      'Today it is a public garden where families come in the evening, with cafés and restaurants around the water.',
    ],
    tips: ['Come at sunset, when the garden fills with local families and the air cools down.'],
    facts: { Roman_remains: 'spring basin, temple and nymphaeum' },
    lat: 33.998341, lng: 36.21722,
    photo: null,
  },
  {
    slug: 'temple-of-mercury',
    category: 'hidden-gems',
    name: 'Temple of Mercury',
    arabic: 'معبد ميركوري',
    short: 'A Roman stairway cut into Sheikh Abdallah hill, high above the city.',
    description: [
      'On Sheikh Abdallah hill, about 1,250 metres above sea level, stood a temple to Mercury. Only the flight of steps cut into the hillside survives, but the climb rewards you with a wide view over Baalbek and the Bekaa plain.',
      'Roman coins of the emperor Philip the Arab show the sanctuary, which helped archaeologists work out how it looked.',
    ],
    tips: [
      'You can drive most of the way, then walk up.',
      'The hill is next to an army barracks: do not photograph military buildings, and ask before taking pictures.',
    ],
    facts: { Height: 'about 1,250 m above sea level' },
    lat: 34.002758, lng: 36.208603,
    photo: null,
  },
  {
    slug: 'qubbat-duris',
    category: 'hidden-gems',
    name: 'Qubbat Duris',
    arabic: 'قبة دورس',
    short: 'A 13th-century shrine held up by Roman columns, one of them upside down.',
    description: [
      'In the village of Duris, about 3 km southwest of Baalbek, stands a small domed shrine from 1243 AD. Its builders took columns from the Roman ruins and set them up in a ring, in no particular order. Look closely: one is upside down.',
      'An ancient sarcophagus inside was stood on end and used as the mihrab, the niche that shows the direction of prayer.',
    ],
    tips: ['Combine it with lunch at one of the garden restaurants in Duris.'],
    facts: { Built: '1243 AD', Distance: 'about 3 km southwest of Baalbek' },
    lat: 33.98333, lng: 36.18333, approx: true,
    photo: null,
  },

  // ───────────── FREE ─────────────
  {
    slug: 'sfiha-bakery-walk',
    category: 'free',
    name: 'Watch sfiha being made',
    arabic: 'صفيحة بعلبكية',
    short: "Baalbek's own meat pastry: the butcher minces, the baker folds and bakes.",
    description: [
      'Sfiha Baalbakiyeh is the dish the city is known for: small, square, open pastries filled with spiced minced meat, tomato and onion. Locals buy the meat from the butcher and take it to the baker, who shapes and bakes it while you wait.',
      'Watching it is free; eating a plate costs very little.',
    ],
    tips: ['Many shops and bakeries close on Fridays, so plan your sfiha for another day.'],
    facts: { Eat_with: 'labneh, yoghurt and fresh vegetables' },
    lat: null, lng: null,
    photo: null,
  },

  // ───────────── EAT ─────────────
  {
    slug: 'lakkis-farm',
    category: 'eat',
    name: 'Lakkis Farm',
    arabic: 'مزرعة لقيس',
    short: 'Farm-to-table Lebanese food at the entrance to the city, popular with locals.',
    description: [
      'Lakkis Farm cooks with produce from its own farm in the Bekaa Valley. It is one of the best-known places in the area for sfiha served with labneh and a spread of mezze.',
      'It gets busy, especially on weekends, so book ahead.',
    ],
    facts: { Area: 'Douris, at the city entrance', Try: 'sfiha with labneh' },
    lat: null, lng: null,
    photo: null,
  },
  {
    slug: 'lakkis-garden',
    category: 'eat',
    name: 'Lakkis Garden',
    arabic: 'حديقة لقيس',
    short: 'A calm garden restaurant in Duris.',
    description: ['A quieter sister to Lakkis Farm, set in a garden in Duris. Good for a long, slow lunch after visiting Qubbat Duris.'],
    facts: { Area: 'Douris' },
    lat: 33.99346, lng: 36.17598,
    photo: null,
  },
  {
    slug: 'baalbek-palace',
    category: 'eat',
    name: 'Baalbek Palace',
    arabic: 'قصر بعلبك',
    short: 'Traditional Lebanese cooking with generous mezze and tender grilled meat.',
    description: [
      'A traditional Lebanese restaurant known for large mezze spreads, grills and its sfiha.',
      'No alcohol is served, but there are fresh juices and other drinks.',
    ],
    facts: { Style: 'traditional Lebanese', Alcohol: 'not served' },
    lat: 34.00101, lng: 36.2137,
    photo: null,
  },
  {
    slug: 'al-ajami',
    category: 'eat',
    name: 'Al Ajami',
    arabic: 'مطعم العجمي',
    short: 'A cosy, old-style restaurant with a long menu and plenty for vegetarians.',
    description: [
      'Al Ajami serves classic Lebanese dishes in a warm, oriental setting: cold starters like hummus, labneh and tabbouleh, hot starters like spinach pies, falafel and vine leaves, then shish tawook or shawarma.',
    ],
    facts: { Good_for: 'vegetarians, families' },
    lat: 34.00511, lng: 36.20814,
    photo: null,
  },
  {
    slug: 'tavern-cezar',
    category: 'eat',
    name: 'Tavern Cezar',
    arabic: 'تافرن سيزار',
    short: 'Budget-friendly plates right opposite the temple entrance.',
    description: ['Handy for a quick, filling meal before or after the ruins, with generous portions at low prices.'],
    facts: { Area: 'opposite the temple entrance' },
    lat: null, lng: null,
    photo: null,
  },
  {
    slug: 'baytna',
    category: 'eat',
    name: 'Baytna Restaurant & Café',
    arabic: 'بيتنا',
    short: 'Mediterranean café food with vegetarian options.',
    description: ['A relaxed café-restaurant with lighter Mediterranean dishes and several vegetarian plates.'],
    facts: { Style: 'Mediterranean, café' },
    lat: 34.00176, lng: 36.21277,
    photo: null,
  },
  {
    slug: 'casino-ras-al-ain',
    category: 'eat',
    name: 'Casino Ras Al Ain',
    arabic: 'كازينو رأس العين',
    short: 'A lively Lebanese restaurant by the spring at Ras al-Ain.',
    description: ['Eat by the water at Ras al-Ain, with a wide Lebanese menu and a busy, cheerful atmosphere in the evenings.'],
    facts: { Area: 'Ras al-Ain' },
    lat: 33.99884, lng: 36.21648,
    photo: null,
  },
  {
    slug: 'sama-baalbeck',
    category: 'eat',
    name: 'Sama Baalbeck',
    arabic: 'سما بعلبك',
    short: 'Friendly service and a terrace by a small park.',
    description: [
      'A cosy restaurant with an outdoor terrace across the street, facing a small park that comes alive in the evenings with activities for children.',
    ],
    facts: { Area: 'Ras al-Ain', Good_for: 'families' },
    lat: null, lng: null,
    photo: null,
  },

  // ───────────── STAY ─────────────
  {
    slug: 'palmyra-hotel',
    category: 'stay',
    name: 'Palmyra Hotel',
    arabic: 'فندق بالميرا',
    short: 'A legendary hotel from 1874, right across the road from the temples.',
    description: [
      'Opened in 1874, the Palmyra is one of the oldest hotels in the Middle East and sits directly opposite the ruins. Its guest book includes Charles de Gaulle, Albert Einstein, Jean Cocteau, Ella Fitzgerald, Umm Kulthum and Fairuz.',
      'The building was damaged in an airstrike in November 2024. Check that it is open and taking guests before you plan around it.',
    ],
    tips: ['Even if you are not staying, ask whether you can have a drink on the terrace facing the temples.'],
    facts: { Opened: '1874', Location: 'opposite the temple entrance' },
    verify: true,
    lat: 34.0066, lng: 36.2072, approx: true,
    photo: 'palmyra',
  },
  {
    slug: 'lannexe',
    category: 'stay',
    name: "L'Annexe",
    arabic: 'لانكس',
    short: 'A five-room guesthouse in a 19th-century stone house, run by the Palmyra family.',
    description: [
      "A converted 19th-century Lebanese stone house with arched windows, colourful fabrics and a shaded garden patio. It belongs to the owners of the Palmyra Hotel, and dinner is served next door at the Palmyra.",
    ],
    facts: { Rooms: '5, each with a bathroom', Included: 'breakfast and Wi-Fi' },
    verify: true,
    lat: null, lng: null,
    photo: null,
  },
  {
    slug: 'hotel-jupiter',
    category: 'stay',
    name: 'Hotel Jupiter',
    arabic: 'فندق جوبيتر',
    short: 'A simple three-star hotel in town.',
    description: ['A straightforward, budget-friendly hotel for travellers who want to stay overnight and see the temples at opening time.'],
    facts: { Category: '3 stars' },
    verify: true,
    lat: null, lng: null,
    photo: null,
  },

  // ───────────── ESSENTIALS ─────────────
  {
    slug: 'dar-al-amal-hospital',
    category: 'essentials',
    name: 'Dar Al Amal University Hospital',
    arabic: 'مستشفى دار الأمل الجامعي',
    short: 'A major hospital in Douris, at the southern entrance to Baalbek.',
    description: ['One of the main hospitals serving Baalbek and the surrounding villages.'],
    facts: { Area: 'Douris' },
    lat: null, lng: null,
    photo: null,
  },
  {
    slug: 'baalbek-governmental-hospital',
    category: 'essentials',
    name: 'Baalbek Governmental Hospital',
    arabic: 'مستشفى بعلبك الحكومي',
    short: 'The public hospital of Baalbek.',
    description: ['The state hospital for the city and district of Baalbek.'],
    facts: { Type: 'public hospital' },
    lat: null, lng: null,
    photo: null,
  },
  {
    slug: 'al-murtada-hospital',
    category: 'essentials',
    name: 'Al Murtada Hospital',
    arabic: 'مستشفى المرتضى',
    short: 'A private hospital in Baalbek.',
    description: ['A private hospital serving the city.'],
    facts: { Type: 'private hospital' },
    lat: null, lng: null,
    photo: null,
  },
]

export const placesIn = (slug) =>
  places.filter((p) => p.category === slug || p.alsoIn?.includes(slug))

export const placeBySlug = (slug) => places.find((p) => p.slug === slug)

export const mapsLink = (p) =>
  p.lat != null
    ? `https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${p.name} Baalbek Lebanon`)}`

export const reviewsLink = (p) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${p.name} Baalbek Lebanon`)}`
