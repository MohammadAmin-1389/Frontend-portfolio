export const metadata = {
  title: "Contact | Mohammad Amin",
};

export default function Contactpage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-12">
        <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
          Get In Touch
        </p>

        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Let's Connect</h1>

        <p className="mt-4 max-w-2xl text-gray-500">
          Have a project, idea or opportunity? Feel free to get in touch with
          me.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-5">
        {/* INFO */}
        <div className="lg:col-span-2">
          <div className="h-full rounded-3xl border border-white/10 bg-[#111116] p-8">
            <h2 className="text-2xl font-semibold">Contact Information</h2>

            <p className="mt-3 text-sm leading-7 text-gray-500">
              You can reach me through email or any of my social platforms.
            </p>

            <div className="mt-10 space-y-4">
              {/* Email */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <p className="text-xs uppercase tracking-wider text-gray-600">
                  Email
                </p>

                <a
                  href="mailto:mohammad1389amir@gmail.com"
                  className="mt-2 block text-sm text-gray-200 transition hover:text-purple-400"
                >
                  mohammad1389amir@gmail.com
                </a>
              </div>

              {/* Location */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <p className="text-xs uppercase tracking-wider text-gray-600">
                  Location
                </p>

                <p className="mt-2 text-sm text-gray-200">Tehran, Iran</p>
              </div>

              {/* Social */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <p className="text-xs uppercase tracking-wider text-gray-600">
                  Social
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {/* Instagram */}
                  <a
                    href="https://instagram.com/general-eshaghi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/10 px-4 py-3 text-center text-sm transition hover:border-purple-500/30 hover:bg-purple-500/10"
                  >
                    Instagram
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://youtube.com/@general-eshaghi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/10 px-4 py-3 text-center text-sm transition hover:border-purple-500/30 hover:bg-purple-500/10"
                  >
                    YouTube
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/MohammadAmin-1389"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/10 px-4 py-3 text-center text-sm transition hover:border-purple-500/30 hover:bg-purple-500/10"
                  >
                    GitHub
                  </a>

                  {/* Telegram */}
                  <a
                    href="https://t.me/sepahbod-eshaghi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/10 px-4 py-3 text-center text-sm transition hover:border-purple-500/30 hover:bg-purple-500/10"
                  >
                    Telegram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="lg:col-span-3">
          <div className="rounded-3xl border border-white/10 bg-[#111116] p-8">
            <h2 className="text-2xl font-semibold">Send Me a Message</h2>

            <form className="mt-8 space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-gray-400">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-700 focus:border-purple-500/50"
                  />
                </div>

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
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Project discussion"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-700 focus:border-purple-500/50"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Message
                </label>

                <textarea
                  rows="7"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-700 focus:border-purple-500/50"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-purple-600 py-4 font-medium transition hover:bg-purple-500"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
