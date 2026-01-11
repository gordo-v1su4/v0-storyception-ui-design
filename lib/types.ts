export interface StoryBeat {
  id: number
  label: string
  duration: string
  percentOfTotal: number
  img: string
  desc: string
  beatId: string
  generatedIdea?: string
  selectedBranchId?: number
  branches?: BranchOption[]
  connectedFromBranch?: string
}

export interface TimelineClip {
  id: number
  width: number
}

export interface Archetype {
  title: string
  subtitle: string
  example: string
  desc: string
}

export interface Outcome {
  title: string
  desc: string
}

export interface BranchOption {
  id: number
  title: string
  duration: string
  desc: string
  type: string
  selected: boolean
  generatedIdea?: string
  imagePrompt?: string
}

export interface BeatStructure {
  id: string
  label: string
  desc: string
}

export interface StoryHistory {
  beats: StoryBeat[]
  timestamp: number
  action: string
}
