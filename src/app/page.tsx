import { SectionHeroParallaxs } from "@/components/SectionHeroParallaxs";
import { Intro } from "@/components/intro";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <Intro />
      <SectionHeroParallaxs />
    </main>
  );
}
