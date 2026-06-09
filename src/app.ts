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

/* =========================
   CORS (PRODUCCIÓN + LOCAL)
========================= */
app.use(cors({
  origin: [
    'http://localhost:4200'
    // cuando tengas frontend en producción agrega aquí:
    // 'https://tu-frontend.com'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

/* =========================
   🔥 PREFLIGHT FIX (RENDER SAFE)
========================= */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

/* =========================
   MIDDLEWARES
========================= */
app.use(express.json());
app.use(compression());
app.use(morgan('dev'));

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