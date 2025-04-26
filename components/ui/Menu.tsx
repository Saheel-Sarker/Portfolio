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
    { name: 'About Me', href: '#' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },    
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="sticky top-0 z-10 bg-white dark:bg-black w-full py-3.5 pb-2.25">

      <div className="pl-4 z-20">
        <button
          className="md:hidden text-zinc-800 dark:text-zinc-200 z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      <div className="hidden md:flex justify-center items-center space-x-1.75">
          <div className="flex-1 ml-10" />
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
            className="inline-flex text-lg px-3 py-1 items-center justify-center text-zinc-500 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50 cursor-none hover:scale-105 hover:text-zinc-800 dark:hover:text-zinc-200 transition-all duration-100 ease-in-out"
          >
            {item.name}
          </a>
        ))}
        </AnimatedBackground>
        <div className="flex flex-1 justify-end mr-10" >
          <ThemeSwitch />
        </div>
      </div>

      {isMenuOpen && (
        <div className="h-screen bg-white dark:bg-black flex flex-col items-center justify-center overflow-y-auto px-4 py-8 space-y-4 md:hidden z-10">
          {navitems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-zinc-700 dark:text-zinc-300 text-xl py-2"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              {item.name}
            </a>
          ))}

          <div className="mt-6">
            <ThemeSwitch />
          </div>

          
        </div>
      )}
    </div>
  );
}
