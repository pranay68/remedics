"use client";

import { useState } from "react";

const modes = ["Fast", "Mid", "Deep", "Synthetic (not public)"];
const userTypes = ["General User", "Professional Enterprise", "Special"];

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [selectedModes, setSelectedModes] = useState<string[]>([]);
  const [userType, setUserType] = useState<string>("");
  const [specialIdentity, setSpecialIdentity] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function toggleMode(mode: string) {
    setSelectedModes((prev) =>
      prev.includes(mode) ? prev.filter((m) => m !== mode) : [...prev, mode]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !userType || sending) return;
    if (userType === "Special" && !specialIdentity.trim()) return;
    
    setSending(true);
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          modes: selectedModes,
          userType,
          specialIdentity: userType === "Special" ? specialIdentity : undefined,
        }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to join waitlist. Please try again.");
      setSending(false);
      return;
    }
    setSending(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-6 text-center text-[15px] text-white/70">
        You&apos;re on the list. We will reach out when access opens — and not before.
      </div>
    );
  }

  const isFormValid = email.trim() && userType && (userType !== "Special" || specialIdentity.trim());

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-xs font-semibold text-white mb-2">Email address</label>
        <input
          type="email"
          required
          placeholder="your.email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-11 w-full rounded-2xl border border-white/20 bg-white/5 px-4 text-sm outline-none focus:border-white/50 focus:bg-white/10 placeholder:text-white/40 text-white transition-all"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT COLUMN: Modes */}
        <div>
          <div className="text-xs font-semibold text-white mb-3">Which mode are you interested in?</div>
          <div className="space-y-2">
            {modes.map((mode) => (
              <label key={mode} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedModes.includes(mode)}
                  onChange={() => toggleMode(mode)}
                  className="h-4 w-4 rounded border-white/20 bg-white/5 accent-white checked:bg-white/30 cursor-pointer transition-all"
                />
                <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors">{mode}</span>
              </label>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: User Type */}
        <div>
          <div className="text-xs font-semibold text-white mb-3">What best describes you?</div>
          <div className="space-y-2">
            {userTypes.map((type) => (
              <div key={type}>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="userType"
                    value={type}
                    checked={userType === type}
                    onChange={(e) => {
                      setUserType(e.target.value);
                      if (e.target.value !== "Special") setSpecialIdentity("");
                    }}
                    className="h-4 w-4 border-white/20 bg-white/5 accent-white cursor-pointer transition-all"
                  />
                  <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors">{type}</span>
                </label>
                {type === "Special" && userType === "Special" && (
                  <div className="mt-2 ml-7">
                    <input
                      type="text"
                      placeholder="e.g., Academic Research, AI Lab, etc."
                      value={specialIdentity}
                      onChange={(e) => setSpecialIdentity(e.target.value)}
                      className="h-10 w-full rounded-xl border border-white/20 bg-white/5 px-3 text-sm outline-none focus:border-white/50 focus:bg-white/10 placeholder:text-white/30 text-white transition-all"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={sending || !isFormValid}
        className="btn-primary inline-flex h-12 w-full items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {sending ? "Joining…" : "Join waitlist"}
      </button>
    </form>
  );
}
