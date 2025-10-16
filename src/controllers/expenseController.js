import Expense from '../models/Expense.js';

export const createExpense = async (req, res, next) => {
  try {
    const expense = await Expense.create(req.body);
    res.status(201).json(expense);
  } catch (error) {
    next(error);
  }
};

export const getAllExpenses = async (req, res, next) => {
  try {
    const expenses = await Expense.findAll();
    res.json(expenses);
  } catch (error) {
    next(error);
  }
};

export const getExpenseById = async (req, res, next) => {
  try {
    const expense = await Expense.findByPk(req.params.id);
    if (!expense) return res.status(404).json({ message: 'Expense not found' });
    res.json(expense);
  } catch (error) {
    next(error);
  }
};

export const updateExpense = async (req, res, next) => {
  try {
    const [updated] = await Expense.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) return res.status(404).json({ message: 'Expense not found' });
    const updatedExpense = await Expense.findByPk(req.params.id);
    res.json(updatedExpense);
  } catch (error) {
    next(error);
  }
};

export const deleteExpense = async (req, res, next) => {
  try {
    const deleted = await Expense.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) return res.status(404).json({ message: 'Expense not found' });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
