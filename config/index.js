import { createPool } from "mysql2";
import 'dotenv/config'


let connection = createPool({
    host: process.env.hostDb,
    user: process.env.userDb,
    password: process.env.passwordDb,
    database: process.env.dbName,
    multipleStatements: true,
    connectionLimit: 30
})
connection.on('connection', (pool) => {
    if(!pool) throw new Error('Connection to database failed, please try again later.')
})

export {
    connection
}