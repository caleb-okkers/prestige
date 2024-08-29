import { connection as db } from '../config/index.js'

class Cars {
    fetchCars(req, res) {
        try {
            const strQry = `
            select car_id, make, model, year, color, transmission, engine, description, daily_price, , image_url, availability_status
            from Cars
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
    
    fetchCar(req, res) {
        try {
            const strQry = ` 
            select car_id, make, model, year, color, transmission, engine, description, daily_price, , image_url, availability_status
            from Cars
            where car_id = ${req.params.id}
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

    latestCars(req, res) {
        try {
            const strQry = ` 
            select car_id, make, model, year, color, transmission, engine, description, daily_price, , image_url, availability_status
            from Cars order by car_id  desc limit 4;
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

    addCar(req, res) {
        try {
            let data = req.body
            const strQry = `
            insert into Cars
            set ?
            `
            db.query(strQry, [data], (err) => {
                if(err) throw new Error(err.message) 
                    res.json({
                        status: res.statusCode,
                        msg: "Car has been added successfully ✅"
                    })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }

    updateCar(req, res) {
        try {
            let data = req.body
            const strQry = ` 
            update Cars
            set ?
            where prodID = ${req.params.id}
            `
            db.query(strQry, [data], (err) => {
                if (err) throw new Error(err.message)
                    res.json({
                        status: res.statusCode,
                        msg: 'Car details updated successfully 🔃.'
                    })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }

    deleteCar(req, res) {
        try {
            const strQry = `
            delete from Cars
            where prodID = ${req.params.id}
            `
            db.query(strQry, (err)  => {
                if(err) throw new Error('Unable to delete Car')
                    res.json({
                        status: res.statusCode,
                        msg: 'Car information deleted successfully 🗑️'
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
    Cars
}