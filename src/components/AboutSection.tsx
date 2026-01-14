import { GraduationCap, Award, MapPin } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">About</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a passionate student at MIT studying AI and Decision-Making, with a strong focus 
              on data science, machine learning, and social impact. I love working on projects that 
              combine technology with meaningful real-world applications.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              My interests span from developing ML models for disaster detection to optimizing 
              data pipelines at scale. I'm actively involved in MIT's Hispanic and Latina 
              communities, promoting diversity in STEM.
            </p>
          </div>
          
          <div className="space-y-4">
            {/* Education Card */}
            <div className="bg-card rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Education</h3>
              </div>
              <div>
                <p className="font-semibold text-lg">Massachusetts Institute of Technology</p>
                <p className="text-muted-foreground">BS in AI and Decision-Making</p>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                  <MapPin className="w-4 h-4" />
                  <span>Cambridge, MA</span>
                  <span>•</span>
                  <span>Expected May 2028</span>
                </div>
              </div>
              
              <div className="pt-2 border-t border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Awards</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• First Year Student Award—Diversity and Culture</li>
                  <li>• 4th Place in Bridge the Gap Hackathon</li>
                </ul>
              </div>
            </div>
            
            {/* Coursework */}
            <div className="flex flex-wrap gap-2">
              {['Algorithms', 'Machine Learning', 'Computer Vision', 'Probability'].map((course) => (
                <span 
                  key={course}
                  className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
