/* {import axios from "axios";
import { XMLParser } from "fast-xml-parser";

const OAI_URL =
  "https://jirbdai.com.ng/index.php/jirbdai/oai?verb=ListRecords&metadataPrefix=oai_dc";

export async function fetchOaiRecords() {
  try {
    const res = await axios.get(OAI_URL, { responseType: "text" });

    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "",
    });
    const json = parser.parse(res.data);

    const records = json?.OAI_PMH?.ListRecords?.record || [];
    return records.map((rec: any) => {
      const md = rec.metadata["oai_dc:dc"];
      return {
        id: rec.header.identifier,
        title: md["dc:title"],
        authors: Array.isArray(md["dc:creator"])
          ? md["dc:creator"]
          : [md["dc:creator"]],
        keywords: Array.isArray(md["dc:subject"])
          ? md["dc:subject"]
          : [md["dc:subject"]],
        abstract: md["dc:description"],
        date: md["dc:date"],
        identifiers: Array.isArray(md["dc:identifier"])
          ? md["dc:identifier"]
          : [md["dc:identifier"]],
      };
    });
  } catch (err) {
    console.error("Failed to fetch OAI records:", err);
    return [];
  }
}} */
