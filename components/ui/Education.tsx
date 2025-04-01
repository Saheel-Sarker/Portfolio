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
          className="relative border-l border-gray-300 pl-6"
        >

          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {item.degree}
          </h3>
          
          <p className=" text-zinc-600 dark:text-zinc-400">
            {item.minor}
          </p>
          <p className=" text-zinc-600 dark:text-zinc-400">
            {item.institution}
          </p>
          <p className=" text-zinc-600 dark:text-zinc-400">
            {item.dateRange}
          </p>
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