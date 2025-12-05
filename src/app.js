import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import expenseRoutes from "./routes/expenseRoutes.js";
import expenseCategoryRoutes from "./routes/expenseCategoryRoutes.js";
import financialGoalRoutes from "./routes/financialGoalRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // frontend
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

app.use(express.json());

// rotas
app.use("/api/auth", authRoutes);
app.use("/api/expense", expenseRoutes);
app.use("/api/expense-category", expenseCategoryRoutes);
app.use("/api/financial-goal", financialGoalRoutes);
app.use("/api/profile", profileRoutes);

app.get("/health", (req, res) => res.json({ status: "ok" }));

// error handler
app.use(errorHandler);

export default app;
