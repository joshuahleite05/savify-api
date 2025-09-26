import express from 'express';
import authRoutes from './routes/authRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();
app.use(express.json());

// rotas
app.use('/api/auth', authRoutes);

// health
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// error handler (sempre por último)
app.use(errorHandler);

export default app;
