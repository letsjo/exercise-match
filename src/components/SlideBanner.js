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
    nextArrow: <CustomNextArrow>{">"}</CustomNextArrow>,
    prevArrow: <CustomPrevArrow>{"<"}</CustomPrevArrow>,
  };
  return (
    <SliderWrap>
      <Slider {...settings}>
        {imgsPath.map((imgPath) => (
          <SliderImageWrap>
            <img src={imgPath} />
          </SliderImageWrap>
        ))}
      </Slider>
    </SliderWrap>
  );
};

const SliderWrap = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 50px;
  .slick-arrow:before {
    content: "\f105";
    color: black;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    margin-right: 10px;
  }
  .slick-slide {
    width: 100%;
  }
  .slick-next {
  }
  .slick-prev {
  }
  .slick-arrow {
    z-index: 1;
  }
`;

const SliderImageWrap = styled.div`
  width: 100%;
  text-align: center;
  img {
    width: 100%;
    /* width: 1440px;
    height: 360px; */
  }
`;

const CustomNextArrow = styled.div`
  color: black;
`;

const CustomPrevArrow = styled.div`
  color: black;
`;

export default SlidBanner;
