import { connection as db } from '../config/index.js';

class Reservations {
    fetchReservations(req, res) {
        try {
            const strQry = `
                SELECT reservation_id, user_id, suite_id, img_url, check_in_date, check_out_date, total_price, status, created_at, updated_at 
                FROM reservations
            `;
            db.query(strQry, (err, results) => {
                if (err) throw new Error(err.message);
                res.json({
                    status: res.statusCode,
                    results
                });
            });
        } catch (e) {
            res.json({
                status: 500,
                err: e.message
            });
        }
    }

    fetchReservation(req, res) {
        try {
            const { id } = req.params;
            const strQry = `
                SELECT reservation_id, user_id, suite_id, img_url, check_in_date, check_out_date, total_price, status, created_at, updated_at 
                FROM reservations 
                WHERE reservation_id = ${id}
            `;
            db.query(strQry, (err, result) => {
                if (err) throw new Error(err.message);
                if (result.length === 0) {
                    return res.status(404).json({ status: 404, msg: 'Reservation not found' });
                }
                res.json({
                    status: res.statusCode,
                    result: result[0]
                });
            });
        } catch (e) {
            res.json({
                status: 500,
                err: e.message
            });
        }
    }

    addReservation(req, res) {
        try {
            const data = req.body;
            const strQry = `
                INSERT INTO reservations SET ? 
            `;
            db.query(strQry, [data], (err) => {
                if (err) throw new Error(err.message);
                res.json({
                    status: res.statusCode,
                    msg: 'Reservation successful.'
                });
            });
        } catch (e) {
            res.json({
                status: 500,
                err: e.message
            });
        }
    }

    updateReservation(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;
            const strQry = `
                UPDATE reservations 
                SET ? 
                WHERE reservation_id = ${id}
            `;
            db.query(strQry, [data], (err) => {
                if (err) throw new Error(err.message);
                res.json({
                    status: res.statusCode,
                    msg: 'Reservation updated successfully.'
                });
            });
        } catch (e) {
            res.json({
                status: 500,
                err: e.message
            });
        }
    }

    cancelReservation(req, res) {
        try {
            const { id } = req.params;
            const strQry = `
                DELETE FROM reservations 
                WHERE reservation_id = ${id}
            `;
            db.query(strQry, (err) => {
                if (err) throw new Error('Unable to cancel reservation');
                res.json({
                    status: res.statusCode,
                    msg: 'Reservation cancelled successfully.'
                });
            });
        } catch (e) {
            res.json({
                status: 500,
                err: e.message
            });
        }
    }
}

export {
    Reservations 
};


