import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "individual-psychotherapy",
    slug: "individual-psychotherapy",
    title: "Individual Psychotherapy",
    badge: "Core Service",
    iconName: "UserCheck",
    shortDescription: "A confidential, person-centred therapeutic space designed to help you process emotional difficulties, manage anxiety, and foster meaningful self-growth.",
    fullDescription: "Individual Psychotherapy at Mentisara is an empathetic, evidence-informed collaborative journey. Grounded in a person-centred framework, we focus on understanding your distinct psychological makeup rather than reducing your experience to symptoms. Whether navigating acute stress, chronic anxiety, life transitions, or deep-seated emotional patterns, our sessions offer a safe space to cultivate lasting clarity and resilience.",
    suitableFor: [
      "Individuals experiencing persistent anxiety, panic, or overwhelm",
      "People coping with major life adjustments, grief, or personal distress",
      "Those seeking deeper self-awareness and emotional understanding",
      "Individuals navigating relational or personality-related difficulties",
      "Anyone feeling emotionally stuck or disconnected from their values"
    ],
    approachHighlights: [
      "Person-Centred Foundation: Non-judgmental, compassionate, and tailored to your pace",
      "Exploratory Depth: Looking beyond immediate symptoms to understand root underlying themes",
      "Collaborative Goal Setting: Building practical coping tools while exploring inner experiences",
      "Confidential & Secure: Dedicated online session environment ensuring complete privacy"
    ],
    sessionFormat: "1-on-1 Confidential Online Session (Video Call)",
    duration: "50 Minutes per Session",
    priceFormatted: null, // Nullable - pricing communicated upon initial application
    requiresUpfrontPayment: false,
    faqs: [
      {
        question: "How do I know if Individual Psychotherapy is right for me?",
        answer: "If you feel overwhelmed by emotional challenges, persistent worry, relationship friction, or simply feel the need for a dedicated, confidential space to understand yourself better, individual therapy can be immensely beneficial."
      },
      {
        question: "What happens during our first introductory session?",
        answer: "The initial session is a collaborative assessment where we listen to your primary concerns, discuss your history and goals, and explore how our person-centred approach aligns with what you need."
      },
      {
        question: "How are sessions conducted online?",
        answer: "Sessions are conducted via secure, encrypted video conferencing. You will need a quiet, private room and a reliable internet connection."
      }
    ],
    clinicalFocus: [
      "Anxiety & Stress Disorders",
      "Emotional Dysregulation",
      "Adjustment & Life Transitions",
      "Personality-Related Challenges",
      "Self-Esteem & Identity"
    ]
  },
  {
    id: "cognitive-behavioural-therapy",
    slug: "cognitive-behavioural-therapy",
    title: "Cognitive Behavioural Therapy (CBT)",
    badge: "Structured & Goal-Oriented",
    iconName: "BrainCircuit",
    shortDescription: "A goal-focused, structured approach that helps identify and reshape unhelpful cognitive patterns and behavioural cycles.",
    fullDescription: "Cognitive Behavioural Therapy (CBT) at Mentisara offers a structured, active framework to help you recognize how thoughts, feelings, and actions interact. By identifying automatic negative thought loops, cognitive distortions, and maladaptive coping strategies, CBT equips you with practical psychological tools to navigate daily challenges with renewed clarity and agency.",
    suitableFor: [
      "People dealing with intrusive thoughts, rumination, or catastrophic thinking",
      "Individuals seeking structured strategies to manage anxiety or mood fluctuations",
      "Those who prefer goal-directed, skill-building therapeutic approaches",
      "Individuals struggling with avoidance patterns, perfectionism, or burnout"
    ],
    approachHighlights: [
      "Cognitive Restructuring: Identifying and challenging unhelpful thought patterns",
      "Behavioural Experiments: Gradually testing new responses to anxiety-inducing situations",
      "Practical Psychoeducation: Understanding the mind-body link and stress responses",
      "Action-Oriented Practice: Guided exercises to apply tools between therapy sessions"
    ],
    sessionFormat: "1-on-1 Online Structured Sessions",
    duration: "50 Minutes per Session",
    priceFormatted: null,
    requiresUpfrontPayment: false,
    faqs: [
      {
        question: "What makes Cognitive Behavioural Therapy different from general counselling?",
        answer: "CBT is explicitly focused on the present interaction between thoughts, feelings, and actions. It is structured, collaborative, and emphasizes learning practical coping skills."
      },
      {
        question: "Will I have tasks between sessions?",
        answer: "Yes, CBT often includes reflection exercises, thought records, or small behavioural experiments to practice in your daily life to reinforce learning."
      }
    ],
    clinicalFocus: [
      "Maladaptive Cognitive Patterns",
      "Phobias & Panic Responses",
      "Rumination & Overthinking",
      "Behavioural Activation",
      "Stress Management"
    ]
  },
  {
    id: "emotional-regulation-resilience",
    slug: "emotional-regulation-resilience",
    title: "Emotional Regulation & Resilience Training",
    badge: "Skill & Capacity Building",
    iconName: "Compass",
    shortDescription: "Evidence-based strategies designed to expand your emotional tolerance, stabilize mood responses, and build inner strength.",
    fullDescription: "Emotional Regulation & Resilience Training provides targeted skill acquisition for individuals who experience high emotional intensity, frequent stress overload, or difficulty regaining composure during distress. Through evidence-informed methods drawing from somatic awareness, distress tolerance, and grounding practices, this training helps you build a stable internal anchor.",
    suitableFor: [
      "Individuals who feel easily overwhelmed by sudden intense emotions",
      "Professionals coping with high-stress demands and emotional exhaustion",
      "People seeking grounding skills for panic, anger, or deep sadness",
      "Anyone wanting to build long-term emotional capacity and stability"
    ],
    approachHighlights: [
      "Distress Tolerance Skills: Learning how to navigate emotional surges without reacting harmfully",
      "Grounding & Somatic Techniques: Connecting body and mind to de-escalate stress responses",
      "Mindful Self-Compassion: Reducing harsh self-criticism during difficult emotional states",
      "Adaptive Response Planning: Developing customized action plans for stress triggers"
    ],
    sessionFormat: "Specialized 1-on-1 Skill Building & Coaching",
    duration: "50 Minutes per Session",
    priceFormatted: null,
    requiresUpfrontPayment: false,
    faqs: [
      {
        question: "Is Emotional Regulation Training suitable for acute stress?",
        answer: "Yes. It focuses heavily on actionable, real-time grounding tools that can be used immediately when experiencing stress overload."
      },
      {
        question: "Can this be combined with Individual Psychotherapy?",
        answer: "Absolutely. Many clients incorporate resilience modules into their overall individual therapy plan to enhance emotional stability."
      }
    ],
    clinicalFocus: [
      "Distress Tolerance",
      "Somatic Grounding",
      "Emotional Intensity Management",
      "Burnout Prevention",
      "Adaptive Functioning"
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((service) => service.slug === slug);
}
