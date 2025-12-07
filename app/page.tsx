'use client'

import { useState } from 'react'
import { motion, Variants } from 'motion/react'
import { XIcon, ChevronDown } from 'lucide-react'

import { TextMorph } from '@/components/motion-primitives/text-morph'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/motion-primitives/morphing-dialog'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/motion-primitives/accordion'
import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from '@/components/motion-primitives/image-comparison'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'

import { FAQ_ITEMS, GALLERY_ITEMS, CONTACT_ITEMS } from './data'

// --- Constants & Variants ---

const ANIMATION_VARIANTS_CONTAINER: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const ANIMATION_VARIANTS_SECTION: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(20px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const SECTION_TRANSITION = {
  duration: 0.3,
}

const COMPARISON_IMAGES = {
  front:
    'https://nagi.ams3.cdn.digitaloceanspaces.com/project-images/front-side.png',
  back: 'https://nagi.ams3.cdn.digitaloceanspaces.com/project-images/back-side.png',
}

// --- Helper Components ---

interface ProjectImageProps {
  src: string
  alt: string
}

function ProjectImage({ src, alt }: ProjectImageProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <img
          src={src}
          alt={alt}
          className="h-auto w-full cursor-zoom-in rounded-sm"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative h-auto rounded-lg bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <img
            src={src}
            alt={alt}
            className="h-[50vh] w-auto rounded-sm md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit cursor-pointer rounded-full bg-zinc-300 p-2 dark:bg-white"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-700" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

// --- Main Component ---

export default function PersonalPage() {
  const [buttonText, setButtonText] = useState('Contact us')

  const handleContactClick = () => {
    // Legacy behavior: toggle text to indicate interaction
    if (buttonText === 'Contact us') {
      setButtonText('Copied')
      setTimeout(() => setButtonText('Contact us'), 2000)
    } else {
      setButtonText('Contact us')
    }
  }

  return (
    <motion.main
      className="space-y-24"
      variants={ANIMATION_VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {/* Intro Section */}
      <motion.section
        variants={ANIMATION_VARIANTS_SECTION}
        transition={SECTION_TRANSITION}
      >
        <div className="flex-1">
          <p className="text-balance text-zinc-600 dark:text-zinc-400">
            Edible nail polish with E-, B6-, B12-vitamins and calming substances
            for when you feel stressed and bite your nails.
          </p>
        </div>
      </motion.section>

      {/* Contact Button */}
      <motion.div
        variants={ANIMATION_VARIANTS_SECTION}
        transition={SECTION_TRANSITION}
      >
        <button
          onClick={handleContactClick}
          className="flex h-10 w-[120px] shrink-0 items-center justify-center rounded-full bg-black px-4 text-base font-medium text-zinc-50 shadow-xs transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200"
          aria-label={
            buttonText === 'Contact us'
              ? 'Copy contact info'
              : 'Contact info copied'
          }
        >
          <TextMorph>{buttonText}</TextMorph>
        </button>
      </motion.div>

      {/* Gallery Section */}
      <motion.section
        variants={ANIMATION_VARIANTS_SECTION}
        transition={SECTION_TRANSITION}
      >
        <h3 className="font-base mb-5 font-[450] text-zinc-900 dark:text-zinc-50">
          Selected Images
        </h3>

        <AnimatedGroup
          className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2"
          preset="scale"
        >
          {GALLERY_ITEMS.map((item) => (
            <div key={item.id} className="space-y-2">
              <div className="relative h-fit">
                <ProjectImage src={item.src} alt={item.alt} />
              </div>
            </div>
          ))}
        </AnimatedGroup>
      </motion.section>

      {/* Product Comparison Section */}
      <motion.section
        variants={ANIMATION_VARIANTS_SECTION}
        transition={SECTION_TRANSITION}
      >
        <h3 className="font-base mb-5 font-[450] text-zinc-900 dark:text-zinc-50">
          Product View
        </h3>

        <ImageComparison
          className="aspect-16/10 w-full rounded-lg border border-zinc-200 dark:border-zinc-800"
          enableHover
        >
          <ImageComparisonImage
            src={COMPARISON_IMAGES.back}
            alt="Product Back Side"
            position="left"
          />
          <ImageComparisonImage
            src={COMPARISON_IMAGES.front}
            alt="Product Front Side"
            position="right"
          />
          <ImageComparisonSlider className="bg-white" />
        </ImageComparison>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        variants={ANIMATION_VARIANTS_SECTION}
        transition={SECTION_TRANSITION}
      >
        <h3 className="font-base mb-5 font-[450] text-zinc-900 dark:text-zinc-50">
          FAQ
        </h3>
        <Accordion
          className="flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700"
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
          {FAQ_ITEMS.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="py-4">
              <AccordionTrigger className="h-10 w-full text-left text-zinc-950 dark:text-zinc-50">
                <div className="flex items-center justify-between">
                  <div>{item.question}</div>
                  <ChevronDown className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50" />
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.section>

      {/* Connect Section */}
      <motion.section
        variants={ANIMATION_VARIANTS_SECTION}
        transition={SECTION_TRANSITION}
      >
        <h3 className="font-base mb-5 font-[450] text-zinc-900 dark:text-zinc-50">
          Connect
        </h3>
        <div className="flex flex-col gap-2">
          {CONTACT_ITEMS.map((contact) => (
            <a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-zinc-600 underline decoration-zinc-400 underline-offset-4 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:decoration-zinc-600 dark:hover:text-zinc-200"
            >
              {contact.name}
            </a>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
