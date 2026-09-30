import Link from "next/link";
import projects from "../projects";

export default async function ProjectDetails({ params }) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#08080c] px-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold">404</h1>

          <p className="mt-4 text-gray-400">Project not found.</p>

          <Link
            href="/projects"
            className="mt-6 inline-block rounded-xl bg-purple-500 px-6 py-3 text-sm font-medium transition hover:bg-purple-600"
          >
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#08080c] px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/projects"
          className="mb-10 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
        >
          ← Back to Projects
        </Link>

        <div className="rounded-3xl border border-white/10 bg-[#111116] p-8 md:p-12">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
              {project.type}
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400">
              #{project.id}
            </span>
          </div>

          <h1 className="text-4xl font-bold md:text-6xl">{project.title}</h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            {project.longDescription}
          </p>

          <div className="mt-10">
            <h2 className="mb-4 text-lg font-semibold">Technologies</h2>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-purple-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-purple-600"
              >
                View on GitHub ↗
              </a>
            )}

            <Link
              href="/projects"
              className="rounded-xl border border-white/10 px-6 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/5 hover:text-white"
            >
              All Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
