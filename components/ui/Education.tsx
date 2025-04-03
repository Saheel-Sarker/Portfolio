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
    <div className="space-y-8">
      {items.map((item, index) => (
        
        <div
          key={index}
          className=" pl-4 border-l-[1px] dark:border-zinc-500 border-zinc-600 group "
        >
          <div className='absolute -left-0'>
            <div className='w-3 h-[1px] relative top-3 bg-zinc-600 dark:bg-zinc-500 '></div>
          </div>
          <h3 className="text-zinc-900 dark:text-zinc-50 font-[450] font-base">
            {item.degree}, Minor in {item.minor}
          </h3>
          
          <div className="flex justify-between">
          <p className=" text-zinc-600 dark:text-zinc-400">
            {item.institution}
          </p>
          <p className=" text-zinc-600 dark:text-zinc-400">
            {item.dateRange}
          </p>
          </div>
          {item.description && (
            <p className=" text-gray-600 dark:text-gray-400">
              {item.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}