export default function Loginpage() {
  return (
    <main className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden px-6 py-16">
      
      <div className="absolute h-80 w-80 rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="relative w-full max-w-md">
        <div className="rounded-3xl border border-white/10 bg-[#111116] p-8 shadow-2xl sm:p-10">

          <div className="mb-8 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-600 font-bold shadow-lg shadow-purple-600/20">
              MA
            </div>

            <h1 className="text-2xl font-bold">
              Welcome Back
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Login to your developer account
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-700 focus:border-purple-500/50"
              />
            </div>

            <div>
              <div className="mb-2 flex justify-between">
                <label className="text-sm text-gray-400">
                  Password
                </label>

                <button
                  type="button"
                  className="text-xs text-purple-400 hover:text-purple-300"
                >
                  Forgot password?
                </button>
              </div>

              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-700 focus:border-purple-500/50"
              />
            </div>

            <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-500">
              <input
                type="checkbox"
                className="h-4 w-4 accent-purple-600"
              />
              Remember me
            </label>

            <button
              type="submit"
              className="w-full rounded-xl bg-purple-600 py-3.5 font-medium transition hover:bg-purple-500"
            >
              Login
            </button>
          </form>

          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-gray-600">OR</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <span className="cursor-pointer text-purple-400">
              Create one
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}