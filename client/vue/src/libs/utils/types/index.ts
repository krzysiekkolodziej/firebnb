export type RegisterForm = {
  full_name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export type LoginForm = {
  email: string;
  password: string;
};
