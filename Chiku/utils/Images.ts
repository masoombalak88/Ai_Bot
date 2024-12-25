import { USER_AGENT } from "../../config";


export async function searchImages(query: string): Promise<string[]> {
  const url = `https://www.bing.com/images/search?q=${encodeURIComponent(query)}`;

  const response = await fetch(url, {
    headers: {
      "User-Agent": USER_AGENT,
      Accept: "text/html",
    },
  });

  const html = await response.text();
  const regex = /<img[^>]+src=["']([^"']+)["']/g;
  const matches = [...html.matchAll(regex)];

  return matches.map((match) => match[1]);
}
