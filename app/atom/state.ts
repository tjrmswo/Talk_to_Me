import { atom } from "recoil";
import { UserInterests } from "../types/aboutSignup";

export const userInterests = atom<string[]>({
  key: "user_interests",
  default: [],
});

export const guideMessage = atom<string>({
  key: "get_message",
  default: "",
});

export const messageAnimationState = atom<boolean>({
  key: "get_animation_state",
  default: false,
});
