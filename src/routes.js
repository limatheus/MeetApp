import { Router } from 'express';
import multer from 'multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import MeetupController from './app/controllers/MeetupController';

import authMiddleware from './app/middlewares/auth';
import multerConfig from './config/multer';

const router = new Router();
const upload = multer(multerConfig);

router.get('/', (req, res) => {
  res.json({ message: 'Hello world from MeetApp.' });
});

router.post('/users', UserController.store);

router.post('/sessions', SessionController.store);

router.get('/meetups', MeetupController.index);

/**
 * Routes bellow need authorization
 */
router.use(authMiddleware);

router.put('/users', UserController.update);

router.post('/files', upload.single('file'), FileController.store);

router.post('/meetups', MeetupController.store);
router.put('/meetups/:id', MeetupController.update);
router.delete('/meetups/:id', MeetupController.delete);

export default router;
