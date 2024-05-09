"use client";

import { useRouter } from "next/navigation";
// styles
import { ErrorContainer } from "../styles/Global/ErrorPageStyles";
const ErrorPage = () => {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };
  return (
    <ErrorContainer>
      <div className="ErrorMent">에러 페이지</div>
      <button onClick={goHome}>Home</button>
    </ErrorContainer>
  );
};

export default ErrorPage;
