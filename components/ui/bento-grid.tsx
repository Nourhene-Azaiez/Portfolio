import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:grid-cols-3 grid-cols-1 gap-4 max-w-7xl sm:mx-32 mx-8 pb-20",
        "grid-auto-rows-auto", // Ensures rows adjust to content height
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  children, // Accept children prop
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode; // Add children here
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-zinc-800 py-4 px-8 dark:bg-black dark:border-white/[0.2] bg-zinc-200 border border-transparent justify-between flex flex-col",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold dark:text-neutral-200 text-neutral-800">{title}</div>
        {description && (
          <div className="font-sans font-normal text-xs dark:text-neutral-300 text-neutral-800">
            {description}
          </div>
        )}
      </div>
      {/* Render children here */}
      {children}
    </div>
  );
};
