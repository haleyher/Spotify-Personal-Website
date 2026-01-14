import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6">
          Let's Create Something
          <span className="text-primary block">Amazing Together</span>
        </h2>
        
        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
          I'm currently available for freelance work and full-time opportunities. 
          Let's discuss your next project!
        </p>
        
        {/* Contact Button */}
        <a 
          href="mailto:hello@alexjohnson.dev"
          className="spotify-button inline-flex items-center gap-2 text-lg"
        >
          <Mail className="w-5 h-5" />
          Get In Touch
        </a>
        
        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <a 
            href="#" 
            className="w-12 h-12 rounded-full bg-card flex items-center justify-center 
                       text-muted-foreground hover:text-foreground hover:bg-card-hover 
                       transition-all duration-200"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="w-12 h-12 rounded-full bg-card flex items-center justify-center 
                       text-muted-foreground hover:text-foreground hover:bg-card-hover 
                       transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="w-12 h-12 rounded-full bg-card flex items-center justify-center 
                       text-muted-foreground hover:text-foreground hover:bg-card-hover 
                       transition-all duration-200"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
