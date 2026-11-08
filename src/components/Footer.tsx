import { useEffect, useState } from "react";

// Matches paco.me: full-bleed top border, 48px tall, small low-contrast text,
// year in tabular figures, and a 20px analog clock with hairline hands.
export const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const s = time.getSeconds();
  const m = time.getMinutes() + s / 60;
  const h = (time.getHours() % 12) + m / 60;

  const hand = (deg: number, height: number, width = 1) => ({
    height,
    width,
    left: `calc(50% - ${width / 2}px)`,
    transform: `rotate(${deg}deg)`,
  });

  return (
    <footer className="mt-24 h-12 border-t border-[#2e2e2e] px-6">
      <div className="mx-auto flex h-full max-w-[640px] items-center whitespace-nowrap text-sm leading-5 text-[#707070]">
        <span className="mr-auto">Everything around me is someone's life work.</span>
        <span className="tabular-nums">{time.getFullYear()}</span>
        {/* Rotated 180° so hands hang from the top edge of their box toward 12 o'clock */}
        <div className="relative ml-4 h-5 w-5 rotate-180 rounded-full border border-[#505050]">
          {[hand((h / 12) * 360, 5), hand((m / 60) * 360, 7), hand((s / 60) * 360, 8, 0.5)].map((style, i) => (
            <div key={i} className="absolute top-1/2 origin-top rounded-full bg-[#707070]" style={style} />
          ))}
        </div>
      </div>
    </footer>
  );
};
