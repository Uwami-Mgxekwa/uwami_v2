import { Button } from "./ui/button";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform with seamless checkout experience and inventory management.",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      color: "from-purple-600 to-purple-800",
    },
    {
      title: "Brand Identity System",
      description: "Complete visual identity redesign for a tech startup, including logo, guidelines, and assets.",
      tags: ["Figma", "Branding", "UI Design"],
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Portfolio Dashboard",
      description: "Analytics dashboard for tracking portfolio performance with real-time data visualization.",
      tags: ["Next.js", "TypeScript", "Charts", "API"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Mobile App Design",
      description: "Clean and intuitive mobile app design focused on user experience and accessibility.",
      tags: ["Figma", "Mobile", "UX Research"],
      color: "from-blue-500 to-purple-600",
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="text-purple-600 tracking-wider uppercase text-sm font-medium">
              My Work
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A selection of recent projects that showcase my expertise and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`absolute top-0 left-0 w-full h-2 rounded-t-3xl bg-gradient-to-r ${project.color}`}></div>

              <div className="space-y-4 mt-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <Button
                    variant="ghost"
                    className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 group"
                  >
                    View Project
                    <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
