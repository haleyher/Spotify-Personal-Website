const coursework = [
  'Algorithms',
  'Machine Learning',
  'Computer Vision',
  'Probability',
];

const CourseworkSection = () => {
  return (
    <section id="coursework" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-lg font-bold mb-4 text-muted-foreground">Relevant Coursework</h3>
        <div className="flex flex-wrap gap-3">
          {coursework.map((course) => (
            <span
              key={course}
              className="px-4 py-2 bg-primary/20 text-primary rounded-full font-medium"
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseworkSection;
