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
  const { contapj_id, contapf_id, valor } = request.body;

  const createTransferencia = new CriarTransferenciaPJService();
  const transferencia = await createTransferencia.execute({
    contapj_id,
    contapf_id,
    valor,
  });

  return response.json(transferencia);
});

export default transferenciasPJRouter;
