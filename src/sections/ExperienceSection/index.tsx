import { ExperienceList } from "@/sections/ExperienceSection/components/ExperienceList";

export const ExperienceSection = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="box-border caret-transparent blur-0">
        <h3 className="text-xs box-border caret-transparent tracking-[0.3px] leading-4 uppercase text-zinc-500 dark:text-zinc-400">
          Recently
        </h3>
      </div>
      <ExperienceList />
    </div>
  );
};
