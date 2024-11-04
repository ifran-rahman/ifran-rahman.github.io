import HomeSection from "./components/HomeSection";
import ResearchSection from "./components/ResearchSection";
import ResumeSection from "./components/ResumeSection";
import AchievementsSection from "./components/AchievementsSection";
import ServiceSection from "./components/ServiceSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <ResearchSection />
      <ResumeSection />
      <AchievementsSection />
      <ServiceSection />
      <ContactSection />
    </main>
  );
}
