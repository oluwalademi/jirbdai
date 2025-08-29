import { format, isValid } from "date-fns";

export function formattedDate(dateString?: string): string {
  if (!dateString) return "N/A"; // fallback if empty

  const date = new Date(dateString);
  if (!isValid(date)) return "N/A"; // fallback if invalid

  return format(date, "MMMM yyyy");
}

export function doiObject(doiNumber?: string): string {
  if (!doiNumber) return "N/A";

  return format(doiNumber);
}
