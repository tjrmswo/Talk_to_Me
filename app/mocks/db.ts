import { factory, primaryKey } from "@mswjs/data";

export const db = factory({
  user: {
    email: primaryKey(String),
    nickname: String,
    password: String,
    passwordChecked: String,
    interests: Array,
  },
});

db.user.create({
  email: "a@a.com",
  nickname: "재근",
  password: "111111111",
  passwordChecked: "111111111",
  interests: ["헬스", "배드민턴", "독서"],
});
