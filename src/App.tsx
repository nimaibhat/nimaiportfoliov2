import { Container } from "@/components/Container";
import { GridBackground } from "@/components/GridBackground";
import { SignatureLoader } from "@/components/SignatureLoader";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LoadingProvider } from "@/contexts/LoadingContext";

export const App = () => {
  return (
    <LoadingProvider>
      <body className="text-zinc-950 dark:text-zinc-50 text-base not-italic normal-nums font-normal accent-auto box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-suisseintl transition-colors">
        <SignatureLoader />
        <GridBackground />
        <ThemeToggle />
        <Container />
        <div className="absolute box-border caret-transparent block"></div>
      </body>
    </LoadingProvider>
  );
};
