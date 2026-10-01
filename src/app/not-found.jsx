import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden bg-[#08080c] px-6">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative z-10 w-full max-w-2xl text-center">

        {/* 404 */}
        <div className="relative">

          <h1 className="select-none text-[140px] font-black leading-none tracking-tighter text-white/5 sm:text-[200px]">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-2xl border border-purple-500/20 bg-[#111116]/80 px-8 py-5 shadow-2xl shadow-purple-500/10 backdrop-blur-xl">
              <span className="font-mono text-4xl font-bold text-purple-400">
                404
              </span>
            </div>
          </div>

        </div>

        {/* Text */}
        <div className="mt-8">

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
            Page Not Found
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Looks like you're lost.
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
            The page you're looking for doesn't exist or may have been moved.
            Let's get you back to the portfolio.
          </p>

        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <Link
            href="/"
            className="rounded-xl bg-purple-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/20"
          >
            Back to Home
          </Link>

          <Link
            href="/projects"
            className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-gray-300 transition hover:border-purple-500/20 hover:bg-purple-500/10 hover:text-white"
          >
            View Projects
          </Link>

        </div>

        {/* Code-like message */}
        <div className="mx-auto mt-12 max-w-md rounded-2xl border border-white/10 bg-[#0d0d12] p-5 text-left font-mono text-xs shadow-xl">

          <div className="mb-4 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          </div>

          <p className="text-gray-500">
            <span className="text-purple-400">const</span>{" "}
            page ={" "}
            <span className="text-green-400">null</span>;
          </p>

          <p className="mt-2 text-gray-500">
            <span className="text-purple-400">if</span> (!page) {"{"}
          </p>

          <p className="ml-4 mt-2 text-gray-600">
            console.log(
            <span className="text-yellow-400">
              "Page not found"
            </span>
            );
          </p>

          <p className="mt-2 text-gray-500">
            {"}"}
          </p>

        </div>

      </div>
    </main>
  );
}