import { Users, Calendar } from 'lucide-react';

const leadership = [
  {
    organization: 'WMBR - Walker Memorial Basement Radio',
    role: 'Publicity Director',
    period: 'Sept. 2024 - Present',
    highlights: [
      'Planned and executed Campus Preview Weekend programming (15 hours, 100+ attendees)',
      'Doubled overnight retention and increased social engagement by 2.7%',
      'Directed publicity and diversity initiatives for WMBR',
    ],
  },
  {
    organization: 'MIT Society of Hispanic Professional Engineers',
    role: 'Social Chair',
    period: 'May 2025 - Present',
    highlights: [
      'Coordinated social events with MIT NSBE and Mujeres Latinas',
      'Organized Boston SHPE Gala, National Convention delegation',
      'Led SHPE x AlgoEd partnership and MentorSHPE outreach',
    ],
  },
  {
    organization: 'MIT Mujeres Latinas',
    role: 'Publicity Chair',
    period: 'Sept. 2024 - May 2025',
    highlights: [
      'Promoted 20+ weekly GBMs (~25 attendees each) across multiple channels',
      'Created and led Lotería Night with 80+ attendees',
      'Strengthened community engagement across MIT',
    ],
  },
];

const LeadershipSection = () => {
  return (
    <section id="leadership" className="py-16 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Leadership Experience</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {leadership.map((item) => (
            <div 
              key={item.organization}
              className="group bg-card hover:bg-secondary rounded-lg p-6 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-xs">
                  <Calendar className="w-3 h-3" />
                  <span>{item.period}</span>
                </div>
              </div>
              
              <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                {item.role}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {item.organization}
              </p>
              
              <ul className="space-y-2">
                {item.highlights.map((highlight, idx) => (
                  <li 
                    key={idx}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
