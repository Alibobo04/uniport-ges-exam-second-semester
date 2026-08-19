import React, { useState } from 'react';
import { 
  MessageCircle, 
  Users, 
  Bell, 
  BookOpen, 
  CheckCircle2, 
  ExternalLink, 
  X,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { 
  OFFICIAL_WHATSAPP_GROUP_LINK, 
  OFFICIAL_GROUP_NAME, 
  recordWhatsAppJoinedConfirmation,
  getRemainingDailyConfirmations 
} from '../lib/whatsAppPromptService';

interface WhatsAppGroupModalProps {
  isOpen: boolean;
  onClose: () => void;
  contextMessage?: string;
}

export const WhatsAppGroupModal: React.FC<WhatsAppGroupModalProps> = ({
  isOpen,
  onClose,
  contextMessage,
}) => {
  const [hasClickedLink, setHasClickedLink] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  if (!isOpen) return null;

  const handleJoinClick = () => {
    setHasClickedLink(true);
    window.open(OFFICIAL_WHATSAPP_GROUP_LINK, '_blank', 'noopener,noreferrer');
  };

  const handleConfirmAndProceed = () => {
    recordWhatsAppJoinedConfirmation();
    onClose();
  };

  const remaining = getRemainingDailyConfirmations();

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      id="whatsapp-group-popup-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsapp-modal-title"
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-emerald-100 max-w-lg w-full overflow-hidden text-slate-900 animate-in zoom-in-95 duration-200">
        {/* Modal Header with WhatsApp theme */}
        <div className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 text-white p-5 sm:p-6 relative">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-xs border border-white/30 flex items-center justify-center shrink-0 shadow-inner">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 text-white px-2 py-0.5 rounded-full">
                  Official Community
                </span>
                <span className="text-[10px] text-emerald-100 font-medium">
                  UNIPORT
                </span>
              </div>
              <h2 id="whatsapp-modal-title" className="text-xl sm:text-2xl font-black tracking-tight text-white mt-0.5">
                Join '{OFFICIAL_GROUP_NAME}'
              </h2>
            </div>
          </div>
          
          <p className="text-xs sm:text-sm text-emerald-50 mt-2 leading-relaxed">
            {contextMessage || "Stay connected with fellow UNIPORT students and get essential exam updates directly on WhatsApp."}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-4">
          {/* Key Benefits List */}
          <div className="space-y-2.5 text-xs sm:text-sm">
            <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-100/80">
              <Bell className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-emerald-950 font-semibold block">GES Exam Updates & Alerts</strong>
                <span className="text-slate-600 text-xs">Receive real-time announcements, timetables, and tips for your GES CBT examinations.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-blue-50/60 border border-blue-100/80">
              <BookOpen className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-blue-950 font-semibold block">How to Maximize All Website Features</strong>
                <span className="text-slate-600 text-xs">Learn how to effectively use timed CBT simulations, practice workbooks, audio flashcards, and past questions.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-purple-50/60 border border-purple-100/80">
              <Sparkles className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-purple-950 font-semibold block">Developer Updates & Direct Support</strong>
                <span className="text-slate-600 text-xs">Get new feature additions, request past questions, and receive support directly from the platform developer.</span>
              </div>
            </div>
          </div>

          {/* Primary Join Action Button */}
          <div className="pt-1">
            <button
              onClick={handleJoinClick}
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer group"
              id="join-whatsapp-official-btn"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Click Here to Join '{OFFICIAL_GROUP_NAME}' Group</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </button>
          </div>

          {/* Confirmation Box to Proceed */}
          <div className="border-t border-slate-200 pt-4 mt-2">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 sm:p-4 space-y-3">
              <label 
                className="flex items-start gap-3 cursor-pointer select-none"
                htmlFor="confirm-joined-checkbox"
              >
                <input
                  id="confirm-joined-checkbox"
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                />
                <div className="text-xs text-slate-700 leading-snug">
                  <span className="font-semibold text-slate-900 block">
                    I have clicked and joined the official WhatsApp group
                  </span>
                  <span className="text-slate-500 text-[11px]">
                    Check this box to confirm and continue using the website.
                  </span>
                </div>
              </label>

              <button
                onClick={handleConfirmAndProceed}
                disabled={!isChecked && !hasClickedLink}
                className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all shadow-xs ${
                  isChecked || hasClickedLink
                    ? 'bg-slate-900 hover:bg-slate-800 text-white cursor-pointer active:scale-98'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
                id="proceed-after-wa-confirm-btn"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>I've Joined — Proceed to Website</span>
              </button>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 px-1 pt-2">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Official UNIPORT GES Hub
              </span>
              <span>
                {remaining > 0 ? `Confirmed: ${3 - remaining}/3 times today` : 'Daily limit reached'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
