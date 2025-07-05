import React from "react";
import ResearchPaperCard from "@/components/ResearchPaperCard";
import Header from "@/components/Header";
import Offset from "@/components/header/Offset";
import SidebarSection from "@/components/SidebarSection";
import Footer from "@/components/Footer";
import SubTopBar from "@/components/SubTopBar";

const page = () => {
  return (
    <div className="default-layout">
      <header>
        <Header />
      </header>
      <Offset height={160} color={"brand-white"} />
      <section className="container flex h-auto flex-row flex-wrap justify-between gap-10">
        <SidebarSection title={"Filter"}>
          <div className="flex w-full flex-col">
            <SubTopBar titleHeader={"Researchers"} />
            <SubTopBar titleHeader={"Content Types"} />
            <div className="text-black"> wake up </div>
          </div>
        </SidebarSection>

        <div className="flex flex-1 flex-col">
          <div className={"text-black"}>
            <ResearchPaperCard
              title="Using AI to Predict Student Outcomes"
              authors={[
                "John Doe",
                "Jane Smith",
                "Jane Smith",
                "Jane Smith",
                "Jane Smith",
                "Jane Smith",
              ]}
              date="June 2025"
              articleNo="Article 12"
              pages="pp. 101–110"
              doi="10.1234/abcd"
              authorIcon="/assets/images/no-user-pics.svg"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
