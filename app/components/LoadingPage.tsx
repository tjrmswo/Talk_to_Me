"use client";

// styles
import { LoadingContainer } from "@/app/styles/Global/LoadingPageStyles";

const LoadingPage = () => {
  return (
    <LoadingContainer>
      <div className="movingMent">홈페이지로 이동중입니다~</div>
      <div className="waitMent">잠시만 기다려주세요!!</div>
    </LoadingContainer>
  );
};

export default LoadingPage;
