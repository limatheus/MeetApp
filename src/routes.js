import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const router = new Router();

router.get('/', (req, res) => {
  res.json({ message: 'Hello world from MeetApp.' });
});

router.post('/users', UserController.store);

router.post('/sessions', SessionController.store);

/**
 * Routes bellow need authorization
 */
router.use(authMiddleware);

router.put('/users', UserController.update);

export default router;
