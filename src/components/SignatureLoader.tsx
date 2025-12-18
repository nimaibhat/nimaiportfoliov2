import { useEffect, useRef, useState } from "react";
import { useLoading } from "@/contexts/LoadingContext";
import { GridBackground } from "@/components/GridBackground";

export const SignatureLoader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);
  const pathRef = useRef<SVGPathElement>(null);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    // Calculate actual path length for accurate animation
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = `${pathLength}`;
      pathRef.current.style.strokeDashoffset = `${pathLength}`;
    }

    // Hide loader after 1.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setIsLoading(false);
      // Remove from DOM after fade out animation completes
      setTimeout(() => {
        setShouldRender(false);
      }, 300); // Match fade out duration
    }, 1500);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  useEffect(() => {
    // Prevent scrolling while loader is visible
    if (shouldRender) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [shouldRender]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <GridBackground />
      <div className="relative z-10 w-full max-w-lg px-8">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 687 603"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="signature-loader"
        >
          <path
            ref={pathRef}
            d="M0.232544 363.988C115.276 353.243 89.4224 144.838 17.2325 124.488M43.7325 134.488L219.733 340.488C245.233 341.488 297.733 330.888 303.733 280.488C311.233 217.488 188.733 276.488 214.733 273.488C214.733 274.155 217.133 275.288 226.733 274.488M317.733 1.98816C243.294 58.7372 211.958 106.941 193.233 251.488C197.796 370.892 200.733 452.988 219.733 545.488C223.566 557.821 215.933 585.988 154.733 599.988M310.733 200.488C311.533 213.688 312.066 288.988 312.233 324.988L307.233 350.988C317.066 326.821 337.733 279.588 341.733 283.988C346.733 289.488 368.733 355.488 381.733 348.988C392.133 343.788 459.066 307.821 491.233 290.488C484.513 263.406 432.749 262.316 409.233 337.988C414.005 355.75 421.049 359.785 454.233 350.988C479.245 340.394 500.233 307.988 500.233 307.988C509.399 330.155 528.433 373.888 531.233 371.488C534.733 368.488 588.233 192.488 599.233 197.988C608.033 202.388 627.233 319.488 635.733 377.488L681.233 324.488H570.733"
            stroke="currentColor"
            strokeWidth="5"
            className="signature-path"
          />
        </svg>
      </div>
      <style>{`
        .signature-loader {
          color: rgb(24 24 27); /* zinc-950 */
        }
        .dark .signature-loader {
          color: rgb(250 250 249); /* zinc-50 */
        }
        .signature-path {
          animation: drawSignature 1.5s ease-in-out forwards;
        }
        @keyframes drawSignature {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

