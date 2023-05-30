import React from "react";
import CardContact from "../../components/card/Card-contact";
import { contacts } from "../../utils/datas";

export default function Contact() {
  return (
    <section className="mt-36">
      <div className="flex items-center text-center gap-2 pb-12">
        <div
          className="h-1 w-12 bg-primary rounded-full"
          data-aos="zoom-in-right"
          data-aos-duration="300"
          data-aos-once="true"
        ></div>
        <h1
          className="text-3xl font-semibold text-secondary md:text-4xl"
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-once="true"
        >
          Contact Me
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12 flex-grow">
        {Object.keys(contacts).map((contact, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={`${index * 100}`}
            data-aos-duration="300"
            data-aos-once="true"
          >
            <a href="https://" target="_blank">
            <CardContact
              src={contacts[contact].src}
              name={contacts[contact].name}
              contact={contacts[contact].contact}
            />
            </a>
          </div>
        ))}
      </div>
      <div className="my-16 flex flex-col items-center justify-center gap-3 text-center md:gap-5">
        <p className="font-mono text-accent" data-aos="fade-up">
          What's Next?
        </p>
        <h1
          className="pb-1 text-4xl font-semibold leading-relaxed text-secondary md:text-5xl"
          data-aos="zoom-in-up"
        >
          Get In Touch
        </h1>
        <p
          className="w-full pb-8 text-base leading-relaxed text-primary md:w-5/6 md:text-lg lg:w-4/6 xl:w-1/2"
          data-aos="zoom-in-up"
        >
          I am currently seeking job opportunities to gain more experience in
          the industry. Whether you have any questions or simply want to say hi,
          I will do my best to get back to you!
        </p>
        <button
          className="rounded-[4px] border-2 border-accent px-7 py-4 font-mono text-accent transition-all duration-300 hover:bg-accent hover:bg-opacity-10"
          data-aos="flip-up"
          data-aos-duration="600"
        >
          <a href="mailto:tegarrizky237@gmail.com">Hello</a>
        </button>

      </div>
    </section>
  );
}
