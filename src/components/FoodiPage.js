import React from "react";
import Carousel from "./Carousel";
import { foodiArray } from "../supplemental/supplemental";
function FoodiPage() {
  return (
    <div id="foodi-top-container" className="top-container">
      <div id="foodi-container" className="project-container">
        <h3>FOODI</h3>
        <p className="pb-2 ml-2 mr-2 text-center max-w-6xl text">
          This was a team project where we all decided that our love of food
          would be the basis for the idea. Foodi is similar to tinder but
          matches based on cuisine type. Please check it out at{" "}
          <a
            className="underline text-blue-700"
            // onClick={() => {
            //   window.open(
            //     "https://hilarious-beijinho-a0bf49.netlify.app/",
            //     "_blank"
            //   );
            // }}
            href="https://hilarious-beijinho-a0bf49.netlify.app/"
            target={"_blank"}
            rel="noreferrer"
          >
            here
          </a>
          . Below is a brief overview of the general workings.
        </p>

        <Carousel imgArr={foodiArray} />
      </div>
    </div>
  );
}

export default FoodiPage;
