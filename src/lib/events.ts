// lib/events.ts
export interface EventType {
    id: number;
    title: string;
    category: 'technical' | 'non-technical';
    teamSize: string;
    description?: string;
    rules: string[];
    prize: {
      first?: string;
      second?: string;
      note?: string;
    };
  }
  
  export const technicalEvents: EventType[] = [
    {
      id: 1,
      title: 'Rapid Relay – Quiz',
      category: 'technical',
      teamSize: 'Minimum 2 – Maximum 4 members',
      rules: [
        'Quiz will consist of MCQ, rapid fire, and buzzer rounds',
        'Questions based on Electrical, Electronics, and Technology',
        'Each team will have limited time to answer',
        'Negative marking may apply in final round',
        'Mobile phones or internet usage strictly prohibited',
        'Judges decision is final',
        'Teams must maintain discipline',
      ],
      prize: {
        first: '₹1000',
        second: '₹750',
      },
    },
    {
      id: 2,
      title: 'Pitch Scope – Project Presentation',
      category: 'technical',
      teamSize: '1–3 members',
      rules: [
        'Present a technical project related to Electrical or Electronics',
        'Working model or prototype preferred',
        'Presentation using PowerPoint or demonstration',
        'Presentation time: 8–10 minutes',
        'Q&A: 2 minutes',
        'Evaluation based on innovation, feasibility, practical application, presentation',
        'Participants must bring required equipment',
      ],
      prize: {
        first: '₹1500',
        second: '₹1000',
      },
    },
    {
      id: 3,
      title: 'Watt Talks – Paper Presentation',
      category: 'technical',
      teamSize: 'Maximum 2 members',
      rules: [
        'Topic must be recent trends in Electrical and Electronics Engineering',
        'Abstract submission required (250–500 words)',
        'Paper must follow IEEE format',
        'Maximum 10–12 slides',
        'Presentation time: 6–8 minutes',
        'Q&A: 2 minutes',
        'Evaluation based on technical content, innovation, clarity, presentation',
      ],
      prize: {
        first: '₹1500',
        second: '₹1000',
      },
    },
  ];
  
  export const nonTechnicalEvents: EventType[] = [
    {
      id: 4,
      title: 'Survival Instinct (Free Fire Tournament)',
      category: 'non-technical',
      teamSize: '4 players per team',
      rules: [
        'No hacking or third-party apps',
        'No skin collection',
        'Face-to-face play',
        'Finger sleeves allowed',
        'Organizer decision is final',
        'Prize depends on number of participants',
      ],
      prize: {
        note: 'Prize money depends on number of participants',
      },
    },
    {
      id: 5,
      title: 'Connectricals',
      category: 'non-technical',
      teamSize: 'Individual (1–2 members)',
      description: 'A fun puzzle event combining Tamil cinema knowledge with brain teasers. Participants decode movie names, songs, or famous dialogues from image clues.',
      rules: [
        'Decode movie names, songs, or famous dialogues from image clues',
        'Time-bound rounds',
        'Judges decision is final',
      ],
      prize: {
        note: 'Exciting prizes for top performers',
      },
    },
    {
      id: 6,
      title: 'Chess Tournament',
      category: 'non-technical',
      teamSize: '1 player (Individual)',
      rules: [
        '5 minutes per player',
        '6 rounds',
        'Entry fee: ₹100',
        'Top 5 players will receive prizes',
        'Chess engines strictly prohibited',
        'Games conducted on chess.com',
        'Players must provide their chess.com ID',
      ],
      prize: {
        note: 'Prizes for top 5 players (depends on participation)',
      },
    },
  ];