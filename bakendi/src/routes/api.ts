import express, { NextFunction, Request, Response, Router } from 'express';
import { quoteTodayHandler } from '../handlers/quoteHandlers';
import { metadataHandler } from '../handlers/metadataHandler';

export const router: Router = express.Router();

router.get('/', metadataHandler);

router.get('/quotes/today', [quoteTodayHandler]);
