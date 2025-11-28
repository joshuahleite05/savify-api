import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Profile = sequelize.define('Profile', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  goals: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  created_by: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW
  },
  updated_by: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 1
  }
}, {
  tableName: 'profile',
  timestamps: false
});

export default Profile;
