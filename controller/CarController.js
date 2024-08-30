import express from "express";
import bodyParser from "body-parser";
import { cars } from '../model/index.js'

const carRouter = express.Router()
carRouter.use(bodyParser.json())

carRouter.get('/', (req, res) => {
    cars.fetchCars(req, res)
})

carRouter.get('/newadditions', (req , res) => {
    cars.latestCars(req, res)
})

carRouter.get('/:id', (req, res) => {
    cars.fetchCar(req, res)
})

carRouter.post('/addcar', (req, res) => {
    cars.addCar(req, res)
})

carRouter.patch('/update/:id', (req, res) => {
    cars.updateCar(req, res)
})

carRouter.delete('/delete/:id', (req, res) => {
    cars.deleteCar(req, res)
})

export {
    carRouter
}