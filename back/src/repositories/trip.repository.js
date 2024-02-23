import { CustomeError } from '../errors/index.js';
import { BaseRepository } from './base.repository.js';

export class TripRepository extends BaseRepository {
  constructor({ model }) {
    super({ model });
    this.model = model;
  }

  /*
    TODO: Implementar todos los metodos con la logica 
    de vinculacion al usuario
  */

  // Obtener todos los viajes
  async getAllTrips() {
    try {
      return await this.model.findAll();
    } catch (error) {
      throw new Error(error);
    }
  }

  // Obtener un viaje por ID
  async getTripById(id) {
    try {
      const trip = await this.model.findOne({ where: { id } });
      if (!trip) return { message: 'Trip not found' };

      return trip;
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  // Crear un nuevo viaje
  async createTrip(tripData) {
    try {
      const new_trip = await this.model.create(tripData);

      if (!new_trip) return { message: 'Failed to create trip' };

      console.log(new_trip);
      return {
        message: 'Trip created successfully',
        trip: new_trip,
      };
    } catch (error) {
      throw new Error(error);
    }
  }

  // Actualizar un viaje
  async updateTrip(id, tripData) {
    try {
      await this.model.update(tripData, {
        where: { id: id },
      });
      return {
        message: 'Trip updated successfully',
        trip: tripData,
      };
    } catch (error) {
      throw new Error(error);
    }
  }

  // Eliminar un viaje
  async deleteTrip(id) {
    try {
      const deletedTrip = await this.model.findOne({
        where: { id: id },
      });

      const deletedRows = await this.model.destroy({
        where: { id: id },
      });
      return {
        message: 'Trip deleted successfully',
        rows: deletedRows,
        trip_deleted: deletedTrip,
      };
    } catch (error) {
      throw new Error(error);
    }
  }
}
