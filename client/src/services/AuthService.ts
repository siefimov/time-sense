import { AxiosResponse } from 'axios';
import { AuthResponse } from '../models/response/AuthResponse';
import $api from '../http';

export interface IAuthService {
  userName?: string;
  email?: string;
  password?: string;
}
export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/login', { email, password });
  }

  static async registration(userData: IAuthService): Promise<AxiosResponse<AuthResponse>> {
    const { userName, email, password } = userData;

    return $api.post<AuthResponse>('/registration', { userName, email, password });
  }

  static async logout(): Promise<void> {
    return $api.post('/logout');
  }
}
