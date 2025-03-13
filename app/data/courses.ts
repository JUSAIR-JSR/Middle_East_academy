export type Course = {
  id: string;
  title: string;
  duration: string;
  image: string;
  shot_description: string;
  description: string;
  syllabus: string[];
  certification: string;
  internship: string;
  mode: string;
};

export const courses: Course[] = [
  // 🔥 Fire & Safety
  {
    id: "fire-safety",
    title: "Fire and Safety Training",
    duration: "6 Month and 1 Year courses are available",
    image: "/images/FireAndSafetyJob.webp",
    shot_description:
    `
    Our fire and safety courses provide hands-on training to meet industry standards.
     Learn fire prevention, emergency response, and safety compliance from expert instructors. 
    Get certified and advance your career with real-world skills. Join us today!
    `,
    description: `
    Our courses are designed to meet industry standards and provide you with the essential
    skills to excel in fire and safety. Whether you're a beginner or an experienced professional, 
    our hands-on training ensures real-world experience. Learn fire prevention, emergency response,
    and safety compliance from expert instructors. Earn recognized certifications and take your career to the next level. 
    Join us today and start your journey toward a successful future in fire and safety!
    `,
    syllabus: [
      'German based syllabus'
    ],
    certification: "C-TECH certificate",
    internship: "Available",
    mode: "Online & Offline",
  },
];
