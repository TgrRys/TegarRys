export const ContentOrganization = () => {
    return (
      <div className="text-primary">
        <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
          Staff
          <span className=" text-accent">
            {" "}
            @
            <a
              href="https://www.instagram.com/invofest_harber/"
              target="_blank"
              rel="noreferrer"
              className="text-underline"
            >
              Invofest
            </a>
          </span>
        </h3>
        <p className="pb-5 font-mono text-sm lg:text-base">Dec 2022 - Jan 2023</p>
        <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
          <p>
            In the Student Association of Informatics Engineering at Politeknik Harapan Bersama
            , I held a position as support of the Data Science Workshop.
            One of the biggest events is the{" "}
            <a
              href="https://www.instagram.com/parti.ums/"
              className="text-underline"
              target="_blank"
              rel="noreferrer"
            >
              Informatics Vocational Festival
            </a>
            (INVOFEST), where I served as the Support of Workshop Data Science,
            responsible for organizing all the event{`'`}s visual documentation
            and preparations.{" "}
          </p>
        </ul>
      </div>
    );
  };
  