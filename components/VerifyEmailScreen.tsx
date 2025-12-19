import React, { useState, useEffect } from 'react';

interface VerifyEmailScreenProps {
  email: string;
  onConfirm: () => void;
  onResend: () => void;
  onBack: () => void;
}

export default function VerifyEmailScreen({ email, onConfirm, onResend, onBack }: VerifyEmailScreenProps) {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [timer, setTimer] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    setResendDisabled(true);
    setTimer(600);
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setResendDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [email]);

  const handleChange = (idx: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newCode = [...code];
    newCode[idx] = value;
    setCode(newCode);
    // Auto-focus next input
    if (value && idx < 5) {
      const next = document.getElementById(`code-input-${idx + 1}`);
      if (next) (next as HTMLInputElement).focus();
    }
  };

  return (
    <div className="bg-[#F8F9FD] min-h-screen flex flex-col">
      <header className="flex items-center px-6 py-4 pt-12">
        <button className="p-2 rounded-full hover:bg-black/5 transition-colors" style={{marginLeft: '-0.5rem'}} onClick={onBack}>
          <img src="/left-arrow.png" alt="Back" className="w-6 h-6" />
        </button>
      </header>
      <main className="flex-1 px-6 pt-4 flex flex-col max-w-md mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-[32px] leading-tight font-bold text-slate-900 mb-3">Check Your Inbox</h1>
          <p className="text-base text-slate-500 leading-relaxed">
            Enter the 6-digit code we've sent to your email at <span className="text-slate-900 font-semibold">{email}</span>
          </p>
        </div>
        <div className="mb-10">
          <button className="flex items-center gap-3 bg-white border border-slate-200 rounded-2xl px-5 py-3 shadow-sm hover:shadow-md hover:bg-gray-50 transition-all active:scale-95" onClick={() => window.open('https://mail.google.com', '_blank')}>
            <img alt="Gmail Icon" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXFkq90khfDDq-4frwnK7eCNzku7AsdGRMhWMW5E3mb-ZAm1znQZs0XpDZpdfqJhW0OobiiQ0Bu4Qj7yxKtIT2_lINaWe2QjPMoxG3i3QPULbAvN3W7k0vRUcrBr6Vm6V1Wumyjlj-ARAvV5bKSRuEFW9VKySSrmoMt15IQwF-6n6edoRZVDpUxfS33SilxP1EGrwj2zwpFafVKYv4izV2WfMivV_5cCHKBEtI4x2fXkC66KEdXRJ8m-ew4wWOrB7NwxPtt17Iwzg" />
            <span className="font-semibold text-slate-700 text-[15px]">Open Gmail</span>
          </button>
        </div>
        <div className="mb-8">
          <label className="block text-sm font-semibold text-slate-700 mb-4 ml-1">Enter code</label>
          <div className="flex justify-between gap-1">
            {code.map((digit, idx) => (
              <input
                key={idx}
                id={`code-input-${idx}`}
                aria-label={`Digit ${idx + 1}`}
                className="w-[40px] h-[40px] rounded-2xl border-none ring-1 ring-slate-200 bg-white text-center text-lg font-bold text-slate-900 focus:ring-2 focus:ring-[#5B5BF5] shadow-sm transition-all placeholder-transparent caret-[#5B5BF5]"
                inputMode="numeric"
                maxLength={1}
                type="text"
                value={digit}
                onChange={e => handleChange(idx, e.target.value)}
              />
            ))}
          </div>
        </div>
        <button className="w-full bg-[#5B5BF5] hover:bg-opacity-90 active:scale-[0.98] transition-all duration-200 text-white font-bold text-[17px] py-[18px] rounded-2xl shadow-lg shadow-[#5B5BF5]/30 mb-6" onClick={onConfirm}>
          Confirm
        </button>
        <p className="text-center text-[13px] text-slate-400 font-medium tracking-wide">
          For security, this code will expire in 10 minutes.
        </p>
      </main>
      <footer className="p-6 pb-8 text-center mt-auto max-w-md mx-auto w-full">
        <p className="text-[15px] text-slate-500 font-medium">
          Didn't receive the code?
          <button
            className={`ml-1 font-bold transition-colors ${resendDisabled ? 'text-slate-400 cursor-not-allowed' : 'text-[#5B5BF5] hover:text-[#5B5BF5]/80'}`}
            onClick={e => { e.preventDefault(); if (!resendDisabled) onResend(); }}
            disabled={resendDisabled}
          >
            Resend{resendDisabled && timer > 0 ? ` (${Math.floor(timer/60)}:${(timer%60).toString().padStart(2,'0')})` : ''}
          </button>
        </p>
        <div className="mt-8 w-32 h-1.5 bg-slate-900/20 rounded-full mx-auto"></div>
      </footer>
    </div>
  );
}
