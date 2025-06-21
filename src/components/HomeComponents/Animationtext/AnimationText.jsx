import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { AvatarCirclesDemo } from "../AvatarSection/AvatarCircles";

export function AnimatedShinyTextDemo() {
  return (
    <div className="z-10 flex items-center justify-center px-2 sm:px-0">
      <div
        className={cn(
          "group rounded-full cursor-pointer border border-black text-sm sm:text-base text-black dark:border-white/5 dark:bg-neutral-900 dark:text-white"
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-3 py-1 sm:px-4 sm:py-1 font-semibold text-sm sm:text-base text-black dark:text-white">
          <span className="mr-2">
            <AvatarCirclesDemo />
          </span>

          <span
            className="mx-1 inline-block h-6 border-l border-current align-middle"
            aria-hidden="true"
          />

          <span className="whitespace-nowrap">Trusted by many clients ✨</span>

          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
  );
}
