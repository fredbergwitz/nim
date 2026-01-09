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
    <footer className="my-24">
      <Logo className="mx-auto -mb-12 h-auto w-36 text-black dark:text-white" />
      <img
        src="/footer.jpeg"
        alt="Footer decoration"
        className="relative -z-1 block h-auto w-full rounded-xl"
      />
    </footer>
  )
}

/*
<Logo className="h-auto w-36 text-black dark:text-white" />

<div className="text-sm text-zinc-400">
  <ThemeSwitch />
</div>

<div className="my-12 flex gap-2">
  <img
    className="h-6 w-auto rounded-sm"
    src="https://nagi.ams3.cdn.digitaloceanspaces.com/dagy.jpg"
    alt=""
  />
  <img
    className="h-6 w-auto rounded-sm"
    src="https://nagi.ams3.cdn.digitaloceanspaces.com/UF_Logo_Vit.png"
    alt=""
  />
</div>
*/
