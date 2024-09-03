import express from "express";
import bodyParser from "body-parser";
import { bookings } from '../model/index.js'

const bookingRouter = express.Router()
bookingRouter.use(bodyParser.json())

bookingRouter.get('/', (req, res) => {
    bookings.fetchBookings(req, res)
})

bookingRouter.get('/:id', (req, res) => {
    bookings.fetchBooking(req, res)
})

bookingRouter.post('/addbooking', (req, res) => {
    bookings.addBooking(req, res)
})

bookingRouter.patch('/update/:id', (req, res) => {
    bookings.updateBooking(req, res)
})

bookingRouter.delete('/cancel/:id', (req, res) => {
    bookings.cancelBooking(req, res)
})

export {
    bookingRouter
}

// import express from "express";
// import bodyParser from "body-parser";
// import { bookings, cars } from '../model/index.js'; // Assuming you have a cars model as well

// const bookingRouter = express.Router();
// bookingRouter.use(bodyParser.json());

// const calculateTotalPrice = (start_date, end_date, daily_price) => {
//     const daysRented = (new Date(end_date) - new Date(start_date)) / (1000 * 60 * 60 * 24);
//     return daysRented * daily_price;
// };


// bookingRouter.get('/', async (req, res) => {
//     try {
//         const allBookings = await bookings.fetchBookings();
//         res.status(200).json(allBookings);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });


// bookingRouter.get('/:id', async (req, res) => {
//     try {
//         const booking = await bookings.fetchBooking(req.params.id);
//         if (!booking) {
//             return res.status(404).json({ error: "Booking not found" });
//         }
//         res.status(200).json(booking);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });


// bookingRouter.post('/addbooking', async (req, res) => {
//     try {
//         const { user_id, car_id, start_date, end_date, pickup_location, dropoff_location } = req.body;

//         const car = await cars.fetchCar(car_id); 
        
//         if (!car) {
//             return res.status(404).json({ error: "Car not found" });
//         }

//         const totalPrice = calculateTotalPrice(start_date, end_date, car.daily_price);

//         const booking = {
//             user_id,
//             car_id,
//             start_date,
//             end_date,
//             total_price: totalPrice,
//             pickup_location,
//             dropoff_location,
//             booking_status: 'confirmed',
//             create_at: new Date(),
//             updated_at: new Date(),
//         };

//         await bookings.addBooking(booking); 

//         // Update car availability
//         await cars.updateCarAvailability(car_id, 0); 

//         res.status(201).json({ message: "Booking created successfully", booking });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });


// bookingRouter.patch('/update/:id', async (req, res) => {
//     try {
//         const booking_id = req.params.id;
//         const { start_date, end_date, pickup_location, dropoff_location } = req.body;

//         const booking = await bookings.fetchBooking(booking_id);
        
//         if (!booking) {
//             return res.status(404).json({ error: "Booking not found" });
//         }

        
//         const car = await cars.fetchCar(booking.car_id);

//         if (!car) {
//             return res.status(404).json({ error: "Car not found" });
//         }

        
//         let totalPrice = booking.total_price;
//         if (start_date && end_date) {
//             totalPrice = calculateTotalPrice(start_date, end_date, car.daily_price);
//         }

//         const updatedBooking = {
//             start_date: start_date || booking.start_date,
//             end_date: end_date || booking.end_date,
//             total_price: totalPrice,
//             pickup_location: pickup_location || booking.pickup_location,
//             dropoff_location: dropoff_location || booking.dropoff_location,
//             updated_at: new Date(),
//         };

//         await bookings.updateBooking(booking_id, updatedBooking);

//         res.status(200).json({ message: "Booking updated successfully", updatedBooking });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// bookingRouter.delete('/cancel/:id', async (req, res) => {
//     try {
//         const booking_id = req.params.id;
//         const booking = await bookings.fetchBooking(booking_id);
        
//         if (!booking) {
//             return res.status(404).json({ error: "Booking not found" });
//         }

//         await bookings.cancelBooking(booking_id);

//         await cars.updateCarAvailability(booking.car_id, 1);

//         res.status(200).json({ message: "Booking cancelled successfully" });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// export {
//     bookingRouter
// };