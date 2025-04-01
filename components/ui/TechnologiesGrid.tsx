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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4">
      {technologies.map((tech) => (
        <Magnetic springOptions={{ bounce: 0 }} intensity={0.3} key={tech.name}>
        <div
          key={tech.name}
          className="flex flex-col items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 p-2 dark:hover:bg-zinc-700"
          data-tooltip-id={`tooltip-${tech.name}`}
        >
          <Image src={tech.logo} alt={tech.name} width={60} height={60} data-tooltip-id={`tooltip-${tech.name}`} data-tooltip-content={tech.name}/>
          <Tooltip id={`tooltip-${tech.name}`}/>
        </div>
        </Magnetic>
      ))}
    </div>
  )
}