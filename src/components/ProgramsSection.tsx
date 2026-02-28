const programs = [
  'Goldman Sachs Possibilities Summit',
  'Susquehanna Discovery Day',
  'Liberty Mutual Women in Tech',
  'D.E. Shaw Connect NYC',
  'Bloomberg Women in Data Forum'
];

const interests = [
  'Data Science',
  'Artificial Intelligence',
  'Machine Learning',
  'Social Impact',
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Programs */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-muted-foreground">Programs & Summits</h3>
          <div className="flex flex-wrap gap-3">
            {programs.map((program) => (
              <span
                key={program}
                className="px-4 py-2 bg-muted text-muted-foreground rounded-full font-medium"
              >
                {program}
              </span>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-muted-foreground">Interests</h3>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest) => (
              <span
                key={interest}
                className="px-4 py-2 bg-primary/20 text-primary rounded-full font-medium"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
