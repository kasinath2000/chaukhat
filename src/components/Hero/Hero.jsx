import React from "react";
import CustomBox from "../../components/UI/CustomBox";
import ImageCard from "../../components/UI/ImageCard";
import InfoCard from "../../components/UI/InfoCard";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import img1 from "../../../src/assets/img1.jpg";
import img2 from "../../../src/assets/img2.jpg";
import p1 from "../../../src/assets/p1.jpg";
import p3 from "../../../src/assets/p3.jpg";
import slide1 from "../../../src/assets/slide1.jpg";
import slide2 from "../../../src/assets/slide2.jpg";
import slide from "../../../src/assets/slide.jpg";
import slide3 from "../../../src/assets/slide.jpg";
import slide0 from "../../../src/assets/slide0.jpg";
import LinkChipCard from "../../components/UI/LinkChipCard";
import HeroSlider from "../../components/HeroSlider";
import SocialLinks from "../../components/SocialLinks/SocialLinks"; // ✅ import if not already

const featuredItems = [
  { title: "Book Collection", src: img2, alt: "Book Collection" },
  { title: "Book Collection", src: img2, alt: "Book Collection" },
  { title: "Book Collection", src: img2, alt: "Book Collection" },
  { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
  { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
  { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
  { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
  { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
  { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
  { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
  { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
  { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
  { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
  { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
  { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
  { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
  { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
  { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
];
const slides = [
  {
    src: slide1,
    alt: "Books",
  },
  {
    src: slide2,
    alt: "Coming",
  },
  {
    src: slide,
    alt: "More",
  },
  {
    src: slide0,
    alt: "More",
  },
  {
    src: slide3,
    alt: "More",
  },
  // Add up to 14 slides as needed
];

const editorInfo = [
  {
    image: p1,
    alt: "Editor 1",
    name: "नीरज छिलवार",
    role: `प्रधान संपादक एवं संस्थापक : चौखट पत्रिका (2025)\nसंपादक : वर्धा डायरी (2024)\nसृजनात्मक रचनाकार, रंगकर्मी, फिल्म निर्माता-निर्देशक`,
    address: "4033, गली नं 17, अजीत नगर, गांधी नगर, दिल्ली – 110031",
    email: "talk2neeraj92@gmail.com",
    phone: "8929995706 / 9822726080",
  },
  {
    image: p3,
    alt: "Editor 2",
    name: "डॉ. कल्पना पाठक",
    role: `संपादक चौखट पत्रिका\nसहायक प्राध्यापक, हिन्दी विभाग\nबी. एन. कॉलेज (स्वायत्त), धुबरी, असम`,
    email: "kalpanapathak@bncollege.co.in / jupitarapathak2014@gmail.com",
  },
];

const Links = [
  { label: "संस्थापक", href: "/founder" },
  { label: "संरक्षक", href: "/editorial-board" },
  { label: " परामर्श मंडल", href: "/guide-board" },
  { label: "संपादक मण्डल", href: "/editorial-board" },
  { label: "विशेषज्ञ समिति", href: "/expert-committee" },
  { label: "सक्रिय सहयोगी सदस्य", href: "/active-members" },
];

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        padding: 2,
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: "stretch",
        gap: 3,
        flexWrap: "nowrap",
      }}
    >
      {/* Left Sidebar: Editor Info */}
      <CustomBox
        sx={{
          width: isMobile ? "100%" : isTablet ? "30%" : "20%",
          backgroundColor: "#EAA64D",
          color: "#210F37",
        }}
      >
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          प्रधान संपादक
        </Typography>
        {editorInfo.map((info, index) => (
          <InfoCard key={index} {...info} />
        ))}
      </CustomBox>

      {/* Center Section: Slider + Small Cards */}
      <CustomBox
        sx={{
          width: isMobile ? "100%" : isTablet ? "70%" : "60%",
          backgroundColor: "#EAA64D",
          color: "#210F37",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* 1. Hero Slider */}
        <HeroSlider slides={slides} />

        {/* 2. Small Image Cards Below */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "wrap",
            mt: 1,
            width: "100%",
            overflowY: "auto",
            maxHeight: "90vh",
          }}
        >
          {featuredItems.map((item, index) => (
            <ImageCard
              key={index}
              title={item.title}
              src={item.src}
              alt={item.alt}
              width={180}
              height={260}
            />
          ))}
        </Box>
      </CustomBox>

      {/* Right Sidebar */}
      {/* <CustomBox
        sx={{
          width: isMobile ? "100%" : isTablet ? "100%" : "20%",
          backgroundColor: "#EAA64D",
          color: "#210F37",
        }}
      >
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          चौखट परिवार
        </Typography>
        <Box display="flex" flexDirection="column" gap={1}>
          <LinkChipCard links={Links} />
        </Box>
      </CustomBox> */}
      {/* Right Sidebar */}
      <Box
        sx={{
          width: isMobile ? "100%" : isTablet ? "100%" : "20%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* ✅ Box 1: Social Links */}
        <CustomBox sx={{ backgroundColor: "#EAA64D", color: "#210F37" }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            सोशल मीडिया
          </Typography>
          <SocialLinks />
        </CustomBox>

        {/* ✅ Box 2: चौखट परिवार */}
        <CustomBox sx={{ backgroundColor: "#EAA64D", color: "#210F37" }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            चौखट परिवार
          </Typography>
          <LinkChipCard links={Links} />
        </CustomBox>

        {/* ✅ Box 3: हाल की अपडेट्स */}
        <CustomBox sx={{ backgroundColor: "#F2C76E", color: "#210F37" }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            मुख्य सूचनाएं
          </Typography>
          <Typography variant="body2">• जुलाई अंक प्रकाशित</Typography>
          <Typography variant="body2">• नई कार्यशाला की घोषणा</Typography>
        </CustomBox>
      </Box>
    </Box>
  );
};

export default Home;
