import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  ShieldCheck,
  Car,
  CheckCircle2,
  Lock,
  Sparkles,
  Star,
  Users,
  Send,
  FileText,
  Edit3,
  HeartHandshake,
  Clock,
  Wrench,
  Volume2,
  SprayCan
} from 'lucide-react';

export const CustomerWelcome = () => {
  const { business, setCustomerStep, setSelectedRating } = useApp();

  const handleSelectRating = (rating) => {
    setSelectedRating(rating);
    setCustomerStep('services_selection');
  };

  return (
    <div className="w-full max-w-[430px] mx-auto flex flex-col items-center gap-2.5 p-0.5 sm:p-1 animate-fade-in text-center">

      {/* CARD 1: MAIN HERO FEEDBACK CARD */}
      <div className="w-full bg-gradient-to-br from-[#FAF5FF]/90 via-[#FFFFFF] to-[#EFF6FF]/90 rounded-3xl border border-purple-100/90 shadow-[0_15px_35px_-10px_rgba(37,99,235,0.08)] p-4 sm:p-5 flex flex-col items-center relative overflow-hidden">
        {/* Subtle decorative background sparkles */}
        <div className="absolute top-3 left-4 text-purple-400 text-xs select-none">✦</div>
        <div className="absolute top-10 right-4 text-purple-300 text-xs select-none">✦</div>
        <div className="absolute top-36 right-3 text-pink-300 text-xs select-none">✦</div>
        <div className="absolute -top-8 -left-8 w-24 h-24 bg-blue-100/40 rounded-full blur-xl pointer-events-none" />
        <div className="absolute -top-8 -right-8 w-24 h-24 bg-purple-100/40 rounded-full blur-xl pointer-events-none" />

        {/* Store Logo (Rounded Square & Larger Size) with verified checkmark */}
        <div className="relative mb-2.5 mt-1">
          <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 shadow-lg border-3 border-white ring-4 ring-purple-100/90 flex items-center justify-center">
            {business.logoUrl ? (
              <img
                src={business.logoUrl}
                alt={business.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="font-black text-white text-2xl font-['Outfit']">B</span>
            )}
          </div>
          <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-1 shadow-md ring-2 ring-white flex items-center justify-center">
            <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
          </div>
        </div>

        {/* Store Name & Verification Bar */}
        <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-heading">
          {business.name}
        </h1>

        <div className="flex items-center justify-center gap-2 text-[11px] font-semibold text-slate-500 mt-1 flex-wrap">
          <span className="flex items-center gap-1 text-purple-900 font-extrabold bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 border border-purple-200/80 px-2.5 py-0.5 rounded-full shadow-2xs">
            <ShieldCheck className="w-3 h-3 text-purple-600" /> Cumbum Main Branch
          </span>
          <span className="text-slate-300">•</span>
          <span className="flex items-center gap-1 text-slate-700 font-bold bg-white/80 border border-slate-200/60 px-2 py-0.5 rounded-full">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> {business.rating || '4.9'} Rating ({business.totalReviews || '1850'}+)
          </span>
        </div>

        {/* Feedback Progress Bar with sparkle pin */}
        <div className="w-full max-w-xs mt-3.5 bg-white p-1 rounded-full border border-purple-100/90 shadow-2xs flex items-center justify-between text-[10px] font-bold text-slate-500">
          <span className="pl-2.5 text-slate-600 font-bold">Your experience</span>
          <div className="flex-1 mx-2.5 bg-slate-100 h-2 rounded-full overflow-hidden relative">
            <div className="bg-gradient-to-r from-[#2563EB] via-[#9333EA] to-[#F43F5E] h-full w-[20%] rounded-full shadow-2xs" />
          </div>
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 flex items-center justify-center text-[8px] text-purple-700 font-black mr-1 shadow-2xs">
            ✦
          </div>
          <span className="pr-2 font-black bg-gradient-to-r from-[#2563EB] to-[#9333EA] bg-clip-text text-transparent">20%</span>
        </div>

        {/* Hero Prompt Title */}
        <div className="mt-4">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            How was your experience <span className="underline decoration-[#9333EA] decoration-wavy underline-offset-4">today?</span>
          </h2>
          <p className="text-[11px] text-slate-500 mt-1 flex items-center justify-center gap-1.5 font-medium">
            <span>Your feedback helps us provide genuine auto spares & top service!</span>
            <span className="text-purple-500">🚗</span>
          </p>
        </div>

        {/* 3 Interactive Sentiment Cards with Animated Emojis */}
        <div className="grid grid-cols-3 gap-2 sm:gap-2.5 w-full mt-3 sm:mt-4">
          {/* Loved It (5 Stars) */}
          <button
            onClick={() => handleSelectRating(5)}
            className="group relative bg-white hover:bg-emerald-50/50 border-2 border-emerald-300 hover:border-emerald-500 rounded-2xl p-2.5 sm:p-3 flex flex-col items-center justify-between text-center transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md hover:scale-[1.03]"
          >
            <div className="absolute top-1.5 left-2 text-[9px] text-emerald-400 font-bold select-none">✦</div>
            <div className="text-3xl sm:text-4xl my-1 transform group-hover:scale-115 transition-transform animate-emoji-loved">
              😍
            </div>
            <div>
              <div className="font-black text-xs text-emerald-950 leading-tight">Super Loved It!</div>
              <div className="text-[9px] font-semibold text-emerald-700/90 mt-0.5">5-Star Experience</div>
            </div>
          </button>

          {/* It Was Good (4 Stars) */}
          <button
            onClick={() => handleSelectRating(4)}
            className="group relative bg-white hover:bg-amber-50/50 border-2 border-amber-300 hover:border-amber-500 rounded-2xl p-2.5 sm:p-3 flex flex-col items-center justify-between text-center transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md hover:scale-[1.03]"
          >
            <div className="absolute top-1.5 left-2 text-[9px] text-amber-400 font-bold select-none">✦</div>
            <div className="absolute top-1.5 right-2 text-[9px] text-amber-400 font-bold select-none">✦</div>
            <div className="text-3xl sm:text-4xl my-1 transform group-hover:scale-115 transition-transform animate-emoji-good">
              😊
            </div>
            <div>
              <div className="font-black text-xs text-amber-950 leading-tight">Good Quality</div>
              <div className="text-[9px] font-semibold text-amber-700/90 mt-0.5">4-Star Experience</div>
            </div>
          </button>

          {/* I Have Feedback (Private Interception) */}
          <button
            onClick={() => setCustomerStep('bad_questions')}
            className="group relative bg-white hover:bg-rose-50/50 border-2 border-rose-300 hover:border-rose-500 rounded-2xl p-2.5 sm:p-3 flex flex-col items-center justify-between text-center transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md hover:scale-[1.03]"
          >
            <div className="absolute top-1.5 left-2 text-[9px] text-rose-400 font-bold select-none">✦</div>
            <div className="text-3xl sm:text-4xl my-1 transform group-hover:scale-115 transition-transform animate-emoji-feedback">
              😐
            </div>
            <div>
              <div className="font-black text-xs text-rose-950 leading-tight">I have feedback</div>
              <div className="text-[9px] font-semibold text-rose-700/90 mt-0.5">Talk to manager</div>
            </div>
          </button>
        </div>

        {/* Micro Reassurance Footer */}
        <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 font-semibold mt-4 pt-2.5 border-t border-purple-100/70 flex-wrap">
          <span className="flex items-center gap-1 text-slate-600"><Clock className="w-3 h-3 text-purple-600" /> Takes ~30s</span>
          <span>•</span>
          <span>No registration required</span>
          <span>•</span>
          <span className="flex items-center gap-1 text-slate-600"><ShieldCheck className="w-3 h-3 text-emerald-600" /> 100% Anonymous</span>
        </div>
      </div>

      {/* CARD 2: PRIVATE & SECURE FEEDBACK ENGINE CARD */}
      <div className="w-full bg-gradient-to-br from-[#FAF5FF]/80 via-[#FFFFFF] to-[#EFF6FF]/80 rounded-3xl border border-purple-100/90 shadow-[0_15px_35px_-10px_rgba(37,99,235,0.06)] p-4 flex flex-col relative overflow-hidden text-left">
        <div className="flex items-center gap-3.5">
          {/* 3D Visual Feedback Illustration Card */}
          <div className="w-[125px] sm:w-[135px] shrink-0 bg-gradient-to-b from-purple-50/80 via-white to-blue-50/40 p-2.5 rounded-2xl border border-purple-100 relative flex flex-col items-center justify-center shadow-inner">
            {/* 3D Paper Sheet with Speech Bubble & Stars */}
            <div className="w-full bg-white rounded-xl shadow-md border border-slate-100 p-2 flex flex-col items-center relative">
              {/* Brand Gradient Indicator */}
              <div className="w-10 h-3.5 bg-gradient-to-r from-blue-100 to-purple-100 rounded-md border border-purple-200 flex items-center justify-center mb-1.5">
                <div className="w-5 h-1 bg-purple-500 rounded-full" />
              </div>
              {/* 5 Gold Stars */}
              <div className="flex items-center gap-0.5 text-amber-400 mb-1.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              {/* Placeholder text lines */}
              <div className="w-full space-y-1">
                <div className="w-3/4 h-1 bg-slate-200 rounded-full" />
                <div className="w-full h-1 bg-slate-200 rounded-full" />
                <div className="w-1/2 h-1 bg-slate-200 rounded-full" />
              </div>
            </div>

            {/* Checkmark Podium Badge */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r from-[#2563EB] to-[#9333EA] text-white flex items-center justify-center shadow-md ring-2 ring-white">
              <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
            </div>

            {/* Sparkle accent */}
            <div className="text-[10px] text-purple-500 font-bold absolute -top-1 -left-1 select-none">✦</div>
          </div>

          {/* Right Header Content */}
          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 text-purple-900 border border-purple-200/80 rounded-full text-[8px] font-black uppercase tracking-wider mb-1 shadow-2xs">
              <Sparkles className="w-2.5 h-2.5 text-purple-600" />
              <span>Muthu Automobiles Cumbum</span>
            </div>

            <h3 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
              Customer First <br /><span className="bg-gradient-to-r from-[#2563EB] via-[#9333EA] to-[#F43F5E] bg-clip-text text-transparent">Quality Assurance</span>
            </h3>
            <p className="text-[9.5px] text-slate-500 mt-0.5 font-medium leading-tight line-clamp-2">
              Providing genuine automobile spares, clutches, brakes, filters and mechanical parts in Cumbum.
            </p>
          </div>
        </div>

        {/* 3 Privacy Columns with Connector Lines */}
        <div className="grid grid-cols-3 gap-1 w-full mt-3 text-center relative">
          <div className="absolute top-3.5 left-10 right-10 h-0.5 border-t border-dashed border-purple-200 -z-0" />

          {/* Item 1 */}
          <div className="flex flex-col items-center relative z-10">
            <div className="w-7 h-7 rounded-full bg-purple-50 border border-purple-200 text-purple-700 flex items-center justify-center mb-1 shadow-xs">
              <Lock className="w-3 h-3" />
            </div>
            <div className="font-black text-[10px] text-slate-900 leading-tight">Direct to Shop</div>
            <div className="text-[8px] text-slate-400 font-medium">Private attention</div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center relative z-10">
            <div className="w-7 h-7 rounded-full bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center mb-1 shadow-xs">
              <Send className="w-3 h-3" />
            </div>
            <div className="font-black text-[10px] text-slate-900 leading-tight">Instant Review</div>
            <div className="text-[8px] text-slate-400 font-medium">AI-powered 5★</div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center relative z-10">
            <div className="w-7 h-7 rounded-full bg-pink-50 border border-pink-200 text-pink-700 flex items-center justify-center mb-1 shadow-xs">
              <Users className="w-3 h-3" />
            </div>
            <div className="font-black text-[10px] text-slate-900 leading-tight">Expert Support</div>
            <div className="text-[8px] text-slate-400 font-medium">Quick callback</div>
          </div>
        </div>

        {/* Enterprise Security Pill Banner */}
        <div className="w-full py-1.5 mt-3.5 bg-gradient-to-r from-blue-50/90 via-purple-50/90 to-pink-50/90 rounded-2xl border border-purple-200/70 text-[9.5px] font-extrabold text-purple-950 flex items-center justify-center gap-1.5 shadow-2xs">
          <ShieldCheck className="w-3.5 h-3.5 text-purple-600 shrink-0" />
          <span>Muthu Automobiles Certified Review &amp; Quality Touchpoint</span>
        </div>
      </div>

      {/* CARD 3: WHAT HAPPENS NEXT EXPLAINER */}
      <div className="w-full bg-gradient-to-br from-[#FAF5FF]/80 via-[#FFFFFF] to-[#EFF6FF]/80 rounded-3xl border border-purple-100/90 shadow-[0_15px_35px_-10px_rgba(37,99,235,0.06)] p-4 text-left">
        <h3 className="text-xs sm:text-sm font-black text-slate-900 text-center flex items-center justify-center gap-2 mb-3">
          <span className="text-purple-500">✦</span> What happens next? <span className="text-purple-500">✦</span>
        </h3>

        <div className="grid grid-cols-2 gap-2.5">
          {/* GOOD FLOW STEPPING */}
          <div className="bg-white/95 rounded-2xl p-3 border border-emerald-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 mb-2.5">
                <span className="text-xl animate-emoji-loved">😍</span>
                <div>
                  <div className="font-black text-[11px] text-emerald-950">Loved the parts!</div>
                  <div className="text-[8.5px] font-medium text-emerald-700 leading-tight">Post your 5★ review on Google Maps.</div>
                </div>
              </div>

              <div className="space-y-2 my-2 text-[10px]">
                <div className="flex items-start gap-1.5 text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-2.5 h-2.5" />
                  </div>
                  <div>
                    <div className="font-black text-slate-900 text-[10px]">Pick spares</div>
                    <div className="text-[8px] text-slate-400 font-medium">Brakes, clutch, filters, suspension</div>
                  </div>
                </div>

                <div className="flex items-start gap-1.5 text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center shrink-0 mt-0.5">
                    <FileText className="w-2.5 h-2.5" />
                  </div>
                  <div>
                    <div className="font-black text-slate-900 text-[10px]">AI review draft</div>
                    <div className="text-[8px] text-slate-400 font-medium">Auto-copied to clipboard</div>
                  </div>
                </div>

                <div className="flex items-start gap-1.5 text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center text-[9px] font-black shrink-0 mt-0.5">
                    G
                  </div>
                  <div>
                    <div className="font-black text-slate-900 text-[10px]">Share on Google</div>
                    <div className="text-[8px] text-slate-400 font-medium">Post in 5 seconds</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PRIVATE FLOW STEPPING */}
          <div className="bg-white/95 rounded-2xl p-3 border border-rose-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 mb-2.5">
                <span className="text-xl animate-emoji-feedback">😐</span>
                <div>
                  <div className="font-black text-[11px] text-rose-950">Have a concern?</div>
                  <div className="text-[8.5px] font-medium text-rose-700 leading-tight">Tell us directly so our team can fix it.</div>
                </div>
              </div>

              <div className="space-y-2 my-2 text-[10px]">
                <div className="flex items-start gap-1.5 text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-rose-100 text-rose-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Edit3 className="w-2.5 h-2.5" />
                  </div>
                  <div>
                    <div className="font-black text-slate-900 text-[10px]">Share issue</div>
                    <div className="text-[8px] text-slate-400 font-medium">Fitting, wiring or delay</div>
                  </div>
                </div>

                <div className="flex items-start gap-1.5 text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Lock className="w-2.5 h-2.5" />
                  </div>
                  <div>
                    <div className="font-black text-slate-900 text-[10px]">Goes to workshop</div>
                    <div className="text-[8px] text-slate-400 font-medium">100% confidential alert</div>
                  </div>
                </div>

                <div className="flex items-start gap-1.5 text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <HeartHandshake className="w-2.5 h-2.5" />
                  </div>
                  <div>
                    <div className="font-black text-slate-900 text-[10px]">Fast resolution</div>
                    <div className="text-[8px] text-slate-400 font-medium">Guaranteed satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
