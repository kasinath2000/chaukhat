import React from "react";
import { Box, Typography } from "@mui/material";
import introData from "../data/introData";
import CustomBox from "../components/UI/CustomBox";

const Intro = () => {
  return (
    <Box className="p-6 max-w-4xl mx-auto">
      <CustomBox sx={{ backgroundColor: "#EAA64D",}}>
        <Box className="w-full">
          <Typography variant="h5" className="mb-4 font-bold text-black">
            {introData.title}
          </Typography>

          <Typography
            variant="body1"
            className="mb-5 whitespace-pre-line text-[#37195c] leading-relaxed"
          >
            {introData.content}
          </Typography>

          <Box className="mt-6 space-y-1 text-blue-900">
            <Typography variant="subtitle1" className="font-semibold">
              - {introData.author}
            </Typography>
            <Typography variant="body2">{introData.designation}</Typography>
          </Box>
        </Box>
      </CustomBox>
    </Box>
  );
};

export default Intro;
