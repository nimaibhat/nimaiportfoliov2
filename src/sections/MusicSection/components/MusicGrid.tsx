export const MusicGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-6 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-6 mt-4 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
      <div className="box-border caret-transparent blur-0">
        <div className="relative bg-stone-900 box-border caret-transparent gap-x-2 flex flex-col h-[152px] gap-y-2 w-full pt-3 pb-4 px-4 rounded-xl">
          <audio
            preload="metadata"
            src="/api/media/file/SevenAries_TextMe.mp3"
            title="/api/media/file/SevenAries_TextMe.mp3"
            className="box-border caret-transparent hidden"
          >
            <p className="text-black box-border caret-transparent leading-[normal] font-times_new_roman">
              Your browser does not support the{" "}
              <code className="box-border caret-transparent font-ui_monospace">
                audio
              </code>
              element.
            </p>
          </audio>
          <div className="absolute text-white items-center box-border caret-transparent gap-x-2 flex gap-y-2 right-3 top-3">
            <a
              href="https://www.youtube.com/watch?v=3MxTfxACpKE"
              className="box-border caret-transparent block rounded-bl rounded-br rounded-tl rounded-tr"
            >
              <img
                src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/icon-3.svg"
                alt="Icon"
                className="box-border caret-transparent h-6 w-6"
              />
            </a>
            <a
              href="https://soundcloud.com/sevenaries/text-me"
              className="box-border caret-transparent block rounded-bl rounded-br rounded-tl rounded-tr"
            >
              <img
                src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/icon-4.svg"
                alt="Icon"
                className="box-border caret-transparent h-6 w-6"
              />
            </a>
            <a
              href="https://open.spotify.com/track/5YarexpmYZ6DHo1NntmwPc?si=f5ea8e45faf54e3a"
              className="box-border caret-transparent block rounded-bl rounded-br rounded-tl rounded-tr"
            >
              <img
                src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/icon-5.svg"
                alt="Icon"
                className="box-border caret-transparent h-[21.6px] w-[21.6px]"
              />
            </a>
          </div>
          <div className="box-border caret-transparent gap-x-2.5 flex gap-y-2.5">
            <a
              href="https://open.spotify.com/track/5YarexpmYZ6DHo1NntmwPc?si=f5ea8e45faf54e3a"
              className="relative aspect-square box-border caret-transparent block shrink-0 h-24 w-24 overflow-hidden rounded-lg"
            >
              <div className="relative box-border caret-transparent blur-0 h-full w-full">
                <img
                  alt="Album cover"
                  sizes="(max-width: 768px) 20vw, 10vw"
                  src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/32.jpg"
                  className="absolute text-transparent box-border h-full max-w-full object-cover w-full rounded-lg inset-0"
                />
              </div>
            </a>
            <div className="box-border caret-transparent flex flex-col grow justify-between overflow-hidden pt-6">
              <div className="relative box-border caret-transparent">
                <div className="relative box-border caret-transparent">
                  <div className="absolute box-border caret-transparent hidden pointer-events-none z-10 inset-0">
                    <div className="absolute bg-[linear-gradient(to_right,rgb(31,31,31),rgba(0,0,0,0))] box-border caret-transparent w-2.5 left-0 inset-y-0"></div>
                    <div className="absolute bg-[linear-gradient(to_left,rgb(31,31,31),rgba(0,0,0,0))] box-border caret-transparent w-2.5 right-0 inset-y-0"></div>
                  </div>
                  <a
                    href="https://open.spotify.com/track/5YarexpmYZ6DHo1NntmwPc?si=f5ea8e45faf54e3a"
                    className="text-white text-sm font-semibold box-border caret-transparent block leading-5 text-nowrap hover:underline"
                  >
                    Text Me
                  </a>
                </div>
                <div className="relative box-border caret-transparent mt-1">
                  <div className="absolute box-border caret-transparent hidden pointer-events-none z-10 inset-0">
                    <div className="absolute bg-[linear-gradient(to_right,rgb(31,31,31),rgba(0,0,0,0))] box-border caret-transparent w-2.5 left-0 inset-y-0"></div>
                    <div className="absolute bg-[linear-gradient(to_left,rgb(31,31,31),rgba(0,0,0,0))] box-border caret-transparent w-2.5 right-0 inset-y-0"></div>
                  </div>
                  <div className="text-zinc-500 text-sm box-border caret-transparent flow-root leading-5 text-ellipsis overflow-hidden">
                    <a
                      href="https://open.spotify.com/artist/410PriT5ZoxZms12NsIc0f?si=xF0PdeDJQouIoEr3fMxdzA"
                      className="box-border caret-transparent hover:text-stone-300 hover:underline"
                    >
                      Seven Aries
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="items-center box-border caret-transparent flex justify-between">
            <div className="relative box-border caret-transparent flex basis-[0%] grow h-5 isolate">
              <span className="relative items-center box-border caret-transparent flex w-full">
                <span className="relative bg-zinc-50/40 box-border caret-transparent block grow h-1 w-full overflow-hidden rounded-full">
                  <span className="absolute bg-white box-border caret-transparent block h-full left-[0%] right-full"></span>
                </span>
                <span className="absolute box-border caret-transparent block translate-x-[-50.0%] left-[calc(0%_+_4px)]"></span>
              </span>
            </div>
            <div className="items-center box-border caret-transparent gap-x-4 flex gap-y-4">
              <div className="text-zinc-400 text-[12.8px] box-border caret-transparent tracking-[0.32px] leading-[19.2px] text-right w-14">
                2:59
              </div>
              <button className="items-center bg-white caret-transparent flex h-[29.28px] justify-center text-center w-[29.28px] -mt-1.5 p-0 rounded-full">
                <img
                  src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/icon-6.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-4 w-4"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent blur-0">
        <div className="relative bg-stone-900 box-border caret-transparent gap-x-2 flex flex-col h-[152px] gap-y-2 w-full pt-3 pb-4 px-4 rounded-xl">
          <audio
            preload="metadata"
            src="/api/media/file/Seven%20Aries%20-%20A%20Cruel%20Angel's%20Thesis%20(FL).mp3"
            title="/api/media/file/Seven%20Aries%20-%20A%20Cruel%20Angel's%20Thesis%20(FL).mp3"
            className="box-border caret-transparent hidden"
          >
            <p className="text-black box-border caret-transparent leading-[normal] font-times_new_roman">
              Your browser does not support the{" "}
              <code className="box-border caret-transparent font-ui_monospace">
                audio
              </code>
              element.
            </p>
          </audio>
          <div className="absolute text-white items-center box-border caret-transparent gap-x-2 flex gap-y-2 right-3 top-3">
            <a
              href="https://www.youtube.com/watch?v=fppsP2cZjGg"
              className="box-border caret-transparent block rounded-bl rounded-br rounded-tl rounded-tr"
            >
              <img
                src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/icon-3.svg"
                alt="Icon"
                className="box-border caret-transparent h-6 w-6"
              />
            </a>
            <a
              href="https://soundcloud.com/sevenaries/a-cruel-angels-thesis-seven-aries-hardstyle-remix"
              className="box-border caret-transparent block rounded-bl rounded-br rounded-tl rounded-tr"
            >
              <img
                src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/icon-4.svg"
                alt="Icon"
                className="box-border caret-transparent h-6 w-6"
              />
            </a>
            <a
              href="https://open.spotify.com/track/3oRj4V7MTYwqBj1vhjc3Ve?si=d8cc0e8d2efe4ac5"
              className="box-border caret-transparent block rounded-bl rounded-br rounded-tl rounded-tr"
            >
              <img
                src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/icon-5.svg"
                alt="Icon"
                className="box-border caret-transparent h-[21.6px] w-[21.6px]"
              />
            </a>
          </div>
          <div className="box-border caret-transparent gap-x-2.5 flex gap-y-2.5">
            <a
              href="https://open.spotify.com/track/3oRj4V7MTYwqBj1vhjc3Ve?si=d8cc0e8d2efe4ac5"
              className="relative aspect-square box-border caret-transparent block shrink-0 h-24 w-24 overflow-hidden rounded-lg"
            >
              <div className="relative box-border caret-transparent blur-0 h-full w-full">
                <img
                  alt="Album cover"
                  sizes="(max-width: 768px) 20vw, 10vw"
                  src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/49.png"
                  className="absolute text-transparent box-border h-full max-w-full object-cover w-full rounded-lg inset-0"
                />
              </div>
            </a>
            <div className="box-border caret-transparent flex flex-col grow justify-between overflow-hidden pt-6">
              <div className="relative box-border caret-transparent">
                <div className="relative box-border caret-transparent">
                  <div className="absolute box-border caret-transparent hidden pointer-events-none z-10 inset-0">
                    <div className="absolute bg-[linear-gradient(to_right,rgb(31,31,31),rgba(0,0,0,0))] box-border caret-transparent w-2.5 left-0 inset-y-0"></div>
                    <div className="absolute bg-[linear-gradient(to_left,rgb(31,31,31),rgba(0,0,0,0))] box-border caret-transparent w-2.5 right-0 inset-y-0"></div>
                  </div>
                  <a
                    href="https://open.spotify.com/track/3oRj4V7MTYwqBj1vhjc3Ve?si=d8cc0e8d2efe4ac5"
                    className="text-white text-sm font-semibold box-border caret-transparent block leading-5 text-nowrap hover:underline"
                  >
                    A Cruel Angel&#39;s Thesis - Hardstyle Remix
                  </a>
                </div>
                <div className="relative box-border caret-transparent mt-1">
                  <div className="absolute box-border caret-transparent hidden pointer-events-none z-10 inset-0">
                    <div className="absolute bg-[linear-gradient(to_right,rgb(31,31,31),rgba(0,0,0,0))] box-border caret-transparent w-2.5 left-0 inset-y-0"></div>
                    <div className="absolute bg-[linear-gradient(to_left,rgb(31,31,31),rgba(0,0,0,0))] box-border caret-transparent w-2.5 right-0 inset-y-0"></div>
                  </div>
                  <div className="text-zinc-500 text-sm box-border caret-transparent flow-root leading-5 text-ellipsis overflow-hidden">
                    <a
                      href="https://open.spotify.com/artist/410PriT5ZoxZms12NsIc0f?si=xF0PdeDJQouIoEr3fMxdzA"
                      className="box-border caret-transparent hover:text-stone-300 hover:underline"
                    >
                      Seven Aries
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="items-center box-border caret-transparent flex justify-between">
            <div className="relative box-border caret-transparent flex basis-[0%] grow h-5 isolate">
              <span className="relative items-center box-border caret-transparent flex w-full">
                <span className="relative bg-zinc-50/40 box-border caret-transparent block grow h-1 w-full overflow-hidden rounded-full">
                  <span className="absolute bg-white box-border caret-transparent block h-full left-[0%] right-full"></span>
                </span>
                <span className="absolute box-border caret-transparent block translate-x-[-50.0%] left-[calc(0%_+_4px)]"></span>
              </span>
            </div>
            <div className="items-center box-border caret-transparent gap-x-4 flex gap-y-4">
              <div className="text-zinc-400 text-[12.8px] box-border caret-transparent tracking-[0.32px] leading-[19.2px] text-right w-14">
                2:18
              </div>
              <button className="items-center bg-white caret-transparent flex h-[29.28px] justify-center text-center w-[29.28px] -mt-1.5 p-0 rounded-full">
                <img
                  src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/icon-6.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-4 w-4"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent blur-0">
        <div className="relative bg-stone-900 box-border caret-transparent gap-x-2 flex flex-col h-[152px] gap-y-2 w-full pt-3 pb-4 px-4 rounded-xl">
          <audio
            preload="metadata"
            src="/api/media/file/Jonas%20Aden%20-%20My%20Love%20Is%20Gone%20(Seven%20Aries%20Remix).mp3"
            title="/api/media/file/Jonas%20Aden%20-%20My%20Love%20Is%20Gone%20(Seven%20Aries%20Remix).mp3"
            className="box-border caret-transparent hidden"
          >
            <p className="text-black box-border caret-transparent leading-[normal] font-times_new_roman">
              Your browser does not support the{" "}
              <code className="box-border caret-transparent font-ui_monospace">
                audio
              </code>
              element.
            </p>
          </audio>
          <div className="absolute text-white items-center box-border caret-transparent gap-x-2 flex gap-y-2 right-3 top-3">
            <a
              href="https://www.youtube.com/watch?v=mOv09UawRgI"
              className="box-border caret-transparent block rounded-bl rounded-br rounded-tl rounded-tr"
            >
              <img
                src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/icon-3.svg"
                alt="Icon"
                className="box-border caret-transparent h-6 w-6"
              />
            </a>
            <a
              href="https://soundcloud.com/sevenaries/my-love-is-gone-remix"
              className="box-border caret-transparent block rounded-bl rounded-br rounded-tl rounded-tr"
            >
              <img
                src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/icon-4.svg"
                alt="Icon"
                className="box-border caret-transparent h-6 w-6"
              />
            </a>
          </div>
          <div className="box-border caret-transparent gap-x-2.5 flex gap-y-2.5">
            <a
              href="https://soundcloud.com/sevenaries/my-love-is-gone-remix"
              className="relative aspect-square box-border caret-transparent block shrink-0 h-24 w-24 overflow-hidden rounded-lg"
            >
              <div className="relative box-border caret-transparent blur-0 h-full w-full">
                <img
                  alt="Album cover"
                  sizes="(max-width: 768px) 20vw, 10vw"
                  src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/30.jpg"
                  className="absolute text-transparent box-border h-full max-w-full object-cover w-full rounded-lg inset-0"
                />
              </div>
            </a>
            <div className="box-border caret-transparent flex flex-col grow justify-between overflow-hidden pt-6">
              <div className="relative box-border caret-transparent">
                <div className="relative box-border caret-transparent">
                  <div className="absolute box-border caret-transparent hidden pointer-events-none z-10 inset-0">
                    <div className="absolute bg-[linear-gradient(to_right,rgb(31,31,31),rgba(0,0,0,0))] box-border caret-transparent w-2.5 left-0 inset-y-0"></div>
                    <div className="absolute bg-[linear-gradient(to_left,rgb(31,31,31),rgba(0,0,0,0))] box-border caret-transparent w-2.5 right-0 inset-y-0"></div>
                  </div>
                  <a
                    href="https://soundcloud.com/sevenaries/my-love-is-gone-remix"
                    className="text-white text-sm font-semibold box-border caret-transparent block leading-5 text-nowrap hover:underline"
                  >
                    My Love Is Gone - Seven Aries Remix
                  </a>
                </div>
                <div className="relative box-border caret-transparent mt-1">
                  <div className="absolute box-border caret-transparent hidden pointer-events-none z-10 inset-0">
                    <div className="absolute bg-[linear-gradient(to_right,rgb(31,31,31),rgba(0,0,0,0))] box-border caret-transparent w-2.5 left-0 inset-y-0"></div>
                    <div className="absolute bg-[linear-gradient(to_left,rgb(31,31,31),rgba(0,0,0,0))] box-border caret-transparent w-2.5 right-0 inset-y-0"></div>
                  </div>
                  <div className="text-zinc-500 text-sm box-border caret-transparent flow-root leading-5 text-ellipsis overflow-hidden">
                    <a
                      href="https://open.spotify.com/artist/1qq5e02CcWNFqZMbmdrIcj?si=ch-E4YBrRtaOT0BbFXxARA"
                      className="box-border caret-transparent hover:text-stone-300 hover:underline"
                    >
                      Jonas Aden
                    </a>
                    ,{" "}
                    <a
                      href="https://open.spotify.com/artist/410PriT5ZoxZms12NsIc0f?si=xF0PdeDJQouIoEr3fMxdzA"
                      className="box-border caret-transparent hover:text-stone-300 hover:underline"
                    >
                      Seven Aries
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="items-center box-border caret-transparent flex justify-between">
            <div className="relative box-border caret-transparent flex basis-[0%] grow h-5 isolate">
              <span className="relative items-center box-border caret-transparent flex w-full">
                <span className="relative bg-zinc-50/40 box-border caret-transparent block grow h-1 w-full overflow-hidden rounded-full">
                  <span className="absolute bg-white box-border caret-transparent block h-full left-[0%] right-full"></span>
                </span>
                <span className="absolute box-border caret-transparent block translate-x-[-50.0%] left-[calc(0%_+_4px)]"></span>
              </span>
            </div>
            <div className="items-center box-border caret-transparent gap-x-4 flex gap-y-4">
              <div className="text-zinc-400 text-[12.8px] box-border caret-transparent tracking-[0.32px] leading-[19.2px] text-right w-14">
                3:47
              </div>
              <button className="items-center bg-white caret-transparent flex h-[29.28px] justify-center text-center w-[29.28px] -mt-1.5 p-0 rounded-full">
                <img
                  src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/icon-6.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-4 w-4"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent blur-0">
        <div className="relative bg-stone-900 box-border caret-transparent gap-x-2 flex flex-col h-[152px] gap-y-2 w-full pt-3 pb-4 px-4 rounded-xl">
          <audio
            preload="metadata"
            src="/api/media/file/Seven%20Aries%20-%20Second%20Guessing.mp3"
            title="/api/media/file/Seven%20Aries%20-%20Second%20Guessing.mp3"
            className="box-border caret-transparent hidden"
          >
            <p className="text-black box-border caret-transparent leading-[normal] font-times_new_roman">
              Your browser does not support the{" "}
              <code className="box-border caret-transparent font-ui_monospace">
                audio
              </code>
              element.
            </p>
          </audio>
          <div className="absolute text-white items-center box-border caret-transparent gap-x-2 flex gap-y-2 right-3 top-3">
            <a
              href="https://www.youtube.com/watch?v=r46RcZ_draw"
              className="box-border caret-transparent block rounded-bl rounded-br rounded-tl rounded-tr"
            >
              <img
                src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/icon-3.svg"
                alt="Icon"
                className="box-border caret-transparent h-6 w-6"
              />
            </a>
            <a
              href="https://soundcloud.com/sevenaries/seven-aries-second-guessing"
              className="box-border caret-transparent block rounded-bl rounded-br rounded-tl rounded-tr"
            >
              <img
                src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/icon-4.svg"
                alt="Icon"
                className="box-border caret-transparent h-6 w-6"
              />
            </a>
            <a
              href="https://open.spotify.com/track/6s6zg3RB1AWCpoOsWXRGBA?si=cf880c7293754574"
              className="box-border caret-transparent block rounded-bl rounded-br rounded-tl rounded-tr"
            >
              <img
                src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/icon-5.svg"
                alt="Icon"
                className="box-border caret-transparent h-[21.6px] w-[21.6px]"
              />
            </a>
          </div>
          <div className="box-border caret-transparent gap-x-2.5 flex gap-y-2.5">
            <a
              href="https://open.spotify.com/track/6s6zg3RB1AWCpoOsWXRGBA?si=cf880c7293754574"
              className="relative aspect-square box-border caret-transparent block shrink-0 h-24 w-24 overflow-hidden rounded-lg"
            >
              <div className="relative box-border caret-transparent blur-0 h-full w-full">
                <img
                  alt="Album cover"
                  sizes="(max-width: 768px) 20vw, 10vw"
                  src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/36.jpg"
                  className="absolute text-transparent box-border h-full max-w-full object-cover w-full rounded-lg inset-0"
                />
              </div>
            </a>
            <div className="box-border caret-transparent flex flex-col grow justify-between overflow-hidden pt-6">
              <div className="relative box-border caret-transparent">
                <div className="relative box-border caret-transparent">
                  <div className="absolute box-border caret-transparent hidden pointer-events-none z-10 inset-0">
                    <div className="absolute bg-[linear-gradient(to_right,rgb(31,31,31),rgba(0,0,0,0))] box-border caret-transparent w-2.5 left-0 inset-y-0"></div>
                    <div className="absolute bg-[linear-gradient(to_left,rgb(31,31,31),rgba(0,0,0,0))] box-border caret-transparent w-2.5 right-0 inset-y-0"></div>
                  </div>
                  <a
                    href="https://open.spotify.com/track/6s6zg3RB1AWCpoOsWXRGBA?si=cf880c7293754574"
                    className="text-white text-sm font-semibold box-border caret-transparent block leading-5 text-nowrap hover:underline"
                  >
                    Second Guessing
                  </a>
                </div>
                <div className="relative box-border caret-transparent mt-1">
                  <div className="absolute box-border caret-transparent hidden pointer-events-none z-10 inset-0">
                    <div className="absolute bg-[linear-gradient(to_right,rgb(31,31,31),rgba(0,0,0,0))] box-border caret-transparent w-2.5 left-0 inset-y-0"></div>
                    <div className="absolute bg-[linear-gradient(to_left,rgb(31,31,31),rgba(0,0,0,0))] box-border caret-transparent w-2.5 right-0 inset-y-0"></div>
                  </div>
                  <div className="text-zinc-500 text-sm box-border caret-transparent flow-root leading-5 text-ellipsis overflow-hidden">
                    <a
                      href="https://open.spotify.com/artist/410PriT5ZoxZms12NsIc0f?si=xF0PdeDJQouIoEr3fMxdzA"
                      className="box-border caret-transparent hover:text-stone-300 hover:underline"
                    >
                      Seven Aries
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="items-center box-border caret-transparent flex justify-between">
            <div className="relative box-border caret-transparent flex basis-[0%] grow h-5 isolate">
              <span className="relative items-center box-border caret-transparent flex w-full">
                <span className="relative bg-zinc-50/40 box-border caret-transparent block grow h-1 w-full overflow-hidden rounded-full">
                  <span className="absolute bg-white box-border caret-transparent block h-full left-[0%] right-full"></span>
                </span>
                <span className="absolute box-border caret-transparent block translate-x-[-50.0%] left-[calc(0%_+_4px)]"></span>
              </span>
            </div>
            <div className="items-center box-border caret-transparent gap-x-4 flex gap-y-4">
              <div className="text-zinc-400 text-[12.8px] box-border caret-transparent tracking-[0.32px] leading-[19.2px] text-right w-14">
                3:00
              </div>
              <button className="items-center bg-white caret-transparent flex h-[29.28px] justify-center text-center w-[29.28px] -mt-1.5 p-0 rounded-full">
                <img
                  src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/icon-6.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-4 w-4"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent blur-0">
        <div className="relative bg-stone-900 box-border caret-transparent gap-x-2 flex flex-col h-[152px] gap-y-2 w-full pt-3 pb-4 px-4 rounded-xl">
          <audio
            preload="metadata"
            src="/api/media/file/Beat_ID.mp3"
            title="/api/media/file/Beat_ID.mp3"
            className="box-border caret-transparent hidden"
          >
            <p className="text-black box-border caret-transparent leading-[normal] font-times_new_roman">
              Your browser does not support the{" "}
              <code className="box-border caret-transparent font-ui_monospace">
                audio
              </code>
              element.
            </p>
          </audio>
          <div className="absolute text-white items-center box-border caret-transparent gap-x-2 flex gap-y-2 right-3 top-3">
            <a
              href="https://soundcloud.com/sevenaries/id"
              className="box-border caret-transparent block rounded-bl rounded-br rounded-tl rounded-tr"
            >
              <img
                src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/icon-4.svg"
                alt="Icon"
                className="box-border caret-transparent h-6 w-6"
              />
            </a>
          </div>
          <div className="box-border caret-transparent gap-x-2.5 flex gap-y-2.5">
            <a
              href="https://soundcloud.com/sevenaries/id"
              className="relative aspect-square box-border caret-transparent block shrink-0 h-24 w-24 overflow-hidden rounded-lg"
            >
              <div className="relative box-border caret-transparent blur-0 h-full w-full">
                <img
                  alt="Album cover"
                  sizes="(max-width: 768px) 20vw, 10vw"
                  src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/27.jpg"
                  className="absolute text-transparent box-border h-full max-w-full object-cover w-full rounded-lg inset-0"
                />
              </div>
            </a>
            <div className="box-border caret-transparent flex flex-col grow justify-between overflow-hidden pt-6">
              <div className="relative box-border caret-transparent">
                <div className="relative box-border caret-transparent">
                  <div className="absolute box-border caret-transparent hidden pointer-events-none z-10 inset-0">
                    <div className="absolute bg-[linear-gradient(to_right,rgb(31,31,31),rgba(0,0,0,0))] box-border caret-transparent w-2.5 left-0 inset-y-0"></div>
                    <div className="absolute bg-[linear-gradient(to_left,rgb(31,31,31),rgba(0,0,0,0))] box-border caret-transparent w-2.5 right-0 inset-y-0"></div>
                  </div>
                  <a
                    href="https://soundcloud.com/sevenaries/id"
                    className="text-white text-sm font-semibold box-border caret-transparent block leading-5 text-nowrap hover:underline"
                  >
                    ID
                  </a>
                </div>
                <div className="relative box-border caret-transparent mt-1">
                  <div className="absolute box-border caret-transparent hidden pointer-events-none z-10 inset-0">
                    <div className="absolute bg-[linear-gradient(to_right,rgb(31,31,31),rgba(0,0,0,0))] box-border caret-transparent w-2.5 left-0 inset-y-0"></div>
                    <div className="absolute bg-[linear-gradient(to_left,rgb(31,31,31),rgba(0,0,0,0))] box-border caret-transparent w-2.5 right-0 inset-y-0"></div>
                  </div>
                  <div className="text-zinc-500 text-sm box-border caret-transparent flow-root leading-5 text-ellipsis overflow-hidden">
                    <a
                      href="https://open.spotify.com/artist/410PriT5ZoxZms12NsIc0f?si=xF0PdeDJQouIoEr3fMxdzA"
                      className="box-border caret-transparent hover:text-stone-300 hover:underline"
                    >
                      Seven Aries
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="items-center box-border caret-transparent flex justify-between">
            <div className="relative box-border caret-transparent flex basis-[0%] grow h-5 isolate">
              <span className="relative items-center box-border caret-transparent flex w-full">
                <span className="relative bg-zinc-50/40 box-border caret-transparent block grow h-1 w-full overflow-hidden rounded-full">
                  <span className="absolute bg-white box-border caret-transparent block h-full left-[0%] right-full"></span>
                </span>
                <span className="absolute box-border caret-transparent block translate-x-[-50.0%] left-[calc(0%_+_4px)]"></span>
              </span>
            </div>
            <div className="items-center box-border caret-transparent gap-x-4 flex gap-y-4">
              <div className="text-zinc-400 text-[12.8px] box-border caret-transparent tracking-[0.32px] leading-[19.2px] text-right w-14">
                1:53
              </div>
              <button className="items-center bg-white caret-transparent flex h-[29.28px] justify-center text-center w-[29.28px] -mt-1.5 p-0 rounded-full">
                <img
                  src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/icon-6.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-4 w-4"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent blur-0">
        <div className="relative bg-stone-900 box-border caret-transparent gap-x-2 flex flex-col h-[152px] gap-y-2 w-full pt-3 pb-4 px-4 rounded-xl">
          <audio
            preload="metadata"
            src="/api/media/file/Stargazing-Instrumental.mp3"
            title="/api/media/file/Stargazing-Instrumental.mp3"
            className="box-border caret-transparent hidden"
          >
            <p className="text-black box-border caret-transparent leading-[normal] font-times_new_roman">
              Your browser does not support the{" "}
              <code className="box-border caret-transparent font-ui_monospace">
                audio
              </code>
              element.
            </p>
          </audio>
          <div className="absolute text-white items-center box-border caret-transparent gap-x-2 flex gap-y-2 right-3 top-3">
            <a
              href="https://www.youtube.com/watch?v=C6gygOTTeyM"
              className="box-border caret-transparent block rounded-bl rounded-br rounded-tl rounded-tr"
            >
              <img
                src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/icon-3.svg"
                alt="Icon"
                className="box-border caret-transparent h-6 w-6"
              />
            </a>
            <a
              href="https://soundcloud.com/sevenaries/stargazing"
              className="box-border caret-transparent block rounded-bl rounded-br rounded-tl rounded-tr"
            >
              <img
                src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/icon-4.svg"
                alt="Icon"
                className="box-border caret-transparent h-6 w-6"
              />
            </a>
            <a
              href="https://open.spotify.com/track/6mSpFSqqDaCBO4JJ4VD7jz?si=ab6ad114d3a8463a"
              className="box-border caret-transparent block rounded-bl rounded-br rounded-tl rounded-tr"
            >
              <img
                src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/icon-5.svg"
                alt="Icon"
                className="box-border caret-transparent h-[21.6px] w-[21.6px]"
              />
            </a>
          </div>
          <div className="box-border caret-transparent gap-x-2.5 flex gap-y-2.5">
            <a
              href="https://open.spotify.com/track/6mSpFSqqDaCBO4JJ4VD7jz?si=ab6ad114d3a8463a"
              className="relative aspect-square box-border caret-transparent block shrink-0 h-24 w-24 overflow-hidden rounded-lg"
            >
              <div className="relative box-border caret-transparent blur-0 h-full w-full">
                <img
                  alt="Album cover"
                  sizes="(max-width: 768px) 20vw, 10vw"
                  src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/38.jpg"
                  className="absolute text-transparent box-border h-full max-w-full object-cover w-full rounded-lg inset-0"
                />
              </div>
            </a>
            <div className="box-border caret-transparent flex flex-col grow justify-between overflow-hidden pt-6">
              <div className="relative box-border caret-transparent">
                <div className="relative box-border caret-transparent">
                  <div className="absolute box-border caret-transparent hidden pointer-events-none z-10 inset-0">
                    <div className="absolute bg-[linear-gradient(to_right,rgb(31,31,31),rgba(0,0,0,0))] box-border caret-transparent w-2.5 left-0 inset-y-0"></div>
                    <div className="absolute bg-[linear-gradient(to_left,rgb(31,31,31),rgba(0,0,0,0))] box-border caret-transparent w-2.5 right-0 inset-y-0"></div>
                  </div>
                  <a
                    href="https://open.spotify.com/track/6mSpFSqqDaCBO4JJ4VD7jz?si=ab6ad114d3a8463a"
                    className="text-white text-sm font-semibold box-border caret-transparent block leading-5 text-nowrap hover:underline"
                  >
                    Stargazing
                  </a>
                </div>
                <div className="relative box-border caret-transparent mt-1">
                  <div className="absolute box-border caret-transparent hidden pointer-events-none z-10 inset-0">
                    <div className="absolute bg-[linear-gradient(to_right,rgb(31,31,31),rgba(0,0,0,0))] box-border caret-transparent w-2.5 left-0 inset-y-0"></div>
                    <div className="absolute bg-[linear-gradient(to_left,rgb(31,31,31),rgba(0,0,0,0))] box-border caret-transparent w-2.5 right-0 inset-y-0"></div>
                  </div>
                  <div className="text-zinc-500 text-sm box-border caret-transparent flow-root leading-5 text-ellipsis overflow-hidden">
                    <a
                      href="https://open.spotify.com/artist/410PriT5ZoxZms12NsIc0f?si=xF0PdeDJQouIoEr3fMxdzA"
                      className="box-border caret-transparent hover:text-stone-300 hover:underline"
                    >
                      Seven Aries
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="items-center box-border caret-transparent flex justify-between">
            <div className="relative box-border caret-transparent flex basis-[0%] grow h-5 isolate">
              <span className="relative items-center box-border caret-transparent flex w-full">
                <span className="relative bg-zinc-50/40 box-border caret-transparent block grow h-1 w-full overflow-hidden rounded-full">
                  <span className="absolute bg-white box-border caret-transparent block h-full left-[0%] right-full"></span>
                </span>
                <span className="absolute box-border caret-transparent block translate-x-[-50.0%] left-[calc(0%_+_4px)]"></span>
              </span>
            </div>
            <div className="items-center box-border caret-transparent gap-x-4 flex gap-y-4">
              <div className="text-zinc-400 text-[12.8px] box-border caret-transparent tracking-[0.32px] leading-[19.2px] text-right w-14">
                2:42
              </div>
              <button className="items-center bg-white caret-transparent flex h-[29.28px] justify-center text-center w-[29.28px] -mt-1.5 p-0 rounded-full">
                <img
                  src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/icon-6.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-4 w-4"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
