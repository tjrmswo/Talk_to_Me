/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";

// libraries
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// types
import { userDataDTO, userSearchDTO } from "@/app/types/aboutHome";

// styles
import { PromtionSectionContainer } from "@/app/styles/Home/PromotionSectionStyles";
import { ments } from "@/app/constants/home/PromotionMents";
import { useRouter } from "next/navigation";

// img

interface userSectionType {
  userData: userDataDTO[];
  searchData: userSearchDTO;
}

const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1500,
  autoplaySpeed: 3500,
  cssEase: "linear",
};

const promotionSection: React.FC<userSectionType> = ({ userData }) => {
  const router = useRouter();

  const goLogin = () => {
    router.push("/pages/login");
  };
  return (
    <PromtionSectionContainer>
      <h2 className="title">Talk_to_Me∘</h2>
      {ments.slice(0, 3).map((ment, i) => (
        <h3
          style={{
            fontSize: "1.2rem",
            fontFamily: "fantasy",
            marginLeft: "1rem",
            marginRight: "1rem",
            whiteSpace: "pre-line",
            textAlign: "center",
          }}
          key={i}
        >
          {ment}
        </h3>
      ))}
      <button className="startButton" onClick={goLogin}>
        무료로 시작하기 →
      </button>
    </PromtionSectionContainer>
  );
};

export default promotionSection;
