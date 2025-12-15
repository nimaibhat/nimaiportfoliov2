import { StatusList } from "@/sections/NowSection/components/StatusList";

export const NowSection = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="box-border caret-transparent blur-0">
        <h3 className="text-zinc-500 text-xs box-border caret-transparent tracking-[0.3px] leading-4 uppercase">
          Now
        </h3>
      </div>
      <StatusList />
    </div>
  );
};
