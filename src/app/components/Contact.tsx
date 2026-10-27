"use client";

import React, { useState } from "react";
import { Field, Form } from "react-final-form";
import SendIcon from "@mui/icons-material/Send";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "next/link";
import site from "../json/site.json";
import Reveal from "./motion/Reveal";
import SectionEyebrow from "./SectionEyebrow";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const validate = (values: FormData) => {
    const errors: Partial<FormData> = {};

    if (!values.name?.trim()) {
      errors.name = "Name is required";
    }
    if (!values.email?.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Enter a valid email address";
    }
    if (!values.subject?.trim()) {
      errors.subject = "Subject is required";
    }
    if (!values.message?.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (values: FormData, form: { restart: () => void }) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("/api/contact-detail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (response.ok) {
        setResult("Message sent successfully. Thank you for reaching out.");
        form.restart();
        setTimeout(() => setResult(null), 3000);
      } else {
        setError(
          data.error ||
            "Unable to send your message right now. Please try again later."
        );
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to send your message right now. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-slate-800/80 py-16 sm:py-20"
    >
      <div className="section-shell">
        <Reveal>
          <SectionEyebrow>Contact</SectionEyebrow>
          <h2 id="contact-heading" className="section-heading heading-accent">
            Let’s talk about your next role or project
          </h2>
          <p className="section-subheading">
            Prefer LinkedIn or GitHub? Use the links below—or send a short message
            with the form.
          </p>
        </Reveal>

        <Reveal delayMs={100} className="mt-8 flex flex-wrap gap-3">
          <Link
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            LinkedIn
          </Link>
          <Link
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            GitHub
          </Link>
          <Link
            href={site.links.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Portfolio
          </Link>
        </Reveal>

        <Reveal delayMs={160} className="card-surface card-interactive card-glow mt-10 max-w-3xl p-5 sm:p-8">
          <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
              <form className="flex w-full flex-col gap-1" onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col lg:flex-row lg:gap-4">
                  <Field name="name">
                    {({ input, meta }) => (
                      <div className="m-2 flex flex-1 flex-col">
                        <label htmlFor="contact-name" className="pb-2 text-sm text-slate-300">
                          Your name
                        </label>
                        <input
                          {...input}
                          id="contact-name"
                          placeholder="Your name"
                          type="text"
                          autoComplete="name"
                          className="rounded-lg border border-slate-700 bg-slate-950/60 p-3 text-slate-100 placeholder:text-slate-500 focus:border-blue-500"
                        />
                        {meta.error && meta.touched && (
                          <span className="mt-1 text-sm text-red-400" role="alert">
                            {meta.error}
                          </span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field name="email">
                    {({ input, meta }) => (
                      <div className="m-2 flex flex-1 flex-col">
                        <label htmlFor="contact-email" className="pb-2 text-sm text-slate-300">
                          Email
                        </label>
                        <input
                          {...input}
                          id="contact-email"
                          type="email"
                          placeholder="you@example.com"
                          autoComplete="email"
                          className="rounded-lg border border-slate-700 bg-slate-950/60 p-3 text-slate-100 placeholder:text-slate-500 focus:border-blue-500"
                        />
                        {meta.error && meta.touched && (
                          <span className="mt-1 text-sm text-red-400" role="alert">
                            {meta.error}
                          </span>
                        )}
                      </div>
                    )}
                  </Field>
                </div>

                <Field name="subject">
                  {({ input, meta }) => (
                    <div className="m-2 flex flex-col">
                      <label htmlFor="contact-subject" className="pb-2 text-sm text-slate-300">
                        Subject
                      </label>
                      <input
                        {...input}
                        id="contact-subject"
                        placeholder="What would you like to discuss?"
                        type="text"
                        className="rounded-lg border border-slate-700 bg-slate-950/60 p-3 text-slate-100 placeholder:text-slate-500 focus:border-blue-500"
                      />
                      {meta.error && meta.touched && (
                        <span className="mt-1 text-sm text-red-400" role="alert">
                          {meta.error}
                        </span>
                      )}
                    </div>
                  )}
                </Field>

                <Field name="message">
                  {({ input, meta }) => (
                    <div className="m-2 flex flex-col">
                      <label htmlFor="contact-message" className="pb-2 text-sm text-slate-300">
                        Message
                      </label>
                      <textarea
                        {...input}
                        id="contact-message"
                        placeholder="Share a short note about the role or project"
                        className="resize-y rounded-lg border border-slate-700 bg-slate-950/60 p-3 text-slate-100 placeholder:text-slate-500 focus:border-blue-500"
                        rows={5}
                      />
                      {meta.error && meta.touched && (
                        <span className="mt-1 text-sm text-red-400" role="alert">
                          {meta.error}
                        </span>
                      )}
                    </div>
                  )}
                </Field>

                {loading && (
                  <div className="flex justify-center py-2" aria-live="polite">
                    <CircularProgress size={28} />
                  </div>
                )}
                {result && (
                  <div className="m-2" role="status">
                    <Alert severity="success">{result}</Alert>
                  </div>
                )}
                {error && (
                  <p className="m-2 text-sm text-red-400" role="alert">
                    {error}
                  </p>
                )}

                <div className="m-2 mt-2 flex justify-start">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary btn-shine disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    Send message
                    <SendIcon className="!h-5 !w-5" />
                  </button>
                </div>
              </form>
            )}
          />
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
