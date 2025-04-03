'use client'
import { TextEffect } from '@/components/ui/text-effect'
import { TextLoop } from '@/components/ui/text-loop'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'

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
        <TypeAnimation 
        sequence={['Software Developer', 1000, 'Frontend Developer', 1000, 'Backend Developer', 1000, 'Data Engineer', 1000,'University of Alberta Graduate', 1000, () => {
          console.log('Sequence completed');
        },]} 
        wrapper='span'
        cursor={true}
        repeat={Infinity}
        className='text-zinc-600 dark:text-zinc-500'
        />
        
      </div>
    </header>
  )
}
