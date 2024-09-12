import express from "express";
import bodyParser from "body-parser";
import { suites } from '../model/index.js'

const suiteRouter = express.Router()
suiteRouter.use(bodyParser.json())

suiteRouter.get('/', (req, res) => {
    suites.fetchSuites(req, res)
})
                                                                         
suiteRouter.get('/:id', (req, res) => {
    suites.fetchSuite(req, res)
})

suiteRouter.get('/premium-suites', (req , res) => {
    suites.premiumSuites(req, res)
})

suiteRouter.post('/add', (req, res) => {
    suites.addSuite(req, res)
})

suiteRouter.patch('/update/:id', (req, res) => {
    suites.updateSuite(req, res)
})

suiteRouter.delete('/cancel/:id', (req, res) => {
    suites.deleteSuite(req, res)
})

export {
    suiteRouter
}