    import handleError from '../errors/handle.error.js';

    export class FromToController {

        constructor({ service }) {
        this.service = service;
    }

    // Fetch all trips
    getAllFromTo = (req, res) => {
        return this.service
        .getAllFromTo()
        .then((data) => res.status(200).json(data))
        .catch((err) => handleError.handle(err, res));
    };

    // Fetch a single trip by id
    getFromToById = (req, res) => {
        const { id } = req.params;
        return this.service
        .getFromToById(id)
        .then((data) => res.status(200).json(data))
        .catch((err) => handleError.handle(err, res));
    };

    // Create a new trip
    createFromTo = (req, res) => {
        return this.service
        .createFromTo(req.body)
        .then((data) => res.status(201).send(data))
        .catch((error) => res.status(400).send({ message: error.message }));
    };

    // Update a trip
    updateFromTo = (req, res) => {
        const { id } = req.params;
        if (!id) {
        return res.status(400).send({ message: 'Missing trip id' });
        }

        return this.service
        .updateFromToById(id, req.body)
        .then((data) => res.status(201).send(data))
        .catch((error) => res.status(400).send({ message: error.message }));
    };

    // Delete a trip
    deleteFromTo = (req, res) => {
        const { id } = req.params;
        if (!id) {
        return res.status(400).send({ message: 'Missing trip id' });
        }

        return this.service
        .deleteFromToById(id)
        .then((data) => res.status(201).send(data))
        .catch((error) => res.status(500).send({ message: error.message }));
    };
    }
