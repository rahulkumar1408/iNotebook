import 'dotenv/config';
import connectToMongo from './db.js';
import express from 'express';
import authRouter from './routes/auth.js';
import notesRouter from './routes/notes.js';
import cors from 'cors';
connectToMongo();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/notes', notesRouter);

app.listen(PORT, () => console.log(`iNotebook backend listening at http://localhost:${PORT}/`));