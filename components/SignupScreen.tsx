// Add Google type to window for TypeScript
declare global {
  interface Window {
    google?: any;
  }
}
import React, { useState, useEffect } from 'react';
import { loadGoogleScript } from '../lib/google';

interface SignupScreenProps {
  onRegister: (user: { username: string; age: number; email: string }) => void;
  onGoogleSignIn: (user: { username: string; age: number; email: string }) => void;
  onBack: () => void;
}

export default function SignupScreen({ onRegister, onGoogleSignIn, onBack }: SignupScreenProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    loadGoogleScript();
  }, []);

  // Google Sign-In handler
  const handleGoogleSignIn = () => {
    if (!window.google || !window.google.accounts || !window.google.accounts.id) {
      alert('Google Identity Services not loaded.');
      return;
    }
    window.google.accounts.id.initialize({
      client_id: 'YOUR_GOOGLE_CLIENT_ID', // TODO: Replace with your real client ID
      callback: (response) => {
        // Decode JWT to get email
        const base64Url = response.credential.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        const payload = JSON.parse(jsonPayload);
        if (payload.email) {
          onGoogleSignIn(payload.email);
        } else {
          alert('Could not get email from Google.');
        }
      },
      ux_mode: 'popup',
      auto_select: false,
    });
    window.google.accounts.id.prompt();
  };

  return (
    <div className="w-[360px] h-[740px] flex flex-col bg-[#F9FAFB] overflow-hidden relative shadow-lg mx-auto rounded-2xl">
      {/* Logo and Sankalp horizontally aligned */}
      {/* Top bar with back button */}
      <div className="flex items-center h-16 px-4 mb-4">
        <button className="p-2 rounded-full hover:bg-black/5 transition-colors" onClick={onBack}>
          <img src="/left-arrow.png" alt="Back" className="w-6 h-6" />
        </button>
      </div>
      <div className="flex-1 px-6 flex flex-col overflow-y-auto no-scrollbar pt-2">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-[#111827] mb-2 leading-snug text-left">Create Your Account</h1>
          <p className="text-[#6B7280] text-sm leading-relaxed text-left">
            Your first step to a better, consistent experience starts here. Build habits that last.
          </p>
        </div>
        <form className="space-y-4" onSubmit={e => {
          e.preventDefault();
          onRegister({ username: fullName, age: 0, email });
        }}>
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-[#111827] ml-1" htmlFor="fullname">Full name</label>
            <input className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[#111827] placeholder-[#6B7280] text-sm focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent transition duration-200 shadow-sm" id="fullname" placeholder="Enter your full name" type="text" value={fullName} onChange={e => setFullName(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-[#111827] ml-1" htmlFor="email">Email address</label>
            <input className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[#111827] placeholder-[#6B7280] text-sm focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent transition duration-200 shadow-sm" id="email" placeholder="Enter your email address" type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-[#111827] ml-1" htmlFor="password">New Password</label>
            <div className="relative">
              <input className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[#111827] placeholder-[#6B7280] text-sm focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent transition duration-200 shadow-sm pr-10" id="password" placeholder="Enter your password" type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} />
              <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#6B7280] hover:text-[#6366F1] transition-colors" onClick={() => setShowPassword(v => !v)}>
                {showPassword ? (
                  <img src="/show_password.png" alt="Hide password" className="w-5 h-5" />
                ) : (
                  <img src="/hide_password.png" alt="Show password" className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
          <div className="pt-2">
            <button className="w-full bg-[#6366F1] hover:bg-opacity-90 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-[#6366F1]/30 transition-all duration-200 active:scale-[0.98] text-sm" type="submit">
              Register
            </button>
          </div>
        </form>
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#E5E7EB]"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-3 bg-[#F9FAFB] text-[#6B7280] font-medium">Or register with</span>
          </div>
        </div>
        <div className="flex justify-center mb-6">
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-[#E5E7EB] rounded-xl bg-white hover:bg-gray-50 transition-colors duration-200 shadow-sm" type="button" onClick={() => {
            // For demo, just use email and name fields
            onGoogleSignIn({ username: fullName || "Google User", age: 0, email });
          }}>
            <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
            </svg>
            <span className="text-sm font-medium text-[#111827]">Google</span>
          </button>
        </div>
        <div className="mt-auto mb-4 text-center">
          <p className="text-[10px] text-[#6B7280] leading-relaxed px-4">
            By continuing, you agree to our <a className="font-semibold text-[#111827] hover:underline" href="#">Terms of Service</a> and <a className="font-semibold text-[#111827] hover:underline" href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center pb-3 pt-1 bg-[#F9FAFB]">
        <div className="w-[120px] h-[4px] bg-black rounded-full opacity-20"></div>
      </div>
    </div>
  );
}
