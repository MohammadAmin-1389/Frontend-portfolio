import Link from "next/link";

export default function ProjectsLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#08080c]">
      <div className="mx-auto flex max-w-[1600px]">
        <aside className="sticky top-20 hidden h-[calc(100vh-5rem)] w-64 shrink-0 border-r border-white/10 bg-[#0b0b10]/80 px-5 py-8 backdrop-blur-xl lg:block">
          <div className="mb-8">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-purple-400">
              Workspace
            </p>

            <h2 className="mt-2 text-xl font-bold text-white">Projects</h2>

            <p className="mt-2 text-xs leading-5 text-gray-500">
              Explore my projects and development work.
            </p>
          </div>

          <nav className="space-y-2">
            <Link
              href="/projects"
              className="group flex items-center gap-3 rounded-xl border border-purple-500/20 bg-purple-500/10 px-4 py-3 text-sm text-purple-300 transition hover:bg-purple-500/15"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10">
                ◈
              </span>

              <span>All Projects</span>
            </Link>

            <Link
              href="/"
              className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-500 transition hover:bg-white/5 hover:text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                ⌂
              </span>

              <span>Home</span>
            </Link>

            <Link
              href="/contact"
              className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-500 transition hover:bg-white/5 hover:text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                @
              </span>

              <span>Contact</span>
            </Link>
          </nav>

          <div className="my-8 h-px bg-white/10" />

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

              <span className="text-xs font-medium text-gray-300">
                Currently building
              </span>
            </div>

            <p className="mt-3 text-xs leading-5 text-gray-600">
              Frontend projects with React, Next.js and modern web technologies.
            </p>
          </div>

          <div className="absolute bottom-6 left-5 right-5">
            <p className="font-mono text-[10px] tracking-wider text-gray-700">
              MA.DEV / PROJECTS
            </p>
          </div>
        </aside>

        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
