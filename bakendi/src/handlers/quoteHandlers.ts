import { Express, Request, Response } from "express"
import { getFiftyRandomQuotes, getQuoteByToday, getImage, getRandomQuote, getRandomImage } from "../service/quoteService";
import { logger } from "../lib/logger";
import { ImageServiceHandler, Quotes, QuoteServiceHandler } from "../types";

type RouteHandlerReturnType = Promise<Response<any, Record<string, any>>>;

export const quoteTodayHandler = async (req: Request, res: Response): RouteHandlerReturnType => {
  return await handleQuoteRequest(req, res, getQuoteByToday);
}

export const quoteRandomFiftyHandler = async (req: Request, res: Response): RouteHandlerReturnType => {
  return await handleQuoteRequest(req, res, getFiftyRandomQuotes);
}

export const quoteRandomHandler = async (req: Request, res: Response): RouteHandlerReturnType => {
  return await handleQuoteRequest(req, res, getRandomQuote);
}

export const quoteImageHandler = async (req: Request, res: Response): RouteHandlerReturnType => {
  return await handleImageRequest(req, res, getRandomImage);
}


const handleQuoteRequest = async (req: Request, res: Response, serviceCall: QuoteServiceHandler): RouteHandlerReturnType => {
  let quotes;
  try {
    quotes = await serviceCall();
  } 
  catch(e) {
    logger.error(e);
    return res.status(500).json({
      message: "An internal error occurred."
    })
  }
  
  return res.json(quotes);
}

const handleImageRequest = async (req: Request, res: Response, serviceCall: ImageServiceHandler): RouteHandlerReturnType => {
  let image;
  try {
    image = await serviceCall();
  } 
  catch(e) {
    logger.error(e);
    return res.status(500).json({
      message: "An internal error occurred."
    })
  }

  if (!image) {
    return res.status(404);
  }
  
  res.writeHead(200, { 'content-type': 'image/jpeg'})
  return res.end(image, 'binary');
}

