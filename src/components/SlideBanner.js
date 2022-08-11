import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";

const SlidBanner = ({ show = 3, page = 3, imgsPath = [] }) => {
  const settings = {
    dots: true,
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
          <div>
            <img src={imgPath} />
          </div>
        ))}
      </Slider>
    </SliderWrap>
  );
};

const SliderWrap = styled.div`
  .slick-arrow:before {
    content: "\f105";
    color: black;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    margin-right: 10px;
  }
  .slick-slide {
    
  }
  .slick-next{
    
  }
  .slick-prev{

  }
  .slick-arrow {
    z-index: 1;
  }

  width: 80%;
  height: auto;
`;

const CustomNextArrow = styled.div`
  color: black;
`;

const CustomPrevArrow = styled.div`
  color: black;
`;

export default SlidBanner;
