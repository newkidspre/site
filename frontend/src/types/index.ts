export interface EnquiryFormData {
  parentName: string;
  childName: string;
  childAge: number;
  email: string;
  phone: string;
  program: 'Playgroup' | 'Nursery' | 'LKG' | 'UKG';
  message?: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}

export type Program = {
  id: string;
  name: string;
  ageGroup: string;
  description: string;
  timings: string;
  color: string;
  icon: string;
  features: string[];
};

export type Testimonial = {
  id: string;
  name: string;
  child: string;
  text: string;
  rating: number;
  avatar: string;
};

export type FacultyMember = {
  id: string;
  name: string;
  role: string;
  qualification: string;
  experience: string;
  avatar: string;
};
