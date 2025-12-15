export const PhotoGallery = () => {
  return (
    <div className="relative box-border caret-transparent blur-0 w-full">
      <div className="relative box-border caret-transparent overflow-hidden -mx-4 rounded-none md:-mx-1 md:rounded-lg">
        <div
          role="region"
          className="relative box-border caret-transparent w-full"
        >
          <div className="relative box-border caret-transparent">
            <div className="box-border caret-transparent overflow-hidden rounded-none md:rounded-lg">
              <div className="box-border caret-transparent flex -ml-4">
                <div
                  role="group"
                  className="box-border caret-transparent basis-full shrink-0 pl-4"
                >
                  <div className="relative aspect-[3_/_2] box-border caret-transparent h-full w-full">
                    <div className="relative box-border caret-transparent blur-0 h-full w-full">
                      <img
                        alt="Photo 1"
                        sizes="100vw"
                        src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/42.jpg"
                        className="absolute text-transparent box-border h-full max-w-full object-cover w-full rounded-none inset-0 md:rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="absolute bg-[linear-gradient(to_top,rgba(0,0,0,0.7),rgba(0,0,0,0))] box-border caret-transparent h-16 bottom-0 inset-x-0"></div>
                  <div className="absolute text-white text-xs font-medium items-center box-border caret-transparent hidden justify-center leading-4 p-2 right-1 bottom-1 md:flex">
                    Kyoto, Japan
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute items-center box-border caret-transparent gap-x-1.5 flex justify-center gap-y-1.5 z-10 bottom-0 inset-x-0 md:bottom-1.5">
              <button className="text-white text-sm font-medium items-center bg-transparent shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px] caret-transparent gap-x-2 flex h-8 justify-center leading-5 opacity-50 pointer-events-none gap-y-2 text-center text-nowrap w-8 p-0 rounded-md">
                <img
                  src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/icon-1.svg"
                  alt="Icon"
                  className="box-border caret-transparent shrink-0 h-4 text-nowrap w-4"
                />
              </button>
              <div className="bg-white box-border caret-transparent h-1.5 w-1.5 rounded-full"></div>
              <div className="bg-white/50 box-border caret-transparent h-1.5 w-1.5 rounded-full"></div>
              <div className="bg-white/50 box-border caret-transparent h-1.5 w-1.5 rounded-full"></div>
              <div className="bg-white/50 box-border caret-transparent h-1.5 w-1.5 rounded-full"></div>
              <div className="bg-white/50 box-border caret-transparent h-1.5 w-1.5 rounded-full"></div>
              <div className="bg-white/50 box-border caret-transparent h-1.5 w-1.5 rounded-full"></div>
              <div className="bg-white/50 box-border caret-transparent h-1.5 w-1.5 rounded-full"></div>
              <div className="bg-white/50 box-border caret-transparent h-1.5 w-1.5 rounded-full"></div>
              <div className="bg-white/50 box-border caret-transparent h-1.5 w-1.5 rounded-full"></div>
              <div className="bg-white/50 box-border caret-transparent h-1.5 w-1.5 rounded-full"></div>
              <div className="bg-white/50 box-border caret-transparent h-1.5 w-1.5 rounded-full"></div>
              <div className="bg-white/50 box-border caret-transparent h-1.5 w-1.5 rounded-full"></div>
              <div className="bg-white/50 box-border caret-transparent h-1.5 w-1.5 rounded-full"></div>
              <div className="bg-white/50 box-border caret-transparent h-1.5 w-1.5 rounded-full"></div>
              <button className="text-white text-sm font-medium items-center bg-transparent shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px] caret-transparent gap-x-2 flex h-8 justify-center leading-5 gap-y-2 text-center text-nowrap w-8 p-0 rounded-md">
                <img
                  src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/icon-2.svg"
                  alt="Icon"
                  className="box-border caret-transparent shrink-0 h-4 pointer-events-none text-nowrap w-4"
                />
              </button>
            </div>
          </div>
          <div className="items-center box-border caret-transparent flex flex-col mt-2.5">
            <a
              href="https://photos.freemanjiang.com/"
              className="text-zinc-500 text-sm box-border caret-transparent block leading-5 hover:underline"
            >
              All photos at photos.freemanjiang.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
