/**
 * Services established from Charkova Irina's portfolio and business profile.
 * Note: Real pricing is strictly custom/upon inquiry; no fictional prices are invented.
 */

export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  idealFor: string;
  durationEstimate: string;
  features: string[];
  imageUrl: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "bridal-makeup",
    name: "Bridal Artistry & Preview",
    shortDesc: "Enduring, photo-ready wedding makeup crafted to withstand emotion, movement, and changing lighting.",
    fullDesc: "A couture bridal service tailored to your unique facial geometry and personal wedding aesthetic. Includes thorough skin prep, luxury hydrating base, personalized eye architecture, custom lash clusters, and a long-wear sealing technique that remains flawless from early morning preparations to the final reception dance.",
    idealFor: "Brides, engagement sessions, civil ceremonies, and rehearsal dinners.",
    durationEstimate: "Approx. 90 mins",
    features: [
      "Targeted luxury skincare prep & depuffing",
      "Camera-tested foundation & bespoke tone matching",
      "Custom individual or strip lash application",
      "Long-wear, humidity & tear-resistant setting",
      "Touch-up sample kit for the wedding day",
    ],
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1791326363/783655170_18631117225052748_7769673485366087864_n.jpg",
  },
  {
    id: "red-carpet-glam",
    name: "Red Carpet & Evening Glam",
    shortDesc: "High-impact, sultry evening beauty designed for galas, red carpet arrivals, and upscale parties.",
    fullDesc: "An iconic, dimensional evening look featuring deep smokey gradients, shimmering metallic pigments, sculpted cheekbones, and velvet or glossy statement lips. Engineered for high flash photography and low ambient evening lighting.",
    idealFor: "Charity galas, premieres, black-tie dinners, and red carpet events.",
    durationEstimate: "Approx. 75 mins",
    features: [
      "High-definition sculpted contouring",
      "Intricate eye artistry (smokey, winged, or cut-crease)",
      "Premium dimensional lashes",
      "Long-lasting flash-proof setting powder",
      "Transfer-resistant lip formulation",
    ],
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1791326365/827982530_18641844190052748_4709985072612395187_n.jpg",
  },
  {
    id: "editorial-photoshoot",
    name: "Editorial & Photoshoot Makeup",
    shortDesc: "Precision makeup artistry calibrated for studio strobe lighting, fashion lookbooks, and campaigns.",
    fullDesc: "Designed in collaboration with photographers, creative directors, and models. Focuses on immaculate skin finish, pristine symmetry, creative texture play, and camera-ready precision that minimizes post-production retouching.",
    idealFor: "Fashion lookbooks, commercial campaigns, model portfolios, and magazine spreads.",
    durationEstimate: "Half-day / Full-day or per look",
    features: [
      "Lighting-calibrated skin texture (dewy, satin, or velvet matte)",
      "Precision eyeliner & brow architecture",
      "On-set readiness and rapid variation transitions",
      "Hygienic, pro-grade sanitization standards",
      "Close coordination with photography lighting",
    ],
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1791326365/top-mistakes-freelance-makeup-artists-make-lyrabeauty.jpg-3-769x1024.jpg",
  },
  {
    id: "soft-glam",
    name: "Soft Glam & Natural Glow",
    shortDesc: "Luminous, polished beauty that enhances natural facial features without overwhelming them.",
    fullDesc: "The pinnacle of effortless sophistication. Features glowing skin-first coverage, warm neutral hues, delicately diffused eye definition, fluffy natural brows, and fresh hydrated lips. Gives the illusion of naturally perfected radiance.",
    idealFor: "Brunch events, daytime celebrations, professional headshots, and anniversaries.",
    durationEstimate: "Approx. 60 mins",
    features: [
      "Lightweight serum foundation & radiant concealers",
      "Natural flush cream blushes & subtle bronzing",
      "Softly defined lash line & natural lash accent",
      "Hydrated satin or gloss lip finish",
      "Weightless setting mist",
    ],
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1791326357/671027703_18589960198052748_7307605928428518599_n.jpg",
  },
  {
    id: "special-occasion",
    name: "Special Occasion & Milestone Events",
    shortDesc: "Tailored elegance for birthdays, anniversaries, award nights, and milestone celebrations.",
    fullDesc: "Customized to your outfit, event theme, and comfort level. Whether you prefer classic understated beauty or bold dramatic sparkle, Charkova Irina customizes colors and finishes to ensure you feel radiant and confident throughout your special day.",
    idealFor: "Birthdays, anniversary celebrations, graduations, and private parties.",
    durationEstimate: "Approx. 60–75 mins",
    features: [
      "Custom color consultation matched to attire",
      "Flawless complexion perfecting",
      "Complementary lash application",
      "All-day wear guarantee",
    ],
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1791326362/asdfghjkwertuio23456789sdfghjxcvbn34567890.jpg",
  },
  {
    id: "on-location-touchups",
    name: "On-Location VIP Touch-Ups",
    shortDesc: "Dedicated artist presence on-site for wardrobe changes, climate adjustments, and ceremony-to-party transitions.",
    fullDesc: "Reserve Charkova Irina to remain on-location during your photoshoot, wedding ceremony, or gala. Provides continuous powder touch-ups, lipstick refreshes, lash monitoring, and seamless day-to-night look transformations.",
    idealFor: "Weddings (ceremony through reception), multi-look studio shoots, and full-day productions.",
    durationEstimate: "Hourly booking upon request",
    features: [
      "Continuous on-site standby support",
      "Rapid day-to-night look transition",
      "Sweat, shine & humidity management",
      "Complete tranquility and VIP personal attention",
    ],
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1791326358/671227988_18589960210052748_7554501956511551983_n.jpg",
  },
];
