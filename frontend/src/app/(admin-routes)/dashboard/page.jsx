const skills = [
  {
    name: "JavaScript",
    level: "Advanced",
    value: "90%",
  },
  {
    name: "React",
    level: "Advanced",
    value: "85%",
  },
  {
    name: "Tailwind CSS",
    level: "Advanced",
    value: "90%",
  },
  {
    name: "Next.js",
    level: "Learning",
    value: "55%",
  },
  {
    name: "Node.js",
    level: "Learning",
    value: "35%",
  },
  {
    name: "Express.js",
    level: "Learning",
    value: "30%",
  },
];

export const metadata = {
  title: "Dashboard | Mohammad Amin",
};

export default async function Dashbordpage() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hi");
    }, 3000);
  });

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
          Developer Center
        </p>

        <h1 className="mt-3 text-4xl font-bold">My Dashboard</h1>

        <p className="mt-3 max-w-2xl text-gray-500">
          An overview of my skills, technologies and current development
          journey.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-white/10 bg-[#111116] p-6">
          <p className="text-sm text-gray-500">Main Field</p>

          <p className="mt-3 text-2xl font-bold">Frontend</p>

          <p className="mt-2 text-xs text-purple-400">Primary Focus</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#111116] p-6">
          <p className="text-sm text-gray-500">Experience</p>

          <p className="mt-3 text-3xl font-bold">3+</p>

          <p className="mt-2 text-xs text-green-400">Years Learning</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#111116] p-6">
          <p className="text-sm text-gray-500">Technologies</p>

          <p className="mt-3 text-3xl font-bold">10+</p>

          <p className="mt-2 text-xs text-purple-400">And growing</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#111116] p-6">
          <p className="text-sm text-gray-500">Current Goal</p>

          <p className="mt-3 text-2xl font-bold">Full-Stack</p>

          <p className="mt-2 text-xs text-yellow-400">In Progress</p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-[#111116] p-6 lg:col-span-2">
          <div>
            <h2 className="text-xl font-semibold">Technology Stack</h2>

            <p className="mt-2 text-sm text-gray-500">
              Technologies I'm working with
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium">{skill.name}</span>

                    <span className="ml-3 text-xs text-gray-600">
                      {skill.level}
                    </span>
                  </div>

                  <span className="text-xs text-gray-500">{skill.value}</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-purple-600 to-indigo-400"
                    style={{ width: skill.value }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-600/10 to-[#111116] p-6">
          <p className="text-sm uppercase tracking-wider text-purple-400">
            Current Focus
          </p>

          <h2 className="mt-5 text-3xl font-bold">Web Development</h2>

          <p className="mt-4 text-sm leading-7 text-gray-500">
            I'm improving my skills across both Frontend and Backend development
            while working toward becoming a Full-Stack Developer.
          </p>

          <div className="mt-8 space-y-3">
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs text-gray-600">FRONTEND</p>

              <p className="mt-1 text-sm">React + Next.js + Tailwind</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs text-gray-600">BACKEND</p>

              <p className="mt-1 text-sm">Node.js + Express.js</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-[#111116] p-6">
        <h2 className="text-xl font-semibold">Development Journey</h2>

        <p className="mt-2 text-sm text-gray-500">
          From Frontend development toward Full-Stack
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
            <p className="text-xs text-green-400">COMPLETED</p>

            <p className="mt-3 font-semibold">JavaScript</p>

            <p className="mt-1 text-xs text-gray-600">Foundation</p>
          </div>

          <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
            <p className="text-xs text-green-400">COMPLETED</p>

            <p className="mt-3 font-semibold">React</p>

            <p className="mt-1 text-xs text-gray-600">Frontend</p>
          </div>

          <div className="rounded-xl border border-purple-500/30 bg-purple-500/10 p-5">
            <p className="text-xs text-purple-400">CURRENT</p>

            <p className="mt-3 font-semibold">Next.js</p>

            <p className="mt-1 text-xs text-gray-600">Full-Stack Path</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <p className="text-xs text-gray-600">EXPANDING</p>

            <p className="mt-3 font-semibold text-gray-300">Backend</p>

            <p className="mt-1 text-xs text-gray-600">Node.js + Express</p>
          </div>
        </div>
      </div>
    </main>
  );
}
