// import { connection as db } from '../config/index.js'

// class Suites {
//     fetchSuites(req, res) {
//         try {
//             const strQry = `
//             select suite_id, suite_name, suite_number, suite_type, description, price_per_night, max_occupancy , availability_status, img_url
//             from suites
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
    
//     fetchSuite(req, res) {
//         try {
//             const strQry = ` 
//             select suite_id, suite_name, suite_number, suite_type, description, price_per_night, max_occupancy , availability_status, img_url
//             from suites
//             where suite_id = ${req.params.id}
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

//     premiumSuites(req, res) {
//         try {
//             const strQry = ` 
//             select suite_id, suite_name, suite_number, suite_type, description, price_per_night, max_occupancy , availability_status, img_url
//             from suites order by price_per_night  desc limit 4;
//             `
//             db.query(strQry, (err, results) => {
//                 if(err) throw new Error(err.message)
//                     res.json({
//                         status: res.statusCode,
//                         results
//                     })
//             })
//         } catch (e) {
//             res.json({
//                 status: 404,
//                 msg: e.message
//             })
//         }
//     }

//     addSuite(req, res) {
//         try {
//             let data = req.body
//             const strQry = `
//             insert into suites
//             set ?
//             `
//             db.query(strQry, [data], (err) => {
//                 if(err) throw new Error(err.message) 
//                     res.json({
//                         status: res.statusCode,
//                         msg: "Suite has been added successfully."
//                     })
//             })
//         } catch (e) {
//             res.json({
//                 status: 404,
//                 err: e.message
//             })
//         }
//     }

//     updateSuite(req, res) {
//         try {
//             let data = req.body
//             const strQry = ` 
//             update suites
//             set ?
//             where Suite_id = ${req.params.id}
//             `
//             db.query(strQry, [data], (err) => {
//                 if (err) throw new Error(err.message)
//                     res.json({
//                         status: res.statusCode,
//                         msg: 'Suite details updated successfully.'
//                     })
//             })
//         } catch (e) {
//             res.json({
//                 status: 404,
//                 err: e.message
//             })
//         }
//     }

//     deleteSuite(req, res) {
//         try {
//             const strQry = `
//             delete from suites
//             where Suite_id = ${req.params.id}
//             `
//             db.query(strQry, (err)  => {
//                 if(err) throw new Error('Unable to delete Suite')
//                     res.json({
//                         status: res.statusCode,
//                         msg: 'Suite information deleted successfully.'
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
//     Suites
// }

import { connection as db } from '../config/index.js';

class Suites {
    fetchSuites(req, res) {
        const strQry = `
            SELECT suite_id, suite_name, suite_number, suite_type, description, price_per_night, max_occupancy, availability_status, img_url 
            FROM suites
        `;
        db.query(strQry, (err, results) => {
            if (err) {
                console.error('Error fetching suites:', err); // Log the error for debugging
                return res.status(500).json({ status: 500, msg: 'Internal Server Error' });
            }
            res.status(200).json({ status: 200, results });
        });
    }

    fetchSuite(req, res) {
        const { id } = req.params;
        const strQry = `
            SELECT suite_id, suite_name, suite_number, suite_type, description, price_per_night, max_occupancy, availability_status, img_url 
            FROM suites 
            WHERE suite_id = ?
        `;
        db.query(strQry, [id], (err, result) => {
            if (err) {
                console.error('Error fetching suite:', err); // Log the error for debugging
                return res.status(500).json({ status: 500, msg: 'Internal Server Error' });
            }
            if (result.length === 0) {
                return res.status(404).json({ status: 404, msg: 'Suite not found' });
            }
            res.status(200).json({ status: 200, result: result[0] });
        });
    }

    premiumSuites(req, res) {
        const strQry = `
            SELECT suite_id, suite_name, suite_number, suite_type, description, price_per_night, max_occupancy, availability_status, img_url 
            FROM suites 
            ORDER BY price_per_night DESC 
            LIMIT 4
        `;
        db.query(strQry, (err, results) => {
            if (err) {
                console.error('Error fetching premium suites:', err); // Log the error for debugging
                return res.status(500).json({ status: 500, msg: 'Internal Server Error' });
            }
            res.status(200).json({ status: 200, results });
        });
    }

    addSuite(req, res) {
        const data = req.body;
        const strQry = `INSERT INTO suites SET ?`;
        db.query(strQry, [data], (err) => {
            if (err) {
                console.error('Error adding suite:', err); // Log the error for debugging
                return res.status(500).json({ status: 500, msg: 'Internal Server Error' });
            }
            res.status(201).json({ status: 201, msg: 'Suite has been added successfully.' });
        });
    }

    updateSuite(req, res) {
        const { id } = req.params;
        const data = req.body;
        const strQry = `
            UPDATE suites 
            SET ? 
            WHERE suite_id = ?
        `;
        db.query(strQry, [data, id], (err) => {
            if (err) {
                console.error('Error updating suite:', err); // Log the error for debugging
                return res.status(500).json({ status: 500, msg: 'Internal Server Error' });
            }
            res.status(200).json({ status: 200, msg: 'Suite details updated successfully.' });
        });
    }

    deleteSuite(req, res) {
        const { id } = req.params;
        const strQry = `DELETE FROM suites WHERE suite_id = ?`;
        db.query(strQry, [id], (err) => {
            if (err) {
                console.error('Error deleting suite:', err); // Log the error for debugging
                return res.status(500).json({ status: 500, msg: 'Internal Server Error' });
            }
            res.status(200).json({ status: 200, msg: 'Suite information deleted successfully.' });
        });
    }
}

export { Suites };

