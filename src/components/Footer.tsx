import React from 'react';
import { CourseInfo } from '../types';
import { COURSES } from '../data/coursesData';
import { Phone, MessageCircle, BookOpen, Layers, Youtube, Linkedin, Instagram, Facebook } from 'lucide-react';

interface FooterProps {
  onSelectCourse: (course: CourseInfo) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCourse }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 mt-12 py-8 text-xs" id="portal-footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Brand and Description */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                GES
              </div>
              <span className="font-bold text-sm text-white">
                GES Quiz Hub
              </span>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-semibold text-slate-300 block mb-2">
                Connect with me on Social Media:
              </span>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://youtube.com/@scholarsdomain?si=C5JlSqmrzm-VerAs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-red-950/60 border border-slate-700 hover:border-red-600/50 text-slate-300 hover:text-red-400 transition-colors text-xs"
                >
                  <Youtube className="w-3.5 h-3.5 text-red-500" />
                  <span>YouTube</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/dum-suka-barilee-josiah-b345b4339/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-blue-950/60 border border-slate-700 hover:border-blue-600/50 text-slate-300 hover:text-blue-400 transition-colors text-xs"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://www.instagram.com/josiah_online_maths?igsh=MXF5bDN3YnQwNjBubg==&igsi=MXF5bDN3YnQwNjBubg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-pink-950/60 border border-slate-700 hover:border-pink-600/50 text-slate-300 hover:text-pink-400 transition-colors text-xs"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span>Instagram</span>
                </a>

                <a
                  href="https://www.facebook.com/ali.bobo.98499"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-blue-950/60 border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-blue-300 transition-colors text-xs"
                >
                  <Facebook className="w-3.5 h-3.5 text-blue-500" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Course Navigation */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-semibold text-slate-200 text-xs">
              Available Quizzes
            </h4>
            <ul className="space-y-1 text-xs">
              <li>
                <button
                  onClick={() => onSelectCourse(COURSES.ges112)}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  GES 112: Nigerian Peoples & Culture
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCourse(COURSES.ges212)}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  GES 212.2: Philosophy & Logic
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCourse(COURSES.ges300)}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  GES 300.2: Venture Creation
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-2" id="developer-contact-box">
            <h4 className="font-semibold text-slate-200 text-xs">
              Contact & Feedback
            </h4>
            <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700 space-y-1.5 text-xs">
              <div className="text-slate-300 font-medium">
                Dum-suka, Barilee Josiah
              </div>
              <div className="flex items-center gap-3 pt-0.5 text-slate-400">
                <div className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  <a
                    href="tel:08164090026"
                    className="hover:text-blue-300 font-mono"
                  >
                    08164090026
                  </a>
                </div>
                <span>•</span>
                <a
                  href="https://wa.me/2348164090026?text=Hello%20Josiah,%20I%20am%20using%20the%20GES%20Quiz%20Hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700 text-xs text-slate-400">
          <strong className="text-slate-300 block mb-0.5">Disclaimer:</strong>
          This is an independent quiz and study practice website designed to help users prepare for General Studies tests and assessments.
        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-slate-800 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>
            © {currentYear} GES Quiz Hub. All rights reserved.
          </p>
          <p>
            Developer: Dum-suka, Barilee Josiah (08164090026)
          </p>
        </div>
      </div>
    </footer>
  );
};
