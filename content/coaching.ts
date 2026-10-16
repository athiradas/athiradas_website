import { profile, introCallText } from './profile'

const { certificates, education, work, links } = profile
const msod = education['penn-msod']

// Every credential is a fact from the master profile.
export const coaching = {
  title: 'Leadership & Organizational Coaching',
  credentials: [
    `${msod.label} (concentration in ${msod.concentration})`,
    education['penn-coaching'].label,
    `10+ years tech industry experience (${work.meta.short}, ${work.wework.name}, ${work.gsn.name})`,
    'Specialization in AI integration and change management',
    certificates.iat.label,
    `Group coaching training: ${certificates['group-coach-training'].label}`,
  ],
  ctaText: introCallText,
  ctaUrl: links.calendly.url,
}
