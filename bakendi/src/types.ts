import { Response } from "express";

export type Quote = {
  q: string;
  a: string;
  h: string;
}

export type Quotes = Quote[];

export type QuoteServiceHandler = () => Promise<Quotes | null>

export type ImageServiceHandler = () => Promise<Uint8Array | null>

export type RouteHandlerReturnType = Promise<Response<any, Record<string, any>>>;