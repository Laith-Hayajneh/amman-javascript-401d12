const { People } = require('../models');


async function createPerson(req, res) {
    let personInfo = req.body;
    let person = await People.create(personInfo);
    res.status(201).json(person);
}

async function getPerson(req, res) {
    const id = parseInt(req.params.id);
    let person = await People.findOne({ where: { id: id } });
    res.status(200).json(person);
}

async function getAllPeople(req, res) {
    let all = await People.findAll();
    res.status(200).json(all);
}

async function updatePerson(req, res) {
    const id = parseInt(req.params.id);
    let personInfo = req.body;

    let person = await People.findOne({ where: { id } });
    let updatePerson = await person.update(personInfo);
    res.status(200).json(updatePerson);
}

async function deletePerson(req, res) {
    const id = parseInt(req.params.id);
    let deletePerson = await People.destroy({ where: { id } });
    res.status(204).json(deletePerson);
}

module.exports = {
    createPerson,
    getPerson,
    getAllPeople,
    updatePerson,
    deletePerson,
}
