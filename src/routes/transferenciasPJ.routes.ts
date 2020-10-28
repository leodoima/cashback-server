import { Router } from 'express';

import CriarTransferenciaPJService from '../services/CriarTransferenciaPJService';
// import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const transferenciasPJRouter = Router();

// transferenciasRouter.use(ensureAuthenticated);

// transferenciasPJRouter.get('/', async (request, response) => {
//   const transferenciasRepository = getCustomRepository(
//     TransferenciasRepository,
//   );
//   const transferencias = await transferenciasRepository.find();

//   return response.json(transferencias);
// });

transferenciasPJRouter.post('/', async (request, response) => {
  const { empresa_id, cliente_id, valor } = request.body;

  const createTransferencia = new CriarTransferenciaPJService();
  const transferencia = await createTransferencia.execute({
    empresa_id,
    cliente_id,
    valor,
  });

  return response.json(transferencia);
});

export default transferenciasPJRouter;
