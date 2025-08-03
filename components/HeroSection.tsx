import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const socials = [
    {
      label: "facebook",
      link: "https://www.addtoany.com/add_to/facebook?linkurl=http%3A%2F%2Fjirbdai.com.ng%2F&linkname=Journal%20of%20Institutional%20Research%2C%20Big%20Data%20Analytics%20and%20Innovation%20calls%20for%20paper%20submission&linknote=",
    },
    {
      label: "twitter",
      link: "https://www.addtoany.com/add_to/x?linkurl=http%3A%2F%2Fjirbdai.com.ng%2F&linkname=Journal%20of%20Institutional%20Research%2C%20Big%20Data%20Analytics%20and%20Innovation%20calls%20for%20paper%20submission&linknote=Submit%20to%20the%20Journal%20of%20Institutional%20Research%2C%20Big%20Data%20Analytics%20and%20Innovation%20%28JIRBDAI%29%20%E2%80%94%20covering%20research%20in%20data%20science%2C%20reform%2C%20justice%2C%20and%20innovation.",
    },
    {
      label: "linkedin",
      link: "https://www.addtoany.com/add_to/linkedin?linkurl=http%3A%2F%2Fjirbdai.com.ng%2F&linkname=Journal%20of%20Institutional%20Research%2C%20Big%20Data%20Analytics%20and%20Innovation%20calls%20for%20paper%20submission&linknote=",
    },
  ];
  return (
    <div>
      {/* Main Section with Background Image */}
      <section
        className="w-full bg-cover bg-center bg-no-repeat px-32 py-12 mol:px-20"
        style={{ backgroundImage: "url('assets/images/background-image.png')" }}
      >
        <div className="mx-auto flex max-w-screen-xl flex-col gap-10 lg:flex-row">
          {/* Left Section */}
          <div className="flex w-full flex-col gap-4 lg:w-1/2">
            <div className="text-xl font-semibold text-tarawera">
              ISSN(Print): 0000-0000. ISSN (Online): 0000-0000
            </div>
            <h1 className="h1">
              Why Is Scientific
              <br />
              Journalism
              <br />
              Important
              <br />
              to Academics?
            </h1>
            <div className="line-clamp-3 w-3/4 max-w-prose break-words py-6 font-inter text-base text-gray-900">
              <span className="font-bold text-black">
                Scientific journalism
              </span>{" "}
              is a vital pillar in the academic ecosystem. For researchers and
              educators alike, it acts as a bridge between discovery and
              dialogue, ensuring that new ideas aren’t just created—but shared,
              challenged, and refined. Scientific publications are not just a
              requirement—they&#39;re the currency of credibility,
              collaboration, and career growth.
            </div>

            <div className="flex gap-4">
              <a href="https://jirbdai.com.ng/index.php/jirbdai/user/register">
                <button className="btn-inter-medium-14 bg-brand text-white">
                  Click to Sign Up &gt;
                </button>
              </a>
              <button className="btn-inter-medium-14 bg-white text-black">
                <a href="/readings">Read more &gt;</a>
              </button>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center gap-5">
          {socials.map((item, i) => (
            <div
              key={i}
              className="flex aspect-square items-center justify-center rounded-full bg-white p-1 shadow-custom-3"
            >
              <Link href={`${item.link}`}>
                <Image
                  src={`/assets/images/${item.label}.png`}
                  alt={`${item.label} icon`}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
