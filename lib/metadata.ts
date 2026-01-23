export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Athira Das',
    url: 'https://athiradas.com',
    sameAs: [
      'https://www.linkedin.com/in/athiradas',
      'https://github.com/athiradas',
      'https://greymahout.com',
      'https://www.instagram.com/athiradas',
      'https://www.youtube.com/@athiradas',
    ],
    jobTitle: 'Leadership and Organizational Coach',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'University of Pennsylvania',
    },
    knowsAbout: [
      'Data Engineering',
      'Machine Learning',
      'Leadership Coaching',
      'Organizational Development',
      'Career Transitions',
    ],
  }
}
