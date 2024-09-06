import path from "path";   
import { reservationRouter } from "./controller/ReservationController.js";
import { suiteRouter } from "./controller/SuiteController.js";
import { userRouter, express } from "./controller/UserController.js";
import { errorHandling } from "./middleware/ErrorHandling.js";
import cors from 'cors'

// Create Express App
const app = express()
const port = +process.env.PORT || 4000


// Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Request-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*")
    res.header("Access-Control-Expose-Headers", "Authorization")
    next()
  })
  
  app.use('/reservations', reservationRouter)
  app.use('/suites', suiteRouter)
  app.use('/users', userRouter)
  
app.use(
  express.static("./static"),
  express.json(),
  express.urlencoded({
    extended: true
    }),
    cors()
)

// Endpoint
app.get("^/$|/prestige", (req, res) => {
    res.status(200).sendFile(path.resolve("./static/html/index.html"))
  })
  app.get('*', (req, res) => {       // handling unknown endpoints
      res.json({
        status: 404,
        msg: 'Resource not found'
      })
    })
  app.use(errorHandling)
  app.listen(port, () => {
      console.log(`Live on Port: ${port}`)
    })