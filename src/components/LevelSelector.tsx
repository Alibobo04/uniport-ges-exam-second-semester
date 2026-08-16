import React from 'react';
import { CourseInfo } from '../types';
import { COURSES } from '../data/coursesData';
import { ArrowRight, CheckCircle2, BookOpen } from 'lucide-react';

interface LevelSelectorProps {
  onSelectCourse: (course: CourseInfo) => void;
}

export const LevelSelector: React.FC<LevelSelectorProps> = ({ onSelectCourse }) => {
  const courseList = [COURSES.ges112, COURSES.ges212, COURSES.ges300];

  return (
    <div className="space-y-6" id="level-selection-container">
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
            onClick={() => onSelectCourse(course)}
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
                onSelectCourse(course);
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
    </div>
  );
};

