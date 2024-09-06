import express from "express";
import bodyParser from "body-parser";
import { reservations, suites } from '../model/index.js'; 

const reservationRouter = express.Router();
reservationRouter.use(bodyParser.json());

const calculateTotalPrice = (check_in_date, check_out_date, price_per_night) => {
    const daysRented = (new Date(check_out_date) - new Date(check_in_date)) / (1000 * 60 * 60 * 24);
    return daysRented * price_per_night;
};


reservationRouter.get('/', async (req, res) => {
    try {
        const allReservations = await reservations.fetchReservations();
        res.status(200).json(allReservations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


reservationRouter.get('/:id', async (req, res) => {
    try {
        const reservation = await reservations.fetchReservation(req.params.id);
        if (!reservation) {
            return res.status(404).json({ error: "Reservation not found" });
        }
        res.status(200).json(reservation);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


reservationRouter.post('/add-reservation', async (req, res) => {
    try {
        const { user_id, suite_id, check_in_date, check_out_date } = req.body;

        const suite = await suites.fetchSuite(suite_id); 
        
        if (!suite) {
            return res.status(404).json({ error: "suite not found" });
        }

        const totalPrice = calculateTotalPrice(check_in_date, check_out_date, suite.price_per_night);

        const reservation = {
            user_id,
            suite_id,
            check_in_date,
            check_out_date,
            total_price: totalPrice,
            reservation_status: 'confirmed',
            create_at: new Date(),
            updated_at: new Date(),
        };

        await reservations.addReservation(reservation); 

        // Update suite availability
        await suites.updateSuiteAvailability(suite_id, 0); 

        res.status(201).json({ message: "Reservation created successfully", reservation });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


reservationRouter.patch('/update/:id', async (req, res) => {
    try {
        const reservation_id = req.params.id;
        const { check_in_date, check_out_date} = req.body;

        const reservation = await reservations.fetchReservation(reservation_id);
        
        if (!reservation) {
            return res.status(404).json({ error: "Reservation not found" });
        }

        
        const suite = await suites.fetchSuite(reservation.suite_id);

        if (!suite) {
            return res.status(404).json({ error: "Suite not found" });
        }

        
        let totalPrice = reservation.total_price;
        if (check_in_date && check_out_date) {
            totalPrice = calculateTotalPrice(check_in_date, check_out_date, suite.price_per_night);
        }

        const updatedreservation = {
            check_in_date: check_in_date || reservation.check_in_date,
            check_out_date: check_out_date || reservation.check_out_date,
            total_price: totalPrice,
            updated_at: new Date(),
        };

        await reservations.updatereservation(reservation_id, updatedreservation);

        res.status(200).json({ message: "reservation updated successfully", updatedreservation });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

reservationRouter.delete('/cancel/:id', async (req, res) => {
    try {
        const reservation_id = req.params.id;
        const reservation = await reservations.fetchReservation(reservation_id);
        
        if (!reservation) {
            return res.status(404).json({ error: "Reservation not found" });
        }

        await reservations.cancelreservation(reservation_id);

        await suites.updateSuiteAvailability(reservation.suite_id, 1);

        res.status(200).json({ message: "Reservation cancelled successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export {
    reservationRouter
};