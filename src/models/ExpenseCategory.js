import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ExpenseCategory = sequelize.define('ExpenseCategory', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  color: {
    type: DataTypes.STRING(20),
    allowNull: true,
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
  tableName: 'expense_category',
  timestamps: false,
});

export default ExpenseCategory;
