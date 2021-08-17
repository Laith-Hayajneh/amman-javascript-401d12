'use strict';

const express = require('express');
const router = express.Router();

const {
    createPerson,
    getPerson,
    getAllPeople,
    updatePerson,
    deletePerson,
} = require('../business/routes-implementations');

router.get('/people', getAllPeople);
router.post('/people', createPerson);
router.get('/people/:id', getPerson);
router.put('/people/:id', updatePerson);
router.delete('/people/:id', deletePerson);

module.exports = router;