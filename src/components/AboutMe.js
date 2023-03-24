import React from "react";
import { libraries } from "../supplemental/supplemental";
import Devicon from "./DevIcons";
function AboutMe() {
  return (
    <div
      id="about-container"
      className="md:justify-center md:max-w-aboutmeTopContainer flex pt-8 bg-gray-200 justify-center flex-wrap"
    >
      <div className="about-me-inner-container ">
        <p className="m-2 p-2 text-center text">
          Elevator pitch goes here? Lorem ipsum dolor sit amet, vim ferri congue
          ponderum ut, ei quot nulla usu, vivendo gloriatur nam ex? Per et
          noster voluptua, sumo pertinax no pri, fugit sensibus ea vel? Quo et
          case minim dicant? Et ludus intellegat vim, recusabo persecuti usu et.
          Has pericula signiferumque ea, ad iriure definitionem per? Te nobis
          delenit vel, eam odio inani similique te. Viris gloriatur complectitur
        </p>
      </div>
      <div className="about-me-inner-container">
        <div className="flex flex-col md:max-w-md md:h-aboutme max-w-xs justify-center">
          <p className=" m-2 p-2 text-center text">
            Hello, here are the technology that I've used in the
            past.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </p>
        </div>
        {/* <img
          className="m-2 p-2 flex-shrink-0 flex-grow-0 h-auto"
          src="https://picsum.photos/id/237/200/300"
          alt="insert placeholder"
          width={"200"}
          height={"300"}
        /> */}
        <div
          id="library-container"
          className="  flex flex-row md:max-w-md md:h-aboutme flex-wrap justify-evenly max-w-xs bg-gray-200"
        >
          {Object.keys(libraries).map((obj) => {
            return (
              <Devicon
                key={libraries[obj].text}
                link={libraries[obj].link}
                text={libraries[obj].text}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
