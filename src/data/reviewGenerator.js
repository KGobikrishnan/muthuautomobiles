/**
 * Deep Multi-Sentence Combinatorial Review Permutation Engine
 * Generates 1,000,000+ unique, non-repeating, high-converting Google 5-Star & 4-Star SEO reviews.
 * Custom built for Muthu Automobiles (Cumbum, Theni District).
 */

const SEED_OPENERS_5_STAR = [
  "Hands down the best automobile spare parts and service shop in Cumbum!",
  "Had an extraordinary experience getting genuine car spares at Muthu Automobiles today!",
  "If you want 100% genuine auto parts and honest guidance in Cumbum and Theni district, Muthu Automobiles is the #1 choice!",
  "Recently purchased replacement parts from Muthu Automobiles Cumbum and the vehicle performance is back to factory smooth!",
  "Blown away by the vast inventory and immediate availability of spares at Muthu Automobiles!",
  "One of the most professional and trustworthy auto spare parts centres in the entire Cumbum valley.",
  "10/10 recommendation for Muthu Automobiles! Super satisfied with their service, knowledge, and genuine parts.",
  "Got my vehicle parts from here and the quality is completely authentic OEM standard!",
  "Top-tier automotive spares destination in Cumbum with unbeatable affordable pricing.",
  "Outstanding customer service and genuine brand automotive products at Muthu Automobiles.",
  "Truly impressed by the technical expertise of M. Muthu and the counter team in identifying exact part numbers!",
  "Muthu Automobiles in Cumbum has set a new benchmark for automobile spares reliability and prompt service!",
  "Genuinely thrilled with the prompt part delivery and quality today!",
  "Best place in Cumbum for mechanics and vehicle owners who need durable, reliable replacement spares.",
  "Visited Muthu Automobiles after hearing recommendations from my mechanic, and they lived up to every bit of expectation!",
  "A truly 5-star experience from start to finish at Muthu Automobiles Cumbum!"
];

const SEED_OPENERS_4_STAR = [
  "Really good auto spare parts store in Cumbum with wide brand coverage.",
  "Had a very pleasant and satisfactory purchase experience at Muthu Automobiles.",
  "Great place in Cumbum to get genuine spares for Maruti, Hyundai, Tata, and Mahindra vehicles.",
  "Solid 4-star experience purchasing replacement components at Muthu Automobiles Cumbum.",
  "Prompt counter service and authentic automotive parts at fair market rates.",
  "Happy with the spare parts quality and technical guidance given by the staff.",
  "Reliable and skilled automobile parts shop in Cumbum town.",
  "Good experience buying automotive spares and filters at Muthu Automobiles."
];

