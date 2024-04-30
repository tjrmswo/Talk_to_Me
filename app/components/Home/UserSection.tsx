import Image from "next/image";

// types
import { userDataDTO } from "@/app/types/aboutHome";

// styles
import {
  UserSectionContainer,
  ExportUser,
} from "@/app/styles/Home/UserSectionStyles";

// img
import Profile2 from "@/app/assets/home/profile2.jpg";

interface userSectionType {
  userData: userDataDTO[];
}

const UserSection: React.FC<userSectionType> = ({ userData }) => {
  console.log("userData: ", userData);
  return (
    <UserSectionContainer>
      {userData.map((data: userDataDTO, i: number) => (
        <div className="personnelSection" key={i}>
          <div className="personnelColumn">
            <Image
              style={{
                borderRadius: "0.5rem",
              }}
              src={Profile2}
              alt="프로필"
              width={60}
              height={60}
            />
          </div>
          <div className="personnelColumn2">
            <h4 style={{ marginBottom: 0 }}>{data.nickname}</h4>
            <div className="interestsContainer">
              {data.interests.map((interest: string, i: number) => (
                <span
                  style={{
                    width: "auto",
                  }}
                  className="personnelsInterest"
                  key={i}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
      <ExportUser>유저 불러오기</ExportUser>
    </UserSectionContainer>
  );
};

export default UserSection;
