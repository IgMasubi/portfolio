export type ProjectCategory = '2D' | '3D' | 'AI'

export interface ProjectGalleryVideo {
  type: 'video'
  src: string
}

export type ProjectGalleryItem = string | ProjectGalleryVideo

export interface ProjectMedia {
  video?: string
  poster: string
  listPoster?: string
  layout?: 'default' | 'mantalis' | 'ortoline'
  gallery: ProjectGalleryItem[]
}

export interface Project {
  id: string
  title: string
  year?: string
  categories: ProjectCategory[]
  description: string[]
  media: ProjectMedia
}
