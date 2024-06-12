import express from 'express'
import authRoute from './routes/authRoute';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorHandler';

dotenv.config();

const app = express()

// Middleware to parse JSON bodies
app.use(express.json());

// Use the routes defined in separate files 
app.use('/auth', authRoute);

// Error handling middleware
app.use(errorHandler);

app.listen(5000, ()=>{
    console.log("Listening on port 5000");
    
})