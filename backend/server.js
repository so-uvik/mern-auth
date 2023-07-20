import express from "express"   //This syntax is possible iff "type" : "module"(means we're using ES6 modules) is set in package.json
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
dotenv.config();
const port = process.env.PORT || 5000;

const app = express()

app.use('/api/users', userRoutes)
app.get('/', (req,res)=> res.send('Server is ready'));
app.use(notFound);
app.use(errorHandler);
app.listen(port, ()=> console.log(`Server started on port: ${port}`));