export interface userDataDTO {
  email: string;
  nickname: string;
  password: string;
  passwordChecked: string;
  interests: string[];
  profile: string;
}

export interface userSearchDTO {
  nickname: string;
  interests: string[];
}
