import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mohammad Amin | Frontend Developer",
  description: "Personal portfolio of Mohammad Amin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#08080c] text-white`}
      >
        {/* Navbar */}
        <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#08080c]/80 backdrop-blur-xl">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 font-bold shadow-lg shadow-purple-500/20">
                MA
              </div>

              <div className="hidden sm:block">
                <p className="font-semibold tracking-wide">Mohammad Amin</p>

                <p className="text-xs text-gray-500">Frontend Developer</p>
              </div>
            </Link>

            {/* Navigation */}
            <div className="hidden items-center gap-1 md:flex">
              <Link
                href="/"
                className="rounded-lg px-4 py-2 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/projects"
                className="rounded-lg px-4 py-2 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
              >
                Projects
              </Link>

              <Link
                href="/dashboard"
                className="rounded-lg px-4 py-2 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
              >
                Dashboard
              </Link>

              <Link
                href="/contact"
                className="rounded-lg px-4 py-2 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
              >
                Contact
              </Link>
            </div>

            {/* Login */}
            <Link
              href="/login"
              className="rounded-xl border border-purple-500/30 bg-purple-500/10 px-5 py-2.5 text-sm font-medium text-purple-300 transition hover:border-purple-400/50 hover:bg-purple-500/20 hover:text-white"
            >
              Login
            </Link>
          </div>
        </nav>

        {/* Page */}
        <main className="min-h-screen pt-20">{children}</main>
      </body>
    </html>
  );
}
