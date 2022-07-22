import { EntityModel } from '@/models/entity.model';
import { UserModel } from '@/models/user.model';

export interface ReservationModel {
  id: number;
  fromDate: Date;
  toDate: Date;
  price: number;
  reservationEntity: EntityModel;
  user: UserModel;
  comment: string;
}
