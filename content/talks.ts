import { SpeakingTopic, PastTalk } from '@/types/talk'

export const speakingTopics: SpeakingTopic[] = [
  {
    title: 'AI Strategy for Leaders',
    description:
      'How executives can adopt Generative AI with a human-centered approach — building frameworks that enhance decision-making without losing the human touch.',
    icon: 'brain',
  },
  {
    title: 'From Tech to Coaching',
    description:
      'Navigating career pivots with intention. Lessons from a decade in data engineering to founding a coaching practice rooted in organizational dynamics.',
    icon: 'route',
  },
  {
    title: 'Human-in-the-Loop AI',
    description:
      'Why the most effective AI implementations keep people at the center — and how to design adoption strategies that your teams will actually embrace.',
    icon: 'users',
  },
]

export const pastTalks: PastTalk[] = [
  {
    title: 'Designing Human-Centered AI Adoption',
    event: 'Tech Leadership Summit',
    date: '2025',
    type: 'Keynote',
  },
  {
    title: 'Career Transitions: From Engineer to Coach',
    event: 'Women in Tech Conference',
    date: '2024',
    type: 'Panel',
  },
  {
    title: 'Building Resilient Data Teams',
    event: 'Data Engineering Meetup',
    date: '2024',
    type: 'Talk',
  },
  {
    title: 'The Coaching Mindset for Technical Leaders',
    event: 'Leadership Development Forum',
    date: '2024',
    type: 'Workshop',
  },
]
