import { servicesMin } from "@/constants";
import { handleHover } from "@/constants/functions";
import React from "react";

function Landing() {
  return (
    <div className="landing">
      <div className="bg-blur-grad mt-24 md:mt-28 ">
        <div className=" text-center md:text-left">
          <h1 className="text-4xl  lg:text-5xl font-bold">
            Hire Security and{" "}
            <span className="text-[#485ED8]"> Penetration</span> Testers
          </h1>
          <p className="text-lg md:text-xl mt-9  max-w-[900px] ">
            Prevent your system, application, or network from potential security
            breaches and vulnerabilities with the help of our penetration
            testing services. Hire security testers to ensure that your
            business-critical data stays beyond the reach of hackers.
          </p>
          <div className="flex mt-20  w-fit border border-blue-500 rounded-lg overflow-hidden hover-card">
            <div className="flex md:w-[300px]">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0  dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                @
              </span>
              <input
                type="text"
                id="website-admin"
                className="rounded-none outline-none bg-gray-50 border border-gray-300 text-gray-900  f block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                placeholder="Your Email Address..."
              />
            </div>
            <button
              className="px-6 py-2  blue-h-border rounded-r-lg cursor-pointer z-10 hover:bg-[#485ED8] hover:text-white transition-all duration-200 ease-in-out"
              onClick={() => alert("1")}
            >
              Get Started
            </button>
          </div>
        </div>
        <div>
          <div className="grid place-items-center mt-20 md:mt-40  py-10">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tighter p-4 ">
              What We Test
            </h1>
            <p className="text-lg md:text-xl text-center max-w-[900px] my-4">
              We test your system, application, or network for potential
              security breaches and vulnerabilities. We ensure that your
              business-critical data stays beyond the reach of hackers.
            </p>
            <div
              className="items mt-10 bg-white  text-black p-5 rounded-lg cursor-pointer hover-card"
              onMouseMove={(e) => handleHover(e)}
            >
              <div className="hover-el"></div>
              <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-12">
                {servicesMin.map((service, index) => (
                  <li
                    key={index}
                    className="flex flex-col gap-2 items-center w-[90px] text-center"
                  >
                    <span
                      className={`${
                        "item-" + index
                      } flex flex-col items-center sprite-icon`}
                    ></span>
                    <p className="font-semibold">{service}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
