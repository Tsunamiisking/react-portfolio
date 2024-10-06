import React from "react";

const Hero = () => {
  return (
      <section>
        <div class="grid grid-cols-2 w-11/12 border-2 border-lightcoral ml-auto mr-auto">
          <div class="grid grid-cols-2 justify-between col-span-2 border-2 border-lightcoral pt-2 pb-2 ">
            <div class="nav-left flex items-center content-center pl-2">
              <div class="mr-1 w-4 h-4 bg-red-500 rounded-full"></div>
              <div class="mr-1 w-4 h-4 bg-yellow-500 rounded-full"></div>
              <div class="mr-1 w-4 h-4 bg-green-700 rounded-full"></div>
            </div>

            <div class="nav-right pl-2 pr-2">
              <ul class="flex justify-between list-none">
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          <div class="border-2 border-lightcoral">Left Column</div>

          <div class="border-2 border-lightcoral">Right Column</div>
        </div>
      </section>
  );
};

export default Hero;
