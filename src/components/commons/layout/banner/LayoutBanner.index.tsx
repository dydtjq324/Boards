import { SliderItem, Wrapper } from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI(): JSX.Element {
  const settings = {
    infinite: true,
    speed: 700,
    // autoplay: true, // 자동으로 넘어가도록 추가
    // autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <SliderItem src="/images/layout/banner02.png" />
      </Slider>
    </Wrapper>
  );
}
