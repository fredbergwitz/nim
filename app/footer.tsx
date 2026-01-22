'use client'
import { AnimatedBackground } from '@/components/motion-primitives/animated-background'
import { Logo } from '@/components/ui/logo'
import { Dot, CircleDot } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'motion/react'

const THEMES_OPTIONS = [
  {
    label: 'Light',
    id: 'light',
    icon: <CircleDot className="size-4" />,
  },
  {
    label: 'Dark',
    id: 'dark',
    icon: <Dot className="size-4" />,
  },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <AnimatedBackground
      className="pointer-events-none rounded-xl bg-zinc-100 dark:bg-zinc-800"
      defaultValue={theme}
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.4,
      }}
      enableHover={false}
      onValueChange={(id) => {
        setTheme(id as string)
      }}
    >
      {THEMES_OPTIONS.map((theme) => {
        return (
          <button
            key={theme.id}
            className="inline-flex h-7 w-7 cursor-pointer items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
            type="button"
            aria-label={`Switch to ${theme.label} theme`}
            data-id={theme.id}
          >
            {theme.icon}
          </button>
        )
      })}
    </AnimatedBackground>
  )
}

export function Footer() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  })

  const scale = useSpring(useTransform(scrollYProgress, [0, 1.2], [1, 1.4]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <footer ref={containerRef} className="my-24">
      <Logo className="mx-auto -mb-12 h-auto w-36 text-black dark:text-white" />
      <motion.img
        style={{ scale }}
        src="/footer.jpeg"
        alt="Footer decoration"
        className="relative -z-1 block h-auto w-full rounded-xl"
      />
    </footer>
  )
}
