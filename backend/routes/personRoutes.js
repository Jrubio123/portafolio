const express = require('express');
const { getAllPersons, createPerson } = require('../controllers/personController');
const router = express.Router();

router.get('/', getAllPersons);
router.post('/', createPerson);

module.exports = router;
