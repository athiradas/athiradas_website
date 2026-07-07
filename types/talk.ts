export interface SpeakingTopic {
  title: string
  description: string
  icon: string
}

export interface PastTalk {
  title: string
  event: string
  date: string
  type: string
}

export interface FeaturedTalk {
  videoId: string
  label: string
  title: string
}

export interface Workshop {
  title: string
  status: string
  description: string
  audience: string
  tags: string[]
  ctaText?: string
  ctaUrl?: string
}
