import { Play } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack marketplace with real-time inventory',
    image: project1,
    tech: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Analytics Dashboard',
    description: 'Data visualization tool for SaaS metrics',
    image: project2,
    tech: ['TypeScript', 'D3.js', 'AWS'],
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure fintech application with biometrics',
    image: project3,
    tech: ['React Native', 'GraphQL', 'Redis'],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-title mb-0">Featured Projects</h2>
          <button className="text-muted-foreground text-sm font-bold hover:text-foreground transition-colors">
            Show all
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="spotify-card group"
            >
              {/* Project Image */}
              <div className="relative mb-4 aspect-square rounded-md overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                />
                {/* Play button overlay */}
                <button 
                  className="absolute bottom-2 right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center 
                             opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
                             transition-all duration-300 shadow-xl hover:scale-105"
                >
                  <Play className="w-5 h-5 text-primary-foreground ml-0.5" fill="currentColor" />
                </button>
              </div>
              
              {/* Project Info */}
              <h3 className="font-bold text-foreground mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span 
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
