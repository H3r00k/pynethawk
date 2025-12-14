export interface RegisterRequest {
  name: string;
  lastname: string;
  email: string;
  password: string
}

export interface RegisterResponse{
  message: string;
  user?: any;
}

export interface LoginRequest{
  email: string;
  password: string;
}

export interface LoginResponse{
  message: string;
  user: UserResponse;
}

export interface UserResponse {
  id: number;
  name: string;
  lastname: string;
  email: string;
}
