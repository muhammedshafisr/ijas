import { PenTypes } from "@/constants";
import { handleHover } from "@/constants/functions";
import React from "react";

function Testing() {
  return (
    <div className="my-28">
      <div>
        <h1 className="text-3xl font-semibold my-4">
          <span className="text-[#485ED8]">Penetration</span> Testing Made Easy
        </h1>
        <p className="text-xl">
          We follow different penetration testing styles to cater to your unique
          set of requirements hassle-free. Our security experts expose your
          applications and systems to multiple testing environments without
          compromising on quality by providing top-notch security and
          penetration testing services.
        </p>
      </div>
      <div
        className="types bg-zinc-200  mt-10 rounded-lg text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 md:p-8 hover-card"
        onMouseMove={(e) => handleHover(e)}
      >
        <div className="hover-el"></div>
        {PenTypes.map((types, index) => (
          <div key={index} className="type ">
            <span className={`${"type-" + index} sprite-icon`}></span>
            <h1 className="text-xl py-2">{types.title}</h1>
            <p>{types.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testing;