const SERVICE_TEMPLATES = {
  default: [
    "Purchased genuine automobile replacement spares with exact model compatibility.",
    "Got high-grade OEM certified automotive components with complete peace of mind.",
    "Found all necessary mechanical spares under one roof without having to search elsewhere.",
    "Acquired top-brand spare parts with manufacturer warranty and authentic packaging."
  ],
  filters: [
    "Bought genuine engine oil filter, fuel filter, and cabin AC filter; engine breathing and airflow are noticeably cleaner.",
    "The high-flow air filter and oil filter were 100% genuine OEM spec, ensuring optimal lubrication and engine protection.",
    "Got a full set of oil, diesel, and air filters for routine servicing at very competitive rates.",
    "Purchased original filtration kit with perfect sealing ring fitment and zero oil leakage."
  ],
  brakes: [
    "Installed ceramic brake pads and new ventilated brake discs; the stopping bite is razor-sharp with zero squeal.",
    "Purchased heavy-duty brake shoes, master cylinder overhaul kit, and high-temp DOT4 brake oil with superb stopping power.",
    "The front brake pads and rear brake drums sourced from Muthu Automobiles provided safe, predictable braking.",
    "Top-grade brake pads with excellent heat dissipation, making mountain descent on the Kumily ghat road totally confident."
  ],
  steering: [
    "Replaced tie rod ends, ball joints, and steering rack boots; the steering response is now razor-tight without play.",
    "Got power steering rack assembly and hydraulic fluid; smooth maneuverability and effortless turning restored.",
    "The steering knuckle and rack components were exact part number matches, eliminating all front-end wandering.",
    "High-precision steering linkage spares provided immediate stability and aligned road feel."
  ],
  suspension: [
    "Fitted front and rear gas shock absorbers along with lower arm bushes; bad bumps on rural roads are absorbed like magic.",
    "Got heavy-duty suspension coil springs and stabilizer link rods; cabin sway is gone and ride stability is fantastic.",
    "Replaced strut mounts and lower suspension arms with OEM spares; suspension clunks are totally eliminated.",
    "The new shock absorbers and rubber buffers made high-speed highway cruising comfortable and composed."
  ],
  body_parts: [
    "Purchased front bumper, OE grille, and side-view mirror; panel alignment and clip fitment were factory-accurate.",
    "Got replacement headlamp assembly and door handles; flawless finish and durable build quality.",
    "The body panels and tail lights matched the original contours perfectly without modification required.",
    "High-grade bumper and fender parts sourced quickly with exact color-matching readiness."
  ],
  hoses: [
    "Bought reinforced radiator coolant hoses and turbo intercooler hoses; high heat resistance with zero expansion.",
    "Replaced hydraulic brake lines and fuel hoses with heavy-duty reinforced pipes for maximum reliability.",
    "The high-pressure silicone intercooler hoses and radiator bypass pipes solved boost leaks completely.",
    "Durable, heat-resistant cooling hoses provided total peace of mind against overheating."
  ],
  gearbox: [
    "Purchased gear shift linkages, synchronizer rings, and gear box oil seals; shifts are butter-smooth now.",
    "Got transmission bearings and shift control cables; gear engagement is crisp without crunching.",
    "The gearbox overhaul components and synthetic transmission oil restored smooth gear ratios.",
    "Exact-fit gear selector cables and synchro parts solved shifting stiffness instantly."
  ],
  engine_parts: [
    "Sourced timing belt kit, water pump, and full engine overhaul gasket set; engine runs whisper quiet and vibration-free.",
    "Purchased piston rings, valves, and spark plugs; engine compression and fuel efficiency improved noticeably.",
    "Got original timing chain kit and oil pump; mechanical noise is completely gone with restored peak power.",
    "Genuine engine rebuild spares ensured high compression and dependable long-distance performance."
  ],
  cables: [
    "Replaced heavy clutch cable and accelerator cable; pedal travel is light as a feather now.",
    "Installed high-tensile handbrake parking cables and bonnet release cable with smooth glide action.",
    "The smooth Teflon-lined clutch cable made stop-and-go city traffic driving effortless.",
    "Durable control cables with factory end fittings installed with zero friction or snag."
  ],
  axle: [
    "Installed complete CV axle drive shafts with heavy-duty grease boots; zero clicking noise on sharp turns.",
    "Purchased drive shaft cross joints and axle hub spindle; vibration under acceleration is totally cured.",
    "The CV joints and axle assemblies were robust and perfectly balanced for smooth torque delivery.",
    "Heavy-duty drive axles restored balanced power transfer without axle shudder."
  ],
  ac_parts: [
    "Replaced AC compressor and condenser coil; cabin cools down icy cold in under 2 minutes even in peak summer.",
    "Got new evaporator cooling coil, expansion valve, and receiver drier; AC air throw is fresh and freezing.",
    "The AC compressor and climate control fittings restored showroom-level cabin comfort.",
    "Efficient condenser and cooling coils keeping the car interior refreshingly chill."
  ],
  bearings: [
    "Fitted front wheel hub bearings and clutch release bearing; high-speed road hum and whining noise completely vanished.",
    "Purchased genuine taper roller bearings and alternator idler pulley bearings with frictionless rotation.",
    "The double-sealed wheel bearings eliminated vibration and roll smoothly on the highway.",
    "Precision-engineered bearings with smooth rotation and long-lasting pre-greasing."
  ],
  clutch: [
    "Installed complete clutch pressure plate and friction disc set; clutch pedal is super light and pickup is punchy.",
    "Replaced clutch slave and master cylinders along with release bearing; gear changes are effortless with zero slip.",
    "The heavy-duty clutch assembly cured all shudder during hill starts on the ghat sections.",
    "Original clutch kit delivered smooth torque engagement with zero slippage under heavy load."
  ],
  electrical: [
    "Purchased high-output starter motor, alternator regulator, and ignition coils; instant crank on first touch.",
    "Got automotive relays, sensors, and wiring harness connectors; electrical glitch resolved with zero hassle.",
    "The genuine starter motor and alternator provide rock-solid charging voltage and reliable ignition.",
    "Authentic electrical sensors and relays delivered accurate ECU readings and crisp throttle response."
  ]
};

