import React from "react";
import ResearchPaperCard from "@/components/ResearchPaperCard";
import Header from "@/components/Header";
import Offset from "@/components/header/Offset";
import SidebarSection from "@/components/SidebarSection";
import Footer from "@/components/Footer";
import SubTopBar from "@/components/SubTopBar";
import { createOjsClient } from "@/lib/ojs";
import { stripHtml } from "string-strip-html";
import { doiObject, formattedDate } from "@/lib/formattedDate";
import Sort from "@/components/Sort";
import PaginationControls from "@/components/PaginationControls";

interface PageProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const page = async ({ searchParams }: PageProps) => {
  const path = "/browse";
  const limit = ((await searchParams)?.count as string) || "";
  const currentPage = ((await searchParams)?.page as string) || "";
  const orderBy = ((await searchParams)?.orderBy as string) || "";
  const orderDirection = ((await searchParams)?.orderDirection as string) || "";

  const perPage = Number(limit) || 10;
  const pageNumber = Number(currentPage) || 1;
  const offset = (pageNumber - 1) * perPage;

  const { items, total } = await createOjsClient().submissions.list(
    perPage,
    offset,
    orderBy,
    orderDirection,
  );
  const totalResult = total;
  const arraySubmissions = items.map((submission: any) => ({
    submissionId: submission.id,
    publicationId: submission.publications?.[0]?.id,
  }));

  const fetchArticles = await Promise.all(
    arraySubmissions.map(
      ({
        submissionId,
        publicationId,
      }: {
        submissionId: number;
        publicationId: number;
      }) => createOjsClient().submissions.get(submissionId, publicationId),
    ),
  );

  return (
    <div className="default-layout !px-8">
      <header>
        <Header />
      </header>
      <Offset height={160} color={"brand-white"} />
      <section className="flex h-auto flex-row flex-wrap justify-between gap-10">
        {path !== "/browse" && (
          <SidebarSection title={"Filter"}>
            <div className="flex w-full flex-col text-black">
              {path}
              <SubTopBar titleHeader={"Researchers"} />
              <SubTopBar titleHeader={"Content Types"} />
              <div> wake up</div>
            </div>
          </SidebarSection>
        )}

        <div className="flex flex-1 flex-col">
          <div
            className={
              "mb-5 flex h-24 w-full flex-col border-y-4 border-black/40 font-semibold text-black"
            }
          >
            {/* This is higher */}
            <div
              className={
                "justify-center-space-between flex h-12 flex-row !justify-between bg-brand/20"
              }
            >
              <div className={"flex h-full flex-row  items-center"}>
                <div
                  className={
                    "flex h-full items-center bg-brand/20 px-2 font-roboto font-black text-curiousblue"
                  }
                >
                  RESULTS:
                </div>
                <span className={"pl-1"}>PAGE {pageNumber}</span>
              </div>
              <div className={"flex pr-2"}>
                showing list {offset + 1} - {totalResult} of results
              </div>
            </div>
            {/* This is a lower */}
            <div
              className={
                "flex h-fit  flex-row items-center !justify-between px-2 py-0.5"
              }
            >
              <div className={"flex flex-row"}>
                {pageNumber > 1 && (
                  <a href={`/browse?page=${pageNumber - 1}&count=${perPage}`}>
                    Prev
                  </a>
                )}
                {/* <span>Page {pageNumber}</span> */}
                {pageNumber * perPage < totalResult && (
                  <a href={`/browse?page=${pageNumber + 1}&count=${perPage}`}>
                    Next
                  </a>
                )}
              </div>
              <div className={"flex h-full  items-center"}>
                <PaginationControls />
                <div className={"mx-3 h-4/5 w-0.5 bg-black font-black"}></div>
                <div>
                  <Sort />
                </div>
              </div>
            </div>
          </div>
          <ul className={"flex flex-col gap-8 text-black"}>
            {fetchArticles.map((article: any, i: any) => {
              const cleanAbstract = stripHtml(
                article.abstract?.en || "",
              ).result;
              const authors =
                article?.authorsString
                  ?.replace(/\s*\([^)]*\)/g, "")
                  ?.split(",")
                  .map((name: string) => name.trim()) || [];

              return (
                <ResearchPaperCard
                  key={i}
                  id={article.id}
                  title={article.fullTitle?.en || "Untitled"}
                  authors={authors}
                  date={formattedDate(article.datePublished)}
                  articleNo={`Article ${article.id}`}
                  pages={article.pages}
                  description={cleanAbstract}
                  doi={doiObject(article.doiNumber)}
                  authorIcon="/assets/images/no-user-pics.svg"
                />
              );
            })}
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
