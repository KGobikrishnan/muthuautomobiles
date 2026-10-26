import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import {
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Heart,
  Zap,
  Star,
  Copy,
  ExternalLink,
  Edit2,
  Camera,
  RotateCw,
  Cpu,
  Car,
  ShieldCheck
} from 'lucide-react';

export const ReviewDraftScreen = () => {
  const {
    setCustomerStep,
    aiDraft,
    setAiDraft,
    aiTones,
    aiKeywords,
    generateLiveAiReview,
    isGeneratingAi,
    selectedGoodTags,
    customerComment,
    business,
    setShowGoogleModal,
    selectedServices,
    selectedRating
  } = useApp();

  const [activeTone, setActiveTone] = useState('seo');
  const [isEditingCard, setIsEditingCard] = useState(false);

  const serviceContext = selectedServices && selectedServices.length > 0
    ? selectedServices.join(" & ")
    : "genuine auto spares & mechanical parts";

  const is5Star = Number(selectedRating) >= 5;

  // Dynamic tones powered by Gemini AI with high-converting smart defaults
  const tones = [
    {
      id: 'seo',
      title: 'Local Guide SEO',
      match: '99% Boost',
      icon: Zap,
      draft: aiTones?.seo || (is5Star
        ? `5-star experience at ${business.name}, Cumbum! Purchased genuine ${serviceContext}. Everything was authentic OEM quality with exact fitting, fair rates, and prompt service. The best automobile spare parts shop in Cumbum! 🚗🔧`
        : `Good 4-star experience at ${business.name} in Cumbum. Bought ${serviceContext}. Genuine parts, honest pricing, and helpful counter staff. Definitely recommended!`)
    },
    {
      id: 'enthusiastic',
      title: 'Enthusiastic & Warm',
      match: '98% Boost',
      icon: Heart,
      draft: aiTones?.enthusiastic || (is5Star
        ? `Blown away by ${business.name}! Readily available stock for ${serviceContext} and super genuine quality. The team assisted with the exact part numbers and gave great rates. Cannot wait to recommend to all car owners! ⭐⭐⭐⭐⭐`
        : `Really happy with the service at ${business.name}! Found exact ${serviceContext} without hassle. Knowledgeable team and quick service. 👍🚗`)
    },
    {
      id: 'short',
      title: 'Short & Direct',
      match: '96% Boost',
      icon: Zap,
      draft: aiTones?.short || (is5Star
        ? `Great visit to ${business.name} in Cumbum. Got ${serviceContext}. Fast billing, original spare parts, and friendly staff. Highly recommend!`
        : `Decent and prompt service for ${serviceContext} at ${business.name}. Fair pricing and genuine spares.`)
    },
    {
      id: 'detailed',
      title: 'Detailed Story',
      match: '95% Boost',
      icon: Star,
      draft: aiTones?.detailed || (is5Star
        ? `Visited ${business.name} in Cumbum today for ${serviceContext} and was thoroughly satisfied. 100% genuine spares, transparent pricing, and courteous staff guidance. The premier auto parts destination in the region!`
        : `Got genuine ${serviceContext} from ${business.name}, Cumbum. Exact part match, authentic packaging, and quick counter dispatch. Solid experience overall.`)
    }
  ];

  // Dynamic SEO keywords tailored for Muthu Automobiles Cumbum
  const activeKeywords = aiKeywords && aiKeywords.length > 0
    ? aiKeywords
    : ['Muthu Automobiles Cumbum', '100% Genuine Spares', 'All Car Brands Stock', 'Affordable Pricing', 'Exact Part Number', 'Cumbum Spare Parts'];

  // Sync draft when active tone or aiTones updates
  useEffect(() => {
    const selectedToneObj = tones.find(t => t.id === activeTone);
    if (selectedToneObj && selectedToneObj.draft) {
      setAiDraft(selectedToneObj.draft);
    }
  }, [aiTones, activeTone]);

  const handleSelectTone = (tone) => {
    setActiveTone(tone.id);
    setAiDraft(tone.draft);
  };

  const handleRegenerate = async () => {
    await generateLiveAiReview(selectedGoodTags, customerComment, selectedServices, selectedRating);
  };

  const handleProceedToGoogle = () => {
    // 1. Copy draft to clipboard
    if (aiDraft) {
      navigator.clipboard.writeText(aiDraft);
    }

    // 2. Open Google Review URL directly
    const targetUrl = business.googlePlaceUrl || 'https://g.page/r/CYvzhQUHWixPEBM/review';
    window.open(targetUrl, '_blank', 'noopener,noreferrer');

    // 3. Trigger thank-you modal
    setShowGoogleModal(true);
  };

  return (
    <div className="w-full max-w-[430px] mx-auto flex flex-col items-center gap-3.5 p-1 sm:p-2 animate-fade-in text-center">
      {/* Store Header Card */}
      <div className="w-full bg-gradient-to-br from-[#FAF5FF]/90 via-[#FFFFFF] to-[#EFF6FF]/90 rounded-3xl border border-purple-100/90 shadow-[0_15px_35px_-10px_rgba(37,99,235,0.08)] p-4 sm:p-5 flex flex-col items-center relative overflow-hidden text-center">
        {/* Background sparkles */}
        <div className="absolute top-3 left-4 text-purple-400 text-xs select-none">✦</div>
        <div className="absolute top-8 right-5 text-purple-300 text-xs select-none">✦</div>

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

        {/* Store Name */}
        <div className="flex items-center justify-center gap-1.5">
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-heading">
            {business.name}
          </h1>
        </div>

        <div className="flex items-center justify-center gap-2 text-[11px] font-semibold text-slate-500 mt-1 flex-wrap">
          <span className="flex items-center gap-1 text-purple-900 font-extrabold bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 border border-purple-200/80 px-2.5 py-0.5 rounded-full shadow-2xs">
            <ShieldCheck className="w-3 h-3 text-purple-600" /> Verified Business
          </span>
          <span className="text-slate-300">•</span>
          <span className="flex items-center gap-1 text-slate-700 font-bold bg-white/80 border border-slate-200/60 px-2 py-0.5 rounded-full">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> {business.rating || '4.9'} Rating
          </span>
        </div>

        {/* Feedback Progress Bar */}
        <div className="w-full max-w-xs mt-3.5 bg-white p-1 rounded-full border border-purple-100/90 shadow-2xs flex items-center justify-between text-[10px] font-bold text-slate-500">
          <span className="pl-2.5 text-slate-600 font-bold">Your feedback</span>
          <div className="flex-1 mx-2.5 bg-slate-100 h-2 rounded-full overflow-hidden relative">
            <div className="bg-gradient-to-r from-[#2563EB] via-[#9333EA] to-[#F43F5E] h-full w-[90%] rounded-full shadow-2xs" />
          </div>
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 flex items-center justify-center text-[8px] text-purple-700 font-black mr-1 shadow-2xs">
            ✦
          </div>
          <span className="pr-2 font-black bg-gradient-to-r from-[#2563EB] to-[#9333EA] bg-clip-text text-transparent">90%</span>
        </div>
      </div>

      {/* Main Review Studio Card */}
      <div className="w-full bg-gradient-to-br from-[#FAF5FF]/90 via-[#FFFFFF] to-[#EFF6FF]/90 rounded-3xl border border-purple-100/90 shadow-[0_15px_35px_-10px_rgba(37,99,235,0.08)] p-4 sm:p-5 text-left">
        {/* Navigation Header */}
        <div className="flex items-center justify-between mb-3.5">
          <button
            onClick={() => setCustomerStep('good_features')}
            className="flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Edit Features
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-800 border border-emerald-200 rounded-full text-xs font-extrabold shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Google Review Ready</span>
          </div>
        </div>

      {/* Main Title with Live AI Badge */}
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-purple-100/80 text-purple-900 border border-purple-200/80 rounded-full text-[9px] font-black uppercase tracking-wider mb-1">
            <Sparkles className="w-3 h-3 text-purple-600 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Mozhi Review Studio Powered</span>
          </div>

          <button
            onClick={handleRegenerate}
            disabled={isGeneratingAi}
            className="flex items-center gap-1 text-[11px] font-extrabold text-purple-600 hover:text-purple-900 bg-white border border-purple-200 px-2.5 py-1 rounded-xl shadow-2xs transition-all cursor-pointer disabled:opacity-50"
            title="Generate fresh, non-repetitive variations"
          >
            <RotateCw className={`w-3 h-3 ${isGeneratingAi ? 'animate-spin' : ''}`} />
            <span>{isGeneratingAi ? 'Crafting...' : 'Fresh Variation'}</span>
          </button>
        </div>

        <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight font-heading mt-0.5">
          Mozhi Review Studio
        </h2>
        <p className="text-xs text-slate-500 mt-0.5 font-medium">
          Choose your favorite tone or tap keywords to live-boost Google ranking.
        </p>
      </div>

      {/* Select Tone Section */}
      <div className="mb-4">
        <div className="text-[10px] font-black text-purple-900 uppercase tracking-wider mb-2 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-purple-600" /> SELECT TONE &amp; PERSONALITY
        </div>

        <div className="grid grid-cols-2 gap-2">
          {tones.map((t) => {
            const isSelected = activeTone === t.id;
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => handleSelectTone(t)}
                className={`p-2.5 sm:p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-purple-500/30'
                    : 'bg-white text-slate-800 border-slate-200/80 hover:border-purple-300 hover:bg-slate-50/80 shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <div className={`p-1.5 rounded-xl ${isSelected ? 'bg-gradient-to-r from-[#2563EB] to-[#9333EA] text-white' : 'text-purple-600 bg-purple-50 border border-purple-100'}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className={`text-[8.5px] font-black px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-emerald-500/20 text-emerald-300' : 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                  }`}>
                    {t.match}
                  </span>
                </div>
                <div className="font-extrabold text-xs leading-tight mt-1">{t.title}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Simulated Google Review Card Container */}
      <div className="bg-white rounded-3xl border border-purple-100/90 shadow-md p-3.5 sm:p-4 mb-4 relative">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xs shadow-xs">
              G
            </div>
            <div>
              <div className="text-xs font-extrabold text-slate-900 leading-tight">Google Maps Review Card</div>
              <div className="text-[10px] text-slate-400 font-medium">{business.name}</div>
            </div>
          </div>

          <button
            onClick={() => setIsEditingCard(!isEditingCard)}
            className="text-xs font-bold text-purple-600 hover:text-purple-700 flex items-center gap-1 cursor-pointer"
          >
            <Edit2 className="w-3 h-3" /> {isEditingCard ? 'Done' : 'Edit'}
          </button>
        </div>

        {/* 5 Stars Rating Indicator */}
        <div className="flex items-center gap-1 text-amber-400 mb-2">
          {[1, 2, 3, 4, 5].map(s => (
            <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
          <span className="text-slate-800 text-xs font-black ml-1">5.0</span>
        </div>

        {/* Review Draft Text Area / Shimmer */}
        <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/80 mb-2.5 min-h-[90px] flex items-center">
          {isGeneratingAi ? (
            <div className="w-full space-y-2 py-1">
              <div className="flex items-center gap-2 text-purple-600 text-xs font-bold animate-pulse">
                <Sparkles className="w-3.5 h-3.5 animate-spin" />
                <span>Mozhi AI is analyzing &amp; crafting your custom review...</span>
              </div>
              <div className="h-2 bg-purple-100 rounded-full w-full animate-pulse" />
              <div className="h-2 bg-purple-100 rounded-full w-3/4 animate-pulse" />
            </div>
          ) : isEditingCard ? (
            <textarea
              value={aiDraft}
              onChange={(e) => setAiDraft(e.target.value)}
              rows={4}
              className="w-full text-xs font-medium text-slate-800 bg-white p-2 rounded-xl border border-purple-200 outline-none focus:ring-2 focus:ring-purple-500"
            />
          ) : (
            <p className="text-xs text-slate-700 font-medium leading-relaxed italic">
              &quot;{aiDraft}&quot;
            </p>
          )}
        </div>

        {/* Card Footer Features */}
        <div className="flex items-center justify-between text-[10.5px] font-semibold text-slate-500">
          <span className="flex items-center gap-1 text-slate-600">
            <Camera className="w-3.5 h-3.5 text-purple-600" /> Photo Attached (+20% Visibility)
          </span>
          <span className="text-purple-600 font-black flex items-center gap-1">
            <Copy className="w-3 h-3" /> Auto-Copied
          </span>
        </div>
      </div>

      {/* Main Copy & Redirect Button */}
      <div>
        <button
          onClick={handleProceedToGoogle}
          disabled={isGeneratingAi}
          className="w-full flex items-center justify-center gap-2 p-3.5 sm:p-4 bg-gradient-to-r from-[#2563EB] via-[#9333EA] to-[#F43F5E] hover:from-[#1D4ED8] hover:via-[#7E22CE] hover:to-[#E11D48] text-white rounded-2xl font-black text-xs sm:text-sm shadow-xl shadow-purple-600/30 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
        >
          <Copy className="w-4 h-4" />
          <span>COPY &amp; LAUNCH GOOGLE REVIEW</span>
          <ExternalLink className="w-4 h-4" />
        </button>
        <p className="text-[10.5px] text-center text-slate-400 font-medium mt-1.5">
          Copies text to clipboard &amp; redirects to Google Maps in 1-tap.
        </p>
      </div>

        <div className="text-[9.5px] text-center text-slate-400 mt-3 border-t border-purple-100/70 pt-2 font-medium">
          Mozhi Review Studio generates non-repetitive, SEO-optimized reviews. You maintain full control on Google.
        </div>
      </div>
    </div>
  );
};
