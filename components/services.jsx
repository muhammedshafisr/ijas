import { services } from "@/constants";
import { handleHover } from "@/constants/functions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import roboImage from "../public/robo-3.png";

function Services({ limit }) {
  const Data = limit ? services.slice(0, limit) : services;

  return (
    <div className="services my-20">
      <div className="flex items-center gap-2">
        <div>
          <h1 className="text-4xl font-semibold after-underline">
            Our <span className="text-[#485ED8]">Security</span> and Penetration
            Testing Services
          </h1>
          <p className="mt-6 text-lg max-w-4xl">
            Collaborate with one of the top penetration testing companies in
            India and USA for optimal risk management. We offer a complete range
            of security and penetration testing services to generate smart,
            simplistic, and safer user experiences.
          </p>
        </div>
        <div className="hidden md:block">
          <Image src={roboImage} alt="robo" width={200} className="" />
        </div>
      </div>
      <div className="service-list mt-10 flex gap-6 flex-wrap  ">
        {Data.map((service, index) => (
          <div
            className="w-[360px] service--list--item hover-card cursor-pointer"
            key={index}
            onMouseMove={(e) => handleHover(e)}
          >
            <span className="hover-el-light"></span>
            <div
              className="bg-white overflow-hidden inline-block rounded-xl border-zinc-400 border-r-2 border-t-2 cursor-pointer hover-card h-16 w-20"
              onMouseMove={(e) => handleHover(e)}
            >
              <span className={`sprite-icon-2  ${"item-2-" + index} `}></span>
              <span className="hover-el-2 "></span>
            </div>
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="mt-4 text-lg">{service.description}</p>
          </div>
        ))}
      </div>
      {limit && (
        <div className="mt-10 text-center">
          <Link
            href={"/services"}
            className="border-zinc-400 border text-white px-6 py-2 rounded-lg more-btn"
          >
            View All Services
          </Link>
        </div>
      )}
    </div>
  );
}

export default Services;
