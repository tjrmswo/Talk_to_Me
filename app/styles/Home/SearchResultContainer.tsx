import { userDataDTO } from "@/app/types/aboutHome";
import Image from "next/image";

interface SearchResultContainerType {
  userData: userDataDTO[];
  getUserData: (data: userDataDTO) => void;
}

const SearchResultContainer: React.FC<SearchResultContainerType> = ({
  userData,
  getUserData,
}) => {
  return (
    <div className="searchResultContainer">
      {userData.map((user, i) => {
        const img = require(`@/app/assets/home/${user.profile}.png`);
        return (
          <div
            className="userSearchResult"
            key={i}
            onClick={() => getUserData(user)}
          >
            <div className="imgContainer">
              <Image src={img} alt="아바타 사진" width={100} height={100} />
            </div>
            <h3 style={{ textAlign: "center" }}>{user.nickname}</h3>
            <div className="interestsContainer">
              {user.interests.map((interest, i) => (
                <span className="interest" key={i}>
                  #{interest}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResultContainer;
