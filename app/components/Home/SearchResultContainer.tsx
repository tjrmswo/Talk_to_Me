import Image from "next/image";
// types
import { userDataDTO } from "@/app/types/aboutHome";

//img
import AddFriends from "@/app/assets/home/Group_add_fill.png";
import Profile from "@/app/assets/home/bearded_black_man.png";
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
        // const img = require(`@/app/assets/home/${user.profile}.png`);
        return (
          <div
            className="userSearchResult"
            key={i}
            onClick={() => getUserData(user)}
          >
            <div
              style={{
                textAlign: "end",
              }}
            >
              <Image src={AddFriends} alt="친구 추가" />
            </div>
            <div className="imgContainer">
              <Image src={Profile} alt="아바타 사진" width={100} height={100} />
            </div>
            <h3 style={{ textAlign: "center" }}>{user.nickname}</h3>
            {/* <div className="interestsContainer">
              {user.interests.map((interest, i) => (
                <span className="interest" key={i}>
                  #{interest}
                </span>
              ))}
            </div> */}
          </div>
        );
      })}
    </div>
  );
};

export default SearchResultContainer;