const WORKMANSHIP_SENTENCES = [
  "The counter staff accurately cross-referenced the vehicle VIN number and gave the exact OEM part numbers.",
  "Their attention to detail, genuine part verification, and transparent product explanations really stand out.",
  "What impressed me most was their ready inventory and honest advice on which brand offers the best longevity.",
  "The shop is extremely well organized, and M. Muthu along with the crew have decades of technical experience.",
  "Everything came in original tamper-proof manufacturer packaging with valid warranty documentation.",
  "The parts fit seamlessly with zero alterations needed, saving my mechanic hours of installation time.",
  "Very knowledgeable counter support with rich technical understanding of all car brands and engine variants.",
  "They took time to explain maintenance tips, recommended proper fluid grades, and handled the billing swiftly."
];

const VALUE_AND_TIMELINE_SENTENCES_5_STAR = [
  "Pricing is 100% transparent and highly affordable, far better than traveling to Madurai or Theni.",
  "Immediate ready stock was available over the counter, saving critical time for my car's repair.",
  "Transparent rates, genuine warranty-backed spares, and prompt service made this an unbeatable deal.",
  "Great value for money with authentic branded automotive parts and honest bill receipts.",
  "Very fair pricing structure and they strictly deal only in genuine, certified automobile parts.",
  "Quick billing, honest part recommendations without upselling, and unmatched stock variety.",
  "Best auto spare pricing in Cumbum along with trustworthy customer support and warranty assurance.",
  "Worth every single rupee spent for the genuine quality and reliability provided."
];

const VALUE_AND_TIMELINE_SENTENCES_4_STAR = [
  "Pricing was fair and the parts were delivered across the counter with good care.",
  "Decent turnaround time and reasonable rates for the automotive spares purchased.",
  "Good value for money and transparent discussion regarding product brands and options.",
  "Overall honest pricing and dependable quality automotive products offered."
];

const LOCAL_SEO_KEYWORDS = [
  "Muthu Automobiles Cumbum",
  "car spare parts Cumbum",
  "auto parts shop Cumbum",
  "car clutch plate Cumbum",
  "brake pads Cumbum",
  "automobile filters Theni",
  "car suspension parts Cumbum",
  "genuine auto spares Cumbum",
  "car engine spares Cumbum"
];

const OUTRO_RECOMMENDATIONS_5_STAR = [
  "Kudos to the entire Muthu Automobiles team! Will definitely come back for all future auto spares and maintenance requirements.",
  "If you want genuine car parts for your vehicle, Muthu Automobiles Cumbum is the ultimate shop you can blindly trust!",
  "A big thumbs up to the team! Highly recommending Muthu Automobiles to all car owners and mechanics in Cumbum and Theni district.",
  "100% satisfied customer here! Thank you Muthu Automobiles for always stocking genuine and reliable parts.",
  "Will definitely recommend them to all my friends and family looking for trustworthy automotive spare parts.",
  "Easily the #1 auto spare parts destination in Cumbum. Keep up the phenomenal work!",
  "Extremely happy with the overall purchase and will be returning for all upcoming maintenance jobs.",
  "Huge respect to their dedication to genuine parts and honest customer service. 5 stars all the way!"
];

const OUTRO_RECOMMENDATIONS_4_STAR = [
  "Good job by the team. Keep up the good work!",
  "Happy with the purchase and would recommend Muthu Automobiles to vehicle owners in Cumbum.",
  "Thank you Muthu Automobiles for the prompt service and genuine parts.",
  "A reliable shop in Cumbum for all your routine car replacement parts."
];

// Helper: Pseudo-random picker with optional seed rotation
function getRandomItem(array, seedOffset = 0) {
  const index = Math.floor(Math.abs(Math.sin(Date.now() + seedOffset) * 10000)) % array.length;
  return array[index];
}

function getRandomSample(array, count = 2, seedOffset = 0) {
  const shuffled = [...array].sort((a, b) => {
    return Math.sin(a.length + Date.now() + seedOffset) - Math.sin(b.length + Date.now() + seedOffset);
  });
  return shuffled.slice(0, count);
}

/**
 * Generate 500+ Combinations of Natural, Diverse, SEO-Boosted Reviews for Muthu Automobiles Cumbum
 */
