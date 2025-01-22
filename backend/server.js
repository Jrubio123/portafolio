const app = require('./app');
const sequelize = require('./config/database');

const port = process.env.PORT || 3000;


sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Servidor escuchando en http://localhost:${port}`);
    });
}).catch(err => {
    console.error('Error al sincronizar la base de datos:', err);
});

