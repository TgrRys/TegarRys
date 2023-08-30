import React from "react";

export default function Home() {
  return (
    <div className="ml-5 pb-10">
      <div className="flex h-[80vh] w-full flex-col justify-center px-0 pt-36 leading-relaxed md:h-screen md:pt-16 lg:px-[70px] lg:pt-12 ">
        <p
          className="ml-1 hidden pb-3 text-sm text-accent md:block md:pb-7 md:text-base"
          data-aos="fade-up"
        >
          Hi, my name is
        </p>
        <h1
          className="pb-2 text-4xl font-semibold text-secondary md:mt-0 md:pb-4 md:text-5xl lg:text-6xl"
          data-aos="fade-up"
        >
          Tegar Risqy Yulian Santoso
        </h1>
        <p
          className="w-full text-sm leading-relaxed text-primary md:w-[540px] md:text-base"
          data-aos="zoom-in-up"
        >
          I{`'`}m a Front End Developer specialized in building websites.
          Currently, I am focusing on learning website technology for industrial
          needs like ReactJS, Laravel, Bootstrap, and TailwindCSS. I am also interested
          in UI/UX designs and have experiences in designing UI/UX for both mobile and websites.
        </p>
        <div
          className="mt-10 text-sm md:mt-14"
          data-aos="flip-up"
          data-aos-duration="600"
        >
          <a
            className="rounded-[4px] border-2 border-accent px-7 py-5 text-accent transition-all duration-300 hover:bg-accent hover:bg-opacity-10"
            href="https://drive.google.com/file/d/1zeoOnCjopbRGxCzcaAuTXPc18OpiAZZ6/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button>View my cv here!</button>
          </a>
        </div>
      </div>
    </div>
  );
}
