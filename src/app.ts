import express, { Request, Response, NextFunction, ErrorRequestHandler} from 'express';
import walletRoutes from './routes/walletRoutes'; 
import { errorHandler } from './middleware/errorMiddleware';
import  connectDB  from './database/db';

connectDB()
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Define a simple route to test that the server is running
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Use the userRoutes with the /api/users prefix
app.use('/api/wallet', walletRoutes);

// Error handling middleware
const errorHandlerFor500: ErrorRequestHandler = (err, _req, res, _next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
};

app.use(errorHandlerFor500);
app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

export default app
