import { SpeakingTopic, FeaturedTalk, Workshop } from '@/types/talk'
import { profile, youtubeId } from './profile'

const { courses, talks, links } = profile
const course = courses['ai-adoption-course']

export const workshop: Workshop = {
  title: course.label,
  status: course.availability,
  description:
    'A self-paced course that takes you through AI adoption end to end — from diagnosis to process to implementation. Evidence-based and rooted in adult learning theory.',
  audience: 'Alongside the course, I run live workshops for change agents and leaders driving AI adoption in their organizations.',
  tags: ['AI Adoption', 'Self-Paced Course', 'Change Management', 'Adult Learning Theory'],
  ctaText: 'Email me',
  ctaUrl: `mailto:${links['email-personal'].label}`,
}

// The videos, the topics and past workshops come from the master profile.
// The Lunch & Learn recording takes the second spot (Athira, 22 Oct). The grief video came off on
// 27 Oct; she'll say where it goes next.
export const featuredTalks: FeaturedTalk[] = [talks['penn-grad-talk'], talks['oct14-workshop']].map((t) => ({
  videoId: youtubeId(t.url),
  label: t.series,
  title: t.label,
}))

export const talkTopics: string[] = talks['speaking-topics'].topics

// The upcoming workshop sits right under the Lunch & Learn video, title, date and a Register
// link only. The Past workshops list came off: the video already covers 14 Oct (Athira, 13 Nov).
export const upcomingWorkshops = [talks['dec4-baodn-workshop']].map((w) => ({
  title: w.label,
  when: `${w.dates} · ${w.time}`,
  where: `${w.format} hosted by ${w.host}`,
  ctaText: 'Register',
  ctaUrl: w.url,
}))

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
