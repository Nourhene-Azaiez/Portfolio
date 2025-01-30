"use client";

import React from "react";

const Button = () => {
  const handleDownload = () => {
    const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL;

    if (!resumeUrl) {
      console.error("Resume URL is not defined in the environment variables.");
      return;
    }

    const link = document.createElement("a");
    link.href = resumeUrl; // Access the secret link from the environment variable
    link.target = "_blank"; // Open in a new tab
    link.rel = "noopener noreferrer"; // Security best practice for opening in a new tab
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-slate-900 dark:bg-violet-200 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white dark:text-black inline-block pointer-events-auto"
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-180 py-0.5 px-4 ring-1 ring-black/8 dark:ring-white/10 ">
        <span>Visit Resume</span>
        <svg
          fill="none"
          height="16"
          viewBox="0 0 24 24"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </button>
  );
};

export default Button;
