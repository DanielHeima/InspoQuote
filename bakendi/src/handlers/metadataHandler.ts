import { Request, Response } from "express";

export const metadataHandler = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  return res.json([
    {
      href: '/quotes/today',
      methods: ['GET'],
    }
  ]);
}
