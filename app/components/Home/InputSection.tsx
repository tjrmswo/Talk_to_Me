"use client";
import Image from "next/image";

// styles
import { InputContainer } from "@/app/styles/Home/InputSectionStyles";

// img
import Search from "@/app/assets/home/searchIcon.png";
import { Interests } from "@/app/constants/signup/signupConstants";

const InputSection = () => {
  return (
    <InputContainer>
      <div className="row">
        <input className="input" placeholder="찾고 싶은 유저를 검색하세요" />
        <Image
          src={Search}
          alt="검색 아이콘"
          width={20}
          height={20}
          className="img"
        />

        <select className="selectInterest">
          {Interests.map((interest, i) => (
            <option key={i}>{interest}</option>
          ))}
        </select>
      </div>
    </InputContainer>
  );
};

export default InputSection;
