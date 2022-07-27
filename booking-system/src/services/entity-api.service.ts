import { ApiService } from '@/services/api.service';
import { EntityCreateModel, EntityModel } from '@/models/entity.model';

class EntityApiService extends ApiService {
  public constructor() {
    super('reservationEntities');
  }

  public getEntities(): Promise<EntityModel[]> {
    return this.http
      .get('')
      .then(this.handleResponse.bind(this))
      .catch(this.handleError.bind(this));
  }

  public getEntityById(id: number): Promise<EntityModel> {
    return this.http.get(`/${id}`)
      .then(this.handleResponse.bind(this))
      .catch(this.handleError.bind(this));
  }

  public createEntity(entity: EntityCreateModel): Promise<void> {
    return this.http.post('', entity)
      .then(this.handleResponse.bind(this))
      .catch(this.handleError.bind(this));
  }

  public updateEntity(entity: EntityModel): Promise<EntityModel> {
    return this.http.put('/update', entity)
      .then(this.handleResponse.bind(this))
      .catch(this.handleError.bind(this));
  }

  public deleteEntity(id: number): Promise<void> {
    return this.http.delete(`/${id}`)
      .then(this.handleResponse.bind(this))
      .catch(this.handleError.bind(this));
  }
}

export const entityApiService: EntityApiService = new EntityApiService();
