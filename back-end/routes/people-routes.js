const peopleRouter = require('express').Router();
const People = require('../models').People;

// GET Request to get full list of people in database in the order they were created.
const getAllPeople = (req, res) => {
	People.findAll({
		order: [['createdAt']]
	})
	.then((people) => {
		res.send(people)
	})
	.catch((err) => console.log(err))
}

//GET Request to find person by ID.
const getPerson = (req, res) => {
	People.findById(req.params.id)
	.then((person) => {
		res.send(person)
	})
	.catch((err) => console.log(err))
}

//POST Request to create a person in database.
const postPerson = (req, res) => {
	People.create(req.body)
	.then((person) => {
		res.send(person)
	})
	.catch((err) => console.log(err))
}

//PUT Request to update person's favorite city.
const modifyCity = (req, res) => {
	People.findById(req.params.id)
	.then((profile) => {
		profile.update({favoriteCity: 'Brooklyn'})
	})
	.then((updatedProfile) => {
		res.send(updatedProfile)
	})
	.catch((err) => console.log(err))
}

//DELETE Request to remove person by ID from database.
const deletePerson = (req, res) => {
	People.destroy({ where: {id: req.params.id} })
	.catch((err) => console.log(err))
}

peopleRouter.route('/')
	.get(getAllPeople)
	.post(postPerson)

peopleRouter.route('/:id')
	.get(getPerson)
	.put(modifyCity)
	.delete(deletePerson)

module.exports = peopleRouter;