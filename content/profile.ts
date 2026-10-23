// Athira's facts, from her master profile. `profile.json` is generated in the
// profile repo (athiradas/profile, `npm run export -- athiradas <this repo>`),
// so don't edit it here. Only the wording around the facts belongs to this site.
import profile from './profile.json'

export { profile }

/** "Group coaching" → "group coaching". Acronyms stay: "AI adoption consulting". */
export function lowerFirst(s: string) {
  return /^[A-Z]{2}/.test(s) ? s : s.charAt(0).toLowerCase() + s.slice(1)
}

/** "February 2020 – August 2023" → "2020 - 2023", "January 2023 – present" → "2023 - Present" */
export function years(dates: string) {
  return dates
    .split('–')
    .map((part) => (/present/i.test(part) ? 'Present' : part.match(/\d{4}/)?.[0] ?? part.trim()))
    .join(' - ')
}

/** The YouTube video id in a watch URL. */
export function youtubeId(url: string) {
  return new URL(url).searchParams.get('v') ?? ''
}

/** "https://www.greymahout.com" → "greymahout.com" */
export function domain(url: string) {
  return new URL(url).hostname.replace(/^www\./, '')
}

// "Book a free compatibility call": the button leaves out the length so it fits on one line.
export const introCallText = `Book a ${lowerFirst(profile.services['intro-call'].label).replace(/ \d+-minute/, '')}`
