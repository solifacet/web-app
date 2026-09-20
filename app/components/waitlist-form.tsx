"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
      <div className="p-4 rounded-[var(--radius)] border border-[#2C5D5C]/40 bg-[#2C5D5C]/10 text-center max-w-md mx-auto">
        <p className="text-sm text-[#68ABA9] font-medium mb-1">
          Access Request Recorded
        </p>
        <p className="text-xs text-muted-foreground">
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
      <Input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        className="h-11 w-full sm:flex-1 bg-input border-border text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-primary focus-visible:border-primary"
      />
      <Button
        type="submit"
        variant="default"
        size="lg"
        className="h-11 w-full sm:w-auto px-6 text-xs uppercase tracking-[0.15em] font-medium"
      >
        Request Access
      </Button>
    </form>
  );
}
