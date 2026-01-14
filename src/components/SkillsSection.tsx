import { Clock } from 'lucide-react';

const skills = [
  { name: 'React & TypeScript', duration: '5 years', popularity: 98 },
  { name: 'Node.js & Express', duration: '4 years', popularity: 92 },
  { name: 'PostgreSQL & MongoDB', duration: '4 years', popularity: 88 },
  { name: 'AWS & Cloud Services', duration: '3 years', popularity: 85 },
  { name: 'Python & Django', duration: '3 years', popularity: 80 },
  { name: 'Docker & Kubernetes', duration: '2 years', popularity: 75 },
  { name: 'GraphQL & REST APIs', duration: '4 years', popularity: 90 },
  { name: 'CI/CD & DevOps', duration: '3 years', popularity: 82 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Top Skills</h2>
        
        <div className="bg-card rounded-lg overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 px-4 py-3 border-b border-border text-muted-foreground text-sm">
            <div className="col-span-1">#</div>
            <div className="col-span-5">Skill</div>
            <div className="col-span-3 hidden md:block">Experience</div>
            <div className="col-span-3 text-right">Proficiency</div>
          </div>
          
          {/* Skills List */}
          <div className="divide-y divide-border/50">
            {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="track-row group grid grid-cols-12 gap-4 px-4"
            >
                <div className="col-span-1 text-muted-foreground flex items-center">
                  <span className="group-hover:hidden">{index + 1}</span>
                  <span className="hidden group-hover:block text-primary">▶</span>
                </div>
                <div className="col-span-5 font-medium">{skill.name}</div>
                <div className="col-span-3 hidden md:flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {skill.duration}
                </div>
                <div className="col-span-3 flex items-center justify-end gap-3">
                  <div className="w-24 h-1 bg-muted rounded-full overflow-hidden hidden sm:block">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${skill.popularity}%` }}
                    />
                  </div>
                  <span className="text-muted-foreground text-sm w-8 text-right">
                    {skill.popularity}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
