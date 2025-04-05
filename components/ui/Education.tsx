export type EducationItem = {
  degree: string;
  minor?: string;
  institution: string;
  dateRange: string;
  description?: string;
};

export type EducationProps = {
  items: EducationItem[];
};

export function Education({ items }: EducationProps) {
  return (
      items.map((item, index) => (
        
        <div
          key={index}
          className="pb-8 pt-2 pl-4 border-l-[1px] dark:border-zinc-400 border-zinc-600"
        >
          <div className='absolute -left-0'>
            <div className='w-3 h-[1px] relative top-3 bg-zinc-600 dark:bg-zinc-400 '></div>
          </div>
          <h3 className="text-zinc-950 dark:text-zinc-50 font-[450] font-base">
            {item.degree}, Minor in {item.minor}
          </h3>
          
          <div className="flex justify-between pr-2">
          <p className=" text-zinc-600 dark:text-zinc-400">
            {item.institution}
          </p>
          <p className=" text-zinc-600 dark:text-zinc-400">
            {item.dateRange}
          </p>
          </div>
          {item.description && (
            <p className=" text-zinc-600 dark:text-zinc-400">
              {item.description}
            </p>
          )}
        </div>
      ))
  );
}