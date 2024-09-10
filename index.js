// import path from "path";   
// import { reservationRouter } from "./controller/ReservationController.js";
// import { suiteRouter } from "./controller/SuiteController.js";
// import { userRouter, express } from "./controller/UserController.js";
// import { errorHandling } from "./middleware/ErrorHandling.js";
// import cors from 'cors'

// // Create Express App
// const app = express()
// const port = +process.env.PORT || 4000


// // Middleware
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*")
//     res.header("Access-Control-Allow-Credentials", "true")
//     res.header("Access-Control-Allow-Methods", "*")
//     res.header("Access-Control-Request-Methods", "*")
//     res.header("Access-Control-Allow-Headers", "*")
//     res.header("Access-Control-Expose-Headers", "Authorization")
//     next()
//   })
  
//   app.use('/reservations', reservationRouter)
//   app.use('/suites', suiteRouter)
//   app.use('/users', userRouter)
  
// app.use(
//   express.static("./static"),
//   express.json(),
//   express.urlencoded({
//     extended: true
//     }),
//     cors()
// )

// // Endpoint
// app.get("^/$|/viavenetoroyale", (req, res) => {
//     res.status(200).sendFile(path.resolve("./static/html/index.html"))
//   })
//   app.get('*', (req, res) => {       // handling unknown endpoints
//       res.json({
//         status: 404,
//         msg: 'Resource not found'
//       })
//     })
//   app.use(errorHandling)
//   app.listen(port, () => {
//       console.log(`Live on Port: ${port}`)
//     })

import path from "path";
import { reservationRouter } from "./controller/ReservationController.js";
import { suiteRouter } from "./controller/SuiteController.js";
import { userRouter } from "./controller/UserController.js";
import { errorHandling } from "./middleware/ErrorHandling.js";
import express from 'express';
import cors from 'cors';

// Create Express App
const app = express();
const port = +process.env.PORT || 4000;

// Middleware
app.use(express.static("./static"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));

// Routes
app.use('/reservations', reservationRouter);
app.use('/suites', suiteRouter);
app.use('/users', userRouter);

// Serve the main HTML file for the root or '/prestige'
app.get("^/$|/prestige", (req, res) => {
    res.status(200).sendFile(path.resolve("./static/html/index.html"));
});

// Handle unknown endpoints (404 error)
app.use('*', (req, res) => {
    res.status(404).json({
        status: 404,
        msg: 'Resource not found'
    });
});

// Error Handling Middleware
app.use(errorHandling);

// Start the server
app.listen(port, () => {
    console.log(`Live on Port: ${port}`);
});
