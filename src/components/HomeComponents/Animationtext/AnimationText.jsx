import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";

export function AnimatedShinyTextDemo() {
  return (
    <div className="z-10 flex min-h-64 items-center justify-center">
      <div
        className={cn(
          "group rounded-full cursor-pointer border border-black text-base text-black dark:border-white/5 dark:bg-neutral-900 dark:text-white"
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 font-semibold text-black dark:text-white">
          <span>Trusted by many clients ✨</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
  );
}
