import { Router } from 'express';

// import transfersRouter from './transfers.routes';
import clientesRouter from './clientes.routes';
import empresasRouter from './empresas.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

// routes.use('/transferencias', transfersRouter);
routes.use('/clientes', clientesRouter); // Ok
routes.use('/empresas', empresasRouter); // OK
routes.use('/sessions', sessionsRouter); // Ok

export default routes;
