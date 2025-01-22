// models/Role.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Role = sequelize.define('Role', {
    RoleID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    RoleName: { type: DataTypes.STRING, unique: true, allowNull: false },
    Description: { type: DataTypes.STRING },
});

module.exports = Role;
