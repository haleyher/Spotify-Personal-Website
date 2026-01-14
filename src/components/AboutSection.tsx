const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">About</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a passionate full-stack developer with 5+ years of experience crafting 
              digital experiences that users love. I specialize in building scalable web 
              applications using modern technologies.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new tech, contributing to 
              open source, or mentoring aspiring developers. I believe in writing clean, 
              maintainable code that stands the test of time.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-primary">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-3xl font-bold">5+</p>
                <p className="text-muted-foreground text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold">50+</p>
                <p className="text-muted-foreground text-sm">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold">30+</p>
                <p className="text-muted-foreground text-sm">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold">15+</p>
                <p className="text-muted-foreground text-sm">Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
