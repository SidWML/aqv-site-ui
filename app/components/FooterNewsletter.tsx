"use client";

import * as React from "react";

/** Inline newsletter signup for the footer Connect block. */
export default function FooterNewsletter() {
  const [email, setEmail] = React.useState("");
  const [done, setDone] = React.useState(false);

  if (done) {
    return (
      <p className="t-body-sm text-accent" role="status">
        Thanks — you&apos;re on the list.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setDone(true);
      }}
      className="flex w-full max-w-80 items-center gap-2 rounded-pill border border-cream/15 bg-cream/[0.04] p-1 pl-4 transition-colors focus-within:border-accent/50"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        aria-label="Email address"
        className="min-w-0 flex-1 border-none bg-transparent text-[14px] text-cream placeholder:text-cream/40 focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-night transition-transform hover:scale-105"
      >
        <svg width="14" height="14" viewBox="0 0 14 14">
          <path d="M3 7 H11 M8 4 L11 7 L8 10" stroke="currentColor" strokeWidth="1.6" fill="none" />
        </svg>
      </button>
    </form>
  );
}
