export interface ContactItem {
  name: string
  href: string
}

export interface GalleryItem {
  id: string
  src: string
  alt: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: "What's this?",
    answer:
      'This is a legacy website of a Swedish youth company - just because we still own the domain :) We also want to inspire other youths to take this opportunity as seriously as we did. We sold edible nail polish.',
  },
  {
    id: 'faq-2',
    question: 'Edible nail polish?',
    answer:
      'This is a legacy website of an old youth company - just because we still own the domain :)',
  },
]

export const CONTACT_ITEMS: ContactItem[] = [
  {
    name: 'Augustus Kilman',
    href: 'https://www.linkedin.com/in/augustus-kilman-5a979a2b5/',
  },
  {
    name: 'Fred Bergwitz',
    href: 'https://www.linkedin.com/in/fred-bergwitz-619bb81a1/',
  },
  {
    name: 'Ken Östling',
    href: 'https://www.linkedin.com/in/ken-östling-5a979a2b5/',
  },
]

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gallery-1',
    src: 'https://nagi.ams3.cdn.digitaloceanspaces.com/project-images/slide-1-vertical-min.png',
    alt: 'Project image 1',
  },
  {
    id: 'gallery-2',
    src: 'https://nagi.ams3.cdn.digitaloceanspaces.com/project-images/slide-2-vertical-min.png',
    alt: 'Project image 2',
  },
  {
    id: 'gallery-3',
    src: 'https://nagi.ams3.cdn.digitaloceanspaces.com/project-images/slide-3-vertical-min.png',
    alt: 'Project image 3',
  },
  {
    id: 'gallery-4',
    src: 'https://nagi.ams3.cdn.digitaloceanspaces.com/project-images/slide-4-vertical-min.png',
    alt: 'Project image 4',
  },
]
