import { Router } from 'express';

import UserController from './app/controllers/UserController';

const router = new Router();

router.get('/', (req, res) => {
  res.json({ message: 'Hello world from MeetApp.' });
});

router.post('/users', UserController.store);

export default router;
