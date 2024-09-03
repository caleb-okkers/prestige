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

// import express from "express";
// import bodyParser from "body-parser";
// import { cars } from '../model/index.js';

// const carRouter = express.Router();
// carRouter.use(bodyParser.json());

// const validateCar = (req, res, next) => {
//     const { make, model, year, daily_price } = req.body;
    
//     if (!make || !model || !year || !daily_price) {
//         return res.status(400).json({ error: "Make, model, year, and daily price are required fields" });
//     }

//     if (isNaN(year) || year < 1886 || year > new Date().getFullYear()) { 
//         return res.status(400).json({ error: "Invalid year provided" });
//     }

//     if (isNaN(daily_price) || daily_price <= 0) {
//         return res.status(400).json({ error: "Daily price must be a positive number" });
//     }

//     next();
// };

// carRouter.get('/', async (req, res) => {
//     try {
//         const allCars = await cars.fetchCars();
//         res.status(200).json(allCars);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// carRouter.get('/newadditions', async (req, res) => {
//     try {
//         const latestCars = await cars.latestCars();
//         res.status(200).json(latestCars);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// carRouter.get('/:id', async (req, res) => {
//     try {
//         const car = await cars.fetchCar(req.params.id);
//         if (!car) {
//             return res.status(404).json({ error: "Car not found" });
//         }
//         res.status(200).json(car);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// carRouter.post('/addcar', validateCar, async (req, res) => {
//     try {
//         const newCar = req.body;
//         const createdCar = await cars.addCar(newCar);
//         res.status(201).json({ message: "Car added successfully", car: createdCar });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// carRouter.patch('/update/:id', validateCar, async (req, res) => {
//     try {
//         const updatedCar = req.body;
//         const car = await cars.updateCar(req.params.id, updatedCar);
//         if (!car) {
//             return res.status(404).json({ error: "Car not found" });
//         }
//         res.status(200).json({ message: "Car updated successfully", car });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// carRouter.delete('/delete/:id', async (req, res) => {
//     try {
//         const car = await cars.deleteCar(req.params.id);
//         if (!car) {
//             return res.status(404).json({ error: "Car not found" });
//         }
//         res.status(200).json({ message: "Car deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// export { carRouter };