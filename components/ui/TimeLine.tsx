'use client'
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

export function Timeline({ items }: TimelineProps) {
  const [openItemId, setOpenItemId] = useState<string | null>(null)

  return (
    <>
      {items.map((item) => {
        const isOpen = openItemId === item.id

        return (
          <div key={item.id} className="pb-8 pt-2 pl-4 border-l-[1px] dark:border-zinc-400 border-zinc-600">
            <div className='absolute -left-0'>
              <div className='w-3 h-[1px] relative top-3 bg-zinc-600 dark:bg-zinc-400 '></div>
            </div>
            <h3 className="font-[450] font-base text-zinc-950 dark:text-zinc-50">{item.title}</h3>
            <div className='flex justify-between pr-2'>
              <p className='text-zinc-600 dark:text-zinc-400'>{item.company}</p>
              <p className='text-zinc-600 dark:text-zinc-400'>{item.dateRange}</p>
            </div>
            <Disclosure
              open={isOpen}
              onOpenChange={(open) => setOpenItemId(open ? item.id : null)}
            >
              <DisclosureTrigger>
                <button
                  type="button"
                  className='mt-2 inline-flex text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50'
                  aria-label={isOpen ? `Collapse ${item.title}` : `Expand ${item.title}`}
                >
                  {isOpen ? <ChevronUp /> : <ChevronDown />}
                </button>
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
        )
      })}
    </>
  )
}