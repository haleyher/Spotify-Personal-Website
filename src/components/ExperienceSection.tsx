import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Tech Innovations Inc.',
    role: 'Senior Full Stack Developer',
    period: '2022 - Present',
    duration: '2 years',
    description: 'Leading development of scalable web applications, mentoring junior developers, and architecting cloud solutions.',
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL'],
  },
  {
    company: 'Digital Solutions Co.',
    role: 'Full Stack Developer',
    period: '2020 - 2022',
    duration: '2 years',
    description: 'Built and maintained multiple client-facing applications, implemented CI/CD pipelines, and optimized database performance.',
    technologies: ['Vue.js', 'Python', 'Docker', 'MongoDB'],
  },
  {
    company: 'StartUp Labs',
    role: 'Frontend Developer',
    period: '2018 - 2020',
    duration: '2 years',
    description: 'Developed responsive user interfaces, collaborated with design teams, and integrated RESTful APIs.',
    technologies: ['React', 'TypeScript', 'GraphQL', 'Tailwind'],
  },
  {
    company: 'WebDev Agency',
    role: 'Junior Developer',
    period: '2017 - 2018',
    duration: '1 year',
    description: 'Started my career building websites and learning best practices in software development.',
    technologies: ['JavaScript', 'HTML/CSS', 'PHP', 'MySQL'],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Experience</h2>
        
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div 
              key={exp.company}
              className="group bg-card hover:bg-secondary rounded-lg p-6 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Index & Play Icon */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 bg-muted rounded-md text-muted-foreground">
                  <span className="group-hover:hidden text-lg font-bold">{index + 1}</span>
                  <span className="hidden group-hover:block text-primary text-2xl">▶</span>
                </div>
                
                {/* Main Content */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                      <span className="px-2 py-0.5 bg-primary/20 text-primary rounded-full text-xs">
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-muted text-foreground text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
