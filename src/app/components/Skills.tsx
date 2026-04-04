export function Skills() {
  const skills = [
    { name: "UI/UX Design", level: 95 },
    { name: "React & Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Figma", level: 88 },
    { name: "Brand Identity", level: 80 },
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="text-purple-600 tracking-wider uppercase text-sm font-medium">
              Expertise
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium text-lg">{skill.name}</span>
                <span className="text-purple-600 font-semibold">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
