// models/Person.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Person = sequelize.define('Person', {
    PersonID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    FirstName: { type: DataTypes.STRING, allowNull: false },
    LastName: { type: DataTypes.STRING, allowNull: false },
    Email: { type: DataTypes.STRING, unique: true, allowNull: false },
    DateOfBirth: { type: DataTypes.DATE, allowNull: true },
    CreatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW, allowNull: false },
}, {
    tableName: 'Person', // Especificar explícitamente el nombre de la tabla
    timestamps: false,  // Desactiva createdAt y updatedAt automáticos
});

module.exports = Person;
