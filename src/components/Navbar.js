import React from "react";
import { useState } from "react";

function NavBar() {
  const [projectOpen, setProjectOpen] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);
  return (
    <div>
      <div className="bg-gray-300 flex justify-end md:hidden flex-nowrap">
        <svg
          className="block w-8 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          // class="w-6 h-6"
          onClick={() => {
            setBurgerOpen((prev) => !prev);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div
        id="navHolder"
        className="justify-center md:justify-start bg-gray-300 flex flex-col md:flex-row"
      >
        <a
          className={
            burgerOpen ? "navButton" : "hidden md:flex md:flex-grow-0 navButton"
          }
          href="/PetN5026.github.io/"
        >
          <p className="text-decoration-line: underline navText">Home</p>
        </a>
        <a
          className={burgerOpen ? "navButton " : "hidden md:flex navButton"}
          href="/PetN5026.github.io/AboutMe"
        >
          <p className="text-decoration-line: underline  hover:bg-gray-400 hover:rounded-md hover:cursor-pointer ">
            About Me
          </p>
        </a>
        <div
          className={
            burgerOpen
              ? "navButtonProjects"
              : "hidden md:flex md:flex-col navButtonProjects"
          }
          onClick={() => {
            setProjectOpen((prev) => !prev);
          }}
        >
          <p className="text-decoration-line: underline hover:bg-gray-400 hover:rounded-md md:w-24 ">
            Projects
          </p>
          {/* <svg
            className="w-2 h-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg> */}
          <ul>
            <li
              className={
                projectOpen
                  ? "text-neutral-500 hover:bg-gray-400 hover:rounded-md"
                  : "hidden"
              }
            >
              <a href="/PetN5026.github.io/Foodie">Foodie</a>
            </li>
            <li
              className={
                projectOpen
                  ? "text-neutral-500 hover:bg-gray-400 hover:rounded-md"
                  : "hidden"
              }
            >
              <a href="/PetN5026.github.io/FSATravels">FSATravels</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
