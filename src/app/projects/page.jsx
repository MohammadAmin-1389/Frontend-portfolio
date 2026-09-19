const projects = [
  {
    title: "Saghfino",
    description:
      "A real-estate website project built with React, JavaScript and modern frontend technologies.",
    tech: ["React", "JavaScript", "Tailwind"],
    type: "Frontend",
    github: "https://github.com/MohammadAmin-1389/Saghfino-proje",
  },
  {
    title: "Alibaba",
    description:
      "A frontend project focused on recreating and practicing a modern e-commerce interface.",
    tech: ["HTML", "CSS"],
    type: "Frontend",
    github: "https://github.com/MohammadAmin-1389/alibaba",
  },
  {
    title: "New Alibaba",
    description:
      "Another frontend implementation focused on layout, styling and responsive web development.",
    tech: ["HTML", "CSS", "Sass"],
    type: "Frontend",
    github: "https://github.com/MohammadAmin-1389/new-alibaba",
  },
];

export default function Projectpage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">

      <div className="mb-12">
        <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
          Selected Work
        </p>

        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
          My Projects
        </h1>

        <p className="mt-4 max-w-2xl text-gray-500">
          A selection of projects I've built while developing my
          frontend skills and moving toward backend development.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {projects.map((project, index) => (
          <div
            key={project.title}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111116] transition duration-300 hover:-translate-y-2 hover:border-purple-500/30"
          >

            {/* Preview */}
            <div className="relative h-52 overflow-hidden bg-gradient-to-br from-purple-900/40 via-indigo-900/20 to-black">

              <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-gray-400">
                0{index + 1}
              </div>

              <div className="flex h-full items-center justify-center">
                <div className="text-center">

                  <div className="mb-3 text-5xl font-bold text-white/10 transition duration-300 group-hover:text-purple-400/30">
                    {"</>"}
                  </div>

                  <p className="text-xs uppercase tracking-widest text-gray-600">
                    {project.type}
                  </p>

                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">

              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                  {project.title}
                </h2>

                <span className="text-xs text-purple-400">
                  GitHub
                </span>
              </div>

              <p className="mt-4 min-h-20 text-sm leading-6 text-gray-500">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 py-3 text-sm font-medium transition hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-300"
              >
                View on GitHub
                <span>↗</span>
              </a>

            </div>
          </div>
        ))}

      </div>
    </main>
  );
}