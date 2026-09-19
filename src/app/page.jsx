import Link from "next/link";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/15 blur-[140px]" />

      <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-2 text-sm text-purple-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
              Frontend → Backend → Full-Stack
            </div>

            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-purple-400">
              Hello, I'm
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              Mohammad
              <span className="block bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Amin Eshaghi.
              </span>
            </h1>

            <h2 className="mt-5 text-xl font-medium text-gray-300 sm:text-2xl">
              Frontend Developer
              <span className="mx-2 text-purple-500">/</span>
              Backend Developer in Progress
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              I've been working with Front-End technologies for around
              3 years. I started with JavaScript and React, and now I'm
              diving deeper into Backend development with Node.js and
              Express.js to move toward Full-Stack development.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-xl bg-purple-600 px-6 py-3 font-medium transition hover:bg-purple-500"
              >
                Explore My Projects →
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium transition hover:bg-white/10"
              >
                Contact Me
              </Link>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-3 border-t border-white/10 pt-8">
              <div>
                <p className="text-2xl font-bold">3+</p>
                <p className="mt-1 text-sm text-gray-500">
                  Years Learning
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">10+</p>
                <p className="mt-1 text-sm text-gray-500">
                  Technologies
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">42</p>
                <p className="mt-1 text-sm text-gray-500">
                  Repositories
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative mx-auto w-full max-w-lg">

            <div className="absolute -inset-5 rounded-[2rem] bg-purple-600/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111116] shadow-2xl">

              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />

                <span className="ml-auto font-mono text-xs text-gray-600">
                  developer.js
                </span>
              </div>

              <div className="p-7 font-mono text-sm leading-8">

                <p>
                  <span className="text-purple-400">const</span>{" "}<span className="text-blue-400">developer</span> = {"{"}
                </p>

                <p className="pl-6">
                  name:{" "}
                  <span className="text-green-400">
                    "Mohammad Amin"
                  </span>,
                </p>

                <p className="pl-6">
                  frontend:{" "}
                  <span className="text-green-400">true</span>,
                </p>

                <p className="pl-6">
                  backend:{" "}
                  <span className="text-green-400">"learning"</span>,
                </p>

                <p className="pl-6">
                  goal:{" "}
                  <span className="text-green-400">
                    "Full-Stack Developer"
                  </span>,
                </p>

                <p className="pl-6">stack: [</p>

                <p className="pl-12 text-orange-300">
                  "JavaScript",
                </p>

                <p className="pl-12 text-orange-300">
                  "React",
                </p>

                <p className="pl-12 text-orange-300">
                  "Tailwind CSS",
                </p>

                <p className="pl-12 text-orange-300">
                  "Node.js",
                </p>

                <p className="pl-12 text-orange-300">
                  "Express.js"
                </p>

                <p className="pl-6">],</p>

                <p className="pl-6">
                  learning:{" "}
                  <span className="text-green-400">
                    "Next.js + Backend"
                  </span>
                </p>

                <p>{"}"}</p>

                <div className="mt-7 rounded-xl border border-purple-500/20 bg-purple-500/5 p-4">
                  <span className="text-gray-600">
                    // Current mission
                  </span>

                  <p className="mt-1 text-purple-300">
                    Building → Learning → Improving
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}