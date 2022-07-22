import { EntityModel } from '@/models/entity.model';
import { UserModel } from '@/models/user.model';

export interface ReservationModel {
  content: [{
    id: number;
    fromDate: Date;
    toDate: Date;
    price: number;
    reservationEntity: EntityModel;
    user: UserModel;
    comment: string;
  }];
  pageable: {
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}
