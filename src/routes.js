import { Router } from 'express';
import multer from 'multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';
import multerConfig from './config/multer';

const router = new Router();
const upload = multer(multerConfig);

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

router.post('/files', upload.single('file'), FileController.store);

export default router;
