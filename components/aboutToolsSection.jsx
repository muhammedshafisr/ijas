import React from "react";
import Robo from "../public/robo-working.png";
import Image from "next/image";
import { handleHover } from "@/constants/functions";
import { toolsUsing } from "@/constants";

function AboutTools() {
  return (
    <div className="my-24">
      <h1 className="pt-5 text-[1.7rem] md:text-4xl font-bold text-center">
        Penetration Testing <span className="text-[#485ED8]">Tools</span> We Use
      </h1>
      <p className="pt-4 text-center text-lg">
        Hire a penetration tester or a team of security professionals proficient
        in various popular tools and technologies.
      </p>
      <div className="flex mt-10 justify-around items-end">
        <div className="image-container w-96 hidden md:block">
          <Image src={Robo} alt="robo" />
        </div>
        <div className="tools flex-grow grid gap-4">
          {toolsUsing.map((tool, index) => (
            <div
              key={index}
              className="w-full service--list--item hover-card cursor-pointer"
              onMouseMove={(e) => handleHover(e)}
            >
              <span className="hover-el-light"></span>
              <div className="flex gap-4">
                <div
                  className="bg-white overflow-hidden inline-block rounded-md border-zinc-400 border-r-2 border-t-2 cursor-pointer hover-card h-10 w-12"
                  onMouseMove={(e) => handleHover(e)}
                >
                  <span className={`sprite-icon ${"tool-" + index}`}></span>
                  <span className="hover-el-2 "></span>
                </div>
                <h2 className="text-xl font-semibold">{tool.type}</h2>
              </div>
              <div className="mt-4 text-lg">
                <ul className="flex flex-wrap gap-4 p-2">
                  {tool.tools.map((item, index) => (
                    <li key={index} className=" rounded-md p-2 tools-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutTools;
