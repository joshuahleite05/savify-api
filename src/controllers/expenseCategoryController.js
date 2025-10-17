import ExpenseCategory from '../models/ExpenseCategory.js';

export const createCategory = async (req, res, next) => {
  try {
    const category = await ExpenseCategory.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};

export const getAllCategories = async (req, res, next) => {
  try {
    const categories = await ExpenseCategory.findAll();
    res.json(categories);
  } catch (error) {
    next(error);
  }
};

export const getCategoryById = async (req, res, next) => {
  try {
    const category = await ExpenseCategory.findByPk(req.params.id);
    if (!category) return res.status(404).json({ message: 'Categoria não encontrada' });
    res.json(category);
  } catch (error) {
    next(error);
  }
};

export const updateCategory = async (req, res, next) => {
  try {
    const [updated] = await ExpenseCategory.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) return res.status(404).json({ message: 'Categoria não encontrada' });
    const updatedCategory = await ExpenseCategory.findByPk(req.params.id);
    res.json(updatedCategory);
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (req, res, next) => {
  try {
    const deleted = await ExpenseCategory.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) return res.status(404).json({ message: 'Categoria não encontrada' });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
