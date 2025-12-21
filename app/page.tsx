'use client'

import { useState, useRef } from 'react'
import { motion, Variants } from 'motion/react'
import { XIcon, ChevronDown, Play, Pause } from 'lucide-react'
import { Logo } from '@/components/ui/logo'

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
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselItem,
} from '@/components/motion-primitives/carousel'

import { cn } from '@/lib/utils'
import {
  FAQ_ITEMS,
  PACKSHOT_ITEMS,
  CONTACT_ITEMS,
  FEATURE_ITEMS,
  VIDEO_ITEM,
} from './data'

// --- Constants & Variants ---

const ANIMATION_VARIANTS_CONTAINER: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35,
    },
  },
}

const ANIMATION_VARIANTS_SECTION: Variants = {
  hidden: { opacity: 0, y: 50, filter: 'blur(20px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const SECTION_TRANSITION = {
  duration: 0.85,
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

function VideoPlayer({ src }: { src: string }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="group relative aspect-2/3 w-full overflow-hidden rounded-md border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-800">
      <video
        ref={videoRef}
        src={src}
        className="h-full w-full cursor-pointer object-cover brightness-90"
        playsInline
        loop
        onClick={togglePlay}
        onEnded={() => setIsPlaying(false)}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <button
          onClick={togglePlay}
          className={cn(
            'ease-snappy pointer-events-auto flex size-14 items-center justify-center rounded-full bg-black text-zinc-50 shadow-xs transition-all duration-300 hover:scale-110 active:scale-100 dark:bg-zinc-50 dark:text-black',
            isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100',
          )}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? (
            <Pause className="size-5 fill-current" />
          ) : (
            <Play className="ml-0.5 size-5 fill-current" />
          )}
        </button>
      </div>
    </div>
  )
}

export default function PersonalPage() {
  const [buttonText, setButtonText] = useState('Buy now')
  const [carouselIndex, setCarouselIndex] = useState(0)

  const handleBuyClick = () => {
    // Legacy behavior: toggle text to indicate interaction
    if (buttonText === 'Buy now') {
      setButtonText('Redirecting')
      setTimeout(() => {
        window.location.href = 'https://buy.stripe.com/28EaEX7h75oHcfB2Ol5os01'
      }, 2000)
    } else {
      setButtonText('Buy now')
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

      {/* buy Button */}
      <motion.div
        variants={ANIMATION_VARIANTS_SECTION}
        transition={SECTION_TRANSITION}
      >
        <button
          onClick={handleBuyClick}
          className="flex h-10 w-30 shrink-0 items-center justify-center rounded-full bg-black px-4 text-base font-medium text-zinc-50 shadow-xs transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200"
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
        <h3 className="mb-5 text-base font-medium text-zinc-900 dark:text-zinc-50">
          Packshots
        </h3>

        <Carousel
          index={carouselIndex}
          disableDrag
          onIndexChange={setCarouselIndex}
          className="w-full rounded-sm"
        >
          <CarouselContent
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            className="-ml-4"
          >
            {PACKSHOT_ITEMS.map((item, i) => {
              const isVisible = i === carouselIndex || i === carouselIndex + 1

              return (
                <CarouselItem key={item.id} className="basis-1/2 pl-4">
                  <ProjectImage src={item.src} alt={item.alt} />
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselNavigation classNameButton="size-10 flex justify-center items-center hover:scale-110 active:scale-100 ease-snappy duration-300 transition-transform dark:bg-white dark:[&>svg]:!stroke-zinc-950 [&>svg]:size-5" />
        </Carousel>
      </motion.section>

      {/* Features Section */}
      <motion.section
        variants={ANIMATION_VARIANTS_SECTION}
        transition={SECTION_TRANSITION}
      >
        <div className="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-800">
          {FEATURE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="grid gap-4 py-16 md:grid-cols-3 md:gap-12"
            >
              <h2 className="text-zinc-900 md:col-span-1 dark:text-zinc-50">
                {item.title}
              </h2>
              <p className="leading-relaxed text-zinc-500 md:col-span-2 dark:text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Product Comparison Section */}
      <motion.section
        variants={ANIMATION_VARIANTS_SECTION}
        transition={SECTION_TRANSITION}
      >
        <h3 className="mb-5 text-base font-medium text-zinc-900 dark:text-zinc-50">
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

      {/* Video Section */}
      <motion.section
        variants={ANIMATION_VARIANTS_SECTION}
        transition={SECTION_TRANSITION}
      >
        <h3 className="mb-5 text-base font-medium text-zinc-900 dark:text-zinc-50">
          Gallery
        </h3>
        <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
          <VideoPlayer src={VIDEO_ITEM.src} />
          <div className="flex flex-col space-y-4">
            <Logo className="h-auto w-18 text-black dark:text-white" />

            <h2 className="text-base font-medium text-zinc-900 dark:text-zinc-50">
              {VIDEO_ITEM.title}
            </h2>
            <p className="leading-relaxed text-zinc-500 dark:text-zinc-400">
              {VIDEO_ITEM.description}
            </p>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        variants={ANIMATION_VARIANTS_SECTION}
        transition={SECTION_TRANSITION}
      >
        <h3 className="mb-5 text-base font-medium text-zinc-900 dark:text-zinc-50">
          FAQ
        </h3>
        <Accordion
          className="flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-800"
          transition={{ duration: 0.2, ease: 'easeOut' }}
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
        <h3 className="mb-5 text-base font-medium text-zinc-900 dark:text-zinc-50">
          Connect
        </h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {CONTACT_ITEMS.map((contact) => (
            <a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col space-y-2"
            >
              <div className="overflow-hidden rounded-sm bg-zinc-100 dark:bg-zinc-800">
                <img
                  src={contact.src}
                  alt={contact.name}
                  className="h-64 w-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-50">
                  {contact.name}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {contact.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
