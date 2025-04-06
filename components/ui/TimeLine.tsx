'use client'
import Link from 'next/link'
import { Disclosure, DisclosureContent, DisclosureTrigger } from '../motion-primitives/disclosure'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export type TimelineItem = {
  title: string
  company: string
  dateRange: string // e.g., "Jan 2020 - Dec 2022"
  skills: string[] // List of skills used
  link?: string // Optional link to the company or project
  id: string
}

export type TimelineProps = {
  items: TimelineItem[]
}

export function Timeline({ items }:  TimelineProps) {
  const [expanded, setExpanded] = useState<String[]>([])
  function handleExpanded(id: string) {
    if (expanded.includes(id)){
      setExpanded(expanded => expanded.filter(i => i !== id))
    }
    else {
      setExpanded(expanded => [...expanded, id])
    }
  }
  return (
      items.map((item) => (
        <div key={item.id} className="pb-8 pt-2 pl-4 border-l-[1px] dark:border-zinc-400 border-zinc-600">
          <div className='absolute -left-0'>
            <div className='w-3 h-[1px] relative top-3 bg-zinc-600 dark:bg-zinc-400 '></div>
          </div>
          <h3 className="font-[450] font-base text-zinc-950 dark:text-zinc-50">{item.title}</h3>
          <div className='flex justify-between pr-2' >
            <p className=' text-zinc-600 dark:text-zinc-400'>{item.company}</p>
            <p className=' text-zinc-600 dark:text-zinc-400'>{item.dateRange}</p>
          </div>
          <Disclosure>
          <DisclosureTrigger>
          <div>
          <p className='hover:text-zinc-950 dark:hover:text-zinc-50 text-zinc-600 dark:text-zinc-400' onClick={() => handleExpanded(item.id)}>{expanded.includes(item.id) ? <ChevronUp></ChevronUp> : <ChevronDown></ChevronDown>}</p>
          </div>
          </DisclosureTrigger>
          <DisclosureContent>
          <ul className="ml-2.25 mt-2 list-disc list-inside text-zinc-600 dark:text-zinc-400">
            {item.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>  
          </DisclosureContent>
          </Disclosure>
        </div>  
      ))
  )
}