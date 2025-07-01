import React from "react";
import { Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AutoSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box sx={{ width: "100%", mb: 3 }}>
      <Slider {...settings}>
        {images.map((img, i) => (
          <Box key={i}>
            <img
              src={img.src}
              alt={img.alt}
              style={{ width: "100%", maxHeight: 300, objectFit: "cover", borderRadius: 8 }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default AutoSlider;
