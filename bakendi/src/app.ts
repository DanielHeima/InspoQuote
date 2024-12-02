import express from "express";
import { ILogger, logger } from "./lib/logger";
import { router } from "./routes/api";
import { cors } from "./lib/cors";
import { apiAuthMiddleware } from "./lib/auth";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(apiAuthMiddleware);
app.use(cors);
app.use(router);

app.listen(port, () => {
  logger.info(`Server is running at port ${port}`);
});


