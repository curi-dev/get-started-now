import { Router } from 'express';
import trips from './trips.routes';

const routes = Router();

routes.use('/trips', trips);


export default routes;