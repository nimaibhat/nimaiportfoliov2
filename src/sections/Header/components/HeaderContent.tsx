export const HeaderContent = () => {
  return (
    <div className="[align-items:normal] box-border caret-transparent flex flex-col justify-normal md:items-start md:flex-row md:justify-between">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent blur-0">
          <h1 className="text-xl font-medium box-border caret-transparent leading-7 dark:text-zinc-50">
            Nimai Bhat
          </h1>
        </div>
        <div className="box-border caret-transparent blur-0">
          <p className="box-border caret-transparent dark:text-zinc-300">
            Life long learner.
          </p>
        </div>
        <div className="box-border caret-transparent blur-0">
          <p className="box-border caret-transparent -mt-1 dark:text-zinc-300">
            Computer Science at
            <span className="box-border caret-transparent decoration-zinc-200 dark:decoration-zinc-600 underline">
              Ohio State University.
            </span>
          </p>
        </div>
      </div>
      <div className="[align-items:normal] box-border caret-transparent gap-x-[normal] flex flex-col gap-y-[normal] mt-4 md:items-end md:gap-x-1 md:gap-y-1 md:mt-0">
        <div className="box-border caret-transparent blur-0">
          <a
            href="https://www.linkedin.com/in/nimai-bhat/"
            className="box-border caret-transparent decoration-zinc-200 dark:decoration-zinc-600 dark:text-zinc-300 underline hover:text-zinc-600 dark:hover:text-zinc-100"
          >
            LinkedIn
          </a>
        </div>
        <div className="box-border caret-transparent blur-0">
          <a
            href="https://github.com/nimaibhat"
            className="box-border caret-transparent decoration-zinc-200 dark:decoration-zinc-600 dark:text-zinc-300 underline hover:text-zinc-600 dark:hover:text-zinc-100"
          >
            GitHub
          </a>
        </div>
        <div className="box-border caret-transparent blur-0">
          <a
            href="https://www.instagram.com/nimai.bhat/"
            className="box-border caret-transparent decoration-zinc-200 dark:decoration-zinc-600 dark:text-zinc-300 underline hover:text-zinc-600 dark:hover:text-zinc-100"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};
