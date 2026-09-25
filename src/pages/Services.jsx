import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Wrench, 
  ShieldCheck, 
  MessageCircle, 
  Star, 
  Phone, 
  MapPin, 
  Clock, 
  Award, 
  Users, 
  CheckCircle2,
  ArrowRight,
  Flame
} from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';

const SERVICES_DATA = [
  {
    id: 'filters',
    iconKey: 'shield',
    name: 'Filters (Oil, Air, Fuel & Cabin)',
    badge: 'Fast Moving',
    description: 'Genuine engine oil filters, high-flow air filters, fuel filters, and anti-bacterial AC cabin filters for all car brands.',
    highlights: [
      'Original Engine Oil Filters (Spin-on & Element)',
      'High-Flow Engine Air Filters',
      'Diesel & Petrol Fuel Filter Assemblies',
      'Anti-Bacterial Active Carbon Cabin Filters'
    ]
  },
  {
    id: 'brakes',
    iconKey: 'zap',
    name: 'Brake Parts & Discs',
    badge: 'Safety Critical',
    description: 'Ceramic brake pads, heavy-duty brake shoes, ventilated disc rotors, brake calipers, master cylinders & DOT4 fluid.',
    highlights: [
      'Ceramic Low-Dust Front Brake Pads',
      'High-Endurance Rear Brake Shoes & Drums',
      'Ventilated Disc Rotors with Anti-Rust Coating',
      'Brake Master Cylinders & Hydraulic Lines'
    ]
  },
  {
    id: 'steering',
    iconKey: 'wrench',
    name: 'Steering System Parts',
    badge: 'Precision',
    description: 'Power steering rack assemblies, tie rod ends, ball joints, steering rack boots, column assemblies & pumps.',
    highlights: [
      'Heavy-Duty Tie Rod Ends & Ball Joints',
      'Power Steering Racks & Pinion Assemblies',
      'Steering Column Universal Joints & Couplers',
      'Power Steering Fluid & Pump Components'
    ]
  },
  {
    id: 'suspension',
    iconKey: 'wrench',
    name: 'Suspension & Shock Absorbers',
    badge: 'Heavy Duty',
    description: 'Gas & hydraulic shock absorbers, heavy-duty coil springs, lower control arms, stabilizer link rods & rubber bushes.',
    highlights: [
      'Front & Rear Gas-Charged Shock Struts',
      'Lower Control Arms with OEM Pre-Pressed Bushes',
      'Stabilizer Link Rods & Balance Rod Bushes',
      'Strut Top Mountings & Bump Stop Buffers'
    ]
  },
  {
    id: 'body-parts',
    iconKey: 'sparkles',
    name: 'Body Parts & Panels',
    badge: 'OEM Spec',
    description: 'Front & rear bumpers, bonnets, grilles, fenders, door handles, side rear-view mirrors and lighting assemblies.',
    highlights: [
      'OEM Direct-Fit Bumpers & Front Grilles',
      'Electric Adjust Side Rear-View Mirrors',
      'Bonnets, Fenders & Door Shell Assemblies',
      'OE Headlamp & Tail Lamp Units'
    ]
  },
  {
    id: 'hoses',
    iconKey: 'zap',
    name: 'Hoses (Radiator, Turbo & Fuel)',
    badge: 'Heat Resistant',
    description: 'Reinforced radiator coolant hoses, high-pressure turbo intercooler silicone pipes, fuel lines & heater hoses.',
    highlights: [
      'EPDM Reinforced Radiator Top/Bottom Hoses',
      'Silicone Turbocharger Intercooler Hoses',
      'High-Pressure Fuel Injection Lines',
      'Bypass Coolant & Heater Matrix Pipes'
    ]
  },
  {
    id: 'gearbox',
    iconKey: 'wrench',
    name: 'Gear Box Components',
    badge: 'Durability',
    description: 'Manual and automatic transmission components, synchronizer rings, gear selector cables, oil seals & gear oils.',
    highlights: [
      'Precision Synchronizer Rings & Hubs',
      'Smooth Gear Shift Cables & Bush Kits',
      'Transmission Oil Seals & Gaskets',
      'Heavy-Duty Gear Box Mountings'
    ]
  },
  {
    id: 'engine-parts',
    iconKey: 'zap',
    name: 'Engine Spares & Overhaul',
    badge: 'Core Power',
    description: 'Piston ring sets, engine gasket overhaul kits, valves, timing belts/chains, water pumps, oil pumps & spark plugs.',
    highlights: [
      'Complete Engine Gasket & Head Gasket Sets',
      'Timing Belt & Chain Kits with Tensioners',
      'High-Flow Water Pumps & Thermostat Valves',
      'Spark Plugs, Glow Plugs & Injector Spares'
    ]
  },
  {
    id: 'cables',
    iconKey: 'wrench',
    name: 'Automotive Control Cables',
    badge: 'Teflon Lined',
    description: 'Heavy-duty clutch cables, accelerator cables, handbrake parking brake cables and bonnet release cables.',
    highlights: [
      'Friction-Free Teflon Lined Clutch Cables',
      'High-Tensile Handbrake Parking Cables',
      'Responsive Throttle Accelerator Cables',
      'Bonnet & Fuel Flap Release Wire Sets'
    ]
  },
  {
    id: 'axle',
    iconKey: 'wrench',
    name: 'Axles & Drive Shafts',
    badge: 'Torque Spec',
    description: 'Complete CV axle drive shafts, constant velocity CV joints, heavy-duty boot kits, hub axle spindles & cross joints.',
    highlights: [
      'Complete Pre-Assembled CV Axle Drive Shafts',
      'Inner & Outer CV Joint Repair Kits',
      'Heavy-Duty Neoprene Rubber Boot Kits with Grease',
      'Wheel Hub Axle Bearings & Spindles'
    ]
  },
  {
    id: 'ac-parts',
    iconKey: 'sparkles',
    name: 'AC System & Cooling Parts',
    badge: 'Chill Comfort',
    description: 'Car AC compressors, condensers, evaporator cooling coils, expansion valves, receiver driers & AC gas.',
    highlights: [
      'Original Specification AC Compressors',
      'High-Efficiency Condensers with Dryers',
      'Evaporator Cooling Coils & Blower Motors',
      'Expansion Valves & R134a Recharging Gas'
    ]
  },
  {
    id: 'bearings',
    iconKey: 'shield',
    name: 'Bearings (Wheel, Clutch & Engine)',
    badge: 'High Precision',
    description: 'Front & rear wheel hub bearings, clutch release bearings, alternator idler pulleys & taper roller bearings.',
    highlights: [
      'Precision Double-Row Front Wheel Bearings',
      'Heavy-Duty Clutch Release Bearings',
      'Timing & Alternator Idler Tensioner Pulley Bearings',
      'Sealed Low-Friction Differential Bearings'
    ]
  },
  {
    id: 'clutch',
    iconKey: 'wrench',
    name: 'Clutch Sets & Flywheels',
    badge: 'Smooth Shift',
    description: 'Complete clutch cover assemblies, friction clutch discs, dual mass flywheels, clutch master & slave cylinders.',
    highlights: [
      'High-Friction Long-Life Clutch Plate & Pressure Plate',
      'Clutch Master & Concentric Slave Cylinders (CSC)',
      'Dual Mass & Solid Flywheel Assemblies',
      'Clutch Fork, Spring & Bush Kits'
    ]
  },
  {
    id: 'electrical',
    iconKey: 'zap',
    name: 'Electrical, Alternators & Starters',
    badge: 'Reliable Power',
    description: 'High-torque starter motors, charging alternators, ignition coils, automotive relays, sensors & horns.',
    highlights: [
      'Heavy-Duty Starter Motors & Bendix Drives',
      'High-Output Alternators & Voltage Regulators',
      'Direct-Fire Ignition Coils & Sensors (Crank/Cam/MAP)',
      'Dual-Tone Horns, Relays & OEM Connectors'
    ]
  }
];

