import React, { createContext, useContext, useEffect, useState } from 'react';
import { StudentProfile } from '../types';
import { getLocalStudentProfile, saveStudentProfileToFirestore } from '../lib/quizService';
import { testConnection } from '../lib/firebase';

interface StudentContextType {
  student: StudentProfile | null;
  saveStudent: (firstName: string, secondName: string, department: string) => Promise<StudentProfile>;
  clearStudent: () => void;
}

const StudentContext = createContext<StudentContextType>({
  student: null,
  saveStudent: async () => ({
    id: '',
    firstName: '',
    secondName: '',
    department: '',
    createdAt: '',
  }),
  clearStudent: () => {},
});

export const StudentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [student, setStudent] = useState<StudentProfile | null>(() => getLocalStudentProfile());

  useEffect(() => {
    // Initial test of Firestore connectivity
    testConnection();
  }, []);

  const saveStudent = async (firstName: string, secondName: string, department: string) => {
    const profile = await saveStudentProfileToFirestore(firstName, secondName, department);
    setStudent(profile);
    return profile;
  };

  const clearStudent = () => {
    localStorage.removeItem('ges_student_profile');
    setStudent(null);
  };

  return (
    <StudentContext.Provider
      value={{
        student,
        saveStudent,
        clearStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudent = () => useContext(StudentContext);
