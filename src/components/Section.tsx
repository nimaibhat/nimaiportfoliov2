import { ReactNode, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

export const Section = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <section className="mt-12">
      <h2 className="muted mb-4 text-sm">{title}</h2>
      <div className="flex flex-col gap-4">{children}</div>
    </section>
  );
};

// Paco-style row of 192px columns that scrolls sideways when the screen is narrower than 640px.
export const Columns = ({ children }: { children: ReactNode }) => {
  return (
    <div className="-mx-6 mt-16 overflow-x-auto px-6 pb-2">
      <div className="flex w-max gap-8">{children}</div>
    </div>
  );
};

interface ColumnProps {
  title: string;
  // Show this many entries, then scroll the rest inside the column.
  visible?: number;
  children: ReactNode;
}

export const Column = ({ title, visible, children }: ColumnProps) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<number>();
  const [atEnd, setAtEnd] = useState(false);

  // Re-measure when fonts load or text reflows, so the cutoff lands right below entry `visible`.
  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list || !visible) return;
    const measure = () => {
      const last = list.children[visible - 1] as HTMLElement | undefined;
      setMaxHeight(last && list.children.length > visible ? last.offsetTop + last.offsetHeight : undefined);
    };
    measure();
    const observer = new ResizeObserver(measure);
    Array.from(list.children).forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, [visible, children]);

  const onScroll = () => {
    const list = listRef.current;
    if (list) setAtEnd(list.scrollTop + list.clientHeight >= list.scrollHeight - 4);
  };

  const fade = maxHeight && !atEnd ? "linear-gradient(to bottom, black calc(100% - 48px), transparent)" : undefined;

  return (
    <section className="w-48 shrink-0">
      <h2 className="muted text-sm">{title}</h2>
      <div
        ref={listRef}
        onScroll={onScroll}
        className="scrollbar-none relative mt-5 flex flex-col gap-6 overflow-y-auto overscroll-contain"
        style={{ maxHeight, maskImage: fade, WebkitMaskImage: fade }}
      >
        {children}
      </div>
    </section>
  );
};

const ArrowUpRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="ml-1 shrink-0 text-[#707070]">
    <path d="M7 17 17 7M8.5 7H17v8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface EntryProps {
  title: string;
  href?: string;
  // Shown floating next to the cursor while hovering, on devices that can hover.
  image?: string;
  children: ReactNode;
}

// Linked name on one line, short description underneath. External links get an arrow.
export const Entry = ({ title, href, image, children }: EntryProps) => {
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);
  const isInternal = href?.startsWith("/");
  const name = !href ? (
    <span>{title}</span>
  ) : isInternal ? (
    <Link to={href} className="link">{title}</Link>
  ) : (
    <>
      <a href={href} target="_blank" rel="noopener noreferrer" className="link">{title}</a>
      <ArrowUpRight />
    </>
  );

  return (
    <div
      className="min-h-[84px] shrink-0"
      onMouseMove={image ? (e) => setCursor({ x: e.clientX, y: e.clientY }) : undefined}
      onMouseLeave={image ? () => setCursor(null) : undefined}
    >
      <div className="flex items-center">{name}</div>
      <p className="muted">{children}</p>
      {/* Portaled so the scrolling column's fade mask doesn't clip it */}
      {image && cursor && createPortal(
        <img
          src={image}
          alt=""
          className="pointer-events-none fixed z-50 hidden w-60 rounded-lg shadow-2xl [@media(hover:hover)]:block"
          style={{ left: cursor.x + 20, top: cursor.y + 20 }}
        />,
        document.body,
      )}
    </div>
  );
};
