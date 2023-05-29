import { BsArrowUpRightCircle } from "react-icons/bs";
import { useState } from "react";

export const ContentCertification = () => {
  const [hover, setHover] = useState([]);

  const vendorList = [
    {
      type: "Course",
      name: "Dicoding",
      link: "https://www.dicoding.com",
      certificate: [
        {
          name: "Belajar Dasar Pemrograman Web",
          link: "https://www.dicoding.com/certificates/1RXYODY0KPVM",
        },
      ],
    },
    {
      type: "Course",
      name: "Sololearn",
      link: "https://www.sololearn.com",
      certificate: [
        {
          name: "HTML ",
          link: "https://www.sololearn.com/certificates/CT-WH8MQ6IH",
        },
        {
          name: "CSS ",
          link: "https://www.sololearn.com/certificates/CT-DULKYS7S",
        },
        {
          name: "Javascript ",
          link: "https://www.sololearn.com/certificates/CC-PVRPSQUQ",
        },
      ],
    },
    {
      type: "Course",
      name: "Skilvul",
      link: "https://www.skilvul.com/",
      certificate: [
        {
          name: "Web Developer Pemula",
          link: "https://skilvul.com/paths/web-development-pemula/student/cl5nxb7xi06av01lqwvs5ma1m",
        },
        {
          name: "UI/UX Designer Mastery",
          link: "https://skilvul.com/courses/uiux-design-mastery/student/cl5nxb7xi06av01lqwvs5ma1m",
        },
      ],
    },
    {
      type: "Course",
      name: "freeCodeCamp",
      link: "https://www.freecodecamp.org/",
      certificate: [
        {
          name: "Responsive Web Design",
          link: "https://freecodecamp.org/certification/fcc40d5770d-5ab1-4510-9a58-f47855658d00/responsive-web-design",
        },
      ],
    },
  ];

  return (
    <div className="cursor-default text-primary">
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
  );
};
