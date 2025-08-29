import { ojsConfig } from "@/lib/ojs/config";

const validate = (token?: string): boolean => {
  if (!token) return false;
  try {
    return token === ojsConfig.ojsToken;
  } catch {
    return false;
  }
};

export function authMiddleware(req: Request): { isValid: boolean } {
  const token = req.headers.get("authorization")?.split(" ")[1];

  return { isValid: validate(token) };
}
