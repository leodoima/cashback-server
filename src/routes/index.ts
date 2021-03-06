import { Router } from 'express';

import transferenciasPJRouter from './transferenciasPJ.routes';
import clientesRouter from './clientes.routes';
import empresasRouter from './empresas.routes';
import sessionsRouter from './sessions.routes';
import contaspfRouter from './contasPF.routes';
import contaspjRouter from './contasPJ.routes';

const routes = Router();

routes.use('/transferencias', transferenciasPJRouter);
routes.use('/clientes', clientesRouter); // Ok
routes.use('/empresas', empresasRouter); // OK
routes.use('/sessions', sessionsRouter); // Ok
routes.use('/clientes/contas', contaspfRouter); // Ok
routes.use('/empresas/contas', contaspjRouter); // OK

export default routes;
