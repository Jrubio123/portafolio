const Login = require('../models/Login');
const Person = require('../models/Person');
const Role = require('../models/Role');
const bcrypt = require('bcryptjs');

// Obtener todos los logins
const getAllLogins = async (req, res) => {
    try {
        const logins = await Login.findAll({
            include: [
                { model: Person, attributes: ['FirstName', 'LastName', 'Email'] },
                { model: Role, attributes: ['RoleName'] },
            ],
        });
        res.json(logins);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los logins' });
    }
};

// Crear un nuevo login
const createLogin = async (req, res) => {
    try {
        const { Username, Password, PersonID, RoleID } = req.body;

        // Verificar que PersonID y RoleID existan
        const person = await Person.findByPk(PersonID);
        const role = await Role.findByPk(RoleID);

        if (!person) return res.status(404).json({ error: 'Persona no encontrada' });
        if (!role) return res.status(404).json({ error: 'Rol no encontrado' });

        // Hash de la contraseña
        const hashedPassword = await bcrypt.hash(Password, 10);

        const newLogin = await Login.create({
            Username,
            PasswordHash: hashedPassword,
            PersonID,
            RoleID,
        });

        res.status(201).json(newLogin);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el login' });
    }
};

// Actualizar un login
const updateLogin = async (req, res) => {
    try {
        const { id } = req.params;
        const { Username, Password, RoleID, IsActive } = req.body;

        const login = await Login.findByPk(id);
        if (!login) return res.status(404).json({ error: 'Login no encontrado' });

        if (RoleID) {
            const role = await Role.findByPk(RoleID);
            if (!role) return res.status(404).json({ error: 'Rol no encontrado' });
        }

        // Actualizar contraseña si se proporciona
        let hashedPassword = login.PasswordHash;
        if (Password) {
            hashedPassword = await bcrypt.hash(Password, 10);
        }

        await login.update({
            Username: Username || login.Username,
            PasswordHash: hashedPassword,
            RoleID: RoleID || login.RoleID,
            IsActive: IsActive !== undefined ? IsActive : login.IsActive,
        });

        res.json(login);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el login' });
    }
};

// Eliminar un login
const deleteLogin = async (req, res) => {
    try {
        const { id } = req.params;

        const login = await Login.findByPk(id);
        if (!login) return res.status(404).json({ error: 'Login no encontrado' });

        await login.destroy();
        res.json({ message: 'Login eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el login' });
    }
};

// Inicio de sesión
const login = async (req, res) => {
    try {
        const { Username, Password } = req.body;

        const user = await Login.findOne({
            where: { Username },
            include: [{ model: Person, attributes: ['FirstName', 'LastName', 'Email'] }],
        });

        if (!user) return res.status(401).json({ error: 'Credenciales inválidas' });

        const isPasswordValid = await bcrypt.compare(Password, user.PasswordHash);
        if (!isPasswordValid) return res.status(401).json({ error: 'Credenciales inválidas' });

        // Actualizar último inicio de sesión
        user.LastLogin = new Date();
        await user.save();

        res.json({ message: 'Inicio de sesión exitoso', user });
    } catch (error) {
        res.status(500).json({ error: 'Error en el inicio de sesión' });
    }
};

module.exports = {
    getAllLogins,
    createLogin,
    updateLogin,
    deleteLogin,
    login,
};
