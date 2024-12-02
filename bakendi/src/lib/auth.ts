import { NextFunction, Request, Response } from 'express';

export const apiAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = getApiKeyFromHeader(req);

  if (!apiKey) {
    return res.status(401).json({
      message: "Invalid API key."
    })
  }
  const APP_API_KEY = process.env.APP_API_KEY;
  if (apiKey !== APP_API_KEY) {
    return res.status(401).json({
      message: "Invalid API key."
    })
  }

  next();
}

const getApiKeyFromHeader = (req: Request): string | undefined => {
  const apiKeyHeader = req.headers['x-api-key'];
  let apiKey: string | undefined;
  
  if (typeof(apiKeyHeader) === "string") {
    apiKey = apiKeyHeader;
  }
  return apiKey;
}

