import HeroSection from "./components/HeroSection";
import MyStory from "./components/MyStory";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <HeroSection />
      <MyStory />
    </main>
  );
}
