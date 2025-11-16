import Navbar from "../components/Navbar";
import ProfileSection from "../components/ProfileSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full font-sans">
      <Navbar />
      <main className="w-full">
        <ProfileSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
