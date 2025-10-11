import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // frontend
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));

app.use(express.json());

// rotas
app.use('/api/auth', authRoutes);

// health
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// error handler
app.use(errorHandler);

export default app;
