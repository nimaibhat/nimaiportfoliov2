export const StatusList = () => {
  return (
    <div className="box-border caret-transparent gap-x-2 flex flex-col gap-y-2 mt-0.5">
      <div className="items-start box-border caret-transparent gap-x-2 flex blur-0 gap-y-2">
        <span className="relative box-border caret-transparent flex h-2 w-2 mt-2">
          <span className="absolute bg-emerald-400 box-border caret-transparent flex h-full opacity-75 w-full rounded-full"></span>
          <span className="relative bg-emerald-400 box-border caret-transparent flex h-2 w-2 rounded-full"></span>
        </span>
        <p className="box-border caret-transparent">
          Research engineering at
          <a
            href="https://www.sesame.com/"
            className="box-border caret-transparent decoration-emerald-400 underline"
          >
            Sesame
          </a>
          .
        </p>
      </div>
      <div className="items-start box-border caret-transparent gap-x-2 flex blur-0 gap-y-2">
        <span className="relative box-border caret-transparent flex h-2 w-2 mt-2">
          <span className="absolute bg-sky-400 box-border caret-transparent flex h-full opacity-75 w-full rounded-full"></span>
          <span className="relative bg-sky-400 box-border caret-transparent flex h-2 w-2 rounded-full"></span>
        </span>
        <p className="box-border caret-transparent">
          Tinkering at
          <a
            href="https://www.livetheresidency.com/"
            className="box-border caret-transparent decoration-sky-400 underline"
          >
            The Residency
          </a>
          in New York.
        </p>
      </div>
    </div>
  );
};
