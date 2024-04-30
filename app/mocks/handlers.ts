import { http, HttpResponse } from "msw";
import { db } from "./db";
import { LoginType } from "../types/aboutSignup";
import { DATABASE_INSTANCE } from "@mswjs/data/lib/glossary";

export const handlers = [
  http.get("https://api.example.com/api/user", () => {
    return HttpResponse.json({
      data: {
        name: "handongryong",
        age: 25,
      },
    });
  }),
  http.post("/v1/api/login", async ({ request }) => {
    const userInfo = (await request.json()) as LoginType;

    const { email, nickname, password, interests } = userInfo;
    // mock db 유저 회원가입

    // // 이미 등록된 사용자인지 확인
    // const existingUser = db.user.getAll().filter((user) => console.log(user));
    // // console.log(existingUser);

    // if (existingUser) {
    //   return HttpResponse.json({ error: "User already exists.", status: 409 });
    // }

    // mock db 유저 회원가입
    // mock db 유저 회원가입
    const createUser = db.user.create({
      email,
      nickname,
      password,
      interests,
    });

    console.log(createUser);
    if (createUser) {
      return HttpResponse.json({ status: 200, data: createUser });
    }
  }),
  http.get("/v1/api/user", () => {
    return HttpResponse.json(db.user.getAll());
  }),
];
