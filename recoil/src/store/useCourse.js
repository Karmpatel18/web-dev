import {create} from 'zustand';

// Zustand store for managing courses
// This store allows adding and removing courses from a listS
const useCourse = (set) => ({
  courses: [],
  addCourse: (course) => set((state) => ({ courses: [...state.courses, course] })),
  removeCourse: (courseId) => set((state) => ({
    courses: state.courses.filter((course) => course.id !== courseId)
  })),
});
export const useCourseStore = create(useCourse);