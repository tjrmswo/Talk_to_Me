import { UserInterests } from "@/app/types/aboutSignup";
import { SetStateAction } from "react";

export interface HandleInterestType {
  interests: UserInterests;
  interest: string;
  setInterests: React.Dispatch<SetStateAction<UserInterests>>;
}

const useHandleInterest = ({
  interests,
  interest,
  setInterests,
}: HandleInterestType) => {
  function handleInterest() {
    if (!interests.interests.includes(interest)) {
      setInterests((prev) => ({
        interests: [...prev.interests, interest],
      }));
    } else if (interests.interests.includes(interest)) {
      const removeSelectedData = interests.interests.filter(
        (data) => data !== interest
      );
      setInterests({
        interests: removeSelectedData,
      });
    }
  }
  return handleInterest;
};

export default useHandleInterest;
