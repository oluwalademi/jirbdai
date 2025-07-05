"use client";

import React, { useState } from "react";
import Image from "next/image";
import TopBar from "@/components/TopBar";

const JournalHighlight = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="new-section py-10">
      {/* Top Bar */}
      <div className={"flex flex-col"}>
        <TopBar
          titleHeader={
            "Journal of Institutional Research, Big Data Analytics and Innovation"
          }
        />

        {/* Main Content Section */}
        <div className="background-ash-100 background-ash-200 flex w-full flex-col items-start  gap-4 bg-gradient-to-b p-8 lg:flex-row lg:flex-nowrap ">
          {/* Journal Cover */}
          <div className="hidden w-fit lg:flex">
            <div className="w-fit p-0">
              <Image
                src="/assets/images/jirbdai-cover.png"
                alt="JIRBDAI Cover"
                width={140}
                height={200}
                className="object-contain"
              />
            </div>
          </div>

          {/* Journal Description */}
          <div className="flex w-full max-w-[800px] flex-1 flex-col gap-4 px-5 py-1">
            <div
              className={`${open ? "" : "line-clamp-5"} font-inter text-base text-black`}
            >
              <span className="font-inter text-base font-bold">
                Journal of Institutional Research, Big Data Analytics and
                Innovation (JIRBDAI)
              </span>{" "}
              publishes high-quality research that explores the intersection of
              data-driven innovation, institutional development, and analytics.
              The journal covers a broad range of topics, including big data
              techniques, AI-powered decision-making, institutional performance
              analysis, data governance, and strategic innovation. Articles may
              focus on theoretical models, technical frameworks, case studies,
              or empirical findings that inform the application of analytics and
              innovation in institutional contexts. Researchers and
              professionals in data science, organizational studies, information
              systems, public policy, and innovation management will find
              valuable insights into how data and technology are shaping
              institutional practices and performance.
            </div>
            <div>
              <button
                onClick={() => setOpen(!open)}
                className="btn-inter-medium-14 bg-white  text-black "
              >
                {open ? "Show less" : "Read more"} &gt;
              </button>
            </div>
          </div>

          {/* Indexing Buttons */}
          <div className="w-full items-center px-2 lg:w-fit">
            <div className="flex flex-col gap-3 p-0">
              <div className="rounded bg-brand px-10 py-2 text-center font-semibold text-white">
                Indexing Outlets
              </div>

              {[
                { icon: "google-scholar", label: "Google Scholar" },
                { icon: "openaire", label: "OpenAire" },
                { icon: "research-gate", label: "ResearchGate" },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex justify-center gap-3 rounded bg-gray-400  p-3 text-white shadow"
                >
                  <Image
                    src={`/assets/images/${icon}.png`}
                    alt={label}
                    width={24}
                    height={24}
                    className="size-6 object-contain"
                  />
                  <div className="text-sm font-semibold">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournalHighlight;
