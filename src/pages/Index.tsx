import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CourseworkSection from '@/components/CourseworkSection';
import ExperienceSection from '@/components/ExperienceSection';
import LeadershipSection from '@/components/LeadershipSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ProgramsSection from '@/components/ProgramsSection';
import SpotifySection from '@/components/SpotifySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CourseworkSection />
      <ExperienceSection />
      <LeadershipSection />
      <SkillsSection />
      <ProjectsSection />
      <ProgramsSection />
      <SpotifySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
