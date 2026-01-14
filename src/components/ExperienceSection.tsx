import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'MIT Department of Urban Studies and Planning',
    role: 'Undergraduate Researcher',
    period: 'Sept. 2025 - Present',
    location: 'Cambridge, MA',
    description: 'Conducting research on natural disasters in Brazil, developing a social media-based detection system using LLMs to identify unreported landslide events in Rio de Janeiro.',
    technologies: ['Python', 'OpenAI API', 'NLP', 'Data Analysis'],
  },
  {
    company: 'Euromonitor International',
    role: 'Data Science Intern',
    period: 'Jun. 2025 - Aug. 2025',
    location: 'Vilnius, Lithuania',
    description: 'Optimized image classification models for container types, achieving 12% more accurate labels across 7.2M products. Conducted comparative analysis of MobileNet and EfficientNet architectures.',
    technologies: ['Python', 'MobileNet', 'EfficientNet', 'Computer Vision'],
  },
  {
    company: 'Grinding Stone Collective',
    role: 'Impact Reporting Intern',
    period: 'Jan. 2025 - Feb. 2025',
    location: 'Remote',
    description: 'Researched 40+ eligible grants from 450 prospects, built Airtable database with automated alerts, and redesigned Lean Canvas model for funding metrics.',
    technologies: ['Airtable', 'Data Analysis', 'Grant Research'],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Professional Experience</h2>
        
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
                        <span className="text-sm">• {exp.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
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
