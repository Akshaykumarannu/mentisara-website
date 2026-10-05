export const siteConfig = {
  name: "Mentisara",
  tagline: "The Essence of the Mind",
  description: "Mentisara provides evidence-informed, person-centred online psychotherapy, cognitive behavioural therapy, and emotional resilience training tailored for individuals seeking confidential mental health support.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.mentisara.in",
  ogImage: "https://www.mentisara.in/images/og-mentisara.jpg",

  contact: {
    email: "mentisaramindtalks@gmail.com",
    emailDisplay: "mentisaramindtalks@gmail.com",
    phoneDisplay: "+91 91881 59149",
    phoneRaw: "919188159149",
    whatsAppNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919188159149",
    whatsAppDefaultMessage: "Hello Mentisara, I would like to inquire about your therapy services and book a consultation.",
    location: "Kerala, India (Serving Clients Worldwide Online)",
    officeHours: "Monday – Saturday: 9:00 AM – 7:00 PM IST (By Appointment)",
  },

  socials: {
    instagram: "https://www.instagram.com/mentisara_talks?stkn=MTc0YWs0bnE2enNlMw%3D%3D&utm_source=qr",
    youtube: "https://youtube.com/@mentisaratalks?si=_rBcr6GgVMn5Xu4m",
    linkedin: "",
    facebook: "",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],

  seo: {
    defaultTitle: "Mentisara | Online Psychotherapy & Person-Centred Mental Health Care",
    titleTemplate: "%s | Mentisara Mental Health",
    keywords: [
      "online psychotherapy Kerala",
      "online therapy Kerala",
      "psychologist Kerala",
      "person centred therapy",
      "cognitive behavioural therapy online",
      "emotional regulation training",
      "mental health support India",
      "psychological consultation online",
      "confidential mental health counselling",
      "resilience coaching",
      "mentisara talks",
    ],
  }
};

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logo.png`,
    "image": siteConfig.ogImage,
    "description": siteConfig.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kerala",
      "addressCountry": "IN"
    },
    "telephone": siteConfig.contact.phoneDisplay,
    "email": siteConfig.contact.email,
    "sameAs": [
      siteConfig.socials.instagram,
      siteConfig.socials.youtube,
    ].filter(Boolean),
    "medicalSpecialty": [
      "Psychotherapy",
      "Cognitive Behavioral Therapy",
      "Mental Health Counseling"
    ],
    "priceRange": "$$"
  };
}
