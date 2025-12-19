"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // TODO: Replace with real authentication logic
    if (!email || !password) {
      setError("Email and password are required.");
      setLoading(false);
      return;
    }
    // Simulate login
    setTimeout(() => {
      if (email === "demo@example.com" && password === "password") {
        router.push("/");
      } else {
        setError("Invalid email or password.");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <main className="bg-background-light dark:bg-background-dark min-h-screen flex justify-center items-center p-4">
      <div className="w-full max-w-sm h-[844px] bg-background-light dark:bg-background-dark relative overflow-hidden flex flex-col justify-between">
        {/* Status Bar */}
        <div className="h-12 w-full flex justify-between items-center px-6 pt-2 shrink-0 z-20">
          <span className="text-[15px] font-semibold">9:41</span>
          <div className="flex items-center space-x-2 text-text-main-light dark:text-text-main-dark">
            <span className="material-icons-outlined text-[18px]">signal_cellular_alt</span>
            <span className="material-icons-outlined text-[18px]">wifi</span>
            <span className="material-icons-outlined text-[18px] rotate-90">battery_full</span>
          </div>
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-3xl z-10"></div>
        </div>
        {/* Logo & Title */}
        <div className="flex flex-col items-center mt-6 shrink-0">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-icons-outlined text-white text-lg">check_circle</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-text-main-light dark:text-text-main-dark">Sankalp</span>
          </div>
        </div>
        {/* Login Form */}
        <div className="flex-1 px-6 overflow-y-auto no-scrollbar flex flex-col justify-start pb-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-text-main-light dark:text-text-main-dark mb-3 leading-tight">Welcome Back to Sankalp</h1>
            <p className="text-text-muted-light dark:text-text-muted-dark text-[15px] leading-relaxed">
              Resume your journey to building better habits. Consistency starts here.
            </p>
          </div>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-text-main-light dark:text-text-main-dark" htmlFor="email">Email address</label>
              <div className="relative">
                <input
                  className="block w-full px-4 py-3.5 bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl text-text-main-light dark:text-text-main-dark placeholder-text-muted-light dark:placeholder-text-muted-dark focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow sm:text-sm"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-text-main-light dark:text-text-main-dark" htmlFor="password">Password</label>
              <div className="relative">
                <input
                  className="block w-full px-4 py-3.5 bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl text-text-main-light dark:text-text-main-dark placeholder-text-muted-light dark:placeholder-text-muted-dark focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow sm:text-sm pr-10"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
                <button
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-text-muted-light dark:text-text-muted-dark hover:text-text-main-light dark:hover:text-text-main-dark transition-colors"
                  type="button"
                  tabIndex={-1}
                  onClick={() => setShowPassword(v => !v)}
                >
                  <span className="material-icons-outlined text-xl">{showPassword ? "visibility_off" : "visibility"}</span>
                </button>
              </div>
            </div>
            <div className="flex justify-end">
              <a
                className="text-sm font-medium text-primary hover:text-primary-dark transition-colors cursor-pointer"
                href="/forgot-password"
              >
                Forgot Password?
              </a>
            </div>
            <button
              className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-base font-semibold text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all shadow-soft mt-2"
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
          </form>
          {/* Divider */}
          <div className="relative mt-8 mb-6">
            <div aria-hidden="true" className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border-light dark:border-border-dark"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-background-light dark:bg-background-dark text-text-muted-light dark:text-text-muted-dark">
                Or login with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <button
              className="relative w-full flex justify-center items-center py-3.5 px-4 border border-border-light dark:border-border-dark rounded-xl shadow-sm bg-surface-light dark:bg-surface-dark text-sm font-medium text-text-main-light dark:text-text-main-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              type="button"
              // TODO: Add Google login logic
            >
              <svg aria-hidden="true" className="h-5 w-5 mr-3" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
              </svg>
              Continue with Google
            </button>
          </div>
        </div>
        {/* Footer */}
        <div className="px-6 pb-8 pt-2 shrink-0 text-center">
          <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
            Don't have an account?{' '}
            <a className="font-semibold text-primary hover:text-primary-dark transition-colors" href="/signup">Sign up</a>
          </p>
          <div className="mt-8 mx-auto w-1/3 h-1 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
        </div>
      </div>
    </main>
  );
}
