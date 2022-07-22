export interface UserModel {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  enabled: boolean;
  role: string;
}

export interface UserCreateModel {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
