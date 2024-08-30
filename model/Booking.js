import { connection as db } from '../config/index.js'

class Bookings {
    fetchBookings(req, res) {
        try {
            const strQry = `
            select booking_id, user_id, car_id, start_date, end_date, total_price, pickup_location, dropoff_location, booking_status, create_at, updated_at
            from Bookings
            `
            db.query(strQry, (err, results) => {
                if(err) throw new Error(err.message)
                    res.json({
                        status: res.statusCode,
                        results
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.msg
            })
        }
    }
    
    fetchBooking(req, res) {
        try {
            const strQry = ` 
            select booking_id, user_id, car_id, start_date, end_date, total_price, pickup_location, dropoff_location, booking_status, create_at, updated_at
            from Bookings
            where booking_id = ${req.params.id}
            `
            db.query(strQry, (err, result) => {
                if(err) throw new Error(err.message)
                    res.json({
                        status: res.statusCode,
                        result: result[0]
                    })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }

    addBooking(req, res) {
        try {
            let data = req.body
            const strQry = `
            insert into Bookings
            set ?
            `
            db.query(strQry, [data], (err) => {
                if(err) throw new Error(err.message) 
                    res.json({
                        status: res.statusCode,
                        msg: "Booking successful ✅"
                    })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }

    updateBooking(req, res) {
        try {
            let data = req.body
            const strQry = ` 
            update Bookings
            set ?
            where booking_id = ${req.params.id}
            `
            db.query(strQry, [data], (err) => {
                if (err) throw new Error(err.message)
                    res.json({
                        status: res.statusCode,
                        msg: 'Booking updated successfully 🔃.'
                    })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }

    cancelBooking(req, res) {
        try {
            const strQry = `
            delete from Bookings
            where booking_id = ${req.params.id}
            `
            db.query(strQry, (err)  => {
                if(err) throw new Error('Unable to cancel booking')
                    res.json({
                        status: res.statusCode,
                        msg: 'Booking cancelled 🗑️'
                    })
            })
        } catch (e) {
            res.json({
                status: 404, 
                err: e.message
            })
        }
    }
}

export {
    Bookings
}