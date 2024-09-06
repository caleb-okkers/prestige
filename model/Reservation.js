import { connection as db } from '../config/index.js'

class Reservations {
    fetchReservations(req, res) {
        try {
            const strQry = `
            select reservation_id, user_id, suite_id, img_url, check_in_date, check_out_date, total_price, status, created_at, updated_at
            from reservations
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
    
    fetchReservation(req, res) {
        try {
            const strQry = ` 
            select reservation_id, user_id, suite_id, img_url, check_in_date, check_out_date, total_price, status, created_at, updated_at
            from reservations
            where reservation_id = ${req.params.id}
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

    addReservation(req, res) {
        try {
            let data = req.body
            const strQry = `
            insert into reservations
            set ?
            `
            db.query(strQry, [data], (err) => {
                if(err) throw new Error(err.message) 
                    res.json({
                        status: res.statusCode,
                        msg: "Reservation successful."
                    })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }

    updateReservation(req, res) {
        try {
            let data = req.body
            const strQry = ` 
            update reservations
            set ?
            where reservation_id = ${req.params.id}
            `
            db.query(strQry, [data], (err) => {
                if (err) throw new Error(err.message)
                    res.json({
                        status: res.statusCode,
                        msg: 'Reservation updated successfully.'
                    })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }

    cancelReservation(req, res) {
        try {
            const strQry = `
            delete from reservations
            where reservation_id = ${req.params.id}
            `
            db.query(strQry, (err)  => {
                if(err) throw new Error('Unable to cancel reservation')
                    res.json({
                        status: res.statusCode,
                        msg: 'Reservation cancelled.'
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
    Reservations
}