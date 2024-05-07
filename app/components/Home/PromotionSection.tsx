import Image from "next/image";

// types
import { userDataDTO, userSearchDTO } from "@/app/types/aboutHome";

// styles
import { PromtionSectionContainer } from "@/app/styles/Home/UserSectionStyles";

// img

interface userSectionType {
  userData: userDataDTO[];
  searchData: userSearchDTO;
}

const promotionSection: React.FC<userSectionType> = ({ userData }) => {
  return (
    <PromtionSectionContainer>
      <h1 className="title">Talk_to_Me∘</h1>
      <h3>인터넷 친구를 만들고 싶다면</h3>
      <h3>바로 채팅을 시작해보세요!</h3>
      <h3>공통 관심사를 가진 사람과</h3>
      <h3>친구를 맺어 대화할 수 있습니다💬</h3>
      {/* <button>바로 시작하기</button> */}
    </PromtionSectionContainer>
  );
};

export default promotionSection;
