import express, { Application } from 'express';
import exampleRoutes from './routes/exampleRoutes';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 8080; 

// Middleware
app.use(express.json());

// Routes
app.use('/api/example', exampleRoutes);

// Healthcheck Route
app.get('/', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'API Server is healthy' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});