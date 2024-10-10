import express from 'express';

import usersRouter from './users.router.js';

export default function routes(app) {
  const router = express.Router();

  app.use('/api/v1', router);
  router.use('/users', usersRouter);
}
