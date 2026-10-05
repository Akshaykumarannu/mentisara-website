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
    priceFormatted: null,
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
    id: "dialectical-behaviour-therapy",
    slug: "dialectical-behaviour-therapy",
    title: "Dialectical Behaviour Therapy (DBT)",
    badge: "Skills-Based Support",
    iconName: "Compass",
    shortDescription: "Skills-based therapy focused on emotional regulation, distress tolerance, mindfulness, and healthier relationships.",
    fullDescription: "Dialectical Behaviour Therapy (DBT) is a structured, skills-based psychotherapy approach that supports emotional regulation, distress tolerance, interpersonal effectiveness, and mindful awareness. It helps individuals develop healthier coping strategies and manage intense emotions and challenging behaviours.",
    suitableFor: [
      "Individuals experiencing intense emotional waves or rapid mood changes",
      "Those who struggle with high distress levels and impulsivity during stress",
      "People seeking practical tools for conflict management and communication",
      "Anyone who wants to cultivate non-judgmental present-moment awareness"
    ],
    approachHighlights: [
      "Mindfulness Skills: Cultivating moment-to-moment non-judgmental awareness",
      "Distress Tolerance: Learning healthy strategies to survive emotional crisis without escalating",
      "Emotion Regulation: Identifying and modifying difficult emotional reactions effectively",
      "Interpersonal Effectiveness: Assertive communication that preserves self-respect and relationships"
    ],
    sessionFormat: "1-on-1 Online DBT Skills Sessions",
    duration: "50 Minutes per Session",
    priceFormatted: null,
    requiresUpfrontPayment: false,
    faqs: [
      {
        question: "What is the primary focus of DBT?",
        answer: "DBT balances acceptance of yourself as you are with learning concrete skills to change unhelpful emotional responses and communication patterns."
      },
      {
        question: "How does DBT differ from traditional CBT?",
        answer: "While CBT primarily targets thought reframing, DBT places strong additional emphasis on emotional acceptance, distress tolerance, mindfulness, and interpersonal skills."
      }
    ],
    clinicalFocus: [
      "Emotional Dysregulation",
      "Distress Tolerance",
      "Mindfulness Practices",
      "Interpersonal Effectiveness",
      "Impulsive Coping Patterns"
    ]
  },
  {
    id: "acceptance-commitment-therapy",
    slug: "acceptance-commitment-therapy",
    title: "Acceptance and Commitment Therapy (ACT)",
    badge: "Values-Focused",
    iconName: "Shield",
    shortDescription: "Therapy focused on psychological flexibility, acceptance of difficult experiences, and value-based living.",
    fullDescription: "Acceptance and Commitment Therapy (ACT) is a structured, evidence-based psychotherapy approach that helps individuals develop psychological flexibility by learning to accept difficult internal experiences, reduce unhelpful patterns, and take meaningful action guided by personal values.",
    suitableFor: [
      "Individuals caught in struggles with unwanted thoughts or painful memories",
      "People feeling stuck, unmotivated, or disconnected from personal purpose",
      "Those coping with chronic life challenges or uncertainty",
      "Anyone wanting to live a meaningful, values-aligned life"
    ],
    approachHighlights: [
      "Psychological Flexibility: Learning to stay open and present with uncomfortable emotions",
      "Cognitive Defusion: Stepping back from unhelpful thoughts rather than fighting them",
      "Values Clarification: Defining what truly matters to you in work, relationships, and health",
      "Committed Action: Taking constructive steps that align with your deepest priorities"
    ],
    sessionFormat: "1-on-1 Online ACT Sessions",
    duration: "50 Minutes per Session",
    priceFormatted: null,
    requiresUpfrontPayment: false,
    faqs: [
      {
        question: "What is the goal of Acceptance and Commitment Therapy?",
        answer: "The goal of ACT is not to eliminate painful feelings, but to reduce their power over your behavior so you can live a rich, meaningful, values-guided life."
      },
      {
        question: "Is ACT considered an evidence-based therapy?",
        answer: "Yes, ACT is an empirically supported, modern behavioural psychotherapy with extensive scientific backing across anxiety, depression, and chronic stress."
      }
    ],
    clinicalFocus: [
      "Psychological Flexibility",
      "Cognitive Defusion",
      "Values Clarification",
      "Acceptance & Willingness",
      "Committed Action"
    ]
  },
  {
    id: "family-couple-therapy",
    slug: "family-couple-therapy",
    title: "Family & Couple Therapy",
    badge: "Relational Care",
    iconName: "Users",
    shortDescription: "Collaborative therapy focused on communication, relationship patterns, conflict resolution, and mutual understanding.",
    fullDescription: "Family & Couple Therapy provides a safe, guided setting to explore relationship patterns, navigate recurring conflict, and rebuild open communication. We work collaboratively to foster mutual understanding, clarify emotional boundaries, and support healthier, more resilient relationships.",
    suitableFor: [
      "Couples navigating communication breakdowns, recurring conflict, or mistrust",
      "Families experiencing transitional friction, boundary issues, or emotional distance",
      "Partners seeking proactive relationship strengthening and mutual alignment",
      "Individuals experiencing relational strain affecting their mental wellbeing"
    ],
    approachHighlights: [
      "Communication Restructuring: Replacing reactive arguments with respectful listening",
      "Pattern Recognition: Uncovering cyclical conflicts and mutual emotional triggers",
      "Collaborative Problem Solving: Finding constructive paths through disagreement",
      "Healthier Boundaries: Balancing individuality and intimacy in relationships"
    ],
    sessionFormat: "Online Joint or Couples Video Sessions",
    duration: "60 Minutes per Session",
    priceFormatted: null,
    requiresUpfrontPayment: false,
    faqs: [
      {
        question: "Do both partners need to attend every session?",
        answer: "Typically both partners attend couples sessions, though individual alignment sessions may occasionally be scheduled as part of the therapeutic plan."
      },
      {
        question: "Can family members join from different locations online?",
        answer: "Yes, our secure online video platform allows participants in different locations or time zones to participate seamlessly in joint sessions."
      }
    ],
    clinicalFocus: [
      "Interpersonal Communication",
      "Conflict Resolution",
      "Relationship Dynamics",
      "Emotional Attunement",
      "Healthy Boundaries"
    ]
  },
  {
    id: "emotional-regulation-resilience",
    slug: "emotional-regulation-resilience",
    title: "Emotional Regulation & Resilience Training",
    badge: "Skill & Capacity Building",
    iconName: "HeartPulse",
    shortDescription: "Evidence-based strategies designed to expand emotional tolerance, stabilize mood responses, and build inner strength.",
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
        answer: "Yes, many clients incorporate resilience modules into their overall therapy plan to support emotional balance."
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
