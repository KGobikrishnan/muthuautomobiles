import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Wrench, 
  Volume2, 
  Gauge, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  ChevronRight, 
  Flame, 
  Star,
  Zap
} from 'lucide-react';

// Map icons to services
const ICON_MAP = {
  alloys: Wrench,
  polish: Sparkles,
  interior: ShieldCheck,
  accessories: Volume2,
  performance: Gauge,
  wrapping: Layers,
  wrench: Wrench,
  sparkles: Sparkles,
  shield: ShieldCheck,
  zap: Zap
};

export const ServiceCard = ({ service, onEnquire }) => {
  const IconComponent = ICON_MAP[service.iconKey] || Wrench;
  const whatsappUrl = `https://wa.me/919344421115?text=${encodeURIComponent(`Hi Muthu Automobiles Cumbum, I would like to enquire about ${service.name} for my vehicle.`)}`;

  return (
    <div className="group relative bg-[#111111] rounded-2xl p-6 sm:p-7 border border-[#222222] hover:border-[#ff4d00]/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(255,77,0,0.15)]">
      {/* Background glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#e63946]/5 to-[#ff6b00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div>
        {/* Top bar: Icon & Popular Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#252525] border border-[#333333] flex items-center justify-center text-[#ff6b00] group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-[#e63946] group-hover:to-[#ff6b00] group-hover:border-transparent transition-all duration-300 shadow-md">
            <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>

          {service.badge && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#ff4d00]/10 text-[#ff6b00] border border-[#ff4d00]/30 shadow-sm">
              <Flame className="w-3.5 h-3.5 text-[#ff4d00]" />
              {service.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 font-['Outfit'] tracking-tight group-hover:text-[#ff6b00] transition-colors duration-200">
          {service.name}
        </h3>

        {/* Short Description */}
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Key Features / Highlights */}
        {service.highlights && service.highlights.length > 0 && (
          <ul className="space-y-2 mb-6 pt-2 border-t border-[#1f1f1f]">
            {service.highlights.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-[#ff4d00] shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Action CTA Button */}
      <div className="pt-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => onEnquire && onEnquire(service)}
          className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm sm:text-base text-white bg-[#1a1a1a] hover:bg-gradient-to-r hover:from-[#e63946] hover:to-[#ff6b00] border border-[#333333] hover:border-transparent transition-all duration-200 shadow-md group/btn"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366] group-hover/btn:text-white transition-colors" />
          <span>Enquire on WhatsApp</span>
          <ArrowRight className="w-4 h-4 text-gray-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all" />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
