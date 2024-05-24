export interface userDataDTO {
  email: string;
  nickname: string;
  password: string;
  passwordChecked: string;
  interests: string[];
  kakao_id: number;
  profile: string;
  gender: string;
  profile_image: string;
  thumbnail_image: string;
}

export interface userSearchDTO {
  nickname: string;
  interests: string[];
}
