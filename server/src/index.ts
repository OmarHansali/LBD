import express from 'express'
import cors from 'cors'
import authRoute from './routes/authRoute';
import userRoute from './routes/userRoute';
import salleRoute from './routes/salleRoute';
import reservationRoute from './routes/reservationRoute';
import materielRoute from './routes/materielRoute';
import contactRoute from "./routes/contactRoute";
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorHandler';

dotenv.config();

const app = express()

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Log requests
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    next();
});

// Use the routes defined in separate files 
app.use('/auth', authRoute);

app.use('/user', userRoute);

app.use('/salle', salleRoute);

app.use('/materiel', materielRoute);

app.use('/reservation', reservationRoute);

app.use("/contact", contactRoute);

// Error handling middleware
app.use(errorHandler);

app.listen(5000, ()=>{
    console.log("Listening on port 5000");
    
})