import { createOjsClient } from "@/lib/ojs";
import { stripHtml } from "string-strip-html";
import type { Metadata } from "next";
// import { router } from "next/client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: number }>;
}): Promise<Metadata> {
  const { id } = await params;
  const article = await createOjsClient().submissions.get(id, id);

  const cleanAbstract = stripHtml(article.abstract?.en || "").result;

  // build dynamic meta tags
  return {
    title: `${article.fullTitle.en} | ${article.copyrightHolder?.en}`,
    description: cleanAbstract,
    openGraph: {
      type: "article",
      url: article.urlPublished,
      title: article.fullTitle.en,
      description: cleanAbstract,
      siteName: article.copyrightHolder?.en,
      images: [article.coverImage?.en || "/default-cover.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.fullTitle.en,
      description: cleanAbstract,
      images: [article.coverImage?.en || "/default-cover.jpg"],
    },
    other: {
      // Google Scholar citation_* metadata
      citation_journal_title: article.copyrightHolder?.en,
      citation_title: article.fullTitle.en,
      citation_date: article.datePublished,
      citation_firstpage: article.pages?.split("-")[0],
      citation_lastpage: article.pages?.split("-")[1],
      citation_pdf_url: article.galleys[0]?.file?.revisions[0]?.url,
      citation_language: article.locale,

      // multiple authors
      ...Object.fromEntries(
        article.authors.map((a: any, i: number) => [
          `citation_author[${i}]`,
          a.fullName,
        ]),
      ),

      // Dublin Core
      "DC.Title": article.fullTitle.en,
      "DC.Description": cleanAbstract,
      "DC.Subject": article.keywords?.en?.join("; "),
      "DC.Publisher": article.copyrightHolder?.en,
      "DC.Date.issued": article.datePublished,
      "DC.Language": article.locale,
      "DC.Identifier": article.urlPublished,
      "DC.Rights": `© ${article.copyrightYear} ${article.copyrightHolder?.en}`,

      // multiple authors as DC.Creator
      ...Object.fromEntries(
        article.authors.map((a: any, i: number) => [
          `DC.Creator[${i}]`,
          a.fullName,
        ]),
      ),
    },
  };
}

export default async function Page({ params }: { params: { id: number } }) {
  const { id } = await params;
  const article = await createOjsClient().submissions.get(id, id);
  const cleanAbstract = stripHtml(article.abstract?.en || "").result;

  return (
    <main className="text-black">
      <h1>{article.fullTitle.en}</h1>
      <p>{cleanAbstract}</p>
      <a href={`${article.galleys[0].file.url}`}>download</a>
    </main>
  );
}
