import HeroSection from "./components/HeroSection";
import MySkills from "./components/MySkills";
import MyStory from "./components/MyStory";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen p-0.25 bg-background">
      <HeroSection />
      <ProjectsSection />
      <MyStory />
      <MySkills />
    </main>
  );
}
