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

/* ✅ 1. CORS PRIMERO DE TODO */
app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));

/* ✅ 2. PRE-FLIGHT EXPLÍCITO (CRÍTICO EN RENDER) */
app.options('/*', cors());

/* ✅ 3. MIDDLEWARES */
app.use(express.json());
app.use(compression());
app.use(morgan('dev'));

/* Swagger */
const specs = swaggerJsdoc(openApiSpec);

app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(specs));

/* Routes */
app.use('/api/v1', v1Routes);

/* Error handler al final */
app.use(errorMiddleware);