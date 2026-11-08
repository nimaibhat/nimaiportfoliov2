import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Footer } from "@/components/Footer";

export const Layout = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    // Column layout at least one screen tall, so the footer sits at the bottom of short pages.
    <div className="flex min-h-dvh flex-col">
      <div className="mx-auto w-full max-w-[688px] flex-1 px-6 pt-16 sm:pt-24">
        {/* Keyed on the path so the entrance animation replays on every page */}
        <main key={pathname} data-enter>
          {!isHome && (
            <div className="mb-12 flex h-6 items-center text-sm">
              <Link to="/" className="muted transition-colors hover:text-[var(--fg)]">
                ← About
              </Link>
            </div>
          )}
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};
