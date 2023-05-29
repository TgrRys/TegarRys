export const ContentEducation = () => {
  return (
    <div className="text-primary">
      <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
        Informatics Engineering
        <br />
        <span className=" text-accent">
          {" "}
          @
          <a
            href="https://poltekharber.ac.id/"
            target="_blank"
            rel="noreferrer"
            className="text-underline"
          >
            Politeknik Harapan Bersama Tegal
          </a>
        </span>
      </h3>
      <p className="pb-5 font-mono text-sm lg:text-base">Aug 2020 - Present</p>
      <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
        <p>
          I decided to enroll in the Informatics Engineering program due to my
          strong belief that technology would gradually replace various
          commercial jobs in the future. With this in mind, I made a conscious
          decision to pursue this field of study in order to equip myself with
          the necessary skills and knowledge to thrive in an evolving job market
        </p>
      </ul>
    </div>
  );
};
