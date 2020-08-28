import { uuid } from 'uuidv4';

export default class Trips {
    id: string;

    origin: string;

    destination: string;

    continent: string;


    constructor({ origin, destination, continent }: Omit<Trips, 'id'>) {
        this.id = uuid();
        this.origin = origin;
        this.destination = destination;
        this.continent = continent;
    };


};

