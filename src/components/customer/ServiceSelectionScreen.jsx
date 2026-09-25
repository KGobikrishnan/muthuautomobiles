import React from 'react';
import { useApp } from '../../context/AppContext';
import { MUTHU_SERVICES } from '../../data/mockData';
import {
  ShieldCheck,
  Car,
  CheckCircle2,
  Volume2,
  Armchair,
  Zap,
  Wrench,
  SprayCan,
  Star,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  ChevronRight,
  Plus
} from 'lucide-react';

const ICON_MAP = {
  Volume2,
  Armchair,
  Zap,
  Wrench,
  ShieldCheck,
  SprayCan,
  Sparkles
};

export const ServiceSelectionScreen = () => {
  const {
    business,
    setCustomerStep,
    selectedServices,
    setSelectedServices
  } = useApp();

  const toggleService = (serviceName) => {
    if (selectedServices.includes(serviceName)) {
      setSelectedServices(selectedServices.filter((s) => s !== serviceName));
    } else {
      setSelectedServices([...selectedServices, serviceName]);
    }
  };

  const handleClearAll = () => {
    setSelectedServices([]);
  };

  const handleNext = () => {
    setCustomerStep('good_features');
  };

  return (
    <div className="w-full max-w-[430px] mx-auto flex flex-col items-center gap-3.5 p-1 sm:p-2 animate-fade-in text-center">
      {/* Store Header Card */}
      <div className="w-full bg-gradient-to-br from-[#FAF5FF]/90 via-[#FFFFFF] to-[#EFF6FF]/90 rounded-3xl border border-purple-100/90 shadow-[0_15px_35px_-10px_rgba(37,99,235,0.08)] p-4 sm:p-5 flex flex-col items-center relative overflow-hidden">
        {/* Background sparkles */}
        <div className="absolute top-3 left-4 text-purple-400 text-xs select-none">✦</div>
        <div className="absolute top-8 right-5 text-purple-300 text-xs select-none">✦</div>

        {/* Back Button */}
        <div className="w-full flex items-center justify-between mb-2">
          <button
            onClick={() => setCustomerStep('welcome')}
            className="flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <span className="text-[10px] font-extrabold bg-purple-100 text-purple-700 px-2.5 py-0.5 rounded-full border border-purple-200/60 shadow-2xs">
            Step 1 of 2
          </span>
        </div>

        {/* Store Logo */}
        <div className="relative mb-2 mt-0.5">
          <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden bg-slate-900 shadow-md border-2 border-white ring-3 ring-purple-100/90 flex items-center justify-center">
            {business.logoUrl ? (
              <img
                src={business.logoUrl}
                alt={business.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="font-black text-white text-xl font-['Outfit']">B</span>
            )}
          </div>
          <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-0.5 shadow-md ring-2 ring-white flex items-center justify-center">
            <CheckCircle2 className="w-3 h-3 stroke-[3]" />
          </div>
        </div>

        {/* Store Name */}
        <h1 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight font-heading">
          {business.name}
        </h1>

        {/* Feedback Progress Bar */}
        <div className="w-full max-w-xs mt-3 bg-white p-1 rounded-full border border-purple-100/90 shadow-2xs flex items-center justify-between text-[10px] font-bold text-slate-500">
          <span className="pl-2.5 text-slate-600 font-bold">Your spares & services</span>
          <div className="flex-1 mx-2.5 bg-slate-100 h-2 rounded-full overflow-hidden relative">
            <div className="bg-gradient-to-r from-[#2563EB] via-[#9333EA] to-[#F43F5E] h-full w-[45%] rounded-full shadow-2xs" />
          </div>
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 flex items-center justify-center text-[8px] text-purple-700 font-black mr-1 shadow-2xs">
            ✦
          </div>
          <span className="pr-2 font-black bg-gradient-to-r from-[#2563EB] to-[#9333EA] bg-clip-text text-transparent">45%</span>
        </div>

        {/* Section Heading */}
        <div className="mt-3.5">
          <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
            Which parts or service did you <span className="bg-gradient-to-r from-[#2563EB] via-[#9333EA] to-[#F43F5E] bg-clip-text text-transparent">purchase today?</span>
          </h2>
          <p className="text-[10.5px] font-semibold text-slate-500 max-w-[280px]">
            Select the work done or spares bought at <strong className="text-purple-700 font-bold">Muthu Automobiles Cumbum 🚗</strong>
          </p>
        </div>
      </div>

      {/* Select Services Header with Count & Clear All */}
      <div className="w-full flex items-center justify-between px-1 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-slate-900">Choose Products &amp; Spare Parts</span>
          <span className="text-[10px] font-extrabold bg-purple-100 text-purple-700 px-2.5 py-0.5 rounded-full border border-purple-200/60 shadow-2xs">
            {selectedServices.length} chosen
          </span>
        </div>

        {selectedServices.length > 0 && (
          <button
            onClick={handleClearAll}
            className="flex items-center gap-1 text-[11px] font-bold text-purple-600 hover:text-purple-800 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" /> Clear
          </button>
        )}
      </div>

      {/* Interactive Products & Services List Cards */}
      <div className="w-full space-y-2.5">
        {MUTHU_SERVICES.map((service) => {
          const isSelected = selectedServices.includes(service.name);
          const IconComp = ICON_MAP[service.iconName] || Wrench;

          return (
            <button
              key={service.id}
              onClick={() => toggleService(service.name)}
              className={`w-full bg-white rounded-2xl p-3.5 flex flex-col text-left transition-all duration-200 cursor-pointer border ${
                isSelected
                  ? 'border-purple-500 shadow-md shadow-purple-500/15 ring-2 ring-purple-500/30 bg-purple-50/20 scale-[1.01]'
                  : 'border-slate-200/80 hover:border-purple-300 shadow-2xs hover:shadow-xs'
              }`}
            >
              <div className="flex items-start justify-between gap-3 w-full">
                <div className="flex items-start gap-3 min-w-0 flex-1">
                  {/* Service Icon */}
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${service.color} text-white flex items-center justify-center shrink-0 shadow-sm shadow-purple-500/20`}>
                    <IconComp className="w-5 h-5 stroke-[2.2]" />
                  </div>

                  {/* Service Info */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-extrabold text-xs text-slate-900 leading-tight">
                        {service.name}
                      </span>
                      {service.badge && (
                        <span className="text-[9px] font-extrabold px-2 py-0.2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-md border border-purple-200/70">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] text-slate-500 mt-1 leading-snug font-medium line-clamp-2">
                      {service.desc}
                    </p>

                    {/* Tag Pills */}
                    <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                      {service.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] font-semibold bg-slate-50 text-slate-600 px-2 py-0.5 rounded-lg border border-slate-200/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Selection Checkbox Pill */}
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                  isSelected
                    ? 'border-purple-600 bg-purple-600 text-white shadow-xs'
                    : 'border-slate-300 bg-white'
                }`}>
                  {isSelected ? (
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                  ) : (
                    <Plus className="w-3 h-3 text-slate-400" />
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Floating Continue Button */}
      <button
        onClick={handleNext}
        className="w-full py-3.5 px-4 bg-gradient-to-r from-[#2563EB] via-[#9333EA] to-[#F43F5E] hover:from-[#1D4ED8] hover:via-[#7E22CE] hover:to-[#E11D48] text-white rounded-2xl font-black text-xs sm:text-sm shadow-xl shadow-purple-600/30 flex items-center justify-between transition-all cursor-pointer transform hover:-translate-y-0.5"
      >
        <div className="flex items-center gap-2">
          <span className="tracking-wider uppercase">CONTINUE TO REVIEW DETAILS</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-extrabold bg-white/20 px-2.5 py-0.5 rounded-full">
            {selectedServices.length > 0 ? `${selectedServices.length} selected` : 'Skip / Next'}
          </span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </button>

      {/* Micro Trust Footnote */}
      <div className="flex items-center justify-center gap-3 text-[9.5px] text-slate-400 font-semibold py-1">
        <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-emerald-600" /> 100% Genuine Parts</span>
        <span>|</span>
        <span className="flex items-center gap-1"><Sparkles className="w-3 h-3 text-purple-600" /> Instant AI Review</span>
      </div>
    </div>
  );
};
