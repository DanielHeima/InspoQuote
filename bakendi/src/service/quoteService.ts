import { ImageServiceHandler, Quotes, QuoteServiceHandler } from "../types"

type mode = 'today'|'random'|'quotes'|'image'|'authors'|'author';

export const getQuoteByToday: QuoteServiceHandler = async () => {
  const quotes: Quotes | null = await getQuotesByMode('today');
  return quotes;
}

export const getRandomQuote: QuoteServiceHandler = async () => {
  const quotes: Quotes | null = await getQuotesByMode('random');
  return quotes;
}

export const getFiftyRandomQuotes: QuoteServiceHandler = async () => {
  const quotes: Quotes | null = await getQuotesByMode('quotes');
  return quotes;
}

export const getRandomImage: ImageServiceHandler = async () => {
  return getImage();
}

// TODO authors/YOUR KEY
//      quotes/author/sun-tzu/YOUR KEY
//      CACHING

const getQuotesByMode = async (mode: mode): Promise<Quotes | null> => {
  const baseUrl: string | undefined = process.env.QUOTE_API_BASE_URL;

  if (!baseUrl) {
    throw "Base url missing.";
  }

  const data = await fetch(baseUrl + mode);
  return await data.json();
}

export const getImage = async (): Promise<Uint8Array | null> => {
  const baseUrl: string | undefined = process.env.QUOTE_API_BASE_URL;
  const mode: mode = 'image';

  if (!baseUrl) {
    throw "Base url missing.";
  }

  const data = await fetch(baseUrl + mode);

  if (!data) {
    return null;
  }

  return new Uint8Array(await data.arrayBuffer());
}