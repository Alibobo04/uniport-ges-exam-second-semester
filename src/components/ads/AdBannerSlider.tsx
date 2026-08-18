import React, { useState, useEffect, useCallback } from 'react';
import { ADVERTISEMENTS } from '../../data/advertisementsData';
import { AdPosterGraphic } from './AdPosterGraphic';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Advertisement } from '../../types';

interface AdBannerSliderProps {
  onSelectAd: (adId: string) => void;
}

export const AdBannerSlider: React.FC<AdBannerSliderProps> = ({ onSelectAd }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const ads = ADVERTISEMENTS;
  const totalSlides = ads.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // 3-second auto-slide interval
  useEffect(() => {
    if (isHovered || totalSlides <= 1) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, [isHovered, nextSlide, totalSlides]);

  const currentAd: Advertisement = ads[currentIndex];

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200 group"
      id="advertisement-slideshow-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Banner Tag */}
      <div className="absolute top-2 left-3 z-20 flex items-center gap-1.5 pointer-events-none">
        <span className="bg-slate-900/80 backdrop-blur-xs text-white/90 text-[10px] font-semibold px-2 py-0.5 rounded-md border border-white/10 flex items-center gap-1">
          <Sparkles className="w-2.5 h-2.5 text-pink-400" />
          <span>Sponsored Ad</span>
        </span>
      </div>

      {/* Main Clickable Slide */}
      <div
        onClick={() => onSelectAd(currentAd.id)}
        className="cursor-pointer select-none transition-transform duration-300 active:scale-[0.99]"
        title={`View full details & order from ${currentAd.businessName}`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onSelectAd(currentAd.id);
          }
        }}
      >
        <AdPosterGraphic ad={currentAd} compact={true} />
      </div>

      {/* Left Edge Navigation Arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prevSlide();
        }}
        aria-label="Previous Ad"
        className="absolute left-1.5 sm:left-2.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-xs border border-white/20 transition-all opacity-80 hover:opacity-100 hover:scale-105 active:scale-95 shadow-md cursor-pointer"
        id="ad-prev-slide-btn"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Right Edge Navigation Arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        aria-label="Next Ad"
        className="absolute right-1.5 sm:right-2.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-xs border border-white/20 transition-all opacity-80 hover:opacity-100 hover:scale-105 active:scale-95 shadow-md cursor-pointer"
        id="ad-next-slide-btn"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Slide Indicators / Dots */}
      {totalSlides > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-slate-950/60 backdrop-blur-xs px-2 py-0.5 rounded-full border border-white/10">
          {ads.map((ad, idx) => (
            <button
              key={ad.id}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                idx === currentIndex ? 'w-4 bg-pink-400' : 'bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
