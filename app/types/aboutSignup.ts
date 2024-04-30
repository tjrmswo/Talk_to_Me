export interface SignupUserData {
  email: string;
  nickname: string;
  password: string;
  passwordChecked: string;
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
