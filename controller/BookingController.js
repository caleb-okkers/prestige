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