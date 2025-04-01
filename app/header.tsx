'use client'
import { TextEffect } from '@/components/ui/text-effect'
import { TextLoop } from '@/components/ui/text-loop'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-4 flex items-center justify-between">
      <div>
      <Link href="/" className="font-medium text-black dark:text-white text-lg">
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className=""
            delay={0.5}
          >
              Saheel Sarker
          </TextEffect>
        </Link>
        <TextLoop>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Full Stack Developer
          </TextEffect>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Web Developer
          </TextEffect>
        </TextLoop>
      </div>
    </header>
  )
}
