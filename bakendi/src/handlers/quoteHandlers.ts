import { Express, Request, Response } from "express"
import { getQuoteByToday } from "../service/quoteService";
import { logger } from "../lib/logger";

export const quoteTodayHandler = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  let quote;
  try {
    quote = await getQuoteByToday();
  } 
  catch(e) {
    logger.error(e);
    res.status(500).json({
      message: "An internal error occurred."
    })
  }
  
  return res.json(quote);
}