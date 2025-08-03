import React from "react";
import Image from "next/image";
import Offset from "@/components/header/Offset";

const scientific = () => {
  return (
    <div className={"flex w-full flex-col"}>
      <div className={"py-2"}>
        <div className={"h1"}>
          Why Is Scientific Journalism Important to Academics?
        </div>
        <div className={"p"}>
          By <span className={"font-bold"}>Sade Wumiola</span> | 22nd July, 2025
        </div>
      </div>

      <div className={"my-2 w-full border-2 border-black"}></div>

      <div>
        <div className={"news-container"}>
          <div className="flex-1 px-4 pt-4 text-black">
            <span className={"font-bold"}>Scientific journalism</span>
            <span>
              {" "}
              is a vital pillar in the academic ecosystem. For researchers and
              educators alike, it acts as a bridge between discovery and
              dialogue, ensuring that new ideas aren’t just created—but shared,
              challenged, and refined. Scientific publications are not just a
              requirement—they're the currency of credibility, collaboration,
              and career growth.
            </span>
            <br />
            <br />
            <span>
              So, why is scientific journalism so indispensable to academics?
              Here’s what makes it essential:
            </span>
          </div>
          <div className="left-container w-full flex-1">
            <div className="w-full">
              <Image
                src={"/assets/images/random-images/laboratory.svg"}
                alt={"Academic conducting research in a lab"}
                width={900}
                height={900}
                className={"h-auto w-full"}
              />
            </div>
          </div>
        </div>

        <div className={"news-container"}>
          <div className="flex-1 px-4 pt-4 text-black">
            <span className={"font-bold"}>1. Advancing Academic Discourse</span>
            <br />
            <span>
              Scientific journalism empowers academics to contribute to and
              shape ongoing scholarly conversations. Every published work
              becomes a building block for future research, fostering critical
              inquiry, refinement, and innovation across disciplines.
            </span>
          </div>
        </div>

        <div className={"news-container"}>
          <div className="flex-1 px-4 pt-4 text-black">
            <span className={"font-bold"}>
              2. Establishing Scholarly Identity
            </span>
            <br />
            <span>
              Academic publishing helps researchers carve out their intellectual
              niche. It allows them to define their expertise, demonstrate
              mastery of specific fields, and earn recognition from peers and
              institutions.
            </span>
          </div>
        </div>

        <div className={"news-container"}>
          <div className="left-container w-full flex-1">
            <div className="w-full">
              <Image
                src={"/assets/images/random-images/award-a-trophy.svg"}
                alt={
                  "Academic recognized with an award or publication achievement"
                }
                width={900}
                height={900}
                className={"h-auto w-full"}
              />
            </div>
          </div>
        </div>

        <div className={"news-container"}>
          <div className="flex-1 px-4 pt-4 text-black">
            <span className={"font-bold"}>
              3. Driving Teaching and Curriculum
            </span>
            <br />
            <span>
              Publications often influence what’s taught in lecture halls and
              how. Academics rely on peer-reviewed articles to support course
              content, update theories, and challenge outdated narratives,
              ensuring students receive the most relevant and research-informed
              education.
            </span>
          </div>
        </div>

        <div className={"news-container"}>
          <div className="flex-1 px-4 pt-4 text-black">
            <span className={"font-bold"}>
              4. Enhancing Global Collaboration
            </span>
            <br />
            <span>
              Journals serve as a global stage where ideas transcend borders.
              Academics can discover peers working on similar challenges,
              leading to international collaborations, joint publications, and
              knowledge-sharing that accelerates collective progress.
            </span>
          </div>
        </div>

        <div className={"news-container"}>
          <div className="flex-1 px-4 pt-4 text-black">
            <span className={"font-bold"}>
              5. Supporting Tenure and Promotion
            </span>
            <br />
            <span>
              In academia, the publish-or-perish culture is real. Scientific
              publishing is central to promotion criteria, tenure reviews, and
              grant applications. It proves sustained research activity and
              academic engagement.
            </span>
          </div>
        </div>

        <div className={"news-container"}>
          <div className="flex-1 px-4 pt-4 text-black">
            <span className={"font-bold"}>
              6. Inspiring Students and Emerging Researchers
            </span>
            <br />
            <span>
              Published work sets an example for students and aspiring scholars.
              It illustrates research rigor, writing excellence, and the
              importance of evidence-based thinking—often inspiring the next
              generation of academic thinkers.
            </span>
          </div>
        </div>

        <div className={"news-container"}>
          <div className="flex-1 px-4 pt-4 text-black">
            <span className={"font-bold"}>
              7. Shaping Societal Impact from the Ivory Tower
            </span>
            <br />
            <span>
              Scientific journalism isn’t just for academics. Many articles lead
              to practical applications that affect communities, industries, and
              policymaking. Publishing allows academics to push knowledge beyond
              the campus and into the real world.
            </span>
          </div>
          <div className="left-container w-full flex-1">
            <div className="w-full">
              <Image
                src={"/assets/images/random-images/home-library-with-globe.svg"}
                alt={"Impact of academic knowledge on global society"}
                width={900}
                height={900}
                className={"h-auto w-full"}
              />
            </div>
          </div>
        </div>

        <div className={"news-container"}>
          <div className="flex-1 px-4 pt-4 text-black">
            <span className={"font-bold"}>Final Thoughts</span>
            <br />
            <span>
              For academics, scientific journalism is more than a formal
              obligation— it’s a statement of purpose. Through publishing, they
              share hard-won insights, drive intellectual discourse, and help
              shape the world. Whether guiding students, influencing peers, or
              advancing policy, publishing is the powerful thread that weaves
              together all academic impact.
            </span>
          </div>
          <div className="left-container w-full flex-1">
            <div className="w-full">
              <Image
                src={"/assets/images/random-images/laboratory.svg"}
                alt={"Scientist reflecting in laboratory on published impact"}
                width={900}
                height={900}
                className={"h-auto w-full"}
              />
            </div>
          </div>
        </div>
      </div>

      <Offset height={120} color={"brand-white"} />

      <div className="relative">
        <div className="absolute inset-x-0 border-t-2 border-ash"></div>
      </div>

      <Offset height={20} color={"brand-white"} />
    </div>
  );
};

export default scientific;
