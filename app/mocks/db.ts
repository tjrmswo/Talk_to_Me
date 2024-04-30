import { factory, primaryKey } from "@mswjs/data";

export const db = factory({
  user: {
    email: primaryKey(String),
    nickname: String,
    password: String,
    passwordChecked: String,
    interests: Array,
    profile: String,
  },
});

db.user.create({
  email: "a@a.com",
  nickname: "재근",
  password: "qwer12345",
  passwordChecked: "qwer12345",
  interests: ["헬스", "배드민턴", "독서", "배드민턴", "배드민턴"],
});

db.user.create({
  email: "b@b.com",
  nickname: "재근재",
  password: "qwer12345",
  passwordChecked: "qwer12345",
  interests: ["독서"],
});

db.user.create({
  email: "c@c.com",
  nickname: "근재",
  password: "qwer12345",
  passwordChecked: "qwer12345",
  interests: ["헬스", "독서"],
});
db.user.create({
  email: "d@d.com",
  nickname: "서근재",
  password: "qwer12345",
  passwordChecked: "qwer12345",
  interests: ["배드민턴"],
});

db.user.create({
  email: "e@e.com",
  nickname: "길동",
  password: "qwer12345",
  passwordChecked: "qwer12345",
  interests: ["배드민턴", "독서"],
});

db.user.create({
  email: "f@f.com",
  nickname: "동길",
  password: "qwer12345",
  passwordChecked: "qwer12345",
  interests: ["헬스"],
});

db.user.create({
  email: "g@g.com",
  nickname: "홍길동",
  password: "qwer12345",
  passwordChecked: "qwer12345",
  interests: ["여행"],
});

db.user.create({
  email: "h@h.com",
  nickname: "석은재",
  password: "qwer12345",
  passwordChecked: "qwer12345",
  interests: ["여행", "배드민턴", "독서"],
});
