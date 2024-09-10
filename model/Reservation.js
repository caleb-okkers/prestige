// import { connection as db } from '../config/index.js'

// class Reservations {
//     fetchReservations(req, res) {
//         try {
//             const strQry = `
//             select reservation_id, user_id, suite_id, img_url, check_in_date, check_out_date, total_price, status, created_at, updated_at
//             from reservations
//             `
//             db.query(strQry, (err, results) => {
//                 if(err) throw new Error(err.message)
//                     res.json({
//                         status: res.statusCode,
//                         results
//                 })
//             })
//         } catch (e) {
//             res.json({
//                 status: 404,
//                 err: e.msg
//             })
//         }
//     }
    
//     fetchReservation(req, res) {
//         try {
//             const strQry = ` 
//             select reservation_id, user_id, suite_id, img_url, check_in_date, check_out_date, total_price, status, created_at, updated_at
//             from reservations
//             where reservation_id = ${req.params.id}
//             `
//             db.query(strQry, (err, result) => {
//                 if(err) throw new Error(err.message)
//                     res.json({
//                         status: res.statusCode,
//                         result: result[0]
//                     })
//             })
//         } catch (e) {
//             res.json({
//                 status: 404,
//                 msg: e.message
//             })
//         }
//     }

//     addReservation(req, res) {
//         try {
//             let data = req.body
//             const strQry = `
//             insert into reservations
//             set ?
//             `
//             db.query(strQry, [data], (err) => {
//                 if(err) throw new Error(err.message) 
//                     res.json({
//                         status: res.statusCode,
//                         msg: "Reservation successful."
//                     })
//             })
//         } catch (e) {
//             res.json({
//                 status: 404,
//                 err: e.message
//             })
//         }
//     }

//     updateReservation(req, res) {
//         try {
//             let data = req.body
//             const strQry = ` 
//             update reservations
//             set ?
//             where reservation_id = ${req.params.id}
//             `
//             db.query(strQry, [data], (err) => {
//                 if (err) throw new Error(err.message)
//                     res.json({
//                         status: res.statusCode,
//                         msg: 'Reservation updated successfully.'
//                     })
//             })
//         } catch (e) {
//             res.json({
//                 status: 404,
//                 err: e.message
//             })
//         }
//     }

//     cancelReservation(req, res) {
//         try {
//             const strQry = `
//             delete from reservations
//             where reservation_id = ${req.params.id}
//             `
//             db.query(strQry, (err)  => {
//                 if(err) throw new Error('Unable to cancel reservation')
//                     res.json({
//                         status: res.statusCode,
//                         msg: 'Reservation cancelled.'
//                     })
//             })
//         } catch (e) {
//             res.json({
//                 status: 404, 
//                 err: e.message
//             })
//         }
//     }
// }

// export {
//     Reservations
// }

// import { connection as db } from '../config/index.js';

// class Reservations {
//     fetchReservations(req, res) {
//         const strQry = `
//             SELECT reservation_id, user_id, suite_id, img_url, check_in_date, check_out_date, total_price, status, created_at, updated_at 
//             FROM reservations
//         `;
//         db.query(strQry, (err, results) => {
//             if (err) return res.status(500).json({ status: 500, msg: err.message });
//             res.status(200).json({ status: 200, results });
//         });
//     }

//     fetchReservation(req, res) {
//         const { id } = req.params;
//         const strQry = `
//             SELECT reservation_id, user_id, suite_id, img_url, check_in_date, check_out_date, total_price, status, created_at, updated_at 
//             FROM reservations 
//             WHERE reservation_id = ?
//         `;
//         db.query(strQry, [id], (err, result) => {
//             if (err) return res.status(500).json({ status: 500, msg: err.message });
//             if (result.length === 0) return res.status(404).json({ status: 404, msg: 'Reservation not found' });
//             res.status(200).json({ status: 200, result: result[0] });
//         });
//     }

