import React from "react";
import { libraries } from "../supplemental/supplemental";
import Devicon from "./DevIcons";
function AboutMe() {
  return (
    <div className="md:justify-center flex pt-8 bg-gray-200 justify-center">
      <div
        id="about-container"
        className="flex flex-col md:flex-row overflow-y-auto items-center max-w-4xl"
      >
        <p className=" m-2 p-2">Hey there, welcome to my website.</p>
        {/* <img
          className="m-2 p-2 flex-shrink-0 flex-grow-0 h-auto"
          src="https://picsum.photos/id/237/200/300"
          alt="insert placeholder"
          width={"200"}
          height={"300"}
        /> */}
        <div
          id="library-container"
          className="flex flex-row md:max-w-2xl flex-wrap justify-evenly max-w-xs bg-gray-200"
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
