import { Quotes } from "../types"

export const getQuoteByToday = async () => {
  const quotes: Quotes | null = await getQuotesByPath('/today');
  return quotes;
}

const getQuotesByPath = async (path: string): Promise<Quotes | null> => {
  if (!path) {
    return null;
  }

  const baseUrl: string | undefined = process.env.QUOTE_API_BASE_URL;

  if (!baseUrl) {
    throw "Base url missing.";
  }

  const data = await fetch(baseUrl + path);
  return await data.json();
}