export const Services = () => {
  const whatsappBookingUrl = "https://wa.me/919344421115?text=Hi%20Muthu%20Automobiles%20Cumbum,%20I%20would%20like%20to%20enquire%20about%20spare%20parts%20for%20my%20vehicle.";

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#ff4d00] selection:text-white pb-20">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Automobile Spare Parts Catalogue | Muthu Automobiles Cumbum</title>
        <meta 
          name="description" 
          content="Explore genuine automobile spare parts at Muthu Automobiles Cumbum: Filters, Brake parts, Steering, Suspension, Body parts, Hoses, Gear Box, Engine spares, Cables, Axles, AC, Bearings, Clutch & Electrical." 
        />
        <meta name="keywords" content="Muthu Automobiles Cumbum, car spare parts Cumbum, auto parts Theni, brake pads Cumbum, clutch plate Cumbum, car suspension parts Cumbum, auto spares shop" />
      </Helmet>

      {/* Navigation Header Bar */}
      <header className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#e63946] to-[#ff6b00] flex items-center justify-center font-black text-white text-xl font-['Outfit'] shadow-[0_0_15px_rgba(255,107,0,0.4)]">
              M
            </div>
            <div>
              <span className="text-xl font-extrabold text-white tracking-wider font-['Outfit'] uppercase block leading-none">
                Muthu <span className="text-[#ff6b00]">Automobiles</span>
              </span>
              <span className="text-[10px] tracking-widest text-gray-400 font-semibold uppercase">
                Cumbum • Genuine Spares
              </span>
            </div>
          </Link>

          <nav className="flex items-center gap-2 sm:gap-4 text-sm font-medium">
            <Link 
              to="/services" 
              className="px-3.5 py-1.5 rounded-lg text-[#ff6b00] bg-[#ff4d00]/10 border border-[#ff4d00]/30 font-semibold"
            >
              Catalogue
            </Link>
            <Link 
              to="/reviews" 
              className="px-3.5 py-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-[#181818] transition-colors"
            >
              Reviews
            </Link>
            <a 
              href={whatsappBookingUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#e63946] to-[#ff6b00] text-white font-semibold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp Enquiry
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Banner Section */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-[#1a1a1a]">
        {/* Glow ambient background orbs */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#e63946]/20 via-[#ff6b00]/25 to-transparent blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-1/2 -right-40 w-80 h-80 bg-[#e63946]/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181818] border border-[#2a2a2a] mb-6 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-ping" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-gray-300">
              #1 Automobile Spare Parts Store in Cumbum
            </span>
          </div>

          {/* Primary SEO Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-['Outfit'] mb-6 max-w-4xl mx-auto leading-tight sm:leading-none">
            Genuine Auto Spares in <span className="bg-gradient-to-r from-[#e63946] via-[#ff6b00] to-[#ffaa00] text-transparent bg-clip-text">Cumbum</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Your trusted source for 100% genuine replacement parts: Filters, Brakes, Steering, Suspension, Engine Spares, Clutch kits, Cables, Bearings, Axles & Electricals.
          </p>

          {/* Trust stats counter */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-[#1f1f1f]">
            <div className="p-4 rounded-xl bg-[#111111]/80 border border-[#222222]">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] text-[#ff6b00]">10,000+</div>
              <div className="text-xs text-gray-400 font-medium mt-1">Spares in Stock</div>
            </div>
            <div className="p-4 rounded-xl bg-[#111111]/80 border border-[#222222]">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] text-emerald-400">4.9 ★</div>
              <div className="text-xs text-gray-400 font-medium mt-1">Google Rating</div>
            </div>
            <div className="p-4 rounded-xl bg-[#111111]/80 border border-[#222222]">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] text-amber-400">All Brands</div>
              <div className="text-xs text-gray-400 font-medium mt-1">Maruti, Tata, Hyundai, etc.</div>
            </div>
            <div className="p-4 rounded-xl bg-[#111111]/80 border border-[#222222]">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] text-[#e63946]">100%</div>
              <div className="text-xs text-gray-400 font-medium mt-1">Genuine Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ff6b00] mb-3">
            <Flame className="w-4 h-4" />
            Complete Spare Parts Inventory
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight mb-3">
            Products We Stock
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
            From routine maintenance filters and brake pads to full engine overhaul sets and transmission clutches.
          </p>
        </div>

        {/* 2 columns on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Workshop Highlights & Quality Promise */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl bg-gradient-to-b from-[#161616] to-[#0f0f0f] border border-[#262626] p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b00]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-[#ff6b00] text-xs font-bold tracking-widest uppercase mb-2 block">
                Why Drivers & Mechanics Choose Muthu Automobiles
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] mb-4">
                Premier Auto Spare Parts Hub in Cumbum
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                Located near Nalantha School and opposite Nadaraj Thirumana Mandabam, Muthu Automobiles provides genuine OEM/OES components, wholesale pricing, and expert guidance to ensure your car runs safely and smoothly.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#ff6b00]" />
                  <span>100% Genuine brand guarantee</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#ff6b00]" />
                  <span>Exact part number cross-matching</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#ff6b00]" />
                  <span>Wholesale & competitive counter rates</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#ff6b00]" />
                  <span>Fast billing & ready in-stock inventory</span>
                </div>
              </div>
            </div>

            <div className="bg-[#111111] p-6 sm:p-8 rounded-2xl border border-[#2a2a2a] flex flex-col justify-between text-center lg:text-left">
              <div>
                <h4 className="text-xl font-bold text-white mb-2 font-['Outfit']">Need auto spares today?</h4>
                <p className="text-gray-400 text-sm mb-6">
                  Visit our counter in Cumbum or call/WhatsApp us directly for part inquiries and instant stock availability.
                </p>
                <div className="space-y-2.5 text-xs sm:text-sm text-gray-300 mb-6">
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-300">
                    <MapPin className="w-4 h-4 text-[#ff4d00] shrink-0" />
                    <span>Door No: 157/w-4, Opp Nadaraj Thirumana Mandabam, Near Nalantha School, Cumbum - 625516</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-300">
                    <Phone className="w-4 h-4 text-[#ff4d00] shrink-0" />
                    <span>Mobile: 93444 21115 / 88666 67528</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-300">
                    <Clock className="w-4 h-4 text-[#ff4d00] shrink-0" />
                    <span>Open Mon – Sat: 8:30 AM – 9:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#e63946] to-[#ff6b00] hover:opacity-95 transition-opacity shadow-lg shadow-[#ff4d00]/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>
                <Link
                  to="/reviews"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-gray-200 bg-[#1e1e1e] hover:bg-[#282828] border border-[#333333] transition-colors"
                >
                  <span>Customer Reviews</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-[#1c1c1c] text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Muthu Automobiles. Door No: 157/w-4, Opp Nadaraj Thirumana Mandabam, Near Nalantha School, Cumbum - 625516. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Services;
