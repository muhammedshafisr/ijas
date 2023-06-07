import { useRouter } from "next/router";
import React from "react";

function HireNow() {
  const router = useRouter();

  return (
    <div className="my-28 text-center">
      <h1 className="text-3xl md:text-4xl font-semibold">
        Ready to Pentest with the <span className="text-[#485ED8]">Best </span>
        Security Professionals?
      </h1>
      <p className="text-lg max-w-4xl mt-8 m-auto">
        Join hands with the most trusted security and penetration testing team
        equipped with a seasoned team of vetted pen-testers and IT security
        professionals who are committed to extending all the needed support to
        prioritize vulnerability fixes with quick turnaround times. You can hire
        a penetration tester on a part-time, full-time, or contract basis for
        your project requirements.
      </p>
      <button
        onClick={() => router.push("contact")}
        className="py-2 px-6 bg-[#485ED8] mt-8 rounded-md"
      >
        Lets get started now
      </button>
    </div>
  );
}

export default HireNow;
