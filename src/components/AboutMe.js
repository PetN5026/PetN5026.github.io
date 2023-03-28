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
        <div>
          <h2 className="mb-2 pb-2 text-center text font-bold">Who am I?</h2>
        </div>
        <div>
          <p className="m-2 text text-left">
            Hello there, I am a simple software developer. Besides this website,
            I made a few projects in a web development program I took part of.
            You can see them in the projects tab, please check them out.
          </p>
          <p className="m-2 text text-left">
            As I continue to learn more libraries and languages on my own I will
            continue to put knowledge into practice and create more projects.
            Perhaps one day I could become a famous developer.{""}
          </p>
          <p className="m-2 text text-left">
            As for hobbies, I'm a big foodie and I enjoy cooking and eating out.
            My Youtube feed is a lot of recipes and if I find something
            interesting I would try and cook it.
            {/* <del>
              Sadly, a good percentage of the time it doesn't end up tasting
              like how I remember it from
            </del> */}
          </p>
          <p className="m-2 text line-through text-left">
            Sadly, a good percentage of the time it doesn't end up tasting like
            how I remember it from
          </p>
        </div>
      </div>
      <div className="about-me-inner-container">
        <div className="flex flex-col md:max-w-md md:h-aboutme max-w-xs justify-center">
          <p className=" mb-2 pb-2 text-center text">
            Technology I've used in the past.
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
