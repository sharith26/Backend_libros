import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';

import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

import v1Routes from "./api/v1/index";
import { errorMiddleware } from "./middlewares/error.middleware";
import { openApiSpec } from './config/openapi';

export const app = express();

app.use(
  helmet({
    contentSecurityPolicy: false
  })
);

app.use(morgan('dev'));
app.use(cors());
app.use(compression());
app.use(express.json());

const specs = swaggerJsdoc(openApiSpec);

app.use(
  '/api/v1/docs',
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

app.use('/api/v1', v1Routes);

app.use(errorMiddleware);