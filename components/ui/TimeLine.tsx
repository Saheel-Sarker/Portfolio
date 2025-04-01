import Link from 'next/link'

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
    <div className="relative border-l border-gray-300">
      {items.map((item, index) => (
        <div key={index} className="mb-8 pl-4">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.company}</p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.dateRange}</p>
          <ul className="mt-2 list-disc list-inside text-sm text-zinc-600 dark:text-zinc-500">
            {item.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
          <p className='text-sm text-zinc-600 dark:text-zinc-400 mt-2'>{item.link}</p>
        </div>
      ))}
  </div>
  )
}