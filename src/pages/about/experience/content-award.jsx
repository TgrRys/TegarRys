export const ContentAward = () => {
  return (
    <div className="text-primary">
      <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
        9th Place in the Skilvul Demo Day
        <span className=" text-accent">
          {" "}
          @
          <a
            href="https://www.instagram.com/skilvul/"
            target="_blank"
            rel="noreferrer"
            className="text-underline"
          >
            Skilvul
          </a>
        </span>
      </h3>
      <p className="pb-5 font-mono text-sm lg:text-base">December 2022</p>
      <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
        <li>
          Achievement as the top group in Skilvul's Demo Day {`"`}#Tech4Impact:
          Front-End & Back-End Web Development in the Independent Study Program
          Certified - Merdeka Campus Cycle 3 Skilvul #Tech4Impact{`"`}.
          Our team of three developed a project called{" "}
          <a
            href="https://www.figma.com/proto/RID0jaEou3qDxGEepjxSAw/Rawuh?page-id=51%3A2&node-id=51%3A3&starting-point-node-id=51%3A3&scaling=scale-down-width"
            target="_blank"
            rel="noreferrer"
            className="text-underline"
          >
            FEBE - 12
          </a>
        </li>
      </ul>
    </div>
  );
};
