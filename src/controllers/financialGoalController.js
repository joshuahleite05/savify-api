import FinancialGoal from '../models/FinancialGoal.js';

export const createGoal = async (req, res, next) => {
  try {
    const goal = await FinancialGoal.create(req.body);
    res.status(201).json(goal);
  } catch (error) {
    next(error);
  }
};

export const getAllGoals = async (req, res, next) => {
  try {
    const goals = await FinancialGoal.findAll();
    res.json(goals);
  } catch (error) {
    next(error);
  }
};

export const getGoalById = async (req, res, next) => {
  try {
    const goal = await FinancialGoal.findByPk(req.params.id);
    if (!goal) return res.status(404).json({ message: 'Meta não encontrada' });
    res.json(goal);
  } catch (error) {
    next(error);
  }
};

export const updateGoal = async (req, res, next) => {
  try {
    const [updated] = await FinancialGoal.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) return res.status(404).json({ message: 'Meta não encontrada' });
    const updatedGoal = await FinancialGoal.findByPk(req.params.id);
    res.json(updatedGoal);
  } catch (error) {
    next(error);
  }
};

export const deleteGoal = async (req, res, next) => {
  try {
    const deleted = await FinancialGoal.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) return res.status(404).json({ message: 'Meta não encontrada' });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
