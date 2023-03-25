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
    console.log("decremented");
  }

  function increment() {
    setImgNum((imgNum) => (imgNum + 1) % imgArr.length);
    console.log("increment");
  }
  return (
    <div className="flex flex-col items-center pt-8 pb-2 max-w-ones max-h-carousel-container relative">
      {/* <div className="relative hover:cursor-pointer"> */}
      {/* <a href={imgArr[imgNum]}> */}
      {imgArr.map((img, index) => {
        return (
          <div
            className={index === imgNum ? "slide-active" : "slide absolute"}
            key={index}
            {...handlers}
          >
            {
              <img
                src={img.link}
                alt="test"
                className="image max-h-carousel-imgs md:w-ones md:max-w-4xl"
                width={1200}
                height={500}
                onClick={() => {
                  window.open(imgArr[imgNum].link, "_blank", "noreferrer");
                }}
              />
            }
          </div>
        );
      })}
      {/* <img
          width={1200}
          height={1200}
          alt="Testpictures"
          src={imgArr[imgNum].link}
          {...handlers}
          onClick={() => {
            window.open(imgArr[imgNum].link, "_blank", "noreferrer");
          }}
        ></img> */}
      {/* </a> */}
      {/* <div className="flex justify-between"> */}
      {/* <button onClick={decriment} className="carousel-buttons">
          LEFT
        </button>
        <button onClick={increment} className="carousel-buttons">
          RIGHT
        </button> */}

      <div className="bg-slate-50 carousel-buttons absolute left-0 z-20">
        <button
          id="caro-left"
          className="absolute  left-0 opacity-100 h-full w-full"
          onClick={decrement}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>

      <div className="bg-slate-50  absolute carousel-buttons right-0 z-20">
        <button
          id="caro-right"
          className="absolute right-0 opacity-10 w-full h-full"
          onClick={increment}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      {/* </div> */}
      <p className="text-center max-w-almost-full text">
        {imgArr[imgNum].text}
      </p>
    </div>
  );
}

export default Carousel;
