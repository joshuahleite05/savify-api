import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  usertype: { type: DataTypes.INTEGER, allowNull: false },
  status: { type: DataTypes.INTEGER, defaultValue: 1 },
  created_by: { type: DataTypes.INTEGER, defaultValue: 0 },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_by: { type: DataTypes.INTEGER, defaultValue: 0 },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: 'users',
  timestamps: false
});

export default User;
