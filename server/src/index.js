import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import statusRoutes from './routes/statusRoutes.js';
import taskRoutes from './routes/taskRoutes.js';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(statusRoutes);
app.use('/api/tasks', taskRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ message: err.message, status: 'error' });
});

app.use((req, res) => {
  res.status(404).json({ message: 'Not Found', status: 'error' });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});
