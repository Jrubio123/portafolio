const Person = require('../models/Person');

const getAllPersons = async (req, res) => {
    try {
        const persons = await Person.findAll();
        res.json(persons);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las personas' });
    }
};

const createPerson = async (req, res) => {
    try {
        const { FirstName, LastName, Email, DateOfBirth } = req.body;
        const person = await Person.create({ FirstName, LastName, Email, DateOfBirth });
        res.status(201).json(person);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la persona' });
    }
};

module.exports = { getAllPersons, createPerson };
