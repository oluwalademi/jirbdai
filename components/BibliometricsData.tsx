import { createOjsClient } from "@/lib/ojs";
import BibliometricsScroll from "./BibliometricsScroll";

export default async function BibliometricsData() {
  const ojs = createOjsClient();

  let pubYears = "2024 - 2025"; // fallback
  let pubCount = "85";
  let availDownload = "200";
  const dlCumulative = "670";
  const dl6Weeks = "40";
  const dlYear = "190";
  const avgCitations = "7";
  const avgDownloads = "53";

  try {
    // Issues
    const issuesRes = await ojs.issues.list();
    const issues = issuesRes.items ?? issuesRes; // normalize just in case
    console.log("issues", issues);

    // Submissions
    const { items: submissions, total } = await ojs.submissions.list();
    pubCount = `${submissions.length}`;

    const availableForDownload = submissions.filter((s: any) =>
      s.publications?.some((p: any) => p.galleys && p.galleys.length > 0),
    ).length;
    availDownload = `${availableForDownload}`;

    /* dlCumulative = `${publications.reduce(
      (sum: number, pub: any) => sum + (pub.totalDownloads ?? 0),
      0,
    ) }` */ // Downloads (last 6 weeks)
    /* const sixWeeksAgo = new Date();
    sixWeeksAgo.setDate(sixWeeksAgo.getDate() - 42);
    const start = sixWeeksAgo.toISOString().split("T")[0];
    const end = new Date().toISOString().split("T")[0];

    const last6Weeks = await ojs.stats.publications(
      `dateStart=${start}&dateEnd=${end}`,
    );
    dl6Weeks = `${last6Weeks.reduce(
      (sum: number, pub: any) => sum + (pub.totalDownloads ?? 0),
      0,
    )}`;

    // Downloads (this year)
    const yearStart = `${new Date().getFullYear()}-01-01`;
    const yearEnd = `${new Date().getFullYear()}-12-31`;

    const thisYear = await ojs.stats.publications(
      `dateStart=${yearStart}&dateEnd=${yearEnd}`,
    );
    dlYear = `${thisYear.reduce(
      (sum: number, pub: any) => sum + (pub.totalDownloads ?? 0),
      0,
    )}`; */

    // Years
    const years = [
      ...new Set(issues.map((issue: any) => Number(issue.year))),
    ].sort((a, b) => a - b);

    if (years.length === 1) pubYears = `${years[0]}`;
    else if (years.length > 1)
      pubYears = `${years[0]} - ${years[years.length - 1]}`;
  } catch (err) {
    console.error("Error fetching bibliometrics:", err);
  }

  const metrics = [
    { label: "Publication Years", value: pubYears, bg: "bg-gray-500" },
    { label: "Publication Count", value: pubCount, bg: "bg-[#6e227d]" },
    {
      label: "Available for Download",
      value: availDownload,
      bg: "bg-[#0d6601]",
    },
    {
      label: "Downloads (cumulative)",
      value: dlCumulative,
      bg: "bg-[#8d3c3c]",
    },
    { label: "Downloads (6 weeks)", value: dl6Weeks, bg: "bg-[#8d673c]" },
    { label: "Downloads (year)", value: dlYear, bg: "bg-[#5d1c1c]" },
    {
      label: "Average Citations per Article",
      value: avgCitations,
      bg: "bg-[#483c8d]",
    },
    {
      label: "Average Downloads per Article",
      value: avgDownloads,
      bg: "bg-[#3c8d8d]",
    },
  ];

  return <BibliometricsScroll metrics={metrics} />;
}