//     addReservation(req, res) {
//         const data = req.body;
//         const strQry = `INSERT INTO reservations SET ?`;
//         db.query(strQry, [data], (err) => {
//             if (err) return res.status(500).json({ status: 500, msg: err.message });
//             res.status(201).json({ status: 201, msg: 'Reservation successful.' });
//         });
//     }

//     updateReservation(req, res) {
//         const { id } = req.params;
//         const data = req.body;
//         const strQry = `
//             UPDATE reservations 
//             SET ? 
//             WHERE reservation_id = ?
//         `;
//         db.query(strQry, [data, id], (err) => {
//             if (err) return res.status(500).json({ status: 500, msg: err.message });
//             res.status(200).json({ status: 200, msg: 'Reservation updated successfully.' });
//         });
//     }

//     cancelReservation(req, res) {
//         const { id } = req.params;
//         const strQry = `DELETE FROM reservations WHERE reservation_id = ?`;
//         db.query(strQry, [id], (err) => {
//             if (err) return res.status(500).json({ status: 500, msg: 'Unable to cancel reservation' });
//             res.status(200).json({ status: 200, msg: 'Reservation cancelled.' });
//         });
//     }
// }

// export { Reservations };

import { connection as db } from '../config/index.js';

class Reservations {
    fetchReservations(req, res) {
        const strQry = `
            SELECT reservation_id, user_id, suite_id, img_url, check_in_date, check_out_date, total_price, status, created_at, updated_at 
            FROM reservations
        `;
        db.query(strQry, (err, results) => {
            if (err) {
                console.error('Error fetching reservations:', err); // Log the error for debugging
                return res.status(500).json({ status: 500, msg: 'Internal Server Error' });
            }
            res.status(200).json({ status: 200, results });
        });
    }

    fetchReservation(req, res) {
        const { id } = req.params;
        const strQry = `
            SELECT reservation_id, user_id, suite_id, img_url, check_in_date, check_out_date, total_price, status, created_at, updated_at 
            FROM reservations 
            WHERE reservation_id = ?
        `;
        db.query(strQry, [id], (err, result) => {
            if (err) {
                console.error('Error fetching reservation:', err); // Log the error for debugging
                return res.status(500).json({ status: 500, msg: 'Internal Server Error' });
            }
            if (result.length === 0) {
                return res.status(404).json({ status: 404, msg: 'Reservation not found' });
            }
            res.status(200).json({ status: 200, result: result[0] });
        });
    }

    addReservation(req, res) {
        const data = req.body;
        const strQry = `INSERT INTO reservations SET ?`;
        db.query(strQry, [data], (err) => {
            if (err) {
                console.error('Error adding reservation:', err); // Log the error for debugging
                return res.status(500).json({ status: 500, msg: 'Internal Server Error' });
            }
            res.status(201).json({ status: 201, msg: 'Reservation successful.' });
        });
    }

    updateReservation(req, res) {
        const { id } = req.params;
        const data = req.body;
        const strQry = `
            UPDATE reservations 
            SET ? 
            WHERE reservation_id = ?
        `;
        db.query(strQry, [data, id], (err) => {
            if (err) {
                console.error('Error updating reservation:', err); // Log the error for debugging
                return res.status(500).json({ status: 500, msg: 'Internal Server Error' });
            }
            res.status(200).json({ status: 200, msg: 'Reservation updated successfully.' });
        });
    }

    cancelReservation(req, res) {
        const { id } = req.params;
        const strQry = `DELETE FROM reservations WHERE reservation_id = ?`;
        db.query(strQry, [id], (err) => {
            if (err) {
                console.error('Error cancelling reservation:', err); // Log the error for debugging
                return res.status(500).json({ status: 500, msg: 'Internal Server Error' });
            }
            res.status(200).json({ status: 200, msg: 'Reservation cancelled.' });
        });
    }
}

export { Reservations };

