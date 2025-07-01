// import React from "react";
// import CustomBox from "../../components/UI/CustomBox";
// import ImageCard from "../../components/UI/ImageCard";
// import InfoCard from "../../components/UI/InfoCard";
// import { Box, Typography } from "@mui/material";
// import img1 from "../../../src/assets/img1.jpg";
// import img2 from "../../../src/assets/img2.jpg";
// import p1 from "../../../src/assets/p1.jpg";
// import p3 from "../../../src/assets/p3.jpg";
// import LinkChipCard from "../../components/UI/LinkChipCard"; // Add this to your imports

// const featuredItems = [
//   { title: "Book Collection", src: img2, alt: "Book Collection" },
//   { title: "Book Collection", src: img2, alt: "Book Collection" },
//   { title: "Book Collection", src: img2, alt: "Book Collection" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
// ];

// const editorInfo = [
//   {
//     image: p1,
//     alt: "Editor 1",
//     description: `नीरज छिलवार, प्रधान संपादक एवं संस्थापक : चौखट पत्रिका (2025)।
// संपादक : वर्धा डायरी, मासिक ई पत्रिका प्रवेशांक (2024)।
// सृजनात्मक रचनाकार, रंगकर्मी, फिल्म निर्माता-निर्देशक।
// म. न : 4033, गली न: 17, अजीत नगर, गांधी नगर, दिल्ली – 110031
// ईमेल: talk2neeraj92@gmail.com
// संपर्क सूत्र: 8929995706 / 9822726080`,
//   },
//   {
//     image: p3,
//     alt: "Editor 2",
//     description: `डॉ. कल्पना पाठक, संपादक चौखट पत्रिका
// सहायक प्राध्यापक, हिन्दी विभाग
// बी. एन. कॉलेज (स्वायत्त), धुबरी, असम
// ईमेल: kalpanapathak@bncollege.co.in / jupitarapathak2014@gmail.com`,
//   },
// ];

// const Links = [
//   { label: "संरक्षक पत्रिका के बारे में", href: "/about-magazine" },
//   { label: "संस्थापक", href: "/founder" },
//   { label: "संपादक मण्डल / मार्गदर्शक मण्डल", href: "/editorial-board" },
//   { label: "विशेषज्ञ समिति", href: "/expert-committee" },
//   { label: "सक्रिय सहयोगी सदस्य", href: "/active-members" },
// ];

// const Home = () => {
//   return (
//     <Box
//       sx={{
//         padding: 4,
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "stretch",
//         gap: 3,
//         flexWrap: "nowrap",
//       }}
//     >
//       {/* Left Sidebar - 20% */}
//       <CustomBox
//         sx={{
//           width: "20%",
//           backgroundColor: "#EAA64D",
//           color: "#210F37",
//         }}
//       >
//         <Typography variant="h6" fontWeight="bold" gutterBottom>
//           प्रधान संपादक
//         </Typography>

//         {editorInfo.map((info, index) => (
//           <InfoCard
//             key={index}
//             image={info.image}
//             alt={info.alt}
//             description={info.description}
//           />
//         ))}
//       </CustomBox>

//       {/* Center Section - 60% */}
//       <CustomBox
//         sx={{
//           width: "60%",
//           backgroundColor: "#EAA64D",
//           color: "#210F37",
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             gap: 2,
//             justifyContent: "center",
//             alignItems: "flex-start",
//             flexWrap: "wrap",
//             mt: 2,
//             overflowY: "auto",
//             maxHeight: "90vh",
//             pr: 1,
//           }}
//         >
//           {featuredItems.map((item, index) => (
//             <ImageCard
//               key={index}
//               title={item.title}
//               src={item.src}
//               alt={item.alt}
//               width={350}
//               height={500}
//             />
//           ))}
//         </Box>
//       </CustomBox>

//       {/* Right Sidebar - 20% */}
//       <CustomBox
//         sx={{
//           width: "20%",
//           backgroundColor: "#EAA64D",
//           color: "#210F37",
//         }}
//       >
//         <Typography variant="h6" fontWeight="bold" gutterBottom>
//           पत्रिका के बारे में
//         </Typography>

//         <Box display="flex" flexDirection="column" gap={1}>
//           <LinkChipCard title="इनके  के बारे में" links={Links} />
//         </Box>
//       </CustomBox>
//     </Box>
//   );
// };

// export default Home;

//responsive
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
import LinkChipCard from "../../components/UI/LinkChipCard";

const featuredItems = [
  { title: "Book Collection", src: img2, alt: "Book Collection" },
  { title: "Book Collection", src: img2, alt: "Book Collection" },
  { title: "Book Collection", src: img2, alt: "Book Collection" },
  { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
  { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
  { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
];

const editorInfo = [
  {
    image: p1,
    alt: "Editor 1",
    description: `नीरज छिलवार, प्रधान संपादक एवं संस्थापक : चौखट पत्रिका (2025)। 
संपादक : वर्धा डायरी, मासिक ई पत्रिका प्रवेशांक (2024)। 
सृजनात्मक रचनाकार, रंगकर्मी, फिल्म निर्माता-निर्देशक। 
म. न : 4033, गली न: 17, अजीत नगर, गांधी नगर, दिल्ली – 110031 
ईमेल: talk2neeraj92@gmail.com 
संपर्क सूत्र: 8929995706 / 9822726080`,
  },
  {
    image: p3,
    alt: "Editor 2",
    description: `डॉ. कल्पना पाठक, संपादक चौखट पत्रिका 
सहायक प्राध्यापक, हिन्दी विभाग 
बी. एन. कॉलेज (स्वायत्त), धुबरी, असम 
ईमेल: kalpanapathak@bncollege.co.in / jupitarapathak2014@gmail.com`,
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
      {/* Left Sidebar */}
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
          <InfoCard
            key={index}
            image={info.image}
            alt={info.alt}
            description={info.description}
          />
        ))}
      </CustomBox>

      {/* Center Section */}
      <CustomBox
        sx={{
          width: isMobile ? "100%" : isTablet ? "70%" : "60%",
          backgroundColor: "#EAA64D",
          color: "#210F37",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "wrap",
            mt: 2,
            overflowY: "auto",
            maxHeight: "90vh",
            pr: 1,
          }}
        >
          {featuredItems.map((item, index) => (
            <ImageCard
              key={index}
              title={item.title}
              src={item.src}
              alt={item.alt}
              width={350}
              height={500}
            />
          ))}
        </Box>
      </CustomBox>

      {/* Right Sidebar */}
      <CustomBox
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
      </CustomBox>
    </Box>
  );
};

export default Home;
