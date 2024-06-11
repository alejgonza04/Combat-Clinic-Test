import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import sessionRoutes from './routes/session.js';
import userRoutes from './routes/user.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/sessions', sessionRoutes);
app.use('/user', userRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL || 'mongodb+srv://alejandrgonzalez:ctEFB9Opvfoyuzrj@cluster0.tb2b9cf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
