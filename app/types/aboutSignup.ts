export interface SignupUserData {
  email: string;
  nickname: string;
  password: string;
  passwordCheck: string;
}

export interface UserInterests {
  interests: string[];
}

export interface LoginType {
  email: string;
  nickname: string;
  password: string;
  interests: string[];
}
