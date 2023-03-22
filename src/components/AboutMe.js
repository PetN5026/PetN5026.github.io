import React from "react";

function AboutMe() {
  return (
    <div className="md:justify-center flex pt-8 bg-gray-200 justify-center">
      <div
        id="about-container"
        className="flex flex-col md:flex-row overflow-y-auto items-center max-w-4xl"
      >
        <p className=" m-2 p-2">Hey there, welcome to my website.</p>
        <img
          className="m-2 p-2 flex-shrink-0 flex-grow-0 h-auto"
          src="https://picsum.photos/id/237/200/300"
          alt="insert placeholder"
          width={"200"}
          height={"300"}
        />
      </div>
    </div>
  );
}

export default AboutMe;
