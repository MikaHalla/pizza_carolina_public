import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import pizzaRoute from './routes/pizzaRoute.js';
import cors from 'cors';
import colors from 'colors';
import loginRoute from './routes/loginRoute.js';
import registerRoute from './routes/registerRoute.js';

const app = express();

// const corsOptions = {
//   origin: '*',
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Server is running...'));

app.use('/api/pizza', pizzaRoute);
app.use('/login', loginRoute);
app.use('/register', registerRoute);

app.get('*', (req, res) => res.status(404).send('page not found'));

app.listen(PORT, () =>
  console.log(`Server is listening on port ${PORT}`.cyan.bold)
);
