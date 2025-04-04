import Link from 'next/link'
import { TextShimmer } from '../motion-primitives/text-shimmer'
import { Disclosure, DisclosureContent, DisclosureTrigger } from '../motion-primitives/disclosure'

export type TimelineItem = {
  title: string
  company: string
  dateRange: string
  skills: string[]
  link?: string
}

export type TimelineProps = {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      
      {items.map((item, index) => (
        <Disclosure key={index} className="pb-8 pl-4 border-l-[1px] dark:border-zinc-400 border-zinc-600 transition-colors">
          <DisclosureTrigger>
          <div className='group'>
          <div className=''>
            <div className='absolute -left-0'>
            <div className='w-3 h-[1px] relative top-3 bg-zinc-600 dark:bg-zinc-400 dark:group-hover:bg-zinc-50 group-hover:bg-zinc-950 group-hover:h-[2px] transition-colors'></div>
          </div>
          <h3 className="font-[450] font-base text-zinc-950 dark:text-zinc-50">{item.title}</h3>
          <div className='flex justify-between'>
          <p className=" text-zinc-600 dark:text-zinc-400 group-hover:dark:text-zinc-50 group-hover:text-zinc-950">{item.company}</p>
          <p className=" text-zinc-600 dark:text-zinc-400 group-hover:dark:text-zinc-50 group-hover:text-zinc-950">{item.dateRange}</p>
          </div>
          </div>
          </div>
          </DisclosureTrigger>
          <DisclosureContent>
          <ul className="mt-2 list-disc list-inside text-zinc-600 dark:text-zinc-400">
            {item.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
          {item.link && (
             <li className='relative text-zinc-600 dark:text-zinc-400 dark:hover:text-blue-500 text:zinc-900 hover:text-blue-400 transition-colors duration-100 group/link'>
                <Link
                  href={item.link}
                  className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full underline underline-offset-3"
                >
                  <div className='text-zinc-600 dark:text-zinc-400 dark:group-hover/link:text-blue-500 text:zinc-900 group-hover/link:text-blue-400'>
                  Link
                  </div>
                  <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg> 
                </Link>
                </li>
                
              )}
              </DisclosureContent>
        </Disclosure>  
      ))}
  </div>
  )
}