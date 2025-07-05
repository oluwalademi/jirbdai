import React from "react";
import TopBar from "@/components/TopBar";
import ResearchArticleCard from "@/components/ResearchArticleCard";
import ViewAllBar from "@/components/ViewAllBar";

const LatestIssueSection = () => {
  return (
    <section className={"new-section py-10"}>
      <TopBar titleHeader={"Latest Issue"} />
      <div className="paper-issues">
        <ResearchArticleCard
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
        />{" "}
        <ResearchArticleCard
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
        />{" "}
        <ResearchArticleCard
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
        />{" "}
        <ResearchArticleCard
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
        />{" "}
        <ResearchArticleCard
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
        />{" "}
        <ResearchArticleCard
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
        />{" "}
        <ResearchArticleCard
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
      <ViewAllBar justify={"justify-end"} inputText="View all" />
    </section>
  );
};

export default LatestIssueSection;
