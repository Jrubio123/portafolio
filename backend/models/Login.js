// models/Login.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Person = require('./Person');
const Role = require('./Role');

const Login = sequelize.define('Login', {
    LoginID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Username: { type: DataTypes.STRING, unique: true, allowNull: false },
    PasswordHash: { type: DataTypes.STRING, allowNull: false },
    IsActive: { type: DataTypes.BOOLEAN, defaultValue: true },
    LastLogin: { type: DataTypes.DATE, allowNull: true },
    CreatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW, allowNull: false },
}, {
    tableName: 'Person', // Especificar explícitamente el nombre de la tabla
    timestamps: false,  // Desactiva createdAt y updatedAt automáticos
});
// Relaciones
Login.belongsTo(Person, { foreignKey: 'PersonID' });
Login.belongsTo(Role, { foreignKey: 'RoleID' });

module.exports = Login;
