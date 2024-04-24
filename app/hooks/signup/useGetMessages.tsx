import { SetStateAction } from "react";

export interface MessageHooksType {
  message: string;
  setMessages: React.Dispatch<SetStateAction<string>>;
  messageAnimation: boolean;
  setMessageAnimation: React.Dispatch<SetStateAction<boolean>>;
}

const useGetMessages = ({
  message,
  setMessages,
  messageAnimation,
  setMessageAnimation,
}: MessageHooksType) => {
  function getMessages() {
    switch (message) {
      case "email":
        setMessages("사용하실 이메일을 입력해주세요");
        break;
      case "nickname":
        setMessages("나만의 개성있는 닉네임을 입력해주세요");
        break;
      case "password":
        setMessages("비밀번호를 입력해주세요");
        break;
      case "passwordChecked":
        setMessages("다시 한 번 비밀번호를 입력해주세요");
        break;
      case "interest":
        setMessages("요즘 관심이 있는 분야를 선택해주세요!");
        break;
      default:
        setMessages(""); // 기본값 처리
        break;
    }
    if (messageAnimation === false) {
      setMessageAnimation(true);
    } else if (messageAnimation == true) {
      setMessageAnimation(false);
    }
  }
  return getMessages;
};

export default useGetMessages;
