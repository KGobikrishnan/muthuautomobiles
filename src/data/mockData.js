export const INITIAL_BUSINESS = {
  id: "muthu-automobiles",
  slug: "muthu-automobiles",
  name: "Muthu Automobiles",
  branch: "Cumbum Main Branch",
  category: "Automobile Spare Parts & Services",
  ownerName: "M. Muthu",
  email: "muthuautomobilescumbum@gmail.com",
  phone: "+91 93444 21115",
  secondaryPhone: "+91 88666 67528",
  plan: "Pro Enterprise",
  monthlyScanLimit: 5000,
  logoUrl: "/logo.png",
  bannerUrl: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1000&q=80",
  tagline: "Genuine Auto Spares, Quality Replacement Parts & Mechanical Essentials in Cumbum",
  address: "Door No: 157/w-4, Opp Nadaraj Thirumana Mandabam, Near Nalantha School, Cumbum - 625516",
  bankDetails: {
    accountHolder: "M. Muthu Automobiles",
    accountNumber: "429601010129208",
    ifscCode: "UBIN0542962",
    bankName: "Union Bank of India",
    branch: "Uthamapuram Branch (Cumbum)"
  },
  googlePlaceUrl: "https://maps.google.com/?q=Muthu+Automobiles+Cumbum",
  verified: true,
  rating: 4.9,
  totalReviews: 1850,
  status: "ACTIVE",
  createdAt: "2018-05-15"
};

export const INITIAL_MERCHANTS_LIST = [
  INITIAL_BUSINESS
];

