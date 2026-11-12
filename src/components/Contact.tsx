"use client";

import { useState } from "react";
import { Send, MessageCircle, CheckCircle2, Mail, Clock, Shield } from "lucide-react";

const projectTypes = [
  "Custom Web Application (Next.js / React)",
  "Business ERP & POS System",
  "UI/UX Design & Prototyping",
  "Cloud Infrastructure & DevOps",
  "E-Commerce & Payment Platform",
  "API & Systems Integration",
];

const WHATSAPP_NUMBER = "94770000000";

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [brief, setBrief] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!fullName.trim() || !contactInfo.trim() || !brief.trim()) return;
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello ZENVORA!${fullName ? ` My name is ${fullName}.` : ""} I'm interested in: ${projectType}.${brief ? ` Brief: ${brief}` : ""}`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-slate-200 bg-white py-24 transition-colors duration-300 dark:border-[#1F2F28] dark:bg-[#090D0B] sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#169A48]/10 blur-[140px] dark:bg-[#169A48]/15"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 rounded-3xl border border-slate-200/90 bg-[#F8FAFC] p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-[#1F2F28] dark:bg-[#121915]/90 dark:shadow-[0_24px_80px_rgba(0,0,0,0.6)] sm:p-10 lg:grid-cols-12 lg:p-14">
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#169A48] uppercase dark:border-[#1F2F28] dark:bg-[#090D0B] dark:text-[#1EB954]">
                Start a Conversation
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-plus-jakarta)] text-3xl font-bold tracking-tight text-[#0F172A] dark:text-white sm:text-4xl">
                Let&apos;s Build Something{" "}
                <span className="bg-gradient-to-r from-[#169A48] to-[#1EB954] bg-clip-text text-transparent">
                  Great Together
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                Tell us about your system requirements, timeline, or product idea. Our
                lead architects will respond with a technical scoping plan within 24
                hours.
              </p>
            </div>

            <div className="mt-10 space-y-4 border-t border-slate-200 pt-8 dark:border-[#1F2F28]">
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-[#94A3B8]">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-200 bg-emerald-50 text-[#169A48] dark:border-[#1F2F28] dark:bg-[#090D0B] dark:text-[#1EB954]">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="font-medium text-[#0F172A] dark:font-normal dark:text-[#94A3B8]">
                  hello@zenvora.tech
                </span>
              </div>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-[#169A48] dark:text-[#94A3B8] dark:hover:text-white"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-200 bg-emerald-50 text-[#169A48] dark:border-[#1F2F28] dark:bg-[#090D0B] dark:text-[#1EB954]">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <span>
                  Facebook:{" "}
                  <strong className="font-semibold text-[#0F172A] dark:text-white">
                    ZENVORA
                  </strong>
                </span>
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-[#94A3B8]">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-200 bg-emerald-50 text-[#169A48] dark:border-[#1F2F28] dark:bg-[#090D0B] dark:text-[#1EB954]">
                  <Clock className="h-4 w-4" />
                </div>
                <span>Average response time: &lt; 2 hours</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-[#94A3B8]">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-200 bg-emerald-50 text-[#169A48] dark:border-[#1F2F28] dark:bg-[#090D0B] dark:text-[#1EB954]">
                  <Shield className="h-4 w-4" />
                </div>
                <span>NDA-protected project scoping</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="flex h-full min-h-[380px] flex-col items-center justify-center rounded-2xl border border-emerald-200 bg-white p-8 text-center dark:border-[#1EB954]/40 dark:bg-[#090D0B]">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-[#169A48] dark:bg-[#169A48]/20 dark:text-[#1EB954]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-plus-jakarta)] text-2xl font-bold text-[#0F172A] dark:text-white">
                  Inquiry Received!
                </h3>
                <p className="mt-2 max-w-md text-sm text-slate-600 dark:text-[#94A3B8]">
                  Thank you,{" "}
                  <span className="font-semibold text-[#0F172A] dark:text-white">
                    {fullName}
                  </span>
                  . Our engineering team has logged your{" "}
                  <span className="text-[#169A48] dark:text-[#1EB954]">{projectType}</span>{" "}
                  inquiry and will reach out via{" "}
                  <span className="font-medium text-[#0F172A] dark:text-white">
                    {contactInfo}
                  </span>{" "}
                  shortly.
                </p>
                <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#169A48] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#1EB954]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Continue on WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFullName("");
                      setContactInfo("");
                      setBrief("");
                    }}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:text-[#0F172A] dark:border-[#1F2F28] dark:bg-[#121915] dark:text-[#94A3B8] dark:hover:text-white"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-xs font-semibold tracking-wide text-slate-600 uppercase dark:text-[#94A3B8]"
                    >
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Alex Mercer"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#0F172A] placeholder-slate-400 transition-colors focus:border-[#169A48] focus:outline-none dark:border-[#1F2F28] dark:bg-[#090D0B] dark:text-white dark:placeholder-[#94A3B8]/50 dark:focus:border-[#1EB954]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contactInfo"
                      className="mb-2 block text-xs font-semibold tracking-wide text-slate-600 uppercase dark:text-[#94A3B8]"
                    >
                      Email / WhatsApp Number
                    </label>
                    <input
                      id="contactInfo"
                      type="text"
                      required
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                      placeholder="alex@company.com or +94 77..."
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#0F172A] placeholder-slate-400 transition-colors focus:border-[#169A48] focus:outline-none dark:border-[#1F2F28] dark:bg-[#090D0B] dark:text-white dark:placeholder-[#94A3B8]/50 dark:focus:border-[#1EB954]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="mb-2 block text-xs font-semibold tracking-wide text-slate-600 uppercase dark:text-[#94A3B8]"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#0F172A] transition-colors focus:border-[#169A48] focus:outline-none dark:border-[#1F2F28] dark:bg-[#090D0B] dark:text-white dark:focus:border-[#1EB954]"
                  >
                    {projectTypes.map((type) => (
                      <option
                        key={type}
                        value={type}
                        className="bg-white text-[#0F172A] dark:bg-[#090D0B] dark:text-white"
                      >
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="brief"
                    className="mb-2 block text-xs font-semibold tracking-wide text-slate-600 uppercase dark:text-[#94A3B8]"
                  >
                    Project Brief
                  </label>
                  <textarea
                    id="brief"
                    rows={4}
                    required
                    value={brief}
                    onChange={(e) => setBrief(e.target.value)}
                    placeholder="Briefly describe your system goals, key features, or target launch timeline..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#0F172A] placeholder-slate-400 transition-colors focus:border-[#169A48] focus:outline-none dark:border-[#1F2F28] dark:bg-[#090D0B] dark:text-white dark:placeholder-[#94A3B8]/50 dark:focus:border-[#1EB954]"
                  />
                </div>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <button
                    type="submit"
                    className="inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#169A48] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(22,154,72,0.3)] transition-all duration-300 hover:bg-[#1EB954] hover:shadow-[0_0_35px_rgba(30,185,84,0.55)]"
                  >
                    <Send className="h-4 w-4" />
                    Send Inquiry
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-[#0F172A] transition-all duration-300 hover:border-[#169A48] hover:text-[#169A48] dark:border-[#1F2F28] dark:bg-[#090D0B] dark:text-white dark:hover:border-[#1EB954]/60 dark:hover:bg-[#169A48]/10 dark:hover:text-[#1EB954]"
                  >
                    <MessageCircle className="h-4 w-4 text-[#169A48] dark:text-[#1EB954]" />
                    Chat on WhatsApp
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}