import { connection as db } from '../config/index.js';

class Suites {
     fetchSuites(req, res) {
        try {
            const strQry = `
                SELECT suite_id, suite_name, suite_number, suite_type, description, price_per_night, max_occupancy, availability_status, img_url 
                FROM suites
            `;
            db.query(strQry, (err, results) => {
                if (err) throw new Error(err.message);
                res.json({
                    status: res.statusCode,
                    results
                });
            });
        } catch (e) {
            res.status(500).json({
                status: 500,
                err: e.message
            });
        }
    }

     fetchSuite(req, res) {
        try {
            const { id } = req.params;
            const strQry = `
                SELECT suite_id, suite_name, suite_number, suite_type, description, price_per_night, max_occupancy, availability_status, img_url 
                FROM suites 
                WHERE suite_id = ?
            `;
            db.query(strQry, [id], (err, result) => {
                if (err) throw new Error(err.message);
                if (result.length === 0) {
                    return res.status(404).json({ status: 404, msg: 'Suite not found' });
                }
                res.json({
                    status: res.statusCode,
                    result: result[0]
                });
            });
        } catch (e) {
            res.status(500).json({
                status: 500,
                err: e.message
            });
        }
    }

     addSuite(req, res) {
        try {
            const data = req.body;
            const strQry = `INSERT INTO suites SET ?`;
            db.query(strQry, [data], (err) => {
                if (err) throw new Error(err.message);
                res.json({
                    status: res.statusCode,
                    msg: "Suite has been added successfully."
                })
            });
        } catch (e) {
            res.status(500).json({
                status: 500,
                err: e.message
            });
        }
    }

     updateSuite(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;
            const strQry = `
                UPDATE suites 
                SET ? 
                WHERE suite_id = ?
            `;
            db.query(strQry, [data, id], (err) => {
                if (err) throw new Error(err.message);
                res.json({
                    status: res.statusCode,
                    msg: 'Suite details updated successfully.'
                });
            });
        } catch (e) {
            res.status(500).json({
                status: 500,
                err: e.message
            });
        }
    }

     deleteSuite(req, res) {
        try {
            const { id } = req.params;
            const strQry = `DELETE FROM suites WHERE suite_id = ?`;
            db.query(strQry, [id], (err) => {
                if (err) throw new Error('Unable to delete suite');
                res.json({
                    status: res.statusCode,
                    msg: 'Suite information deleted successfully.'
                });
            });
        } catch (e) {
            res.status(500).json({
                status: 500,
                err: e.message
            });
        }
    }
}

export {
    Suites
};
