const express = require('express');
const {
    getAllLogins,
    createLogin,
    updateLogin,
    deleteLogin,
    login,
} = require('../controllers/loginController');
const router = express.Router();

router.get('/', getAllLogins);
router.post('/', createLogin);
router.put('/:id', updateLogin);
router.delete('/:id', deleteLogin);
router.post('/login', login);

module.exports = router;
