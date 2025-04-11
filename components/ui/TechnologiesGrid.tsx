'use client'
import Image from 'next/image'
import {Tooltip} from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { Magnetic } from './magnetic'

export type Technology = {
  name: string
  logo: string // Path to the logo image
}

export type TechnologiesGridProps = {
  technologies: Technology[]
}

export function TechnologiesGrid({ technologies }: TechnologiesGridProps) {
  return (
    <div className="w-full">
    <div className="grid justify-end md:grid-cols-8 grid-cols-6 gap-4">
      {technologies.map((tech) => (
        <Magnetic springOptions={{ bounce: 0 }} intensity={0.3} key={tech.name}>
          <div
            className="aspect-square flex flex-col items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 p-2 dark:hover:bg-zinc-700 w-full "
            data-tooltip-id={`tooltip-${tech.name}`}
          >
            <Image
              src={tech.logo}
              alt={tech.name}
              width={50}
              height={50}
              data-tooltip-id={`tooltip-${tech.name}`}
              data-tooltip-content={tech.name}
            />
            <Tooltip id={`tooltip-${tech.name}`} />
          </div>
        </Magnetic>
      ))}
    </div>
  </div>

  )
}