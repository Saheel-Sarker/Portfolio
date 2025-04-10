'use client'
import { MenuIcon, MonitorIcon, MoonIcon, SunIcon, XIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { AnimatedBackground } from './animated-background';

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const THEMES_OPTIONS = [
    {
      label: 'Light',
      id: 'light',
      icon: <SunIcon className="h-5 w-5" />,
    },
    {
      label: 'Dark',
      id: 'dark',
      icon: <MoonIcon className="h-5 w-5" />,
    },
    {
      label: 'System',
      id: 'system',
      icon: <MonitorIcon className="h-5 w-5" />,
    },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <AnimatedBackground
      className="pointer-events-none rounded-lg bg-zinc-100 dark:bg-zinc-800"
      defaultValue={theme}
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.2,
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
            className="inline-flex h-8 w-8 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
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

export function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navitems = [
    { name: 'Header', href: '#' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },    
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className='flex justify-center items-center w-full pt-3.25 pb-2 sticky top-0 z-10 bg-white dark:bg-black'>
      <div className="flex justify-between items-center w-full md:w-auto">
        <button
          className="md:hidden text-zinc-800 dark:text-zinc-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } flex-col md:flex-row md:flex items-center w-full md:w-auto mt-4 md:mt-0 space-x-2.25`}
      >
        <AnimatedBackground
        className="pointer-events-none rounded-lg bg-zinc-100 dark:bg-zinc-800"
        defaultValue={navitems[0].name}
        transition={{
          type: 'spring',
          bounce: 0,
          duration: 0.2,
        }}
        enableHover={false}
      >
        {navitems.map((item, index) => (
          <a
          key={index}
          href={item.href}
          data-id={item.name}
          className="inline-flex items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50 px-2.75 py-2 text-lg offset-"
          >
            {item.name}
          </a>
        ))}
        </AnimatedBackground>
      </div>
      <div className='absolute right-4'>
        <ThemeSwitch />
      </div>

    </div>
  );
}
