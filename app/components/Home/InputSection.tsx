"use client";
import Image from "next/image";

// styles
import { InputContainer } from "@/app/styles/Home/InputSectionStyles";

// img
import Search from "@/app/assets/home/searchIcon.png";

const InputSection = () => {
  return (
    <InputContainer>
      <div className="row">
        <input className="input" />
        <Image src={Search} alt="검색 아이콘" />
      </div>
      <div className="divider"></div>
    </InputContainer>
  );
};

export default InputSection;
