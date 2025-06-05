import { cn } from "@/lib/utils";

export const AnimatedShinyText = ({
  children,
  className,
  ...props
}) => {
  return (
    <span
      className={cn(
        "mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
