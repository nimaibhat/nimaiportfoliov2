export const ExperienceList = () => {
  return (
    <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 mt-4">
      <div className="box-border caret-transparent border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors max-w-2xl bg-white/50 dark:bg-zinc-900/50">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-1">
            <div className="bg-green-600 box-border caret-transparent flex items-center justify-center h-12 w-12 rounded-xl shrink-0">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <h3 className="text-base font-medium box-border caret-transparent leading-6 dark:text-zinc-100">
                Shopify
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 box-border caret-transparent text-sm">
                Engineering Intern
              </p>
            </div>
          </div>
          <div className="text-zinc-500 dark:text-zinc-400 text-sm box-border caret-transparent text-right shrink-0">
            incoming june 2026
          </div>
        </div>
      </div>

      <div className="box-border caret-transparent border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors max-w-2xl bg-white/50 dark:bg-zinc-900/50">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-1">
            <div className="bg-blue-600 box-border caret-transparent flex items-center justify-center h-12 w-12 rounded-xl shrink-0">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <h3 className="text-base font-medium box-border caret-transparent leading-6 dark:text-zinc-100">
                Vertiv
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 box-border caret-transparent text-sm">
                AI Engineering Intern
              </p>
            </div>
          </div>
          <div className="text-zinc-500 dark:text-zinc-400 text-sm box-border caret-transparent text-right shrink-0">
            may 2025 - dec 2025
          </div>
        </div>
      </div>

      <div className="box-border caret-transparent border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors max-w-2xl bg-white/50 dark:bg-zinc-900/50">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-1">
            <div className="bg-orange-500 box-border caret-transparent flex items-center justify-center h-12 w-12 rounded-xl shrink-0">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <h3 className="text-base font-medium box-border caret-transparent leading-6 dark:text-zinc-100">
                Anthropic
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 box-border caret-transparent text-sm">
                Claude Builder
              </p>
            </div>
          </div>
          <div className="text-zinc-500 dark:text-zinc-400 text-sm box-border caret-transparent text-right shrink-0">
            aug 2025 - dec 2025
          </div>
        </div>
      </div>
    </div>
  );
};
