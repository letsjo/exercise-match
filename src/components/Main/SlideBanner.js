import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";

const SlidBanner = ({ show = 1, page = 1, imgsPath = [] }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: show,
    slidesToScroll: page,
  };
  return (
    <SliderFrame>
      <SliderWrap>
        <Slider {...settings}>
          {imgsPath.map((imgPath,index) => (
            <SliderImageWrap key={index}>
              <img src={imgPath} />
            </SliderImageWrap>
          ))}
        </Slider>
      </SliderWrap>
    </SliderFrame>
  );
};

const SliderFrame = styled.div`
  display: flex;
  justify-content: center;
`;

const SliderWrap = styled.div`
  width: 1440px;
  height: 360px;
  overflow: hidden;
  margin-bottom: 30px;
  &:hover .slick-arrow::before{
    display: block;
  }
  .slick-arrow {
    // 두 화살표의 공통요소를 입력합니다.
  }
  .slick-prev {
    z-index: 1;
    left: 50px;
    // 좌측 화살표의 위치값을 넣어줍니다.
    ::before {
      display: none;
      // 좌측 화살표의 요소를 입력합니다.
      content: "\f104";
      color: white;
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      font-size: 49px;
    }
  }
  .slick-next {
    right: 50px;
    // 우측화살표의 위치값을 넣어줍니다.
    &::before {
      display: none;
      //우측 화살표의 요소를 입력합니다.
      content: "\f105";
      color: white;
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      font-size: 49px;
    }
  }
`;

const SliderImageWrap = styled.div`
  width: 100%;
  text-align: center;
  img {
    width: 1440px;
    height: 360px;
    object-fit: cover;
  }
`;

const CustomNextArrow = styled.div`
  color: black;
`;

const CustomPrevArrow = styled.div`
  color: black;
`;

export default SlidBanner;
