export interface ContactItem {
  name: string
  href: string
  title: string
  src: string
}

export interface PackshotItem {
  id: string
  src: string
  alt: string
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

export interface FeatureItem {
  id: string
  title: string
  description: string
}

export interface VideoItem {
  title: string
  description: string
  src: string
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
  {
    id: 'faq-3',
    question: 'Domain for sale?',
    answer:
      'Yes, this domain is for sale since we have closed business. Contact us below.',
  },
]

export const CONTACT_ITEMS: ContactItem[] = [
  {
    name: 'Augustus Kilman',
    href: 'https://www.linkedin.com/in/augustus-kilman-5a979a2b5/',
    title: 'Co-founder',
    src: 'https://placehold.co/400x600',
  },
  {
    name: 'Fred Bergwitz',
    href: 'https://www.linkedin.com/in/fred-bergwitz-619bb81a1/',
    title: 'Co-founder',
    src: 'https://placehold.co/400x600',
  },
  {
    name: 'Ken Östling',
    href: 'https://www.linkedin.com/in/ken-östling-5a979a2b5/',
    title: 'Co-founder',
    src: 'https://placehold.co/400x600',
  },
]

export const PACKSHOT_ITEMS: PackshotItem[] = [
  {
    id: 'packshot-1',
    src: 'https://nagi.ams3.cdn.digitaloceanspaces.com/project-images/slide-1-vertical-min.png',
    alt: 'Project image 1',
  },
  {
    id: 'packshot-2',
    src: 'https://nagi.ams3.cdn.digitaloceanspaces.com/project-images/slide-2-vertical-min.png',
    alt: 'Project image 2',
  },
  {
    id: 'packshot-3',
    src: 'https://nagi.ams3.cdn.digitaloceanspaces.com/project-images/slide-3-vertical-min.png',
    alt: 'Project image 2',
  },
  {
    id: 'packshot-4',
    src: 'https://nagi.ams3.cdn.digitaloceanspaces.com/project-images/slide-4-vertical-min.png',
    alt: 'Project image 2',
  },
  {
    id: 'packshot-5',
    src: 'https://nagi.ams3.cdn.digitaloceanspaces.com/project-images/slide-2-vertical-min.png',
    alt: 'Project image 2',
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

export const FEATURE_ITEMS: FeatureItem[] = [
  {
    id: 'feature-1',
    title: 'Proactive serenity',
    description:
      "Nagi UF's Edible Relaxation Nail Lacquer anticipates and counters stress unconsciously, transforming nail-biting into an early, soothing stress-relief ritual.",
  },
  {
    id: 'feature-2',
    title: 'Unlimited virtual cards⁹',
    description:
      'Create a unique card for your next trip, or one to share with your assistant, or to go online shopping, or ... you get the idea.',
  },
  {
    id: 'feature-3',
    title: 'Intuitively powerful',
    description:
      "Buttery-smooth performance, support for features like Dark Mode, and endless details make an app that's a pleasure to use, day in, night out.",
  },
]

export const VIDEO_ITEM: VideoItem = {
  title: 'A moment of calm',
  description:
    'Watch how Nagi transforms a simple habit into a moment of serenity. Our bottle is designed to be as pleasing to hold as the polish is to use.',
  src: 'https://nagi.ams3.cdn.digitaloceanspaces.com/project-videos/nagi-bottle-loop.mp4',
}
