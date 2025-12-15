import { MusicGrid } from "@/sections/MusicSection/components/MusicGrid";

export const MusicSection = () => {
  return (
    <div className="box-border caret-transparent blur-0">
      <div className="text-lg font-medium box-border caret-transparent leading-7">
        Music
      </div>
      <p className="text-zinc-500 box-border caret-transparent">
        I make music as
        <a
          href="https://open.spotify.com/artist/410PriT5ZoxZms12NsIc0f?si=gwU6HkxYRvGs7l2embQibA"
          className="box-border caret-transparent underline"
        >
          Seven Aries
        </a>
        . I like EDM most!
      </p>
      <MusicGrid />
      <div className="text-zinc-500 text-sm items-center box-border caret-transparent gap-x-1 flex flex-wrap leading-5 gap-y-1 mt-4">
        <span className="box-border caret-transparent block">
          <img
            src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/icon-7.svg"
            alt="Icon"
            className="box-border caret-transparent h-3 w-3 mr-1.5"
          />
          Not a real Spotify Embed :){" "}
        </span>
        <a
          href="/spotify-embed"
          className="font-light box-border caret-transparent block underline hover:text-zinc-900"
        >
          Compare the difference.
        </a>
      </div>
    </div>
  );
};
