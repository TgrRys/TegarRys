import { useState } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";

export const ContentAward = () => {

  const [hover, setHover] = useState([]);

  const vendorList = [
    {
      type: "Certificate by",
      name: "Skilvul",
      link: "https://www.skilvul.com",
      certificate: [
        {
          name: "Top 9th Skilvul Demo Day",
          link: "https://drive.google.com/file/d/1Mfnri54IWDg6n7RUlpDwSChkNcw0OROd/view?usp=sharing",
        },
      ],
    },
  ]

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
      <p className="pb-4 font-mono text-sm lg:text-base">Dec 2022</p>
      <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
        <p>
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
        </p>
      </ul>
      <div className="pt-6 cursor-default text-primary">
      {vendorList.map((vendor, index) => {
        return (
          <div key={index}>
            <h3 className="pb-3 text-lg font-medium leading-loose text-secondary md:text-xl">
              {vendor.type}
              <span className=" text-accent">
                {" "}
                @
                <a
                  href={vendor.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-underline"
                >
                  {vendor.name}
                </a>
              </span>
            </h3>
            <ul className="flex list-inside list-disc flex-col gap-4 pb-5 text-sm leading-relaxed lg:text-base">
              {vendor.certificate.map((item, index) => {
                return (
                  <li
                    key={index}
                    onMouseEnter={() => {
                      setHover((prehover) => {
                        const newHover = [...prehover];
                        newHover[index] = true;
                        return newHover;
                      });
                    }}
                    onMouseLeave={() => {
                      setHover((prehover) => {
                        const newHover = [...prehover];
                        newHover[index] = false;
                        return newHover;
                      });
                    }}
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="static  items-center justify-start transition-all duration-300 hover:text-accent md:inline-flex"
                    >
                      {item.name}
                      <BsArrowUpRightCircle
                        className={`ml-1 hidden transition-all duration-300 md:inline-flex ${
                          hover[index] && "rotate-45"
                        }`}
                        size={16}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
    </div>
  );
};
