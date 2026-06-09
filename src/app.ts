import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';

import v1Routes from "./api/v1/index";
import { errorMiddleware } from "./middlewares/error.middleware";

export const app = express();

/* =========================
   SECURITY + LOGS
========================= */
app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan('dev'));

/* =========================
   CORS (CORRECTO)
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

    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

/* =========================
   MIDDLEWARES
========================= */
app.use(compression());
app.use(express.json());

/* =========================
   ROUTES
========================= */
app.use('/api/v1', v1Routes);

/* =========================
   ERROR HANDLER
========================= */
app.use(errorMiddleware);