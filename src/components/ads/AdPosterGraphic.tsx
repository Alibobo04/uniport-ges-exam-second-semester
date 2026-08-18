import React from 'react';
import { Advertisement } from '../../types';
import { 
  Sparkles, 
  MessageCircle, 
  Heart, 
  Phone, 
  Instagram, 
  Mail, 
  ShoppingBag, 
  Truck, 
  Shirt 
} from 'lucide-react';

interface AdPosterGraphicProps {
  ad: Advertisement;
  compact?: boolean;
}

export const AdPosterGraphic: React.FC<AdPosterGraphicProps> = ({ ad, compact = false }) => {
  const isAmbCloset = ad.id === 'ambs-closet';

  if (compact) {
    if (isAmbCloset) {
      // Compact banner for AMB'S CLOSET
      return (
        <div className="relative w-full min-h-[175px] sm:min-h-[195px] md:min-h-[210px] bg-gradient-to-r from-slate-950 via-teal-950/90 to-slate-950 text-white overflow-hidden flex flex-row items-center justify-between px-6 sm:px-10 md:px-12 py-5 sm:py-6">
          {/* Ambient subtle glow */}
          <div className="absolute -left-10 -top-10 w-48 h-48 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Left Side: Brand & Hook */}
          <div className="relative z-10 flex flex-col justify-center max-w-[62%] sm:max-w-[68%] md:max-w-[70%] space-y-1.5 sm:space-y-2">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/40 uppercase tracking-wider">
                <ShoppingBag className="w-2.5 h-2.5 text-amber-400" />
                {ad.badge}
              </span>
              <span className="text-[11px] sm:text-xs text-teal-300/90 font-medium hidden xs:inline">
                We Sell Quality • Nationwide Delivery 🚚
              </span>
            </div>

            <h3 className="text-base sm:text-xl md:text-2xl font-black tracking-tight text-white font-serif flex items-center gap-2 drop-shadow-sm">
              <span>{ad.businessName}</span>
              <span className="text-amber-400 text-xs sm:text-sm font-normal hidden sm:inline">• Clothing & Footwear</span>
            </h3>

            <p className="text-xs sm:text-sm text-teal-100/90 line-clamp-2 leading-relaxed">
              Sneakers, corporate shoes, vintage shirts, luxury watches, jerseys & unisex wears.
            </p>

            <div className="flex items-center gap-2 sm:gap-3 pt-1 flex-wrap">
              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-1 rounded-lg shadow-xs">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>WhatsApp: {ad.phoneDisplay || '+234 814 817 3528'}</span>
              </span>
            </div>
          </div>

          {/* Right Side: Visual Showcase Collage Thumbnail */}
          <div className="relative z-10 shrink-0 flex items-center gap-2 sm:gap-3 pl-2">
            {/* Circular Preview 1 - Jerseys */}
            <div className="relative w-16 h-16 sm:w-22 sm:h-22 md:w-24 md:h-24 rounded-full border-2 border-amber-400/80 shadow-xl overflow-hidden bg-gradient-to-b from-red-950 to-slate-900 p-1 flex flex-col items-center justify-center text-center transition-transform group-hover:scale-105">
              <div className="text-[20px] sm:text-[28px] md:text-[32px] leading-none">🏀</div>
              <span className="text-[7px] sm:text-[9px] font-bold text-amber-300 uppercase tracking-tighter mt-0.5">
                Jerseys
              </span>
            </div>

            {/* Circular Preview 2 - Designer Loafers */}
            <div className="relative w-18 h-18 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-2 border-amber-400 shadow-2xl overflow-hidden bg-gradient-to-b from-slate-900 to-amber-950/60 p-1 flex flex-col items-center justify-center text-center -ml-4 sm:-ml-6 md:-ml-7 z-10 transition-transform group-hover:scale-105">
              <div className="text-[24px] sm:text-[32px] md:text-[36px] leading-none">👞</div>
              <span className="text-[7px] sm:text-[9px] font-bold text-amber-200 uppercase tracking-tighter mt-0.5">
                Shoes
              </span>
            </div>

            {/* Circular Preview 3 - Cargo / Streetwear */}
            <div className="relative w-16 h-16 sm:w-22 sm:h-22 md:w-24 md:h-24 rounded-full border-2 border-teal-400/80 shadow-xl overflow-hidden bg-gradient-to-b from-teal-950 to-slate-900 p-1 flex flex-col items-center justify-center text-center -ml-4 sm:-ml-6 md:-ml-7 text-white transition-transform group-hover:scale-105">
              <div className="text-[20px] sm:text-[28px] md:text-[32px] leading-none">👕</div>
              <span className="text-[7px] sm:text-[9px] font-bold text-teal-300 uppercase tracking-tighter mt-0.5">
                Unisex Wears
              </span>
            </div>
          </div>

          {/* Bottom Right Call to Action Button */}
          <div className="absolute bottom-2.5 right-2.5 sm:right-3.5 z-20 pointer-events-none">
            <span className="inline-flex items-center gap-1 bg-amber-400 hover:bg-amber-300 text-slate-950 text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full shadow-md border border-amber-300 transition-transform group-hover:scale-105">
              <span>Tap to view collection</span>
              <span className="text-xs">→</span>
            </span>
          </div>
        </div>
      );
    }

    // Default Compact banner version (LisasBeads)
    return (
      <div className="relative w-full min-h-[175px] sm:min-h-[195px] md:min-h-[210px] bg-gradient-to-r from-slate-950 via-rose-950/85 to-slate-950 text-white overflow-hidden flex flex-row items-center justify-between px-6 sm:px-10 md:px-12 py-5 sm:py-6">
        {/* Ambient subtle glow */}
        <div className="absolute -left-10 -top-10 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Left Side: Brand & Hook */}
        <div className="relative z-10 flex flex-col justify-center max-w-[62%] sm:max-w-[68%] md:max-w-[70%] space-y-1.5 sm:space-y-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-pink-500/25 text-pink-300 border border-pink-500/40 uppercase tracking-wider">
              <Sparkles className="w-2.5 h-2.5 text-pink-400" />
              {ad.badge}
            </span>
            <span className="text-[11px] sm:text-xs text-rose-300/90 font-medium hidden xs:inline">
              Handmade with Love 💕
            </span>
          </div>

          <h3 className="text-base sm:text-xl md:text-2xl font-black tracking-tight text-white font-serif flex items-center gap-2 drop-shadow-sm">
            <span>{ad.businessName}</span>
            <span className="text-pink-400 text-xs sm:text-sm font-normal hidden sm:inline">• Artisan Beadwork</span>
          </h3>

          <p className="text-xs sm:text-sm text-rose-100/90 line-clamp-2 leading-relaxed">
            Statement beaded bags, custom jewelry, necklaces, bracelets & accessories.
          </p>

          <div className="flex items-center gap-2 sm:gap-3 pt-1 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-1 rounded-lg shadow-xs">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>WhatsApp: 09060198616</span>
            </span>
          </div>
        </div>

        {/* Right Side: Visual Showcase Collage Thumbnail */}
        <div className="relative z-10 shrink-0 flex items-center gap-2 sm:gap-3 pl-2">
          {/* Circular Bag Preview 1 - Pearl White */}
          <div className="relative w-16 h-16 sm:w-22 sm:h-22 md:w-24 md:h-24 rounded-full border-2 border-pink-400/70 shadow-xl overflow-hidden bg-gradient-to-b from-stone-100 to-amber-100/95 p-1 flex flex-col items-center justify-center text-center transition-transform group-hover:scale-105">
            <div className="text-[20px] sm:text-[28px] md:text-[32px] leading-none">👜</div>
            <span className="text-[7px] sm:text-[9px] font-bold text-slate-900 uppercase tracking-tighter mt-0.5">
              Pearl Bags
            </span>
          </div>

          {/* Circular Bag Preview 2 - Pink Blossom */}
          <div className="relative w-18 h-18 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-2 border-pink-500 shadow-2xl overflow-hidden bg-gradient-to-b from-pink-100 to-rose-200 p-1 flex flex-col items-center justify-center text-center -ml-4 sm:-ml-6 md:-ml-7 z-10 transition-transform group-hover:scale-105">
            <div className="text-[24px] sm:text-[32px] md:text-[36px] leading-none">🌸</div>
            <span className="text-[7px] sm:text-[9px] font-bold text-rose-950 uppercase tracking-tighter mt-0.5">
              Bead Craft
            </span>
          </div>

          {/* Circular Jewelry Preview 3 - Statement Black */}
          <div className="relative w-16 h-16 sm:w-22 sm:h-22 md:w-24 md:h-24 rounded-full border-2 border-pink-400/70 shadow-xl overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 p-1 flex flex-col items-center justify-center text-center -ml-4 sm:-ml-6 md:-ml-7 text-white transition-transform group-hover:scale-105">
            <div className="text-[20px] sm:text-[28px] md:text-[32px] leading-none">✨</div>
            <span className="text-[7px] sm:text-[9px] font-bold text-pink-300 uppercase tracking-tighter mt-0.5">
              Jewelry
            </span>
          </div>
        </div>

        {/* Bottom Right Call to Action Button */}
        <div className="absolute bottom-2.5 right-2.5 sm:right-3.5 z-20 pointer-events-none">
          <span className="inline-flex items-center gap-1 bg-pink-500 hover:bg-pink-400 text-white text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full shadow-md border border-pink-400 transition-transform group-hover:scale-105">
            <span>Tap to view collections</span>
            <span className="text-xs">→</span>
          </span>
        </div>
      </div>
    );
  }

  // Full detailed poster representation for AMB'S CLOSET
  if (isAmbCloset) {
    return (
      <div className="w-full max-w-xl mx-auto bg-[#023530] text-white rounded-2xl border-2 border-amber-400/40 shadow-2xl overflow-hidden p-5 sm:p-7 relative font-sans">
        {/* Subtle geometric & radial patterns */}
        <div className="absolute inset-0 bg-gradient-to-b from-teal-950/80 via-[#023530] to-slate-950 pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          {/* Top Logo & Header */}
          <div className="flex flex-col items-center justify-center text-center border-b border-teal-800/60 pb-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center shadow-lg mb-2">
              <ShoppingBag className="w-8 h-8 stroke-[2.5]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-amber-300 tracking-wider uppercase font-serif drop-shadow-md">
              AMB'S CLOSET
            </h2>
            <div className="inline-block mt-1 px-3 py-0.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-semibold">
              • WE SELL QUALITY •
            </div>
          </div>

          {/* Clothes Rack Visual Illustration with Actual Realistic Hanging T-Shirts */}
          <div className="relative bg-gradient-to-r from-[#032d29] via-[#023530] to-[#04443e] border border-amber-400/40 rounded-xl p-3 sm:p-4 overflow-hidden shadow-inner">
            <div className="flex items-center justify-between text-xs text-amber-300 font-semibold mb-2 px-1">
              <span className="flex items-center gap-1.5">
                <Shirt className="w-4 h-4 text-amber-400" />
                <span className="font-bold">Quality Men's & Unisex Wears</span>
              </span>
              <span className="text-[10px] text-teal-200 uppercase tracking-wider bg-teal-900/60 px-2 py-0.5 rounded-full border border-teal-700/50">
                Available in All Colors & Sizes
              </span>
            </div>

            {/* Realistic Clothes Rack Container */}
            <div className="relative w-full h-36 sm:h-44 flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-b from-slate-950/70 via-slate-900/60 to-slate-950/80 border border-teal-800/40 pt-1">
              <svg viewBox="0 0 520 180" className="w-full h-full object-contain filter drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Top Black Metal Clothing Bar */}
                <line x1="30" y1="28" x2="490" y2="12" stroke="#1f2937" strokeWidth="6" strokeLinecap="round" />
                <line x1="30" y1="26" x2="490" y2="10" stroke="#4b5563" strokeWidth="1.5" strokeLinecap="round" />

                {/* Shirt 7 - Yellow / Gold (Farthest Right) */}
                <g transform="translate(380, 14)">
                  {/* Hanger */}
                  <path d="M 35 4 L 35 12 L 15 28 L 55 28 Z" fill="#111827" stroke="#374151" strokeWidth="1" />
                  {/* T-Shirt Body */}
                  <path d="M 12 28 C 22 28 25 32 35 32 C 45 32 48 28 58 28 L 74 38 L 68 56 L 56 50 L 56 145 C 56 148 14 148 14 145 L 14 50 L 2 56 L -4 38 Z" fill="#eab308" />
                  {/* Shading & folds */}
                  <path d="M 14 50 L 56 50 L 56 145 L 14 145 Z" fill="#ca8a04" opacity="0.25" />
                  <path d="M 25 32 C 30 36 40 36 45 32 C 40 34 30 34 25 32 Z" fill="#a16207" />
                </g>

                {/* Shirt 6 - Crimson Red */}
                <g transform="translate(325, 17)">
                  {/* Hanger */}
                  <path d="M 35 4 L 35 12 L 15 28 L 55 28 Z" fill="#111827" stroke="#374151" strokeWidth="1" />
                  {/* T-Shirt Body */}
                  <path d="M 12 28 C 22 28 25 32 35 32 C 45 32 48 28 58 28 L 74 38 L 68 56 L 56 50 L 56 148 C 56 151 14 151 14 148 L 14 50 L 2 56 L -4 38 Z" fill="#dc2626" />
                  <path d="M 14 50 L 56 50 L 56 148 L 14 148 Z" fill="#991b1b" opacity="0.25" />
                  <path d="M 25 32 C 30 36 40 36 45 32 C 40 34 30 34 25 32 Z" fill="#7f1d1d" />
                </g>

                {/* Shirt 5 - Earthy Rust Brown */}
                <g transform="translate(270, 20)">
                  {/* Hanger */}
                  <path d="M 35 4 L 35 12 L 15 28 L 55 28 Z" fill="#111827" stroke="#374151" strokeWidth="1" />
                  {/* T-Shirt Body */}
                  <path d="M 12 28 C 22 28 25 32 35 32 C 45 32 48 28 58 28 L 74 38 L 68 56 L 56 50 L 56 150 C 56 153 14 153 14 150 L 14 50 L 2 56 L -4 38 Z" fill="#9a3412" />
                  <path d="M 14 50 L 56 50 L 56 150 L 14 150 Z" fill="#7c2d12" opacity="0.3" />
                  <path d="M 25 32 C 30 36 40 36 45 32 C 40 34 30 34 25 32 Z" fill="#431407" />
                </g>

                {/* Shirt 4 - Royal Violet Purple */}
                <g transform="translate(215, 23)">
                  {/* Hanger */}
                  <path d="M 35 4 L 35 12 L 15 28 L 55 28 Z" fill="#111827" stroke="#374151" strokeWidth="1" />
                  {/* T-Shirt Body */}
                  <path d="M 12 28 C 22 28 25 32 35 32 C 45 32 48 28 58 28 L 74 38 L 68 56 L 56 50 L 56 152 C 56 155 14 155 14 152 L 14 50 L 2 56 L -4 38 Z" fill="#7c3aed" />
                  <path d="M 14 50 L 56 50 L 56 152 L 14 152 Z" fill="#5b21b6" opacity="0.3" />
                  <path d="M 25 32 C 30 36 40 36 45 32 C 40 34 30 34 25 32 Z" fill="#4c1d95" />
                </g>

                {/* Shirt 3 - Forest Emerald Green */}
                <g transform="translate(160, 25)">
                  {/* Hanger */}
                  <path d="M 35 4 L 35 12 L 15 28 L 55 28 Z" fill="#111827" stroke="#374151" strokeWidth="1" />
                  {/* T-Shirt Body */}
                  <path d="M 12 28 C 22 28 25 32 35 32 C 45 32 48 28 58 28 L 74 38 L 68 56 L 56 50 L 56 155 C 56 158 14 158 14 155 L 14 50 L 2 56 L -4 38 Z" fill="#14532d" />
                  <path d="M 14 50 L 56 50 L 56 155 L 14 155 Z" fill="#052e16" opacity="0.35" />
                  <path d="M 25 32 C 30 36 40 36 45 32 C 40 34 30 34 25 32 Z" fill="#022c22" />
                </g>

                {/* Shirt 2 - Charcoal Heather Grey */}
                <g transform="translate(105, 27)">
                  {/* Hanger */}
                  <path d="M 35 4 L 35 12 L 15 28 L 55 28 Z" fill="#111827" stroke="#374151" strokeWidth="1" />
                  {/* T-Shirt Body */}
                  <path d="M 12 28 C 22 28 25 32 35 32 C 45 32 48 28 58 28 L 74 38 L 68 56 L 56 50 L 56 158 C 56 161 14 161 14 158 L 14 50 L 2 56 L -4 38 Z" fill="#4b5563" />
                  <path d="M 14 50 L 56 50 L 56 158 L 14 158 Z" fill="#374151" opacity="0.4" />
                  <path d="M 25 32 C 30 36 40 36 45 32 C 40 34 30 34 25 32 Z" fill="#1f2937" />
                </g>

                {/* Shirt 1 - Deep Pitch Black (Frontmost on left with neck tag) */}
                <g transform="translate(50, 29)">
                  {/* Hanger */}
                  <path d="M 35 4 L 35 12 L 15 28 L 55 28 Z" fill="#030712" stroke="#1f2937" strokeWidth="1.5" />
                  {/* Inner white neck tag */}
                  <rect x="30" y="32" width="10" height="7" rx="1" fill="#f8fafc" />
                  {/* T-Shirt Body */}
                  <path d="M 12 28 C 22 28 25 32 35 32 C 45 32 48 28 58 28 L 76 38 L 70 60 L 56 52 L 56 160 C 56 164 14 164 14 160 L 14 52 L 0 60 L -6 38 Z" fill="#111827" stroke="#1f2937" strokeWidth="1" />
                  {/* Shading & highlights */}
                  <path d="M 14 52 L 56 52 L 56 160 L 14 160 Z" fill="#030712" opacity="0.3" />
                  <path d="M 25 32 C 30 36 40 36 45 32 C 40 34 30 34 25 32 Z" fill="#030712" />
                  <line x1="22" y1="65" x2="22" y2="155" stroke="#1f2937" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
                </g>

                {/* Flier Neon Green Energy Swoosh Overlay across Green/Black shirts */}
                <path d="M 80 100 Q 180 60 290 85" stroke="#22c55e" strokeWidth="3" fill="none" opacity="0.85" />
                <path d="M 110 95 Q 200 68 270 90" stroke="#86efac" strokeWidth="1.5" fill="none" opacity="0.9" />
              </svg>
            </div>
          </div>

          {/* 3 Circular Showcase Cards */}
          <div className="grid grid-cols-3 gap-2.5">
            {/* Bulls / Jordan 23 */}
            <div className="flex flex-col items-center space-y-1.5">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-amber-400 shadow-lg bg-gradient-to-b from-red-950 via-slate-900 to-black flex flex-col items-center justify-center p-2 text-center text-white">
                <span className="text-3xl sm:text-4xl">🏀</span>
                <span className="text-[9px] font-black tracking-tight text-red-400 uppercase mt-1">Jordan 23</span>
              </div>
              <span className="text-[10px] text-amber-200 font-medium text-center">Bulls Jerseys</span>
            </div>

            {/* Fendi Loafers */}
            <div className="flex flex-col items-center space-y-1.5">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-amber-400 shadow-lg bg-gradient-to-b from-amber-950/60 via-slate-900 to-black flex flex-col items-center justify-center p-2 text-center text-white">
                <span className="text-3xl sm:text-4xl">👞</span>
                <span className="text-[9px] font-black tracking-tight text-amber-300 uppercase mt-1">Loafers</span>
              </div>
              <span className="text-[10px] text-amber-200 font-medium text-center">Designer Shoes</span>
            </div>

            {/* Cargo Shorts */}
            <div className="flex flex-col items-center space-y-1.5">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-amber-400 shadow-lg bg-gradient-to-b from-teal-950 via-slate-900 to-black flex flex-col items-center justify-center p-2 text-center text-white">
                <span className="text-3xl sm:text-4xl">🩳</span>
                <span className="text-[9px] font-black tracking-tight text-teal-300 uppercase mt-1">Shorts</span>
              </div>
              <span className="text-[10px] text-amber-200 font-medium text-center">Cargo & Pants</span>
            </div>
          </div>

          {/* List of What We Sell */}
          <div className="bg-teal-950/90 rounded-xl p-4 border border-amber-400/40">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>We Sell Quality Items</span>
            </h4>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-slate-200">
              <div className="flex items-center gap-1.5">
                <span className="text-amber-400">●</span> Sneakers
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-amber-400">●</span> Corporate Shoes
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-amber-400">●</span> Vintage Shirt
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-amber-400">●</span> Watches
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-amber-400">●</span> Shorts
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-amber-400">●</span> Corporate Shirt & Plain Pants
              </div>
              <div className="col-span-2 flex items-center gap-1.5 font-semibold text-amber-300 pt-0.5">
                <span className="text-amber-400">●</span> Unisex Wears & Lots more....
              </div>
            </div>
          </div>

          {/* Delivery Banner */}
          <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-amber-400 text-slate-950 text-xs font-bold shadow-md">
            <Truck className="w-4 h-4" />
            <span>Nation Wide Delivery Service Available</span>
          </div>

          {/* Footer Contacts */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs pt-2 border-t border-teal-800 text-slate-300">
            <div className="flex items-center gap-1.5 text-emerald-400 font-mono font-bold">
              <Phone className="w-3.5 h-3.5" />
              <span>+234 814 817 3528</span>
            </div>

            <div className="flex items-center gap-1.5 text-amber-300 font-mono">
              <Instagram className="w-3.5 h-3.5" />
              <span>@ambs_closet19</span>
            </div>

            <div className="flex items-center gap-1.5 text-teal-300 text-[11px]">
              <Mail className="w-3.5 h-3.5" />
              <span>ambscloset19@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Full detailed poster representation for LisasBeads
  return (
    <div className="w-full max-w-xl mx-auto bg-slate-950 text-white rounded-2xl border-2 border-pink-500/40 shadow-2xl overflow-hidden p-5 sm:p-7 relative">
      {/* Background radial atmosphere */}
      <div className="absolute inset-0 bg-radial from-rose-950/50 via-slate-950 to-slate-950 pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Top Tagline & Sparkles */}
        <div className="flex items-center justify-between text-xs text-pink-300 border-b border-pink-900/40 pb-3">
          <div className="flex items-center gap-1 font-serif italic">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Handmade with Love, Made Just for You!</span>
          </div>
          <Heart className="w-4 h-4 text-pink-500 fill-pink-500/40" />
        </div>

        {/* Circular Bags Showcase Gallery Row */}
        <div className="grid grid-cols-3 gap-3 pt-1">
          {/* Pearl Bag */}
          <div className="flex flex-col items-center space-y-1.5">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-pink-400 shadow-lg bg-gradient-to-b from-amber-50 to-orange-100 flex flex-col items-center justify-center p-2 text-center text-slate-800">
              <span className="text-3xl sm:text-4xl">👜</span>
              <span className="text-[9px] font-bold tracking-tight text-amber-900 mt-1 uppercase">Pearl Bow Bag</span>
            </div>
            <span className="text-[10px] text-pink-200 font-medium text-center">White Pearl Luxe</span>
          </div>

          {/* Pink Blossom Bag */}
          <div className="flex flex-col items-center space-y-1.5">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-pink-400 shadow-lg bg-gradient-to-b from-pink-200 to-rose-300 flex flex-col items-center justify-center p-2 text-center text-slate-800">
              <span className="text-3xl sm:text-4xl">🌺</span>
              <span className="text-[9px] font-bold tracking-tight text-rose-950 mt-1 uppercase">Floral Bead Bag</span>
            </div>
            <span className="text-[10px] text-pink-200 font-medium text-center">Pink Blossom</span>
          </div>

          {/* Monochrome Geometric */}
          <div className="flex flex-col items-center space-y-1.5">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-pink-400 shadow-lg bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col items-center justify-center p-2 text-center text-white border-white/20">
              <span className="text-3xl sm:text-4xl">👝</span>
              <span className="text-[9px] font-bold tracking-tight text-pink-300 mt-1 uppercase">Geometric Bag</span>
            </div>
            <span className="text-[10px] text-pink-200 font-medium text-center">Black & White</span>
          </div>
        </div>

        {/* Center Emblem: LisasBeads */}
        <div className="relative text-center py-4 bg-gradient-to-b from-pink-950/40 to-slate-900/60 rounded-xl border border-pink-500/30 p-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-500/20 border border-pink-400/50 mb-2">
            <span className="text-xl font-bold font-serif text-pink-300">LB</span>
          </div>
          <div className="text-[10px] uppercase tracking-widest text-pink-400 font-semibold">Designers</div>
          <h2 className="text-2xl sm:text-3xl font-black font-serif text-pink-300 tracking-tight drop-shadow-md">
            LisasBeads
          </h2>
          <p className="text-xs text-pink-200/90 uppercase tracking-widest font-semibold mt-0.5">
            • Artisan Beadwork •
          </p>
          <div className="flex justify-center mt-1">
            <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400/30" />
          </div>
        </div>

        {/* Middle Gallery: Layered Necklace & Custom Letter A Box */}
        <div className="grid grid-cols-2 gap-3.5">
          <div className="bg-slate-900/80 border border-pink-900/50 rounded-xl p-3 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-yellow-950/40 border border-yellow-500/40 flex items-center justify-center text-2xl shrink-0">
              📿
            </div>
            <div>
              <div className="text-xs font-bold text-pink-200">Layered Necklaces</div>
              <div className="text-[10px] text-slate-400">Black crystal & bead layers</div>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-pink-900/50 rounded-xl p-3 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-rose-950/40 border border-pink-500/40 flex items-center justify-center text-2xl shrink-0">
              🎁
            </div>
            <div>
              <div className="text-xs font-bold text-pink-200">Letter & Keychains</div>
              <div className="text-[10px] text-slate-400">Custom initial bead gifts</div>
            </div>
          </div>
        </div>

        {/* Our Collections List */}
        <div className="bg-slate-900/90 rounded-xl p-4 border border-pink-800/40">
          <h4 className="text-xs font-bold uppercase tracking-wider text-pink-300 mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Collections & Specialties</span>
          </h4>
          <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-slate-200">
            <div className="flex items-center gap-1.5">
              <span className="text-pink-400">♥</span> Beaded Bags
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-pink-400">♥</span> Beaded Jewelry
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-pink-400">♥</span> Bracelets
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-pink-400">♥</span> Necklaces
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-pink-400">♥</span> Earrings
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-pink-400">♥</span> Anklets
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-pink-400">♥</span> Beaded Key Holders
            </div>
            <div className="flex items-center gap-1.5 font-medium text-pink-300">
              <span className="text-pink-400">♥</span> Custom Bead Orders & More!
            </div>
          </div>
        </div>

        {/* Bottom Connect Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs pt-2 border-t border-pink-900/50 text-slate-300">
          <div className="flex items-center gap-2">
            <Instagram className="w-3.5 h-3.5 text-pink-400" />
            <span className="font-mono text-[11px]">@lisasbeads_official</span>
          </div>

          <div className="flex items-center gap-2 text-emerald-400 font-semibold font-mono">
            <MessageCircle className="w-4 h-4" />
            <span>09060198616</span>
          </div>

          <div className="text-[11px] font-serif italic text-pink-300">
            Beaded with passion, made for you ♡
          </div>
        </div>
      </div>
    </div>
  );
};
