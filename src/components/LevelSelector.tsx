import React, { useState } from 'react';
import { CourseInfo } from '../types';
import { COURSES } from '../data/coursesData';
import { ArrowRight, CheckCircle2, User, Building2, Sparkles, X, ShieldCheck, Globe, ArrowDown } from 'lucide-react';
import { useStudent } from '../context/StudentContext';

interface LevelSelectorProps {
  onSelectCourse: (course: CourseInfo) => void;
}

export const LevelSelector: React.FC<LevelSelectorProps> = ({ onSelectCourse }) => {
  const { student, saveStudent } = useStudent();
  const courseList = [COURSES.ges112, COURSES.ges212, COURSES.ges300];

  // Target course clicked by the user
  const [pendingCourse, setPendingCourse] = useState<CourseInfo | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Form Fields
  const [firstName, setFirstName] = useState(student?.firstName || '');
  const [secondName, setSecondName] = useState(student?.secondName || '');
  const [department, setDepartment] = useState(student?.department || '');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Triggered when clicking any course box on the landing page
  const handleCourseClick = (course: CourseInfo) => {
    setPendingCourse(course);
    setFirstName(student?.firstName || '');
    setSecondName(student?.secondName || '');
    setDepartment(student?.department || '');
    setErrorMsg('');
    setShowModal(true);
  };

  // Submit profile to Firestore and proceed
  const handleSubmitProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim()) {
      setErrorMsg('Please enter your First Name.');
      return;
    }
    if (!secondName.trim()) {
      setErrorMsg('Please enter your Second Name / Surname.');
      return;
    }
    if (!department.trim()) {
      setErrorMsg('Please enter your Academic Department.');
      return;
    }

    try {
      setIsSubmitting(true);
      setErrorMsg('');
      await saveStudent(firstName.trim(), secondName.trim(), department.trim());
      setShowModal(false);
      if (pendingCourse) {
        onSelectCourse(pendingCourse);
      }
    } catch (err) {
      console.error('Failed to save student profile:', err);
      // Still proceed with selected course
      setShowModal(false);
      if (pendingCourse) {
        onSelectCourse(pendingCourse);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6" id="level-selection-container">
      {/* Website & Services Notice Box */}
      <div
        className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 rounded-xl p-4 sm:p-4.5 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
        id="website-services-notice-box"
      >
        <div className="flex items-start sm:items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-300 text-blue-700 flex items-center justify-center shrink-0">
            <Globe className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
              Need a modern website or web application for your business or services?
            </p>
            <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
              Scroll down to the footer to contact me via email, phone, or WhatsApp.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            const footerEl = document.getElementById('developer-contact-box');
            if (footerEl) {
              footerEl.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="self-end sm:self-auto text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white transition-colors flex items-center gap-1.5 shrink-0 shadow-xs cursor-pointer"
          id="scroll-to-footer-btn"
        >
          <span>Contact Me</span>
          <ArrowDown className="w-3 h-3" />
        </button>
      </div>

      {/* Intro Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900 tracking-tight">
              Select a Course to Begin
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Workbook questions, past questions, and quick revision flashcards.
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
            3 Courses
          </span>
        </div>
      </div>

      {/* Grid of Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {courseList.map((course) => (
          <div
            key={course.id}
            className="bg-white border border-slate-200 hover:border-blue-500 rounded-xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
            onClick={() => handleCourseClick(course)}
            id={`select-course-${course.id}-card`}
          >
            <div>
              {/* Level indicator */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded">
                  {course.level} Level
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">
                  {course.code}
                </span>
              </div>

              {/* Course Title */}
              <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1.5 leading-snug">
                {course.title}
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                {course.description}
              </p>

              {/* Key Topics List */}
              <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-600 mb-5">
                {course.topicsCovered.slice(0, 3).map((topic, idx) => (
                  <div key={idx} className="flex items-center gap-2 truncate">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span className="truncate">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCourseClick(course);
              }}
              className="w-full py-2.5 bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
              id={`start-course-${course.id}-btn`}
            >
              <span>Start Quiz & Practice</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* STUDENT PROFILE POPUP MODAL (Only occurs on First Landing Page) */}
      {showModal && pendingCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div
            className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-md w-full p-6 relative overflow-hidden"
            id="student-details-modal"
          >
            {/* Top decorative bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-blue-600 via-indigo-600 to-blue-500" />

            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
              title="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="mb-5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{pendingCourse.code} • {pendingCourse.level} Level</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                Student Profile Information
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Please make sure to fill in your details correctly to create your academic record before practicing drills and taking past question exams.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmitProfile} className="space-y-4">
              {errorMsg && (
                <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* First Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    First Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="e.g. Josiah"
                      className="w-full pl-8 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      id="student-first-name-input"
                    />
                    <User className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                {/* Second Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Second Name / Surname <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={secondName}
                      onChange={(e) => setSecondName(e.target.value)}
                      placeholder="e.g. Dumsuka"
                      className="w-full pl-8 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      id="student-second-name-input"
                    />
                    <User className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>

              {/* Department */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Department <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    placeholder="e.g. Computer Science, Medicine, Civil Engineering..."
                    className="w-full pl-8 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    id="student-department-input"
                  />
                  <Building2 className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Trust & Cloud note */}
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11px] text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Your profile & quiz attempts are stored securely so you can track your results and progress</span>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-3.5 py-2 text-xs font-semibold rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center gap-1.5 shadow-xs disabled:opacity-50"
                  id="submit-student-profile-btn"
                >
                  <span>{isSubmitting ? 'Saving to Firestore...' : `Proceed to ${pendingCourse.code}`}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
