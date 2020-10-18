import { Router } from 'express';

import transfersRouter from './transfers.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

// USE faz entender para qualquer rota (POST, GET, DELETE...)
routes.use('/transfers', transfersRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
