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

/* =========================
   SECURITY
========================= */
app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan('dev'));

/* =========================
   CORS (LOCAL + RENDER)
========================= */
const allowedOrigins = [
  'http://localhost:4200',
  'https://backend-libros.onrender.com'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(null, false);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.options('*', cors());

/* =========================
   MIDDLEWARES
========================= */
app.use(compression());
app.use(express.json());

/* =========================
   SWAGGER
========================= */
const specs = swaggerJsdoc(openApiSpec);

app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(specs));

/* =========================
   ROUTES
========================= */
app.use('/api/v1', v1Routes);

/* =========================
   ERROR HANDLER
========================= */
app.use(errorMiddleware);