import express from 'express';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

import v1Routes from "./api/v1/index";
import { errorMiddleware } from "./middlewares/error.middleware";
import { openApiSpec } from './config/openapi';

export const app = express();

app.use(cors({
  origin: ['http://localhost:4200'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(morgan('dev'));
app.use(compression());

const specs = swaggerJsdoc(openApiSpec);

app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/api/v1', v1Routes);

app.use(errorMiddleware);