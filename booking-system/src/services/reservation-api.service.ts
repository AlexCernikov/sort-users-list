import { ApiService } from '@/services/api.service';
import { ReservationModel } from '@/models/reservation.model';

class ReservationApiService extends ApiService {
  public constructor() {
    super('reservations');
  }

  public getReservations(): Promise<ReservationModel[]> {
    return this.http
      .get('')
      .then(this.handleResponse.bind(this))
      .catch(this.handleError.bind(this));
  }

  public getReservationByEntity(id: number): Promise<ReservationModel> {
    return this.http.get(`/entity/${id}`)
      .then(this.handleResponse.bind(this))
      .catch(this.handleError.bind(this));
  }

  public createReservation(reservation: ReservationModel): Promise<void> {
    return this.http.post('/create', reservation)
      .then(this.handleResponse.bind(this))
      .catch(this.handleError.bind(this));
  }

  public updateReservation(reservation: ReservationModel): Promise<ReservationModel> {
    return this.http.put('/reservationEntities/update', reservation)
      .then(this.handleResponse.bind(this))
      .catch(this.handleError.bind(this));
  }

  public deleteReservation(id: number): Promise<void> {
    return this.http.delete(`/delete/${id}`)
      .then(this.handleResponse.bind(this))
      .catch(this.handleError.bind(this));
  }
}

export const reservationApiService: ReservationApiService = new ReservationApiService();
