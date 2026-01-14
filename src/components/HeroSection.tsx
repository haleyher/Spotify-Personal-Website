import { Play } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const HeroSection = () => {
  return (
    <section 
      id="hero"
      className="min-h-screen flex items-end pb-12 pt-32 relative overflow-hidden"
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
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Hero Content */}
          <div className="flex-1 animate-fade-up-delay-1">
            <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-2">
              Verified Developer
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4">
              Alex Johnson
            </h1>
            <p className="text-muted-foreground text-lg mb-6">
              Full Stack Developer • 2.5M+ lines of code • 50+ projects shipped
            </p>
            
            {/* Action buttons */}
            <div className="flex items-center gap-4 animate-fade-up-delay-2">
              <button className="spotify-play-button animate-pulse-glow">
                <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
              </button>
              <button className="spotify-button-outline">
                Follow
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                •••
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
