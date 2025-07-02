import React from "react";
import Slider from "react-slick";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      left: "10px",
      zIndex: 2,
      transform: "translateY(-50%)",
      color: "#fff",
      backgroundColor: "rgba(33,15,55,0.6)",
      "&:hover": { backgroundColor: "rgba(33,15,55,0.8)" },
    }}
  >
    <ArrowBackIosNew />
  </IconButton>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      right: "10px",
      zIndex: 2,
      transform: "translateY(-50%)",
      color: "#fff",
      backgroundColor: "rgba(33,15,55,0.6)",
      "&:hover": { backgroundColor: "rgba(33,15,55,0.8)" },
    }}
  >
    <ArrowForwardIos />
  </IconButton>
);

const HeroSlider = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Box
      width="100%"
      sx={{
        maxWidth: "100%",
        overflow: "hidden",
        borderRadius: 2,
        position: "relative",
      }}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              height: 400,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroSlider;
