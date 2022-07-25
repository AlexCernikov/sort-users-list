export interface UserModel {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  enabled: boolean;
  role: string;
}

export interface UserCreateModel {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}
