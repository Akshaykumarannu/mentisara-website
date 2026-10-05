import { ResourceArticle } from "@/types";

export const resourcesData: ResourceArticle[] = [
  {
    id: "understanding-person-centred-therapy",
    slug: "understanding-person-centred-therapy",
    title: "Understanding Person-Centred Therapy: Why Empathy and Autonomy Matter in Healing",
    excerpt: "Explore how person-centred psychotherapy shifts the focus from rigid clinical labels to genuine therapeutic partnership, honoring your personal experience.",
    category: "Therapy & Guidance",
    author: {
      name: "Mentisara Clinical Team",
      role: "Licensed Psychological Practice",
      avatar: "/images/author-team.jpg"
    },
    publishedAt: "2026-09-15",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1000",
    imageAlt: "Calm room with soft sunlight representing therapeutic space",
    tags: ["Psychotherapy", "Person-Centred Care", "Mental Health", "Self-Care"],
    featured: true,
    contentHtml: `
      <p class="lead text-lg text-forest-800 mb-6 font-medium">When seeking mental health support, many individuals worry about being reduced to a diagnosis or diagnostic code. Person-Centred Therapy offers a profoundly human alternative.</p>
      
      <h3 class="text-2xl font-serif text-forest-900 mt-8 mb-4">What is a Person-Centred Approach?</h3>
      <p class="mb-4 text-slate-700 leading-relaxed">Developed by Carl Rogers, person-centred therapy operates on the fundamental premise that every individual possesses an innate capacity for self-understanding and constructive growth. Rather than positioning the therapist as an authoritative expert who solves problems for you, the therapist acts as an empathetic facilitator.</p>
      
      <h3 class="text-2xl font-serif text-forest-900 mt-8 mb-4">Core Principles of the Mentisara Practice</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-slate-700">
        <li><strong>Unconditional Positive Regard:</strong> Accepting your experiences and feelings without judgment or harsh evaluation.</li>
        <li><strong>Empathetic Understanding:</strong> Striving to view your world precisely as you experience it.</li>
        <li><strong>Authenticity & Congruence:</strong> Creating an honest, transparent therapeutic alliance built on trust.</li>
      </ul>

      <h3 class="text-2xl font-serif text-forest-900 mt-8 mb-4">How This Shapes Your Session</h3>
      <p class="mb-4 text-slate-700 leading-relaxed">In online therapy sessions at Mentisara, you determine the pace and depth of what you choose to share. Together, we explore emotional bottlenecks, unpack recurring relationship patterns, and discover internal resources that allow you to live with greater agency and calm.</p>
    `
  },
  {
    id: "navigating-anxiety-in-daily-life",
    slug: "navigating-anxiety-in-daily-life",
    title: "Navigating Daily Anxiety: Grounding Techniques that Restore Calm",
    excerpt: "Practical, evidence-informed strategies to regulate your nervous system during moments of acute stress and anxiety overload.",
    category: "Emotional Regulation",
    author: {
      name: "Mentisara Clinical Team",
      role: "Licensed Psychological Practice",
      avatar: "/images/author-team.jpg"
    },
    publishedAt: "2026-09-02",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000",
    imageAlt: "Person taking a peaceful breath in nature",
    tags: ["Anxiety", "Grounding", "Mindfulness", "Stress Management"],
    featured: false,
    contentHtml: `
      <p class="lead text-lg text-forest-800 mb-6 font-medium">Anxiety often manifests not only in intrusive thoughts but as physical sensations—tightness in the chest, rapid heartbeat, or shallow breathing.</p>
      
      <h3 class="text-2xl font-serif text-forest-900 mt-8 mb-4">The Physiology of Anxiety Overload</h3>
      <p class="mb-4 text-slate-700 leading-relaxed">When the sympathetic nervous system senses threat (whether physical or emotional), it triggers the fight-or-flight response. Grounding techniques send signals back to the brain that you are safe in the present moment.</p>

      <h3 class="text-2xl font-serif text-forest-900 mt-8 mb-4">Three Practical Grounding Exercises</h3>
      <ol class="list-decimal pl-6 mb-6 space-y-4 text-slate-700">
        <li><strong>The 5-4-3-2-1 Sensory Reset:</strong> Identify 5 things you can see, 4 things you can physically feel, 3 things you hear, 2 things you smell, and 1 thing you can taste.</li>
        <li><strong>Box Breathing (4-4-4-4):</strong> Inhale for 4 seconds, hold for 4 seconds, exhale for 4 seconds, and pause for 4 seconds.</li>
        <li><strong>Tactile Physical Anchor:</strong> Press your feet firmly into the ground or hold a cool object, focusing entirely on the physical contact.</li>
      </ol>
    `
  },
  {
    id: "building-emotional-resilience-workplace",
    slug: "building-emotional-resilience-workplace",
    title: "Building Emotional Resilience: Protecting Your Well-being Against Burnout",
    excerpt: "Recognize the early signs of emotional exhaustion and establish sustainable personal boundaries in demanding work environments.",
    category: "Resilience",
    author: {
      name: "Mentisara Clinical Team",
      role: "Licensed Psychological Practice",
      avatar: "/images/author-team.jpg"
    },
    publishedAt: "2026-08-20",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=1000",
    imageAlt: "Calm sunrise over still water representing emotional resilience and renewal",
    tags: ["Burnout", "Resilience", "Workplace Mental Health", "Boundaries"],
    featured: false,
    contentHtml: `
      <p class="lead text-lg text-forest-800 mb-6 font-medium">Burnout is rarely a sudden event; it is a gradual erosion of physical, emotional, and cognitive reserves.</p>
      
      <h3 class="text-2xl font-serif text-forest-900 mt-8 mb-4">Early Warning Signs of Burnout</h3>
      <p class="mb-4 text-slate-700 leading-relaxed">Emotional detachment, chronic tiredness despite rest, heightened irritability, and a feeling of reduced personal accomplishment are key signals that your emotional capacity is strained.</p>

      <h3 class="text-2xl font-serif text-forest-900 mt-8 mb-4">Restoring Balance</h3>
      <p class="mb-4 text-slate-700 leading-relaxed">Resilience is not about toughing it out through unsustainable stress. It is about creating structured spaces for rest, establishing clear boundaries between work and personal identity, and seeking professional support when self-care alone is not enough.</p>
    `
  }
];

export function getResourceBySlug(slug: string): ResourceArticle | undefined {
  return resourcesData.find((art) => art.slug === slug);
}
