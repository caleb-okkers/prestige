import {Reservations} from  './Reservation.js'
import { Suites } from './Suite.js'
import { Users } from './User.js'

const reservations = new Reservations()
const suites = new Suites()
const users = new Users()

export {
    reservations,
    suites,
    users
}