// Product & Services Catalogue for Muthu Automobiles Cumbum
export const MUTHU_SERVICES = [
  {
    id: 'filters',
    name: 'Filters (Oil, Air, Fuel & Cabin)',
    category: 'Engine & Filtration',
    badge: 'Fast Moving',
    desc: 'Genuine engine oil filters, high-flow air filters, fuel filters, and anti-bacterial AC cabin filters.',
    iconName: 'ShieldCheck',
    color: 'from-blue-600 to-indigo-600',
    tags: ['Engine Oil Filter', 'Air Filter', 'Diesel/Petrol Fuel Filter', 'Cabin AC Filter']
  },
  {
    id: 'brakes',
    name: 'Brake Parts & Discs',
    category: 'Safety & Braking',
    badge: 'Essential Safety',
    desc: 'Ceramic brake pads, heavy-duty brake shoes, ventilated brake discs/rotors, calipers & brake fluid.',
    iconName: 'Zap',
    color: 'from-rose-600 to-red-600',
    tags: ['Front Brake Pads', 'Rear Brake Shoes', 'Disc Rotors & Drums', 'Brake Master Cylinder & Oil']
  },
  {
    id: 'steering',
    name: 'Steering System Parts',
    category: 'Steering & Handling',
    badge: 'Precision',
    desc: 'Power steering racks, tie rod ends, ball joints, steering rack boots, column assemblies & pumps.',
    iconName: 'Wrench',
    color: 'from-amber-500 to-orange-600',
    tags: ['Tie Rod Ends', 'Steering Rack Assembly', 'Ball Joints & Knuckles', 'Power Steering Fluid & Pump']
  },
  {
    id: 'suspension',
    name: 'Suspension & Shock Absorbers',
    category: 'Ride Comfort',
    badge: 'Heavy Duty',
    desc: 'Gas/hydraulic shock absorbers, coil springs, lower arms, stabilizer link rods & suspension bushes.',
    iconName: 'Wrench',
    color: 'from-emerald-600 to-teal-600',
    tags: ['Front/Rear Shock Absorbers', 'Lower Arms & Bushes', 'Stabilizer Link Rods', 'Strut Mounts & Buffers']
  },
  {
    id: 'body_parts',
    name: 'Body Parts & Panels',
    category: 'Exterior & Structure',
    badge: 'OEM Spec',
    desc: 'Bumpers, front grilles, bonnets, fenders, side rear-view mirrors, door handles & light assemblies.',
    iconName: 'Sparkles',
    color: 'from-indigo-600 to-purple-600',
    tags: ['Front & Rear Bumpers', 'Side View Mirrors', 'Grilles & Fenders', 'Headlights & Tail Lamps']
  },
  {
    id: 'hoses',
    name: 'Hoses (Radiator, Turbo & Fuel)',
    category: 'Fluid & Air Flow',
    badge: 'Heat Resistant',
    desc: 'Reinforced radiator coolant hoses, high-pressure turbo intercooler hoses, hydraulic lines & heater pipes.',
    iconName: 'Zap',
    color: 'from-cyan-600 to-blue-600',
    tags: ['Radiator Top/Bottom Hoses', 'Turbo Intercooler Hoses', 'Fuel Lines', 'Hydraulic Brake Hoses']
  },
  {
    id: 'gearbox',
    name: 'Gear Box Components',
    category: 'Transmission',
    badge: 'Durability',
    desc: 'Manual & automatic transmission gears, synchronizer rings, gear shift linkages, oil seals & gear oils.',
    iconName: 'Wrench',
    color: 'from-purple-600 to-pink-600',
    tags: ['Gear Shift Cables & Linkages', 'Synchro Rings', 'Gear Box Mountings', 'Transmission Oil & Seals']
  },
  {
    id: 'engine_parts',
    name: 'Engine Spares & Overhaul Components',
    category: 'Core Mechanical',
    badge: 'Powerhouse',
    desc: 'Piston rings, engine gaskets, valves, timing belts/chains, water pumps, oil pumps & spark/glow plugs.',
    iconName: 'Zap',
    color: 'from-amber-600 to-red-600',
    tags: ['Timing Belt & Kit', 'Full Engine Gasket Set', 'Water Pump & Thermostat', 'Spark Plugs & Fuel Injectors']
  },
  {
    id: 'cables',
    name: 'Automotive Control Cables',
    category: 'Controls',
    badge: 'High Tensile',
    desc: 'Heavy-duty clutch cables, accelerator/throttle cables, handbrake parking cables & bonnet release cables.',
    iconName: 'Wrench',
    color: 'from-stone-600 to-slate-800',
    tags: ['Clutch Cables', 'Handbrake Parking Cables', 'Accelerator Cables', 'Speedometer & Bonnet Cables']
  },
  {
    id: 'axle',
    name: 'Axles & Drive Shafts',
    category: 'Drive Train',
    badge: 'Heavy Duty',
    desc: 'Complete CV axle drive shafts, CV joints, grease boots, cross joints & propeller shaft center bearings.',
    iconName: 'Wrench',
    color: 'from-teal-600 to-slate-700',
    tags: ['Drive Shaft Axles', 'CV Joints & Boot Kits', 'Hub Axle Spindles', 'Propeller Shaft Bearings']
  },
  {
    id: 'ac_parts',
    name: 'AC System & Cooling Parts',
    category: 'Climate & Cooling',
    badge: 'Summer Chill',
    desc: 'Car AC compressors, condensers, cooling coils/evaporators, expansion valves, receiver driers & AC gas.',
    iconName: 'Sparkles',
    color: 'from-sky-500 to-indigo-600',
    tags: ['AC Compressor', 'Condenser & Cooling Coil', 'Expansion Valve', 'Radiator Assembly & Fans']
  },
  {
    id: 'bearings',
    name: 'Bearings (Wheel, Clutch & Engine)',
    category: 'Friction & Rotation',
    badge: 'High Precision',
    desc: 'Front/rear wheel hub bearings, clutch release bearings, alternator/idler bearings & taper roller bearings.',
    iconName: 'ShieldCheck',
    color: 'from-blue-700 to-teal-700',
    tags: ['Wheel Hub Bearings', 'Clutch Release Bearings', 'Idler & Tensioner Bearings', 'Taper Roller Bearings']
  },
  {
    id: 'clutch',
    name: 'Clutch Sets & Flywheels',
    category: 'Transmission & Drive',
    badge: 'Smooth Shift',
    desc: 'Complete clutch plate & pressure plate sets, dual mass flywheels, clutch slave cylinders & master cylinders.',
    iconName: 'Wrench',
    color: 'from-red-600 to-amber-600',
    tags: ['Clutch Pressure Plate & Disc', 'Clutch Release Bearing Kit', 'Clutch Master/Slave Cylinders', 'Flywheels']
  },
  {
    id: 'electrical',
    name: 'Electrical, Alternators & Starters',
    category: 'Electrical Systems',
    badge: 'Reliable Power',
    desc: 'Starter motors, alternators, ignition coils, relays, automotive sensors, wiring harnesses & horns.',
    iconName: 'Zap',
    color: 'from-yellow-500 to-amber-600',
    tags: ['Starter Motors & Solenoids', 'Alternators & Regulators', 'Ignition Coils & Sensors', 'Horns & Relays']
  }
];

// Alias for backwards compatibility if needed
export const BARANI_SERVICES = MUTHU_SERVICES;

export const FEATURE_TAGS = [
  { id: "genuine_parts", title: "100% Genuine Spares", desc: "Authentic OEM & OES spares", iconName: "ShieldCheck", defaultSelected: true },
  { id: "all_brands", title: "All Car Brands Stock", desc: "Maruti, Hyundai, Tata, Mahindra & more", iconName: "Wrench", defaultSelected: true },
  { id: "best_pricing", title: "Best Wholesale Rates", desc: "Competitive, transparent pricing", iconName: "DollarSign", defaultSelected: true },
  { id: "ready_stock", title: "Immediate Availability", desc: "Readily available in stock", iconName: "Clock", defaultSelected: false },
  { id: "expert_guidance", title: "Technical Advice", desc: "Exact part number matching", iconName: "ThumbsUp", defaultSelected: false },
  { id: "durability", title: "Long-lasting Quality", desc: "High endurance replacement parts", iconName: "Star", defaultSelected: false },
  { id: "fast_service", title: "Quick Counter Service", desc: "Fast billing & dispatch", iconName: "Zap", defaultSelected: false },
  { id: "trusted_shop", title: "Trusted in Cumbum", desc: "Preferred choice of local mechanics", iconName: "Sparkles", defaultSelected: false }
];

