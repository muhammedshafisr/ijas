import React from "react";
import JoinTeamImage from "../public/join-team.png";
import Image from "next/image";
import { handleHover } from "@/constants/functions";
import { useRouter } from "next/router";
function JoinTeam() {
  const router = useRouter();

  return (
    <div className="mt-28">
      <h1 className="text-3xl font-semibold p-2 text-center mt-4">
        Say Hi to your <span className="text-[#485ED8]">Freelancing </span>
        career
      </h1>
      <div className="flex gap-10 items-center">
        <Image
          src={JoinTeamImage}
          alt="join team"
          className="w-[460px] hidden md:block"
        />
        <div className="container md:bg-none bg-image-join text-center md:text-left">
          <span className="bg-overlay md:hidden block absolute"></span>
          <ul className="md:list-disc flex flex-col md:gap-4 gap-2 text-lg  mt-6 bg-overlay z-10 relative">
            <li>Work with the best cyber security freelancing team</li>
            <li>Time zone matched with a minimum if 4+ hours overlap</li>
            <li>Simple Lorem ipsum dolor sit.</li>
            <li>Time zone matched with a minimum if 4+ hours overlap</li>
            <li>
              Simple Lorem ipsum dolor sit. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Expedita, adipisci?
            </li>
            <li className="list-none">
              <button
                onClick={() => router.push("#contact")}
                className="py-2 px-6 bg-[#485ED8] mt-8 rounded-md"
              >
                Join with us
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-2 md:flex-nowrap flex-wrap mb-6 md:mt-0 mt-6">
        <div
          className="bg-white text-black overflow-hidden inline-block rounded-md cursor-pointer hover-card p-4"
          onMouseMove={(e) => handleHover(e)}
        >
          <span className="hover-el"></span>

          <div className="rounded-lg">
            <h1 className="text-[#485ED8] text-xl font-semibold">Permenent</h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, iusto perferendis necessitatibus animi libero quidem?
            </p>
          </div>
        </div>
        <div
          className="bg-white text-black overflow-hidden inline-block rounded-md cursor-pointer hover-card p-4"
          onMouseMove={(e) => handleHover(e)}
        >
          <span className="hover-el"></span>

          <div className="rounded-lg">
            <h1 className="text-[#485ED8] text-xl font-semibold">Freelance</h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, iusto perferendis necessitatibus animi libero quidem?
            </p>
          </div>
        </div>
        <div
          className="bg-white text-black overflow-hidden inline-block rounded-md cursor-pointer hover-card p-4"
          onMouseMove={(e) => handleHover(e)}
        >
          <span className="hover-el"></span>

          <div className="rounded-lg">
            <h1 className="text-[#485ED8] text-xl font-semibold">Team</h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, iusto perferendis necessitatibus animi libero quidem?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinTeam;
