"use client";

import type { FormEvent } from "react";
import { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { useTRPC } from "~/trpc/react";

/**
 * Waitlist email capture. Persists the email via the tRPC `waitlist.join`
 * mutation (idempotent — a repeat email still succeeds) and shows the
 * thank-you state on success.
 */
export function WaitlistForm() {
  const trpc = useTRPC();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const join = useMutation(
    trpc.waitlist.join.mutationOptions({
      onSuccess: () => setSubmitted(true),
      onError: () =>
        setError("Something went wrong — please try again in a moment."),
    }),
  );

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const email = emailRef.current;
    if (email?.value && email.checkValidity()) {
      join.mutate({ email: email.value });
    } else {
      email?.focus();
    }
  }

  return (
    <>
      <form
        className="wl-form"
        onSubmit={onSubmit}
        noValidate
        style={{ display: submitted ? "none" : undefined }}
      >
        <input
          ref={emailRef}
          type="email"
          placeholder="you@email.com"
          aria-label="Email address"
          required
          disabled={join.isPending}
        />
        <button
          className="btn btn-mint btn-lg"
          type="submit"
          disabled={join.isPending}
        >
          {join.isPending ? "Joining…" : "Join the waitlist"}
        </button>
      </form>
      <div
        className="wl-note"
        style={error ? { color: "var(--clay)" } : undefined}
      >
        {error ??
          "No spam — just a heads-up at launch. You check out on Instacart."}
      </div>
      <div className={submitted ? "wl-thanks show" : "wl-thanks"}>
        You&apos;re on the list — thanks! We&apos;ll be in touch at launch. 🌱
      </div>
    </>
  );
}