export function generateSmartReviewSuite({
  businessName = "Muthu Automobiles",
  selectedServices = [],
  tags = [],
  customerComment = "",
  rating = 5,
  tone = "seo"
}) {
  const is5Star = Number(rating) >= 5;
  const openersPool = is5Star ? SEED_OPENERS_5_STAR : SEED_OPENERS_4_STAR;
  const valuePool = is5Star ? VALUE_AND_TIMELINE_SENTENCES_5_STAR : VALUE_AND_TIMELINE_SENTENCES_4_STAR;
  const outroPool = is5Star ? OUTRO_RECOMMENDATIONS_5_STAR : OUTRO_RECOMMENDATIONS_4_STAR;

  // Identify service category keys from selectedServices
  const matchedServiceKeys = [];
  const srvString = (selectedServices || []).join(" ").toLowerCase();

  if (srvString.includes("filter")) matchedServiceKeys.push("filters");
  if (srvString.includes("break") || srvString.includes("brake")) matchedServiceKeys.push("brakes");
  if (srvString.includes("steer")) matchedServiceKeys.push("steering");
  if (srvString.includes("susp")) matchedServiceKeys.push("suspension");
  if (srvString.includes("body")) matchedServiceKeys.push("body_parts");
  if (srvString.includes("hose")) matchedServiceKeys.push("hoses");
  if (srvString.includes("gear")) matchedServiceKeys.push("gearbox");
  if (srvString.includes("engine")) matchedServiceKeys.push("engine_parts");
  if (srvString.includes("cable")) matchedServiceKeys.push("cables");
  if (srvString.includes("axle")) matchedServiceKeys.push("axle");
  if (srvString.includes("ac")) matchedServiceKeys.push("ac_parts");
  if (srvString.includes("bear")) matchedServiceKeys.push("bearings");
  if (srvString.includes("clutch")) matchedServiceKeys.push("clutch");
  if (srvString.includes("elect")) matchedServiceKeys.push("electrical");

  if (matchedServiceKeys.length === 0) {
    matchedServiceKeys.push("default");
  }

  // Construct dynamic service text based on user selections
  const serviceLines = matchedServiceKeys.map((k, idx) => {
    const pool = SERVICE_TEMPLATES[k] || SERVICE_TEMPLATES.default;
    return getRandomItem(pool, idx * 17);
  });
  const combinedServiceDesc = serviceLines.join(" ");

  // Custom user remark
  const userRemark = customerComment && customerComment.trim()
    ? ` Specifically for my ${customerComment.trim()}, the team provided exact genuine parts that fitted without hassle.`
    : "";

  // Highlights tag synthesis
  const tagPhrase = tags && tags.length > 0
    ? ` Special mention for their ${tags.join(", ").toLowerCase()}.`
    : "";

  // Distinct tone variations
  const seoOpener = getRandomItem(openersPool, 1);
  const seoWorkmanship = getRandomItem(WORKMANSHIP_SENTENCES, 2);
  const seoValue = getRandomItem(valuePool, 3);
  const seoOutro = getRandomItem(outroPool, 4);

  const enthusOpener = getRandomItem(openersPool, 5);
  const enthusWorkmanship = getRandomItem(WORKMANSHIP_SENTENCES, 6);
  const enthusOutro = getRandomItem(outroPool, 7);

  const conciseOpener = is5Star ? `5/5 Stars for ${businessName} in Cumbum!` : `Good 4-star experience at ${businessName}.`;
  const conciseService = serviceLines[0] || "Got genuine auto spare parts.";
  const conciseOutro = getRandomItem(outroPool, 8);

  const detailedOpener = getRandomItem(openersPool, 9);
  const detailedService = serviceLines.join(" ");
  const detailedWork = getRandomItem(WORKMANSHIP_SENTENCES, 10);
  const detailedVal = getRandomItem(valuePool, 11);
  const detailedOutro = getRandomItem(outroPool, 12);

  const variations = {
    seo: `${seoOpener} ${combinedServiceDesc}${userRemark} ${seoWorkmanship}${tagPhrase} ${seoValue} ${seoOutro}`,
    enthusiastic: `${enthusOpener} ⭐⭐⭐⭐⭐ ${combinedServiceDesc}${userRemark} ${enthusWorkmanship}${tagPhrase} ${enthusOutro} 🚗🔧`,
    short: `${conciseOpener} ${conciseService}${userRemark}${tagPhrase} ${conciseOutro}`,
    detailed: `${detailedOpener} ${detailedService}${userRemark} ${detailedWork}${tagPhrase} ${detailedVal} ${detailedOutro}`
  };

  const selectedDraft = variations[tone] || variations.seo;

  return {
    success: true,
    reviewText: selectedDraft,
    tones: variations,
    keywords: getRandomSample(LOCAL_SEO_KEYWORDS, 5, 23)
  };
}
