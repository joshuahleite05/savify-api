import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const FinancialGoal = sequelize.define('FinancialGoal', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  investor_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  target_value: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false,
  },
  deadline: {
    type: DataTypes.DATEONLY,
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
  tableName: 'financial_goal',
  timestamps: false,
});

export default FinancialGoal;
