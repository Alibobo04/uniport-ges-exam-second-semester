import React from 'react';
import { Advertisement } from '../../types';
import { Sparkles, MessageCircle, Heart, Phone, Instagram } from 'lucide-react';

interface AdPosterGraphicProps {
  ad: Advertisement;
  compact?: boolean;
}

export const AdPosterGraphic: React.FC<AdPosterGraphicProps> = ({ ad, compact = false }) => {
  if (compact) {
    // Compact banner version optimized for the 3-second slideshow
    return (
      <div className="relative w-full h-full bg-gradient-to-r from-slate-950 via-rose-950/80 to-slate-950 text-white overflow-hidden flex items-center justify-between p-3 sm:p-5">
        {/* Ambient subtle glow */}
        <div className="absolute -left-10 -top-10 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-rose-500/20 rounded-full blur-2xl pointer-events-none" />

        {/* Left Side: Brand & Hook */}
        <div className="relative z-10 flex flex-col justify-center max-w-[65%] sm:max-w-[70%] space-y-1 sm:space-y-1.5">
          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold bg-pink-500/20 text-pink-300 border border-pink-500/30 uppercase tracking-wider">
              <Sparkles className="w-2.5 h-2.5 text-pink-400" />
              {ad.badge}
            </span>
            <span className="text-[10px] text-rose-300/80 hidden md:inline">
              Handmade with Love 💕
            </span>
          </div>

          <h3 className="text-sm sm:text-lg font-black tracking-tight text-white font-serif flex items-center gap-1.5 drop-shadow-sm">
            <span>{ad.businessName}</span>
            <span className="text-pink-400 text-xs hidden sm:inline">• Artisan Beadwork</span>
          </h3>

          <p className="text-[11px] sm:text-xs text-rose-100/90 line-clamp-2 leading-tight">
            Statement beaded bags, custom jewelry, necklaces, bracelets & accessories.
          </p>

          <div className="flex items-center gap-2 pt-0.5">
            <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2 py-0.5 rounded-md">
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp: 09060198616</span>
            </span>
            <span className="text-[10px] text-pink-300 underline font-medium hidden sm:inline">
              Tap to view collections & order →
            </span>
          </div>
        </div>

        {/* Right Side: Visual Showcase Collage Thumbnail */}
        <div className="relative z-10 shrink-0 flex items-center gap-1.5 sm:gap-2">
          {/* Circular Bag Preview 1 - Pearl White */}
          <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-full border-2 border-pink-400/60 shadow-lg overflow-hidden bg-gradient-to-b from-stone-100 to-amber-100/90 p-1 flex flex-col items-center justify-center text-center">
            <div className="text-[18px] sm:text-[24px] leading-none">👜</div>
            <span className="text-[7px] sm:text-[8px] font-bold text-slate-800 uppercase tracking-tighter">
              Pearl Bags
            </span>
          </div>

          {/* Circular Bag Preview 2 - Pink Blossom */}
          <div className="relative w-16 h-16 sm:w-22 sm:h-22 rounded-full border-2 border-pink-500 shadow-xl overflow-hidden bg-gradient-to-b from-pink-100 to-rose-200 p-1 flex flex-col items-center justify-center text-center -ml-3 sm:-ml-4 z-10">
            <div className="text-[20px] sm:text-[28px] leading-none">🌸</div>
            <span className="text-[7px] sm:text-[8px] font-bold text-rose-900 uppercase tracking-tighter">
              Bead Craft
            </span>
          </div>

          {/* Circular Jewelry Preview 3 - Statement Black */}
          <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-full border-2 border-pink-400/60 shadow-lg overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 p-1 flex flex-col items-center justify-center text-center -ml-3 sm:-ml-4 text-white">
            <div className="text-[18px] sm:text-[24px] leading-none">✨</div>
            <span className="text-[7px] sm:text-[8px] font-bold text-pink-300 uppercase tracking-tighter">
              Jewelry
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Full detailed poster representation
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
