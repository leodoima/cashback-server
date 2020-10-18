import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import TransfersRepository from '../repositories/TransfersRepository';
import CreateTransferService from '../services/CreateTransferService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const transfersRouter = Router();

transfersRouter.use(ensureAuthenticated);

transfersRouter.get('/', async (request, response) => {
  const transfersRepository = getCustomRepository(TransfersRepository);
  const transfers = await transfersRepository.find();

  return response.json(transfers);
});

transfersRouter.post('/', async (request, response) => {
  const { source_id, destiny, price } = request.body;

  const createTransfer = new CreateTransferService();
  const transfer = await createTransfer.execute({
    source_id,
    destiny,
    price,
  });

  return response.json(transfer);
});

export default transfersRouter;
