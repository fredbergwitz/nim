'use client'
import { AnimatedBackground } from '@/components/motion-primitives/animated-background'
import { Logo } from '@/components/ui/logo'
import { Dot, CircleDot } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

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
  return (
    <footer className="relative mt-24 border-t border-zinc-100 px-0 py-12 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <Logo className="h-auto w-36 text-black dark:text-white" />

        <div className="text-sm text-zinc-400">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}
