"use client";
import Image from "next/image";
import { useState } from "react";

// styles
import { HomeContainer } from "@/app/styles/Home/HomeStyles";

// components
import GlobalHeader from "./components/GlobalHeader";
import InputSection from "./components/Home/InputSection";
import LoadingPage from "./components/LoadingPage";
import ErrorPage from "./components/ErrorPage";
import UserSection from "./components/Home/UserSection";

// types
import { userDataDTO } from "./types/aboutHome";

// libraries
import { useQuery } from "react-query";
import axios from "axios";

const Home = () => {
  const [userData, setUserData] = useState<userDataDTO[]>([]);

  const getAllUserData = useQuery({
    queryKey: ["userData"],
    queryFn: async () => {
      const response = await axios.get("/v1/api/user");
      const data = response.data;
      console.log(response);

      setUserData(data);

      return data;
    },
  });

  if (getAllUserData.isLoading) return <LoadingPage />;
  if (getAllUserData.isError) return <ErrorPage />;

  return (
    <HomeContainer>
      <GlobalHeader />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 0,
          backgroundColor: "#F9F8F8",
          width: "60vw",
          height: "90vh",
        }}
      >
        <InputSection />
        <UserSection userData={userData} />
      </div>
    </HomeContainer>
  );
};

export default Home;
