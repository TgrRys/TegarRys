import React from "react";
import ListProject from "./List-project";


export default function Project() {
  return (
    <div className="mt-40 flex flex-col items-center justify-center">
      <h1
        className="pb-2 text-center text-2xl font-semibold leading-relaxed text-secondary md:text-3xl"
        data-aos="zoom-in-up"
        data-aos-duration="300"
      >
        Past Project Experience
      </h1>
      <div className="mb-5" data-aos="zoom-in" data-aos-duration="600" data-aos-once="true">
        <ListProject />
      </div>
    </div>
  );
}
