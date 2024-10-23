import React from "react";
import Intro from "./Intro";

const Hero = () => {
  return (
    <>
    <Intro >
        Hello World
    </Intro>
    <section>
        <div className="grid grid-cols-2 w-11/12 border-2 border-lightcoral ml-auto mr-auto">
          <div className="grid grid-cols-2 justify-between col-span-2 border-2 border-lightcoral pt-2 pb-2 ">
            <div className="nav-left flex items-center content-center pl-2">
              <div className="mr-1 w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="mr-1 w-4 h-4 bg-yellow-500 rounded-full"></div>
              <div className="mr-1 w-4 h-4 bg-green-700 rounded-full"></div>
            </div>

            <div className="nav-right pl-2 pr-2">
              <ul className="flex justify-between list-none">
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          <div className="border-2 border-lightcoral">Left Column</div>

          <div className="border-2 border-lightcoral">Right Column</div>
        </div>
      </section></>
  );
};

export default Hero;
