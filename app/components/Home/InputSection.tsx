"use client";
import Image from "next/image";

// styles
import { InputContainer } from "@/app/styles/Home/InputSectionStyles";

// constants
import { Interests } from "@/app/constants/signup/signupConstants";

// types
import { userDataDTO, userSearchDTO } from "@/app/types/aboutHome";
import { SetStateAction } from "react";

// img
import Search from "@/app/assets/header/search.png";

interface inputSectionType {
  userData: userDataDTO[];
  setUserData: React.Dispatch<SetStateAction<userDataDTO[]>>;
  searchData: userSearchDTO;
  setSearchData: React.Dispatch<SetStateAction<userSearchDTO>>;
}

const InputSection: React.FC<inputSectionType> = ({
  userData,
  setUserData,
  searchData,
  setSearchData,
}) => {
  // input 검색
  const searchUser = (user: string) => {
    setSearchData((prev) => ({
      ...prev,
      nickname: user,
    }));
    const search = userData.filter((data) => data.nickname.includes(user));
    if (search.length > 0) {
      setUserData(search);
    }
  };

  // // select 검색
  // const selectSearchUser = (searchInterest: string) => {
  //   console.log(searchInterest);
  //   if (!searchData.interests.includes(searchInterest)) {
  //     setSearchData((prev) => ({
  //       ...prev,
  //       interests: [...prev.interests, searchInterest],
  //     }));
  //   } else {
  //     const removeInterest = searchData.interests.filter(
  //       (interest) => interest !== searchInterest
  //     );
  //     setSearchData((prev) => ({
  //       ...prev,
  //       interests: removeInterest,
  //     }));
  //   }
  // };

  return (
    <InputContainer>
      <div className="row">
        <Image src={Search} alt="검색" width={20} height={20} />
        <input
          className="input"
          placeholder="찾고 싶은 유저를 검색하세요"
          onChange={(e) => searchUser(e.target.value)}
        />
      </div>
    </InputContainer>
  );
};

export default InputSection;
