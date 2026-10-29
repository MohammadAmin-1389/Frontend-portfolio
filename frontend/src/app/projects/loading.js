export default function Loading() {
  return (
    <main className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#08080c]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[140px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      <div className="relative z-10 w-full max-w-md px-6">
        <div className="mb-10 flex justify-center">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-500/30 bg-purple-500/10 shadow-2xl shadow-purple-500/20">
            <div className="absolute inset-0 animate-ping rounded-2xl border border-purple-400/20" />

            <span className="relative text-xl font-black tracking-tight text-white">
              MA
            </span>
          </div>
        </div>

        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-purple-400">
            Initializing
          </p>

          <h1 className="mt-3 text-2xl font-bold text-white">Mohammad Amin</h1>

          <p className="mt-2 text-sm text-gray-500">Loading experience...</p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d12] shadow-2xl shadow-black/40">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

            <span className="ml-2 font-mono text-[10px] text-gray-600">
              portfolio-loader
            </span>
          </div>

          <div className="space-y-2 px-5 py-5 font-mono text-xs">
            <p className="text-gray-600">
              <span className="text-purple-400">$</span> loading portfolio...
            </p>

            <p className="text-gray-600">
              <span className="text-purple-400">$</span>{" "}
              <span className="text-green-400">✓</span> components initialized
            </p>

            <p className="text-gray-600">
              <span className="text-purple-400">$</span>{" "}
              <span className="text-green-400">✓</span> preparing interface
            </p>

            <p className="text-gray-500">
              <span className="text-purple-400">$</span>{" "}
              <span className="animate-pulse">_</span>
            </p>
          </div>
        </div>

        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between text-[10px] font-medium uppercase tracking-wider text-gray-600">
            <span>Loading</span>
            <span className="animate-pulse">...</span>
          </div>

          <div className="h-[2px] overflow-hidden rounded-full bg-white/5">
            <div className="h-full w-1/2 -translate-x-full animate-[pulse_1.5s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-purple-600 via-indigo-400 to-purple-600" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 text-center">
        <p className="font-mono text-[10px] tracking-[0.25em] text-gray-700">
          FRONTEND • BACKEND • FULL-STACK
        </p>
      </div>
    </main>
  );
}
