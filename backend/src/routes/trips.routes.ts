import { Router } from 'express';
import Trips from '../models/Trips';

const trips = Router();


const tripsRepository: Trips[] = [];


trips.get('/', (request, response) => {
    return response.json(tripsRepository);        
});

trips.post('/', (request, response) => {
    const { origin, destination, continent } = request.body;

    const trip = new Trips({
        origin,
        destination,
        continent
    })

    tripsRepository.push(trip);

    return response.json(trip);
});

export default trips;