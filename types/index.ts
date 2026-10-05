export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  badge: string;
  iconName: string;
  suitableFor: string[];
  approachHighlights: string[];
  sessionFormat: string;
  duration: string;
  priceFormatted?: string | null; // Nullable if pricing is personalized or consultation-based
  requiresUpfrontPayment?: boolean;
  faqs: { question: string; answer: string }[];
  clinicalFocus: string[];
}

export interface ResourceArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  contentHtml: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  initials: string;
  location?: string;
  serviceCategory: string;
  content: string;
  rating: number;
  date: string;
  verified: boolean;
}

export interface WorkshopItem {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  mode: 'Online (Zoom)' | 'Hybrid' | 'Offline';
  fee: string;
  speaker: string;
  capacity: string;
  topics: string[];
  status: 'Upcoming' | 'Registration Open' | 'Fully Booked';
}

export interface AppointmentFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: string; // Mandatory
  preferredLanguage: string;
  preferredLanguageOther?: string;
  idProofFileName?: string;
  idProofBase64?: string;
  preferredService: string;
  preferredDate: string;
  preferredTimeSlot: string;
  sessionMode: 'Online' | 'In-Person (Kerala)';
  primaryConcern: string;
  additionalNotes?: string;
  consentAgreed: boolean;
  honeypot?: string; // Spam protection
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  honeypot?: string;
}

export interface APIResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}
