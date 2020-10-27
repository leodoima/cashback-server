import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import TransferenciasRepository from '../repositories/TransferenciasRepository';
import CriarTransferenciaService from '../services/CriarTransferenciaService';
// import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const transferenciasRouter = Router();

// transferenciasRouter.use(ensureAuthenticated);

transferenciasRouter.get('/', async (request, response) => {
  const transferenciasRepository = getCustomRepository(
    TransferenciasRepository,
  );
  const transferencias = await transferenciasRepository.find();

  return response.json(transferencias);
});

transferenciasRouter.post('/', async (request, response) => {
  const { conta_origem, conta_destino, valor, cashback } = request.body;

  const createTransferencia = new CriarTransferenciaService();
  const transferencia = await createTransferencia.execute({
    conta_origem,
    conta_destino,
    valor,
    cashback,
  });

  return response.json(transferencia);
});

export default transferenciasRouter;
