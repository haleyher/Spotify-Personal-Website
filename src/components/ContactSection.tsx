import { Mail, Github, Linkedin, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6">
          Let's Connect
          <span className="text-primary block">& Collaborate</span>
        </h2>
        
        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
          I'm always excited to connect with fellow researchers, engineers, and anyone passionate 
          about AI, data science, and social impact. Let's chat!
        </p>
        
        {/* Contact Button */}
        <a 
          href="mailto:haleyher@mit.edu"
          className="spotify-button inline-flex items-center gap-2 text-lg"
        >
          <Mail className="w-5 h-5" />
          haleyher@mit.edu
        </a>
        
        {/* Phone */}
        <p className="text-muted-foreground mt-4 flex items-center justify-center gap-2">
          <Phone className="w-4 h-4" />
          850-781-8893
        </p>
        
        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <a 
            href="https://github.com/haleyher" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-card flex items-center justify-center 
                       text-muted-foreground hover:text-foreground hover:bg-card-hover 
                       transition-all duration-200"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/in/haleyher" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-card flex items-center justify-center 
                       text-muted-foreground hover:text-foreground hover:bg-card-hover 
                       transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        
        {/* Programs */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-sm font-bold text-muted-foreground mb-4">PROGRAMS & SUMMITS</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Goldman Sachs Possibilities Summit',
              'Susquehanna Discovery Day',
              'Liberty Mutual Women in Tech',
              'D.E. Shaw Connect NYC',
            ].map((program) => (
              <span 
                key={program}
                className="px-3 py-1 bg-card text-muted-foreground text-sm rounded-full"
              >
                {program}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
