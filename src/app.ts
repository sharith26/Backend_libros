import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import v1Routes from "./api/v1/index";
// import { errorMiddleware } from "./middlewares/error.middleware";


export const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());

app.use('/api/v1', v1Routes);

// app.use(errorMiddleware);

