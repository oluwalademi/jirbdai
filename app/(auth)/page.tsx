// LoginPage.tsx (Next.js + Tailwind CSS)

"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat px-32 py-12 font-robotoflex text-black opacity-90 mol:px-20"
      style={{ backgroundImage: "url('assets/images/background-image.png')" }}
    >
      <div className="flex min-h-screen w-full flex-col gap-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-left  text-[16px] font-medium leading-6">
          <span className="text-[#197dda]">Home </span>
          <span className="text-black"> / Login</span>
        </div>

        {/* Title */}
        <h1 className="text-left  text-2xl font-extrabold leading-6 text-black">
          Login
        </h1>

        {/* Asterisk Note */}
        <p className="w-full  text-base font-semibold text-[#073056]">
          Required fields are marked with an asterisk: *
        </p>

        {/* Form Fields */}
        <div className="flex flex-col gap-5 py-3">
          <label className="flex flex-col gap-1 opacity-40">
            <span className="flex items-center text-base leading-6">
              <span className="font-bold italic text-black">
                Username / Email
              </span>
              <span className="font-medium text-red-600"> *</span>
            </span>
            <input
              type="text"
              className="h-8 w-[298px] rounded-lg border border-black px-2"
            />
          </label>

          <label className="flex flex-col gap-1 opacity-40">
            <span className="flex items-center text-base leading-6">
              <span className="font-bold italic text-black">Password</span>
              <span className="font-medium text-red-600"> *</span>
            </span>
            <input
              type="password"
              className="h-8 w-[298px] rounded-lg border border-black px-2"
            />
          </label>
        </div>

        {/* Forgot password */}
        <Link
          href="#"
          className=" text-base font-semibold text-[#197dda] underline"
        >
          Forgot your Password?
        </Link>

        {/* Checkbox */}
        <label className="flex items-center gap-2 py-2 opacity-40">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="size-[25px] rounded-lg border border-black"
          />
          <span className=" text-base font-bold leading-6 text-black">
            Keep me logged in
          </span>
        </label>

        {/* Buttons */}
        <div className="flex flex-row gap-4 py-1">
          <button className="rounded-[24px] bg-brand px-6 py-4  text-sm font-medium text-white shadow-custom-1">
            Register &gt;
          </button>
          <button className="rounded-[24px] bg-white px-6 py-4  text-sm font-medium text-black shadow-[0_0_10px_0_rgba(0,0,0,0.25)]">
            Login &gt;
          </button>
        </div>

        <div className={"max-w-[480px]"}>
          {/* Journal Banner */}
          <div className="w-full py-3  text-lg leading-7">
            <p className="font-bold">
              Journal of Institutional Research, Big Data Analytics and
              Innovation (JIRBDAI)
              <span className="font-light">
                {" "}
                publishes high-quality research that explores the intersection
                of data-driven innovation.
              </span>
            </p>
          </div>

          {/* Submission Prompt */}
          <div className="w-full border-t border-black py-3  text-lg leading-7">
            <p>
              <span className="font-normal">Trying to </span>
              <span className="font-bold italic">“</span>
              <span className="font-bold italic text-[#9a0101]">
                Make a Submission
              </span>
              <span className="font-bold italic">”</span>
              <span className="font-light">
                , kindly complete your registration{" "}
              </span>
              <span className="font-bold italic text-[#006eff]">“</span>
              <span className="font-bold text-[#006eff]">Register</span>
              <span className="font-bold italic text-[#006eff]">”</span>
              <span className="font-light">
                {" "}
                to initiate the submission process.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
