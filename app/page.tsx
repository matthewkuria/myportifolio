import HeroSection from "./components/HeroSection";
import MyStory from "./components/MyStory";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <MyStory />
    </main>
  );
}
