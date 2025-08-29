import TopBar from "@/components/TopBar";
import ResearchArticleCard from "@/components/ResearchArticleCard";
import ViewAllBar from "@/components/ViewAllBar";
import { createOjsClient } from "@/lib/ojs/index";
import { doiObject, formattedDate } from "@/lib/formattedDate";

const LatestIssueSection = async () => {
  const { items } = await createOjsClient().submissions.list();
  const issues = items || [];
  return (
    <section className={"new-section py-10"}>
      <TopBar titleHeader={"Latest Issue"} />
      <ul className="paper-issues">
        {issues.map((issue: any) =>
          issue.publications?.map((pub: any) => {
            const authors =
              pub?.authorsString
                ?.replace("()", "")
                ?.split(",")
                .map((name: string) => name.trim()) || [];

            return (
              <ResearchArticleCard
                key={pub.id}
                link={pub.id}
                title={pub.fullTitle?.en || "Untitled"}
                authors={authors}
                date={formattedDate(pub.datePublished)}
                articleNo={`Article ${pub.id}`}
                pages={pub.pages}
                doi={doiObject(pub.doiNumber)}
                authorIcon="/assets/images/no-user-pics.svg"
              />
            );
          }),
        )}
      </ul>
      <ViewAllBar
        justify={"justify-end"}
        inputText="View all"
        href={"/browse"}
      />
    </section>
  );
};

export default LatestIssueSection;
