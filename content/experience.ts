import { Experience } from '@/types/experience'
import { profile, years } from './profile'

const { work } = profile

// Company, role and years come from the master profile. The descriptions and
// skills are this site's own.
export const experiences: Experience[] = [
  {
    company: work['grey-mahout'].name,
    role: work['grey-mahout'].title,
    period: years(work['grey-mahout'].dates),
    description:
      'AI Adoption Consulting & Leadership Coaching. Architecting proprietary "Human-in-the-Loop" adoption methodology for Generative AI tools. Providing high-touch leadership coaching to help executives navigate professional transitions and organizational change.',
    technologies: [],
  },
  {
    company: work.meta.name,
    role: work.meta.position,
    period: years(work.meta.dates),
    description:
      'Data Product lead for 0→1 experimentation strategy on Instagram New Surface Monetization, partnering with PM and Eng to define product roadmap, success metrics, and experimentation framework that uncovered new revenue opportunities.',
    technologies: ['Python', 'SQL', 'Spark', 'Presto', 'Experimentation', 'A/B Testing'],
  },
  {
    company: work.wework.name,
    role: work.wework.position,
    period: years(work.wework.dates),
    description:
      'Led cross-team process and data automation, establishing scheduling/orchestration patterns that made pipelines scalable and repeatable. Member of the Central Data & Analytics group managing org-wide metrics.',
    technologies: ['Python', 'SQL', 'AWS', 'Airflow', 'ETL'],
  },
  {
    company: work.gsn.name,
    role: work.gsn.position,
    period: years(work.gsn.dates),
    description:
      'Shipped a game analytics platform (user pathing & segmentation) that surfaced retention drop-offs and informed onboarding-economy experiments. Built pipelines and metrics dashboards for reporting.',
    technologies: ['Python', 'SQL', 'Analytics', 'ETL', 'A/B Testing'],
  },
  {
    company: work.flutura.name,
    role: work.flutura.position,
    period: years(work.flutura.dates),
    description:
      'Early employee shipping industrial analytics solutions end-to-end—data engineering, modeling, and UI—partnering with client product teams to operationalize insights into decisions and workflows.',
    technologies: ['Python', 'Data Science', 'Analytics', 'Machine Learning'],
  },
]
