export interface CV {
  readonly basics: Basics
  readonly work: Array<Work>
  readonly volunteer: Array<Volunteer>
  readonly education: Array<Education>
  readonly awards: Array<Awards>
  readonly certificates: Array<Certificates>
  readonly publications: Array<Publications>
  readonly skills: Array<Skills>
  readonly languages: Array<Languages>
  readonly interests: Array<Interests>
  readonly references: Array<References>
  readonly projects: Array<Projects>
}

interface Basics {
  name: string
  label: string
  image?: string
  email: string
  phone: string
  url?: string
  summary?: string
  location: Location
  profiles?: Array<Profiles>
}

interface Location {
  address: string
  postalCode: string
  city: string
  countryCode: string
  region: string
}

interface Profiles {
  network: string
  username: string
  url: string
}

interface Work {
  name: string
  position: string
  url: string
  startDate: DateStr
  endDate?: DateStr | null
  summary: string
  highlights: Highlight
}

type DateStr = `${string}-${string}-${string}`

interface Volunteer {
  organization: string
  position: string
  url?: string | null
  startDate: DateStr
  endDate?: DateStr | null
  summary: string
  highlights: Highlight
}

interface Skills {
  name: string
  level: string
  keywords: Array<string>
}

interface Awards {
  title: string
  date: string
  awarder: string
  summary: string
}

interface Certificates {
  name: string,
  date: DateStr,
  issuer: string,
  url: string | null
}

interface Publications {
  name: string
  publisher: string
  releaseDate: DateStr
  url: string
  summary: string
}

interface Education {
  institution: string
  url: string
  area: string
  studyType: string
  startDate: DateStr
  endDate?: DateStr | null
  score?: string | null
  courses?: Array<string> | null
}

interface Languages {
  language: Language
  fluency: string
}

type Language =
  "English"
  | "Spanish"
  | "French"
  | "German"
  | "Italian"
  | "Korean"
  | "Portuguese"
  | "Chinese"
  | "Arabic"
  | "Dutch"
  | "Finnish"
  | "Russian"
  | "Turkish"
  | "Hindi"
  | "Bengali"
  | string

interface Projects {
  name: string
  isActive?: boolean | null
  description: string
  highlights: Highlight
  url: string
  github?: string | null
}

interface Interests {
  name: string
  keywords: Array<string>
}

interface References {
  name: string
  reference: string
}

type Highlight = Array<String>