export const NEGATIVE_ISSUE_TAGS = [
  { id: "part_mismatch", label: "🔧 Part Fitting / Model Mismatch" },
  { id: "stock_delay", label: "⏳ Part Not in Stock / Delivery Delay" },
  { id: "packaging_quality", label: "📦 Packaging / Part Condition Issue" },
  { id: "staff_response", label: "😐 Staff Communication / Counter Wait" },
  { id: "billing", label: "💳 Pricing or Bill Query" },
  { id: "warranty_return", label: "⚡ Replacement or Warranty Support" }
];

export const INITIAL_FEEDBACK_ENTRIES = [
  {
    id: "FB-1001",
    merchantId: "muthu-automobiles",
    customerName: "Selvaraj Pandian",
    contactInfo: "+91 98401 54321",
    contactType: "phone",
    sentiment: "NEEDS_ATTENTION",
    rating: 2,
    issues: ["Part Not in Stock / Delivery Delay"],
    comment: "Specific clutch release bearing for diesel variant took an extra day to arrive. Staff was polite though.",
    status: "NEW",
    priority: "HIGH",
    touchpoint: "Sales Counter (QR-01)",
    createdAt: "2026-08-20T11:30:00Z",
    notes: [
      { id: "n1", author: "Muthu Automobiles Manager", text: "Customer contacted and parts delivered promptly.", timestamp: "2026-08-20T12:00:00Z" }
    ]
  }
];

export const INITIAL_QR_STANDS = [
  {
    id: "QR-01",
    merchantId: "muthu-automobiles",
    name: "Muthu Automobiles Billing Counter",
    location: "Main Counter Lounge",
    scans: 1480,
    goodCount: 1410,
    convertedReviews: 1060,
    negativeInterceptions: 12,
    active: true,
    createdAt: "2026-01-15"
  }
];

export const INITIAL_ANALYTICS_DATA = {
  totalScans: 2840,
  totalPositiveConversions: 2450,
  totalNegativeInterceptions: 28,
  averageRating: 4.9,
  conversionRate: 86.3
};

// Fallback dynamic generator so ANY slug returns Muthu Automobiles or formatted store profile
export const getMerchantBySlugOrFallback = (slug, existingList = INITIAL_MERCHANTS_LIST) => {
  if (!slug || slug === 'muthu-automobiles' || slug === 'muthu' || slug === 'barani-cars' || slug === 'barani') return INITIAL_BUSINESS;
  
  const normalized = slug.toLowerCase().trim();
  const found = existingList.find(m => m.slug.toLowerCase() === normalized || m.id.toLowerCase() === normalized);
  if (found) return found;

  const formattedName = normalized
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    id: `m-custom-${normalized}`,
    slug: normalized,
    name: formattedName,
    branch: "Cumbum Branch",
    category: "Automobile Spare Parts & Services",
    ownerName: "Manager",
    email: `contact@${normalized.replace(/[^a-z0-9]/g, '')}.com`,
    phone: "+91 93444 21115",
    plan: "Pro Enterprise",
    monthlyScanLimit: 5000,
    logoUrl: "/logo.png",
    bannerUrl: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1000&q=80",
    tagline: `Welcome to ${formattedName}! Scan to share your 5-star experience.`,
    address: "Door No: 157/w-4, Opp Nadaraj Thirumana Mandabam, Near Nalantha School, Cumbum - 625516",
    googlePlaceUrl: `https://maps.google.com/?q=${encodeURIComponent(formattedName + ' Cumbum')}`,
    verified: true,
    rating: 4.9,
    totalReviews: 1850,
    status: "ACTIVE",
    createdAt: new Date().toISOString().split('T')[0]
  };
};

import { generateSmartReviewSuite } from './reviewGenerator';

// Client-side AI Review Generator customized for Muthu Automobiles Spare Parts & Services
export const generateClientSideAiReview = ({
  businessName = "Muthu Automobiles",
  businessCategory = "Automobile Spare Parts & Services",
  selectedServices = [],
  tags = [],
  customerComment = "",
  rating = 5,
  tone = "seo"
}) => {
  return generateSmartReviewSuite({
    businessName,
    businessCategory,
    selectedServices,
    tags,
    customerComment,
    rating,
    tone
  });
};
