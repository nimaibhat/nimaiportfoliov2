import { ExperimentGrid } from "@/sections/ExperimentsSection/components/ExperimentGrid";

export const ExperimentsSection = () => {
  return (
    <div className="box-border caret-transparent blur-0">
      <div className="text-lg font-medium box-border caret-transparent leading-7">
        Experiments
      </div>
      <p className="text-zinc-500 box-border caret-transparent">
        Tinkering in various domains.
      </p>
      <ExperimentGrid />
    </div>
  );
};
