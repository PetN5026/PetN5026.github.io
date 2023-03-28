import React from "react";
import Carousel from "./Carousel";
import { travelsArray } from "../supplemental/supplemental";
function FSATravels() {
  return (
    <div id="fsa-top-container" className="top-container">
      <div id="fsa-container" className="project-container">
        <h3>FSATRAVELS</h3>
        <p className="text">
          This was a team project to make a mockup of a e-commerce site. Instead
          of seeding fake inventory in a database, we used a live flight api to
          use a more real inventory. The github page can be found{" "}
          <a
            className="text-blue-700 underline"
            href="https://github.com/FSA-Travel-Agency/FSA-TRAVEL"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
        <Carousel imgArr={travelsArray} />
      </div>
    </div>
  );
}

export default FSATravels;
