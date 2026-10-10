export interface Treatment {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  image: string;
  benefits: string[];
  procedureSteps: string[];
  duration: string;
  suitableFor: string[];
  approxCostInr: string;
  approxCostUsd: string;
  faqs: { question: string; answer: string }[];
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  qualification: string;
  experience: string;
  bio: string;
  image: string;
  specialties: string[];
  branches: string[];
}

export interface ClinicLocation {
  id: string;
  name: string;
  neighborhood: string;
  address: string;
  landmark: string;
  phone: string;
  secondaryPhone: string;
  email: string;
  hours: string;
  sundayHours: string;
  image: string;
  mapsEmbedQuery: string;
  metroStation: string;
  facilities: string[];
}

export interface GalleryCase {
  id: string;
  title: string;
  category: 'implants' | 'veneers' | 'whitening' | 'aligners' | 'fullmouth';
  beforeImage: string;
  afterImage: string;
  description: string;
  duration: string;
  ageGroup: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  location: string;
  treatment: string;
  quote: string;
  rating: number;
  date: string;
  flag?: string;
}
