import React from 'react';

const OpenSource = () => {
  return (
    <section id="opensource" className="relative overflow-hidden c-space section-spacing">
      <h2 className="text-heading">Open Source</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      
      <div className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0">
        <div className="max-w-3xl">
          <p className="text-2xl">Mem0</p>
          <div className="mt-4 text-gray-400">
            Contributed a merged pull request to Mem0, an open-source memory layer for LLM applications, improving the project’s codebase through the GitHub review process with project maintainers.
          </div>
        </div>
        <div className="flex items-center gap-6 mt-6 sm:mt-0">
          <a
            href="https://github.com/mem0ai/mem0/pull/6460"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 cursor-pointer hover-animation"
          >
            GitHub PR
            <img src="/assets/logos/github.svg" className="w-5 h-5" style={{ filter: "brightness(0) invert(1)" }} alt="GitHub Logo" />
          </a>
        </div>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
    </section>
  );
};

export default OpenSource;
