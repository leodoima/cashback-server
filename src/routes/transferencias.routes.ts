import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import TransferenciasRepository from '../repositories/TransferenciasRepository';
import CreateTransferService from '../services/CreateTransferService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const transferenciasRouter = Router();

transferenciasRouter.use(ensureAuthenticated);

transferenciasRouter.get('/', async (request, response) => {
  const transferenciasRepository = getCustomRepository(
    TransferenciasRepository,
  );
  const transfers = await transferenciasRepository.find();

  return response.json(transfers);
});

transferenciasRouter.post('/', async (request, response) => {
  const { source_id, destiny, price } = request.body;

  const createTransferencia = new CreateTransferService();
  const transfer = await createTransferencia.execute({
    source_id,
    destiny,
    price,
  });

  return response.json(transfer);
});

export default transfersRouter;
