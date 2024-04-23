"use client";
import Image from "next/image";

// styles
import { HomeContainer } from "@/app/styles/Home/HomeStyles";

// components
import GlobalHeader from "./components/GlobalHeader";
import InputSection from "./components/Home/InputSection";

const Home = () => {
  return (
    <HomeContainer>
      <GlobalHeader />
      <InputSection />
    </HomeContainer>
  );
};

export default Home;
