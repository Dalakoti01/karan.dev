import ContactSection from "@/components/shared/ContactSection";
import ExperienceSection from "@/components/shared/ExperienceSection";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/shared/HeroSection";
import Navbar from "@/components/shared/Navbar";
import ProjectsSection from "@/components/shared/ProjectSection";
import SkillsSection from "@/components/shared/SkillsSection";


export default function Page() {
  return (
    <div className="min-h-screen w-full bg-surface-base text-slate-100">
      <Navbar/>

      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}