"use client";

import React, { useState } from "react";

export function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="p-4 rounded-[0.3rem] border border-[#2C5D5C]/40 bg-[#2C5D5C]/10 text-center max-w-md mx-auto">
        <p className="text-sm text-[#68ABA9] font-medium mb-1">
          Access Request Recorded
        </p>
        <p className="text-xs text-[#B8B4AC]">
          Thank you. Our founding desk will reach out to verify and review your invitation.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        className="w-full sm:flex-1 px-4 py-3 bg-[#1E1C19] border border-[#2A2723] rounded-[0.3rem] text-sm text-[#F3F0EA] placeholder-[#B8B4AC]/50 focus:outline-none focus:border-[#C9A876] transition-colors"
      />
      <button
        type="submit"
        className="w-full sm:w-auto px-6 py-3 bg-[#C9A876] text-[#121110] text-xs uppercase tracking-[0.15em] font-medium rounded-[0.3rem] hover:bg-[#D8B988] transition-colors whitespace-nowrap cursor-pointer"
      >
        Request Access
      </button>
    </form>
  );
}
