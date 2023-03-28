import React from "react";
import Devicon from "./DevIcons";
import { icons } from "../supplemental/supplemental";
function HomePage() {
  return (
    <div className=" w-screen bg-slate-200  pl-8 pr-8 pb-8 pt-8 flex flex-col items-center">
      <h2 className="text-3xl text-gray-700 font-bold mb-5 text-center">
        Hey there, Welcome to my personal webpage!
      </h2>
      <p className="text-gray-500 max-w-3xl text">
        This is a webpage to go over what I've learned about web development.
        Feel Free to click on any links in the navbar as well as adjust the
        browser size or view it on a mobile device because the page is
        responsive :)
      </p>
      <p className="text mt-4">
        This website directly uses the following techstack
      </p>
      <div>
        {/* add a div with flex to make that div itself flex */}
        <div
          id="devcon-container"
          className="flex flex-row md:max-w-2xl flex-wrap justify-evenly max-w-xs bg-gray-200"
        >
          {Object.keys(icons).map((k) => {
            return (
              <Devicon key={k} link={icons[k].link} text={icons[k].text} />
            );
          })}
        </div>
      </div>
      {/* <p>placeholder</p> */}
    </div>
  );
}

export default HomePage;
