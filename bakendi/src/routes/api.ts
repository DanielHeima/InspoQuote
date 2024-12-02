import express, { NextFunction, Request, Response, Router } from 'express';
import { quoteImageHandler, quoteRandomFiftyHandler, quoteRandomHandler, quoteTodayHandler } from '../handlers/quoteHandlers';
import { metadataHandler } from '../handlers/metadataHandler';

export const router: Router = express.Router();

router.get('/', metadataHandler);

router.get('/quotes/today', [quoteTodayHandler]);
router.get('/quotes/fiftyrandom', [quoteRandomFiftyHandler]);
router.get('/quotes/random', [quoteRandomHandler]);
router.get('/quotes/image', [quoteImageHandler]);
