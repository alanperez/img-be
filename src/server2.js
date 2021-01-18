import express from 'express';
import userRouter from './api/users/userRouter';
import imageRouter from './api/imgs/imageRouter';
const server = express();
const cors = require('cors');
const helmet = require('helmet');

const corsOptions = {
    origin: ['http://localhost:3000'],
    credentials: true,
    AccessControlAllowOrigin: ['http://localhost:3000']
  };

  server.use(express.json());
  server.use(helmet());
  server.use(cors(corsOptions));

  server.use('/users', userRouter);
  server.use('/images', imageRouter);

  server.get('/', (req,res) => {
    try {
        res.status(200).json({ message: 'Root endpoint is functional.' });
      } catch (err) {
        res.status(500).json({ errorMessage: err.message });
      }
});

const port = process.env.PORT || 9000;
server.listen(port, () => {
  const serverRunMsg = `Server is active and listening on http://127.0.0.1:${port}`;
  console.log((serverRunMsg));
});
