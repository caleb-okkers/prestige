import { connection as db } from '../config/index.js'

class Suites {
    fetchSuites(req, res) {
        try {
            const strQry = `
            select suite_id, suite_number, suite_type, description, price_per_night, max_occupancy , availability_status, image_url
            from suites
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
    
    fetchSuite(req, res) {
        try {
            const strQry = ` 
            select suite_id, suite_number, suite_type, description, price_per_night, max_occupancy , availability_status, image_url
            from suites
            where suite_id = ${req.params.id}
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

    premiumSuites(req, res) {
        try {
            const strQry = ` 
            select suite_id, suite_number, suite_type, description, price_per_night, max_occupancy , availability_status, image_url
            from suites order by price_per_night  desc limit 4;
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
                msg: e.message
            })
        }
    }

    addSuite(req, res) {
        try {
            let data = req.body
            const strQry = `
            insert into suites
            set ?
            `
            db.query(strQry, [data], (err) => {
                if(err) throw new Error(err.message) 
                    res.json({
                        status: res.statusCode,
                        msg: "Suite has been added successfully."
                    })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }

    updateSuite(req, res) {
        try {
            let data = req.body
            const strQry = ` 
            update suites
            set ?
            where Suite_id = ${req.params.id}
            `
            db.query(strQry, [data], (err) => {
                if (err) throw new Error(err.message)
                    res.json({
                        status: res.statusCode,
                        msg: 'Suite details updated successfully.'
                    })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }

    deleteSuite(req, res) {
        try {
            const strQry = `
            delete from suites
            where Suite_id = ${req.params.id}
            `
            db.query(strQry, (err)  => {
                if(err) throw new Error('Unable to delete Suite')
                    res.json({
                        status: res.statusCode,
                        msg: 'Suite information deleted successfully.'
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
    Suites
}