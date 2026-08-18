import React, { useEffect, useState } from 'react';
import { Advertisement } from '../../types';
import { AdPosterGraphic } from './AdPosterGraphic';
import { recordAdClickRedirect, subscribeToAdMetrics } from '../../lib/adAnalyticsService';
import { 
  ArrowLeft, 
  MessageCircle, 
  Phone, 
  Sparkles, 
  Heart, 
  ExternalLink, 
  CheckCircle2, 
  Instagram, 
  Mail, 
  Share2,
  ShieldCheck,
  Truck,
  Users
} from 'lucide-react';

interface AdDetailViewProps {
  ad: Advertisement;
  onBack: () => void;
}

export const AdDetailView: React.FC<AdDetailViewProps> = ({ ad, onBack }) => {
  const [clickCount, setClickCount] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Record unique device redirect/click in Firestore
    recordAdClickRedirect(ad.id).then((count) => {
      if (typeof count === 'number' && count > 0) {
        setClickCount(count);
      }
    });

    // Real-time listener for unique device count
    const unsubscribe = subscribeToAdMetrics(ad.id, (uniqueClicks) => {
      if (typeof uniqueClicks === 'number') {
        setClickCount(uniqueClicks);
      }
    });

    return () => unsubscribe();
  }, [ad.id]);

  const isAmbCloset = ad.id === 'ambs-closet';

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: ad.title,
          text: `${ad.tagline}\n\n${ad.businessName} on UNIPORT GES Hub`,
          url: window.location.href,
        });
      } catch {
        // Fallback or ignore cancel
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto" id="ad-detail-page-container">
      {/* Top Navigation & Back Button */}
      <div className="flex items-center justify-between gap-3 bg-white border border-slate-200 rounded-xl p-3.5 sm:p-4 shadow-xs">
        <button
          onClick={onBack}
          className="text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 active:bg-slate-900 text-white transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          id="back-from-ad-btn"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Courses</span>
        </button>

        <div className="flex items-center gap-2">
          {/* People Count Badge */}
          <div 
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs"
            title="Total number of unique devices/people that clicked this ad from the slide"
          >
            <Users className="w-3.5 h-3.5 text-blue-600" />
            <span>{clickCount !== null ? clickCount.toLocaleString() : '1'}</span>
          </div>

          <button
            onClick={handleShare}
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors text-xs flex items-center gap-1 cursor-pointer"
            title="Share this business"
          >
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline">Share</span>
          </button>

          <a
            href={ad.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-bold px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white transition-all flex items-center gap-1.5 shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{isAmbCloset ? 'Join WhatsApp Group / Order' : 'Chat on WhatsApp'}</span>
          </a>
        </div>
      </div>

      {/* Main Two-Column Showcase Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Visual Flyer Graphic */}
        <div className="lg:col-span-6 flex flex-col items-center justify-start">
          <AdPosterGraphic ad={ad} compact={false} />
        </div>

        {/* Right Column: Information, Business Write-up, & CTA */}
        <div className="lg:col-span-6 space-y-5">
          {/* Header & Badges */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-3">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2">
                <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                  isAmbCloset 
                    ? 'bg-amber-100 text-amber-800 border border-amber-300' 
                    : 'bg-pink-100 text-pink-700 border border-pink-200'
                }`}>
                  <Sparkles className={`w-3 h-3 ${isAmbCloset ? 'text-amber-600' : 'text-pink-600'}`} />
                  {ad.badge}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Verified Vendor
                </span>
              </div>

              {/* Little People / Unique Devices Clicked Icon & Count */}
              <div 
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100/90 text-slate-700 border border-slate-200 text-xs font-semibold shadow-2xs"
                title="Number of unique people/devices who clicked this ad"
              >
                <Users className="w-3.5 h-3.5 text-blue-600" />
                <span>
                  {clickCount !== null ? clickCount.toLocaleString() : '1'} {clickCount === 1 ? 'person tapped' : 'people tapped'}
                </span>
              </div>
            </div>

            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-serif tracking-tight">
              {ad.businessName}
            </h1>

            <p className={`text-xs sm:text-sm font-semibold italic ${isAmbCloset ? 'text-teal-700' : 'text-pink-600'}`}>
              {ad.tagline}
            </p>

            <div className="border-t border-slate-100 pt-3">
              {/* Exact User Copy Block */}
              {isAmbCloset ? (
                <div className="bg-teal-50/80 border border-teal-200 rounded-xl p-4 text-slate-800 text-xs sm:text-sm leading-relaxed space-y-3">
                  <p className="font-bold text-teal-950 text-sm">
                    Upgrade your wardrobe with AMB’S CLOSET.
                  </p>

                  <p>
                    We offer quality men’s and unisex clothing and sneakers at affordable prices, with delivery available nationwide.
                  </p>

                  <p className="font-semibold text-slate-900">
                    📩 Contact us today to place your order.
                  </p>

                  <div className="pt-1">
                    <a
                      href={ad.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 px-3 py-1.5 rounded-lg border border-emerald-300 transition-colors"
                    >
                      <Users className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Join WhatsApp Community & Order Link →</span>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="bg-rose-50/70 border border-rose-100 rounded-xl p-4 text-slate-800 text-xs sm:text-sm leading-relaxed space-y-3">
                  <p className="font-medium text-slate-900">
                    💕 Looking for something unique and beautiful?
                  </p>

                  <p>
                    Welcome to <strong className="text-pink-700">LisasBeads</strong>, where passion meets creativity. From statement bags to handcrafted accessories, we've got you. 🥰
                  </p>

                  <p className="font-medium text-slate-900">
                    📱📩 Send us a message to place your order.
                  </p>

                  <p className="font-semibold text-emerald-800">
                    Message LisasBeads on WhatsApp.
                  </p>
                </div>
              )}
            </div>

            {/* Direct WhatsApp Call to Action Button */}
            <div className="pt-2">
              <a
                href={ad.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                id="main-whatsapp-cta-btn"
              >
                <MessageCircle className="w-5 h-5" />
                <span>
                  {isAmbCloset 
                    ? `Open WhatsApp Group / Order (${ad.phoneDisplay || '+234 814 817 3528'})`
                    : `Open LisasBeads on WhatsApp (${ad.phoneDisplay || '09060198616'})`
                  }
                </span>
                <ExternalLink className="w-4 h-4 opacity-80" />
              </a>
            </div>
          </div>

          {/* Catalog & Collections */}
          {ad.collections && (
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                {isAmbCloset ? (
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                ) : (
                  <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
                )}
                <span>Available Collections</span>
              </h3>

              <div className="grid grid-cols-2 gap-2">
                {ad.collections.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 border border-slate-100 rounded-lg p-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact Details & Social Channels */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Direct Contact & Channels
            </h3>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="text-slate-500 font-medium">WhatsApp / Call:</span>
                <a
                  href={`tel:${ad.whatsappNumber}`}
                  className="font-mono font-bold text-slate-900 hover:text-emerald-700 flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{ad.phoneDisplay || '+234 814 817 3528'}</span>
                </a>
              </div>

              {ad.instagram && (
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-500 font-medium">Instagram:</span>
                  <span className="font-mono font-semibold text-pink-600 flex items-center gap-1">
                    <Instagram className="w-3.5 h-3.5" />
                    <span>{ad.instagram}</span>
                  </span>
                </div>
              )}

              {ad.email && (
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-500 font-medium">Email Address:</span>
                  <a
                    href={`mailto:${ad.email}`}
                    className="font-mono font-semibold text-teal-700 hover:underline flex items-center gap-1"
                  >
                    <Mail className="w-3.5 h-3.5 text-teal-600" />
                    <span>{ad.email}</span>
                  </a>
                </div>
              )}

              <div className="flex items-center gap-1.5 text-[11px] text-slate-500 pt-1">
                <Truck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Nationwide delivery service available on all orders.</span>
              </div>
            </div>
          </div>

          {/* Bottom Back Button */}
          <button
            onClick={onBack}
            className="w-full py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors text-center cursor-pointer"
          >
            ← Back to UNIPORT GES Study Hub
          </button>
        </div>
      </div>
    </div>
  );
};
