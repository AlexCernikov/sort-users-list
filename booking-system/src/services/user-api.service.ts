import { ApiService } from '@/services/api.service';
import { UserCreateModel, UserModel } from '@/models/user.model';
import { TokenModel } from '@/models/token.model';

class UserApiService extends ApiService {
  public constructor() {
    super('user');
  }

  public userAuthenticate(email: string, password: string): Promise<TokenModel> {
    return this.http
      .post('/authenticate', {
        params: {
          email,
          password,
        },
      })
      .then(this.handleResponse.bind(this))
      .catch(this.handleError.bind(this));
  }

  public getUsers(): Promise<UserModel[]> {
    return this.http
      .get('')
      .then(this.handleResponse.bind(this))
      .catch(this.handleError.bind(this));
  }

  public getUserById(id: number): Promise<UserModel> {
    return this.http.get(`/${id}`)
      .then(this.handleResponse.bind(this))
      .catch(this.handleError.bind(this));
  }

  public createUser(user: UserCreateModel): Promise<void> {
    return this.http.post('/create', user)
      .then(this.handleResponse.bind(this))
      .catch(this.handleError.bind(this));
  }

  public updateUser(id: number, user: UserModel): Promise<UserModel> {
    return this.http.put(`/${id}`, user)
      .then(this.handleResponse.bind(this))
      .catch(this.handleError.bind(this));
  }

  public deleteUser(id: number): Promise<void> {
    return this.http.delete(`/${id}`)
      .then(this.handleResponse.bind(this))
      .catch(this.handleError.bind(this));
  }
}

export const userApiService: UserApiService = new UserApiService();
