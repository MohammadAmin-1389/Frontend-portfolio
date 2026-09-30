import Link from "next/link";
import projects from "./projects";

export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-[#08080c] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
            My Work
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">My Projects</h1>

          <p className="mt-4 max-w-2xl text-gray-400">
            A collection of projects I have built while learning and improving
            my frontend and web development skills.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111116] transition duration-300 hover:-translate-y-1 hover:border-purple-500/30"
            >
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-purple-500/10 via-indigo-500/5 to-transparent">
                <div className="rounded-2xl border border-white/10 bg-black/30 px-8 py-5 text-2xl font-bold text-gray-300 backdrop-blur">
                  {project.title}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">{project.title}</h2>

                  <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                    {project.type}
                  </span>
                </div>

                <p className="min-h-[48px] text-sm leading-6 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-purple-500/20 bg-purple-500/10 py-3 text-sm font-medium text-purple-300 transition hover:bg-purple-500/20 hover:text-white"
                >
                  View Project
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
