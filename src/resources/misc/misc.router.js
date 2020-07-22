/* eslint-disable prettier/prettier */
import { Router } from 'express';
import controllers from './color.controllers';

const router = Router();

router.route('/')
  .post(controllers.createOne)
  .get(controllers.getMany)

router.route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete (controllers.deleteOne);