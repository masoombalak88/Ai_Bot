import { TOKEN } from "../../config";

export function TgApi(methodName: string, params: Record<string, any> | null = null): string {
  const query = params ? "?" + new URLSearchParams(params).toString() : "";
  return `https://api.telegram.org/bot${TOKEN}/${methodName}${query}`;
}

