import connectToMongo from './db.js';
import express from 'express';
import authRouter from './routes/auth.js';
import notesRouter from './routes/notes.js';
connectToMongo();

const app = express();
const port = 5000;

app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/notes', notesRouter);

app.listen(port, () => console.log(`iNotebook backend listening at http://localhost:${port}/`));