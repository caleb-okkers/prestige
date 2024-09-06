import express from "express";
import bodyParser from "body-parser";
import { suites } from '../model/index.js';

const suiteRouter = express.Router();
suiteRouter.use(bodyParser.json());

const validateSuite = (req, res, next) => {
    const { suite_number, suite_type, description, max_occupancy, price_per_night, img_url } = req.body;
    
    if (!suite_number || !suite_type || !description || !max_occupancy || !price_per_night || !img_url) {
        return res.status(400).json({ error: "Suite number, suite type, description, max occupancy, price per night and image url are required fields" });
    }


    if (isNaN(price_per_night) || price_per_night <= 0) {
        return res.status(400).json({ error: "Price per night must be a positive number" });
    }

    next();
};

suiteRouter.get('/', async (req, res) => {
    try {
        const allSuites = await suites.fetchSuites();
        res.status(200).json(allSuites);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

suiteRouter.get('/premium-suites', async (req, res) => {
    try {
        const premiumSuites = await suites.premiumSuites();
        res.status(200).json(premiumSuites);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

suiteRouter.get('/:id', async (req, res) => {
    try {
        const suite = await suites.fetchSuite(req.params.id);
        if (!suite) {
            return res.status(404).json({ error: "suite not found" });
        }
        res.status(200).json(suite);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

suiteRouter.post('/add-suite', validateSuite, async (req, res) => {
    try {
        const newSuite = req.body;
        const createdSuite = await suites.addSuite(newSuite);
        res.status(201).json({ message: "Suite added successfully", suite: createdSuite });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

suiteRouter.patch('/update/:id', validateSuite, async (req, res) => {
    try {
        const updatedSuite = req.body;
        const suite = await suites.updateSuite(req.params.id, updatedSuite);
        if (!suite) {
            return res.status(404).json({ error: "suite not found" });
        }
        res.status(200).json({ message: "Suite updated successfully", suite });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

suiteRouter.delete('/delete/:id', async (req, res) => {
    try {
        const suite = await suites.deleteSuite(req.params.id);
        if (!suite) {
            return res.status(404).json({ error: "Suite not found" });
        }
        res.status(200).json({ message: "Suite deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export { 
    suiteRouter 
};