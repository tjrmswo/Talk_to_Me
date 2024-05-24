/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useEffect, useState } from "react";

// styles
import { HomeContainer } from "@/app/styles/Home/HomeStyles";
import CategoryContainer from "./components/Home/CategoryContainer";
import SearchResultContainer from "./components/Home/SearchResultContainer";

// components
import GlobalHeader from "./components/GlobalHeader";
import InputSection from "./components/Home/InputSection";
import LoadingPage from "./components/LoadingPage";
import ErrorPage from "./components/ErrorPage";
import PromotionSection from "./components/Home/PromotionSection";

// types
import { userDataDTO, userSearchDTO } from "./types/aboutHome";

// libraries
import { useQuery } from "react-query";
import axios from "axios";
import { useRecoilState } from "recoil";
import { handleInputSection } from "./atom/state";

// constants
import { Interests } from "./constants/signup/signupConstants";

const Home = () => {
  // 전체 유저 데이터
  const [userData, setUserData] = useState<userDataDTO[]>([]);
  // 검색한 데이터
  const [searchData, setSearchData] = useState<userSearchDTO>({
    nickname: "",
    interests: [],
  });
  const { nickname, interests } = searchData;

  // input Section boolean
  const [openInputSection, setOpenInputSection] =
    useRecoilState<boolean>(handleInputSection);

  // 선택된 유저 데이터
  const [selectUserData, setSelectUserData] = useState<userDataDTO>({
    email: "",
    nickname: "",
    password: "",
    passwordChecked: "",
    interests: [],
    kakao_id: 0,
    profile: "",
    gender: "",
    profile_image: "",
    thumbnail_image: "",
  });

  // 전체 유저 데이터 가져오기
  const getAllUserData = useQuery({
    queryKey: ["userData"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ADDRESS}/user/all`
      );
      const data = response.data;
      console.log(data);
      setUserData(data);

      return data;
    },
  });

  const getUserData = (data: userDataDTO) => {
    setSelectUserData(data);
  };

  useEffect(() => {
    if (nickname === "") {
      getAllUserData.refetch();
    }
  }, [searchData]);

  useEffect(() => {
    console.log("interests: ", interests);
    console.log("searchData: ", searchData);
  }, [interests, searchData]);

  if (getAllUserData.isLoading) return <LoadingPage />;
  if (getAllUserData.isError) return <ErrorPage />;

  return (
    <HomeContainer openinputsection={String(openInputSection)}>
      <GlobalHeader />
      {openInputSection === true ? (
        <div className="ContentContainer2">
          <InputSection
            userData={userData}
            setUserData={setUserData}
            searchData={searchData}
            setSearchData={setSearchData}
          />
          <CategoryContainer Interests={Interests} />
          {nickname.length > 0 && (
            <h2 className="searchResultMent">
              {nickname}에 대한 검색 결과입니다.
            </h2>
          )}
          <SearchResultContainer
            userData={userData}
            getUserData={getUserData}
          />
        </div>
      ) : (
        <div className="ContentContainer">
          <PromotionSection userData={userData} searchData={searchData} />
        </div>
      )}
    </HomeContainer>
  );
};

export default Home;
