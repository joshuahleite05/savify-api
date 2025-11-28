import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Investor = sequelize.define('Investor', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    birth_date: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    profile_id: {
        type: DataTypes.INTEGER,
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
    tableName: 'investor',
    timestamps: false
});

export default Investor;
