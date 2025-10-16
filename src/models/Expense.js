import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Expense = sequelize.define('Expense', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  investor_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  value: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false,
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  expense_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  created_by: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_by: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
}, {
  tableName: 'expense',
  timestamps: false,
});

export default Expense;
