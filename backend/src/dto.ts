export class LoginDto {
  email: string;
  password: string;
}

export class RefreshTokenDto {
  refreshToken: string;
}

export class CreateUserDto {
  email: string;
  password: string;
  name: string;
  role: 'admin' | 'doctor' | 'patient';
}
