export class TripService {
  constructor({ repository }) {
    this.repository = repository;
  }

  /*
    TODO: Implementar todos los metodos con la logica 
    de vinculacion al usuario
  */

  async getAllTrips() {
    return await this.repository.getAllTrips();
  }

  async getTripById(id) {
    return await this.repository.getTripById(id);
  }

  async createTrip(tripData) {
    return await this.repository.createTrip(tripData);
  }

  async updateTrip(id, tripData) {
    return await this.repository.updateTrip(id, tripData);
  }

  async deleteTrip(id) {
    return await this.repository.deleteTrip(id);
  }
}
