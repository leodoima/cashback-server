import { Router } from 'express';

// import transfersRouter from './transfers.routes';
import clientesRouter from './clientes.routes';
import empresasRouter from './empresas.routes';
// import sessionsRouter from './sessions.routes';

const routes = Router();

// routes.use('/transferencias', transfersRouter);
routes.use('/clientes', clientesRouter);
routes.use('/empresas', empresasRouter);
// routes.use('/sessions', sessionsRouter);

export default routes;
