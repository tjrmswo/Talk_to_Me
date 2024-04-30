import { UserInterests } from "@/app/types/aboutSignup";
import { SetStateAction } from "react";

export interface HandleInterestType {
  interests: string[];
  interest: string;
  setInterests: React.Dispatch<SetStateAction<string[]>>;
}

const useHandleInterest = ({
  interests,
  interest,
  setInterests,
}: HandleInterestType) => {
  function handleInterest() {
    if (!interests.includes(interest)) {
      setInterests((prev) => [...prev, interest]);
    } else if (interests.includes(interest)) {
      const removeSelectedData = interests.filter((data) => data !== interest);
      setInterests(removeSelectedData);
    }
  }
  return handleInterest;
};

export default useHandleInterest;
