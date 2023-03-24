import React from "react";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
function Carousel({ imgArr }) {
  const [imgNum, setImgNum] = useState(0);
  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => {
      console.log("User Swiped left!", eventData);
      increment();
    },
    onSwipedRight: (eventData) => {
      console.log("user swiped right", eventData);
      decrement();
    },
  });
  function decrement() {
    setImgNum((imgNum) => (imgNum - 1 + imgArr.length) % imgArr.length);
  }

  function increment() {
    setImgNum((imgNum) => (imgNum + 1) % imgArr.length);
  }
  return (
    <div className="flex flex-col items-center pt-8 pb-2">
      <div className="relative hover:cursor-pointer">
        {/* <a href={imgArr[imgNum]}> */}
        <img
          width={1200}
          height={1200}
          alt="Testpictures"
          src={imgArr[imgNum].link}
          onClick={() => {
            window.open(imgArr[imgNum].link, "_blank", "noreferrer");
          }}
        ></img>
        {/* </a> */}
        {/* <div className="flex justify-between"> */}
        {/* <button onClick={decriment} className="carousel-buttons">
          LEFT
        </button>
        <button onClick={increment} className="carousel-buttons">
          RIGHT
        </button> */}
        <button
          id="caro-left"
          className="absolute top-0 bottom-0 opacity-10 p-4 carousel-buttons"
          onClick={decrement}
        >
          <div className="bg-slate-50 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
        </button>
        <div className="bg-slate-50 rounded-2xl">
          <button
            id="caro-right"
            className="absolute top-0 bottom-0 right-0 p-4 opacity-10 carousel-buttons"
            onClick={increment}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <p className="text-center max-w-almost-full text">
        {imgArr[imgNum].text}
      </p>
    </div>
  );
}

export default Carousel;
