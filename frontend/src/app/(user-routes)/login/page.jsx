"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const API_URL = "http://localhost:5000/api";
const STORAGE_KEY = "auth";

function readSession() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch {
    return null;
  }
}

function saveSession(token, user) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ token, user }));
}

function clearSession() {
  localStorage.removeItem(STORAGE_KEY);
}

const inputClass =
  "w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-700 focus:border-purple-500/50";

export default function Loginpage() {
  const [ready, setReady] = useState(false);
  const [mode, setMode] = useState("login");
  const [user, setUser] = useState(null);
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    async function restoreSession() {
      const saved = readSession();
      if (!saved?.token) return;

      try {
        const res = await fetch(`${API_URL}/users/me`, {
          headers: { Authorization: `Bearer ${saved.token}` },
        });

        if (res.ok) {
          const result = await res.json();
          setUser(result.user);
        } else if (res.status === 401) {
          clearSession();
        } else {
          setUser(saved.user);
        }
      } catch {
        setUser(saved.user);
      }
    }

    restoreSession();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ shouldUnregister: true });

  const onSubmit = async (data) => {
    setServerError("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/auth/${mode}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (!res.ok) {
        setServerError(result.message || "Something went wrong");
        return;
      }

      saveSession(result.token, result.user);
      setUser(result.user);
      reset();
    } catch {
      setServerError("Cannot reach the server. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  const switchMode = () => {
    setMode((m) => (m === "login" ? "signup" : "login"));
    setServerError("");
    reset();
  };

  const handleLogout = () => {
    clearSession();
    setUser(null);
    setServerError("");
  };

  const handleDelete = async () => {
    if (!window.confirm("Delete your account permanently?")) return;

    setServerError("");
    setLoading(true);

    try {
      const saved = readSession();
      const res = await fetch(`${API_URL}/users/me`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${saved?.token}` },
      });

      if (res.ok || res.status === 401) {
        clearSession();
        setUser(null);
        return;
      }

      const result = await res.json();
      setServerError(result.message || "Could not delete the account");
    } catch {
      setServerError("Cannot reach the server. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  if (!ready) {
    return null;
  }

  if (user) {
    return (
      <main className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden px-6 py-16">
        <div className="absolute h-80 w-80 rounded-full bg-purple-600/20 blur-[120px]" />

        <div className="relative w-full max-w-md">
          <div className="rounded-3xl border border-white/10 bg-[#111116] p-8 shadow-2xl sm:p-10">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-600 text-xl font-bold uppercase shadow-lg shadow-purple-600/20">
                {user.username?.[0]}
              </div>

              <h1 className="text-2xl font-bold">Hi, {user.username}</h1>

              <p className="mt-2 text-sm text-gray-500">You are logged in</p>
            </div>

            <div className="space-y-3 rounded-2xl border border-white/10 bg-black/20 p-5 text-sm">
              <p className="flex justify-between gap-4">
                <span className="text-gray-500">Email</span>
                <span className="text-gray-300">{user.email}</span>
              </p>
              <p className="flex justify-between gap-4">
                <span className="text-gray-500">Phone</span>
                <span className="text-gray-300">{user.phone}</span>
              </p>
            </div>

            {serverError && (
              <p className="mt-5 text-center text-sm text-red-400">
                {serverError}
              </p>
            )}

            <div className="mt-6 space-y-3">
              <button
                type="button"
                onClick={handleLogout}
                className="w-full rounded-xl bg-purple-600 py-3.5 font-medium transition hover:bg-purple-500"
              >
                Logout
              </button>

              <button
                type="button"
                onClick={handleDelete}
                disabled={loading}
                className="w-full rounded-xl border border-red-500/30 bg-red-500/10 py-3.5 font-medium text-red-300 transition hover:bg-red-500/20 disabled:opacity-50"
              >
                {loading ? "Deleting..." : "Delete account"}
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

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
              {mode === "login" ? "Welcome Back" : "Create Account"}
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              {mode === "login"
                ? "Login to your developer account"
                : "Sign up to get started"}
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm text-gray-400">Email</label>

              <input
                type="email"
                placeholder="you@example.com"
                className={inputClass}
                {...register("email", {
                  required: "Email is empty",
                })}
              />

              {errors.email && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <div className="mb-2 flex justify-between">
                <label className="text-sm text-gray-400">Password</label>

                {mode === "login" && (
                  <button
                    type="button"
                    className="text-xs text-purple-400 hover:text-purple-300"
                  >
                    Forgot password?
                  </button>
                )}
              </div>

              <input
                type="password"
                placeholder="••••••••"
                className={inputClass}
                {...register("password", {
                  required: "Enter your password",
                })}
              />

              {errors.password && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.password.message}
                </p>
              )}
            </div>

            {mode === "signup" && (
              <>
                <div>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className={inputClass}
                    {...register("phone", {
                      required: "Phone is empty",
                    })}
                  />

                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    className={inputClass}
                    {...register("username", {
                      required: "Username is empty",
                    })}
                  />

                  {errors.username && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.username.message}
                    </p>
                  )}
                </div>
              </>
            )}

            <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-500">
              <input type="checkbox" className="h-4 w-4 accent-purple-600" />
              Remember me
            </label>

            {serverError && (
              <p className="text-center text-sm text-red-400">{serverError}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-purple-600 py-3.5 font-medium transition hover:bg-purple-500 disabled:opacity-50"
            >
              {loading
                ? "Please wait..."
                : mode === "login"
                  ? "Login"
                  : "Sign up"}
            </button>
          </form>

          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-gray-600">OR</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <p className="text-center text-sm text-gray-500">
            {mode === "login"
              ? "Don't have an account? "
              : "Already have an account? "}
            <button
              type="button"
              onClick={switchMode}
              className="cursor-pointer text-purple-400 hover:text-purple-300"
            >
              {mode === "login" ? "Create one" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </main>
  );
}
