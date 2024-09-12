import express from "express";
import bodyParser from "body-parser";
import { reservations, suites } from '../model/index.js'; 

const reservationRouter = express.Router();
reservationRouter.use(bodyParser.json());

const calculateTotalPrice = (check_in_date, check_out_date, price_per_night) => {
    const daysRented = (new Date(check_out_date) - new Date(check_in_date)) / (1000 * 60 * 60 * 24);
    return daysRented * price_per_night;
};

// Fetch all reservations
reservationRouter.get('/', (req, res) => {
    reservations.fetchReservations(req, res);
});

// Fetch a reservation by ID
reservationRouter.get('/:id', (req, res) => {
    reservations.fetchReservation(req, res);
});

// Add a new reservation
reservationRouter.post('/add', (req, res) => {
    const { user_id, suite_id, check_in_date, check_out_date } = req.body;

    suites.fetchSuite(suite_id, (suite) => {
        if (suite) {
            const totalPrice = calculateTotalPrice(check_in_date, check_out_date, suite.price_per_night);

            const reservation = {
                user_id,
                suite_id,
                check_in_date,
                check_out_date,
                total_price: totalPrice,
                reservation_status: 'confirmed',
                created_at: new Date(),
                updated_at: new Date(),
            };

            reservations.addReservation(reservation, () => {
                suites.updateSuiteAvailability(suite_id, 0);
                res.status(201).json({ message: "Reservation created successfully", reservation });
            });
        } else {
            res.status(404).json({ error: "Suite not found" });
        }
    });
});

// Update a reservation
reservationRouter.patch('/update/:id', (req, res) => {
    const reservation_id = req.params.id;
    const { check_in_date, check_out_date } = req.body;

    reservations.fetchReservation(reservation_id, (reservation) => {
        if (reservation) {
            suites.fetchSuite(reservation.suite_id, (suite) => {
                if (suite) {
                    let totalPrice = reservation.total_price;
                    if (check_in_date && check_out_date) {
                        totalPrice = calculateTotalPrice(check_in_date, check_out_date, suite.price_per_night);
                    }

                    const updatedReservation = {
                        check_in_date: check_in_date || reservation.check_in_date,
                        check_out_date: check_out_date || reservation.check_out_date,
                        total_price: totalPrice,
                        updated_at: new Date(),
                    };

                    reservations.updateReservation(reservation_id, updatedReservation, () => {
                        res.status(200).json({ message: "Reservation updated successfully", updatedReservation });
                    });
                } else {
                    res.status(404).json({ error: "Suite not found" });
                }
            });
        } else {
            res.status(404).json({ error: "Reservation not found" });
        }
    });
});

// Cancel a reservation
reservationRouter.delete('/cancel/:id', (req, res) => {
    const reservation_id = req.params.id;

    reservations.fetchReservation(reservation_id, (reservation) => {
        if (reservation) {
            reservations.cancelReservation(reservation_id, () => {
                suites.updateSuiteAvailability(reservation.suite_id, 1);
                res.status(200).json({ message: "Reservation cancelled successfully" });
            });
        } else {
            res.status(404).json({ error: "Reservation not found" });
        }
    });
});

export { reservationRouter };

