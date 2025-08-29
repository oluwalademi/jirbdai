import { ojsConfig } from "@/lib/ojs/config";

export async function IssuesData() {
  const res = await fetch("/api/ojs/issues", {
    headers: {
      Authorization: `Bearer ${ojsConfig.ojsToken}`,
    },
    cache: "no-store",
  });

  return await res.json();
}
