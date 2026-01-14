import { Play } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const HeroSection = () => {
  return (
    <section 
      id="hero"
      className="flex items-end pb-12 pt-48 relative overflow-hidden"
    >
      {/* Gradient background like Spotify artist page */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/10 to-background"
        style={{
          background: 'linear-gradient(180deg, hsl(141 73% 42% / 0.4) 0%, hsl(141 73% 42% / 0.1) 30%, hsl(0 0% 7%) 100%)'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col md:flex-row items-end gap-8">
          {/* Profile Image */}
          <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl flex-shrink-0 animate-fade-up">
            <img 
              src={profilePhoto} 
              alt="Haley Hernandez" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Hero Content */}
          <div className="flex-1 animate-fade-up-delay-1">
            <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-2">
              AI/ML, Data Scientist 
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4">
              Haley Hernandez
            </h1>
            <p className="text-muted-foreground text-lg mb-6">
              BS in AI and Decision-Making @ MIT • Class of 2028 
            </p>
            
            {/* Action buttons */}
            <div className="flex items-center gap-4 animate-fade-up-delay-2">
              <button className="spotify-play-button animate-pulse-glow">
                <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
              </button>
              <a 
                href="mailto:haleyher@mit.edu"
                className="spotify-button-outline"
              >
                Contact Me
              </a>
              <a 
                href="https://linkedin.com/haleyher"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
