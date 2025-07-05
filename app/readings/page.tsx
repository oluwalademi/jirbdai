import React from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Offset from "@/components/header/Offset";
import Footer from "@/components/Footer";
import Image from "next/image";
import Scientific from "@/app/readings/scientific";
const page = () => {
  return (
    <div className="default-layout relative w-full self-stretch px-10">
      <header>
        <Header>
          <div className="fixed inset-x-0 top-[145px]  bg-black px-5 py-1 text-center">
            <span>
              <span className="">Help shape the future of</span>
              <span className="font-bold"> JIRBDAI</span>
              <span className="">. Join as a</span>
              <span className="font-bold"> VOLUNTEER writer </span>
              <span className="">
                and share your voice with a growing audience.
              </span>
            </span>
          </div>
        </Header>
      </header>
      <Offset height={220} color={"brand-white"} />
      <section
        className={
          "container flex h-auto flex-row flex-wrap justify-between gap-10"
        }
      >
        <TopBar titleHeader={"News"} />

        <div className={"flex flex-row flex-wrap justify-between gap-10"}>
          <div className="flex-1 px-4 pt-4 text-black">
            <Scientific />
          </div>
        </div>
        <div
          className={"flex flex-col place-items-center gap-2 px-5 text-black"}
        >
          <Image
            src={"/assets/images/author.svg"}
            alt={"author pics"}
            width={200}
            height={200}
          />
          <div className={"author"}>
            Written by <span className={"font-bold"}>Sade Wumiola</span>
          </div>
          <div className={"description"}>
            <p style={{ textIndent: "1.5rem" }}>
              {" "}
              When Shade Wumiola joined the{" "}
              <span className={"font-black"}>JIRBDAI</span> blog team, she
              didn’t arrive with noise—she arrived with clarity. A storyteller
              at heart, Shade blends deep curiosity with a refined pen,
              uncovering the ordinary moments that speak volumes..
            </p>
            <p>
              At <span className={"font-black"}>JIRBDAI</span>, she’s more than
              a writer. She’s a bridge. Her words connect the blog’s
              mission—Justice, Innovation, Reform, and Bold Dialogue Across
              Ideas—with the people who live these truths daily.
            </p>
            <p>
              Shade writes not for attention, but for impact. And in doing so,
              she’s become a vital part of the conversation we’re building at
              JIRBDAI
            </p>
          </div>
        </div>
      </section>
      <Offset height={40} color={"brand-white"} />
      <Footer />
    </div>
  );
};

export default page;
