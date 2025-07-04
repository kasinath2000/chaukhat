// import React from "react";
// import CustomBox from "../../components/UI/CustomBox";
// import ImageCard from "../../components/UI/ImageCard";
// import InfoCard from "../../components/UI/InfoCard";
// import { Box, Typography, useMediaQuery } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
// import img1 from "../../../src/assets/img1.jpg";
// import img2 from "../../../src/assets/img2.jpg";
// import p1 from "../../../src/assets/p1.jpg";
// import p3 from "../../../src/assets/p3.jpg";
// import slide1 from "../../../src/assets/slide1.jpg";
// import slide2 from "../../../src/assets/slide2.jpg";
// import slide from "../../../src/assets/slide.jpg";
// import slide3 from "../../../src/assets/slide.jpg";
// import slide0 from "../../../src/assets/slide0.jpg";
// import LinkChipCard from "../../components/UI/LinkChipCard";
// import HeroSlider from "../../components/HeroSlider";
// import SocialLinks from "../../components/SocialLinks/SocialLinks"; // ✅ import if not already

// const featuredItems = [
//   { title: "Book Collection", src: img2, alt: "Book Collection" },
//   { title: "Book Collection", src: img2, alt: "Book Collection" },
//   { title: "Book Collection", src: img2, alt: "Book Collection" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
// ];
// const slides = [
//   {
//     src: slide1,
//     alt: "Books",
//   },
//   {
//     src: slide2,
//     alt: "Coming",
//   },
//   {
//     src: slide,
//     alt: "More",
//   },
//   {
//     src: slide0,
//     alt: "More",
//   },
//   {
//     src: slide3,
//     alt: "More",
//   },
//   // Add up to 14 slides as needed
// ];

// const editorInfo = [
//   {
//     image: p1,
//     alt: "Editor 1",
//     name: "नीरज छिलवार",
//     role: `प्रधान संपादक एवं संस्थापक : चौखट पत्रिका (2025)\nसंपादक : वर्धा डायरी (2024)\nसृजनात्मक रचनाकार, रंगकर्मी, फिल्म निर्माता-निर्देशक`,
//     address: "4033, गली नं 17, अजीत नगर, गांधी नगर, दिल्ली – 110031",
//     email: "talk2neeraj92@gmail.com",
//     phone: "8929995706 / 9822726080",
//   },
//   {
//     image: p3,
//     alt: "Editor 2",
//     name: "डॉ. कल्पना पाठक",
//     role: `संपादक चौखट पत्रिका\nसहायक प्राध्यापक, हिन्दी विभाग\nबी. एन. कॉलेज (स्वायत्त), धुबरी, असम`,
//     email: "kalpanapathak@bncollege.co.in / jupitarapathak2014@gmail.com",
//   },
// ];

// const Links = [
//   { label: "संस्थापक", href: "/founder" },
//   { label: "संरक्षक", href: "/editorial-board" },
//   { label: " परामर्श मंडल", href: "/guide-board" },
//   { label: "संपादक मण्डल", href: "/editorial-board" },
//   { label: "विशेषज्ञ समिति", href: "/expert-committee" },
//   { label: "सक्रिय सहयोगी सदस्य", href: "/active-members" },
// ];

// const Home = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const isTablet = useMediaQuery(theme.breakpoints.down("md"));

//   return (
//     <Box
//       sx={{
//         padding: 2,
//         display: "flex",
//         flexDirection: isMobile ? "column" : "row",
//         justifyContent: "space-between",
//         alignItems: "stretch",
//         gap: 3,
//         flexWrap: "nowrap",
//       }}
//     >
      
//       {/* Left Sidebar: Editor Info */}
//       <CustomBox
//         sx={{
//           width: isMobile ? "100%" : isTablet ? "30%" : "20%",
//           backgroundColor: "#EAA64D",
//           color: "#210F37",
//         }}
//       >
//         <Typography variant="h6" fontWeight="bold" gutterBottom>
//           प्रधान संपादक
//         </Typography>
//         {editorInfo.map((info, index) => (
//           <InfoCard key={index} {...info} />
//         ))}
//       </CustomBox>

//       {/* Center Section: Slider + Small Cards */}
//       <CustomBox
//         sx={{
//           width: isMobile ? "100%" : isTablet ? "70%" : "60%",
//           backgroundColor: "#EAA64D",
//           color: "#210F37",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           gap: 2,
//         }}
//       >
//         {/* 1. Hero Slider */}
//         <HeroSlider slides={slides} />

//         {/* 2. Small Image Cards Below */}
//         <Box
//           sx={{
//             display: "flex",
//             gap: 2,
//             justifyContent: "center",
//             alignItems: "flex-start",
//             flexWrap: "wrap",
//             mt: 1,
//             width: "100%",
//             overflowY: "auto",
//             maxHeight: "90vh",
//           }}
//         >
//           {featuredItems.map((item, index) => (
//             <ImageCard
//               key={index}
//               title={item.title}
//               src={item.src}
//               alt={item.alt}
//               width={180}
//               height={260}
//             />
//           ))}
//         </Box>
//       </CustomBox>

//       {/* Right Sidebar */}
//       {/* <CustomBox
//         sx={{
//           width: isMobile ? "100%" : isTablet ? "100%" : "20%",
//           backgroundColor: "#EAA64D",
//           color: "#210F37",
//         }}
//       >
//         <Typography variant="h6" fontWeight="bold" gutterBottom>
//           चौखट परिवार
//         </Typography>
//         <Box display="flex" flexDirection="column" gap={1}>
//           <LinkChipCard links={Links} />
//         </Box>
//       </CustomBox> */}
//       {/* Right Sidebar */}
//       <Box
//         sx={{
//           width: isMobile ? "100%" : isTablet ? "100%" : "20%",
//           display: "flex",
//           flexDirection: "column",
//           gap: 2,
//         }}
//       >
//         {/* ✅ Box 1: Social Links */}
//         <CustomBox sx={{ backgroundColor: "#EAA64D", color: "#210F37" }}>
//           <Typography variant="h6" fontWeight="bold" gutterBottom>
//             सोशल मीडिया
//           </Typography>
//           <SocialLinks />
//         </CustomBox>

//         {/* ✅ Box 2: चौखट परिवार */}
//         <CustomBox sx={{ backgroundColor: "#EAA64D", color: "#210F37" }}>
//           <Typography variant="h6" fontWeight="bold" gutterBottom>
//             चौखट परिवार
//           </Typography>
//           <LinkChipCard links={Links} />
//         </CustomBox>

//         {/* ✅ Box 3: हाल की अपडेट्स */}
//         <CustomBox sx={{ backgroundColor: "#F2C76E", color: "#210F37" }}>
//           <Typography variant="h6" fontWeight="bold" gutterBottom>
//             मुख्य सूचनाएं
//           </Typography>
//           <Typography variant="body2">• जुलाई अंक प्रकाशित</Typography>
//           <Typography variant="body2">• नई कार्यशाला की घोषणा</Typography>
//         </CustomBox>
//       </Box>
//     </Box>
//   );
// };

// export default Home;








// import React from "react";
// import CustomBox from "../../components/UI/CustomBox";
// import ImageCard from "../../components/UI/ImageCard";
// import InfoCard from "../../components/UI/InfoCard";
// import { Box, Typography, useMediaQuery } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
// import img1 from "../../../src/assets/img1.jpg";
// import img2 from "../../../src/assets/img2.jpg";
// import p1 from "../../../src/assets/p1.jpg";
// import p3 from "../../../src/assets/p3.jpg";
// import slide1 from "../../../src/assets/slide1.jpg";
// import slide2 from "../../../src/assets/slide2.jpg";
// import slide from "../../../src/assets/slide.jpg";
// import slide3 from "../../../src/assets/slide.jpg";
// import slide0 from "../../../src/assets/slide0.jpg";
// import LinkChipCard from "../../components/UI/LinkChipCard";
// import HeroSlider from "../../components/HeroSlider";
// import SocialLinks from "../../components/SocialLinks/SocialLinks";

// const featuredItems = [
//   { title: "Book Collection", src: img2, alt: "Book Collection" },
//   { title: "Book Collection", src: img2, alt: "Book Collection" },
//   { title: "Book Collection", src: img2, alt: "Book Collection" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
// ];

// const slides = [
//   { src: slide1, alt: "Books" },
//   { src: slide2, alt: "Coming" },
//   { src: slide, alt: "More" },
//   { src: slide0, alt: "More" },
//   { src: slide3, alt: "More" },
// ];

// const editorInfo = [
//   {
//     image: p1,
//     alt: "Editor 1",
//     name: "नीरज छिलवार",
//     role: `प्रधान संपादक एवं संस्थापक : चौखट पत्रिका (2025)\nसंपादक : वर्धा डायरी (2024)\nसृजनात्मक रचनाकार, रंगकर्मी, फिल्म निर्माता-निर्देशक`,
//     address: "4033, गली नं 17, अजीत नगर, गांधी नगर, दिल्ली – 110031",
//     email: "talk2neeraj92@gmail.com",
//     phone: "8929995706 / 9822726080",
//   },
//   {
//     image: p3,
//     alt: "Editor 2",
//     name: "डॉ. कल्पना पाठक",
//     role: `संपादक चौखट पत्रिका\nसहायक प्राध्यापक, हिन्दी विभाग\nबी. एन. कॉलेज (स्वायत्त), धुबरी, असम`,
//     email: "kalpanapathak@bncollege.co.in / jupitarapathak2014@gmail.com",
//   },
// ];

// const Links = [
//   { label: "संस्थापक", href: "/founder" },
//   { label: "संरक्षक", href: "/editorial-board" },
//   { label: " परामर्श मंडल", href: "/guide-board" },
//   { label: "संपादक मण्डल", href: "/editorial-board" },
//   { label: "विशेषज्ञ समिति", href: "/expert-committee" },
//   { label: "सक्रिय सहयोगी सदस्य", href: "/active-members" },
// ];

// const Home = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const isTablet = useMediaQuery(theme.breakpoints.down("md"));

//   return (
//     <Box sx={{ padding: 2 }}>
//       {/* ✅ Top Welcome Box */}
//       <CustomBox
//         sx={{
//           mb: 3,
//           backgroundColor: "#210F37",
//           color: "#fff",
//           textAlign: "center",
//           padding: 2,
//         }}
//       >
//         <Typography variant="h6" fontWeight="bold">
//           साहित्य, समाज, कला और संस्कृति संसार की दहलीज ही चौखट है |
//         </Typography>
//         <Typography variant="body1">
//           आपका हमारी चौखट में स्वागत है |
//         </Typography>
//       </CustomBox>

//       {/* ✅ Main Layout */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: isMobile ? "column" : "row",
//           justifyContent: "space-between",
//           alignItems: "stretch",
//           gap: 3,
//           flexWrap: "nowrap",
//         }}
//       >
//         {/* Left Sidebar */}
//         <CustomBox
//           sx={{
//             width: isMobile ? "100%" : isTablet ? "30%" : "20%",
//             backgroundColor: "#EAA64D",
//             color: "#210F37",
//           }}
//         >
//           <Typography variant="h6" fontWeight="bold" gutterBottom>
//             प्रधान संपादक
//           </Typography>
//           {editorInfo.map((info, index) => (
//             <InfoCard key={index} {...info} />
//           ))}
//         </CustomBox>

//         {/* Center Section */}
//         <CustomBox
//           sx={{
//             width: isMobile ? "100%" : isTablet ? "70%" : "60%",
//             backgroundColor: "#EAA64D",
//             color: "#210F37",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: 2,
//           }}
//         >
//           {/* Hero Slider */}
//           <HeroSlider slides={slides} />

//           {/* Image Cards */}
//           <Box
//             sx={{
//               display: "flex",
//               gap: 2,
//               justifyContent: "center",
//               alignItems: "flex-start",
//               flexWrap: "wrap",
//               mt: 1,
//               width: "100%",
//               overflowY: "auto",
//               maxHeight: "90vh",
//             }}
//           >
//             {featuredItems.map((item, index) => (
//               <ImageCard
//                 key={index}
//                 title={item.title}
//                 src={item.src}
//                 alt={item.alt}
//                 width={180}
//                 height={260}
//               />
//             ))}
//           </Box>
//         </CustomBox>

//         {/* Right Sidebar */}
//         <Box
//           sx={{
//             width: isMobile ? "100%" : isTablet ? "100%" : "20%",
//             display: "flex",
//             flexDirection: "column",
//             gap: 2,
//           }}
//         >
//           {/* Social Media */}
//           <CustomBox sx={{ backgroundColor: "#EAA64D", color: "#210F37" }}>
//             <Typography variant="h6" fontWeight="bold" gutterBottom>
//               सोशल मीडिया
//             </Typography>
//             <SocialLinks />
//           </CustomBox>

//           {/* चौखट परिवार */}
//           <CustomBox sx={{ backgroundColor: "#EAA64D", color: "#210F37" }}>
//             <Typography variant="h6" fontWeight="bold" gutterBottom>
//               चौखट परिवार
//             </Typography>
//             <LinkChipCard links={Links} />
//           </CustomBox>

//           {/* Updates */}
//           <CustomBox sx={{ backgroundColor: "#F2C76E", color: "#210F37" }}>
//             <Typography variant="h6" fontWeight="bold" gutterBottom>
//               मुख्य सूचनाएं
//             </Typography>
//             <Typography variant="body2">• जुलाई अंक प्रकाशित</Typography>
//             <Typography variant="body2">• नई कार्यशाला की घोषणा</Typography>
//           </CustomBox>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Home;










// import React from "react";
// import CustomBox from "../../components/UI/CustomBox";
// import ImageCard from "../../components/UI/ImageCard";
// import InfoCard from "../../components/UI/InfoCard";
// import { Box, Typography, useMediaQuery } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
// import img1 from "../../../src/assets/img1.jpg";
// import img2 from "../../../src/assets/img2.jpg";
// import p1 from "../../../src/assets/p1.jpg";
// import p3 from "../../../src/assets/p3.jpg";
// import slide1 from "../../../src/assets/slide1.jpg";
// import slide2 from "../../../src/assets/slide2.jpg";
// import slide from "../../../src/assets/slide.jpg";
// import slide3 from "../../../src/assets/slide.jpg";
// import slide0 from "../../../src/assets/slide0.jpg";
// import LinkChipCard from "../../components/UI/LinkChipCard";
// import HeroSlider from "../../components/HeroSlider";
// import SocialLinks from "../../components/SocialLinks/SocialLinks";

// const featuredItems = [
//   { title: "Book Collection", src: img2, alt: "Book Collection" },
//   { title: "Book Collection", src: img2, alt: "Book Collection" },
//   { title: "Book Collection", src: img2, alt: "Book Collection" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon" },
// ];

// const slides = [
//   { src: slide1, alt: "Books" },
//   { src: slide2, alt: "Coming" },
//   { src: slide, alt: "More" },
//   { src: slide0, alt: "More" },
//   { src: slide3, alt: "More" },
// ];

// const editorInfo = [
//   {
//     image: p1,
//     alt: "Editor 1",
//     name: "नीरज छिलवार",
//     role: `प्रधान संपादक एवं संस्थापक : चौखट पत्रिका (2025)\nसंपादक : वर्धा डायरी (2024)\nसृजनात्मक रचनाकार, रंगकर्मी, फिल्म निर्माता-निर्देशक`,
//     address: "4033, गली नं 17, अजीत नगर, गांधी नगर, दिल्ली – 110031",
//     email: "talk2neeraj92@gmail.com",
//     phone: "8929995706 / 9822726080",
//   },
//   {
//     image: p3,
//     alt: "Editor 2",
//     name: "डॉ. कल्पना पाठक",
//     role: `संपादक चौखट पत्रिका\nसहायक प्राध्यापक, हिन्दी विभाग\nबी. एन. कॉलेज (स्वायत्त), धुबरी, असम`,
//     email: "kalpanapathak@bncollege.co.in / jupitarapathak2014@gmail.com",
//   },
// ];

// const Links = [
//   { label: "संस्थापक", href: "/founder" },
//   { label: "संरक्षक", href: "/editorial-board" },
//   { label: " परामर्श मंडल", href: "/guide-board" },
//   { label: "संपादक मण्डल", href: "/editorial-board" },
//   { label: "विशेषज्ञ समिति", href: "/expert-committee" },
//   { label: "सक्रिय सहयोगी सदस्य", href: "/active-members" },
// ];

// const Home = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // max-width: 600px
//   const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600px - 900px

//   return (
//     <Box sx={{ padding: 2 }}>
//       {/* Welcome Box */}
//       <CustomBox
//         sx={{
//           mb: 3,
//           backgroundColor: "#210F37",
//           color: "#fff",
//           textAlign: "center",
//           padding: 2,
//         }}
//       >
//         <Typography variant="h6" fontWeight="bold">
//           साहित्य, समाज, कला और संस्कृति संसार की दहलीज ही चौखट है |
//         </Typography>
//         <Typography variant="body1">आपका हमारी चौखट में स्वागत है |</Typography>
//       </CustomBox>

//       {/* Responsive Layout */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: isMobile || isTablet ? "column" : "row",
//           gap: 3,
//         }}
//       >
//         {/* Left Section (Editors) */}
//         <CustomBox
//           sx={{
//             order: isMobile || isTablet ? 3 : 1,
//             width: isMobile ? "100%" : isTablet ? "100%" : "20%",
//             backgroundColor: "#EAA64D",
//             color: "#210F37",
//           }}
//         >
//           <Typography variant="h6" fontWeight="bold" gutterBottom>
//             प्रधान संपादक
//           </Typography>
//           {editorInfo.map((info, index) => (
//             <InfoCard key={index} {...info} />
//           ))}
//         </CustomBox>

//         {/* Center Section (Slider + Cards) */}
//         <CustomBox
//           sx={{
//             order: 1,
//             width: isMobile ? "100%" : isTablet ? "100%" : "60%",
//             backgroundColor: "#EAA64D",
//             color: "#210F37",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: 2,
//           }}
//         >
//           <HeroSlider slides={slides} />

//           <Box
//             sx={{
//               display: "flex",
//               gap: 2,
//               justifyContent: "center",
//               alignItems: "flex-start",
//               flexWrap: "wrap",
//               mt: 1,
//               width: "100%",
//               overflowY: "auto",
//               maxHeight: "90vh",
//             }}
//           >
//             {featuredItems.map((item, index) => (
//               <ImageCard
//                 key={index}
//                 title={item.title}
//                 src={item.src}
//                 alt={item.alt}
//                 width={180}
//                 height={260}
//               />
//             ))}
//           </Box>
//         </CustomBox>

//         {/* Right Section (Social, Team, Updates) */}
//         <Box
//           sx={{
//             order: isMobile || isTablet ? 2 : 3,
//             width: isMobile ? "100%" : isTablet ? "100%" : "20%",
//             display: "flex",
//             flexDirection: "column",
//             gap: 2,
//           }}
//         >
//           <CustomBox sx={{ backgroundColor: "#EAA64D", color: "#210F37" }}>
//             <Typography variant="h6" fontWeight="bold" gutterBottom>
//               सोशल मीडिया
//             </Typography>
//             <SocialLinks />
//           </CustomBox>

//           <CustomBox sx={{ backgroundColor: "#EAA64D", color: "#210F37" }}>
//             <Typography variant="h6" fontWeight="bold" gutterBottom>
//               चौखट परिवार
//             </Typography>
//             <LinkChipCard links={Links} />
//           </CustomBox>

//           <CustomBox sx={{ backgroundColor: "#F2C76E", color: "#210F37" }}>
//             <Typography variant="h6" fontWeight="bold" gutterBottom>
//               मुख्य सूचनाएं
//             </Typography>
//             <Typography variant="body2">• जुलाई अंक प्रकाशित</Typography>
//             <Typography variant="body2">• नई कार्यशाला की घोषणा</Typography>
//           </CustomBox>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Home;







// import React from "react";
// import CustomBox from "../../components/UI/CustomBox";
// import ImageCard from "../../components/UI/ImageCard";
// import InfoCard from "../../components/UI/InfoCard";
// import { Box, Typography, useMediaQuery } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
// import img1 from "../../../src/assets/img1.jpg";
// import img2 from "../../../src/assets/img2.jpg";
// import p1 from "../../../src/assets/p1.jpg";
// import p3 from "../../../src/assets/p3.jpg";
// import slide1 from "../../../src/assets/slide1.jpg";
// import slide2 from "../../../src/assets/slide2.jpg";
// import slide from "../../../src/assets/slide.jpg";
// import slide3 from "../../../src/assets/slide.jpg";
// import slide0 from "../../../src/assets/slide0.jpg";
// import LinkChipCard from "../../components/UI/LinkChipCard";
// import HeroSlider from "../../components/HeroSlider";
// import SocialLinks from "../../components/SocialLinks/SocialLinks";

// const featuredItems = [
//   { title: "Book Collection", src: img2, alt: "Book Collection", href: "/books" },
//   { title: "Book Collection", src: img2, alt: "Book Collection", href: "/books" },
//   { title: "Book Collection", src: img2, alt: "Book Collection", href: "/books" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon", href: "#" },
//   { title: "Coming Soon...", src: img1, alt: "Coming Soon", href: "#" },

// ];

// const slides = [
//   { src: slide1, alt: "Books" },
//   { src: slide2, alt: "Coming" },
//   { src: slide, alt: "More" },
//   { src: slide0, alt: "More" },
//   { src: slide3, alt: "More" },
// ];

// const editorInfo = [
//   {
//     image: p1,
//     alt: "Editor 1",
//     name: "नीरज छिलवार",
//     role: `प्रधान संपादक एवं संस्थापक : चौखट पत्रिका (2025)\nसंपादक : वर्धा डायरी (2024)\nसृजनात्मक रचनाकार, रंगकर्मी, फिल्म निर्माता-निर्देशक`,
//     address: "4033, गली नं 17, अजीत नगर, गांधी नगर, दिल्ली – 110031",
//     email: "talk2neeraj92@gmail.com",
//     phone: "8929995706 / 9822726080",
//   },
//   {
//     image: p3,
//     alt: "Editor 2",
//     name: "डॉ. कल्पना पाठक",
//     role: `संपादक चौखट पत्रिका\nसहायक प्राध्यापक, हिन्दी विभाग\nबी. एन. कॉलेज (स्वायत्त), धुबरी, असम`,
//     email: "kalpanapathak@bncollege.co.in / jupitarapathak2014@gmail.com",
//   },
// ];

// const Links = [
//   { label: "संस्थापक", href: "/founder" },
//   { label: "संरक्षक", href: "/editorial-board" },
//   { label: " परामर्श मंडल", href: "/guide-board" },
//   { label: "संपादक मण्डल", href: "/editorial-board" },
//   { label: "विशेषज्ञ समिति", href: "/expert-committee" },
//   { label: "सक्रिय सहयोगी सदस्य", href: "/active-members" },
// ];

// const Home = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

//   return (
//     <Box sx={{ padding: 2 }}>
//       {/* Welcome Box */}
//       <CustomBox
//         sx={{
//           mb: 3,
//           backgroundColor: "#210F37",
//           color: "#fff",
//           textAlign: "center",
//           padding: 2,
//         }}
//       >
//         <Typography variant="h6" fontWeight="bold">
//           साहित्य, समाज, कला और संस्कृति संसार की दहलीज ही चौखट है |
//         </Typography>
//         <Typography variant="body1">आपका हमारी चौखट में स्वागत है |</Typography>
//       </CustomBox>

//       {/* Responsive Layout */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: isMobile || isTablet ? "column" : "row",
//           gap: 3,
//         }}
//       >
//         {/* Left Section (Editors) */}
//         <CustomBox
//           sx={{
//             order: isMobile || isTablet ? 3 : 1,
//             width: isMobile ? "100%" : isTablet ? "100%" : "20%",
//             backgroundColor: "#EAA64D",
//             color: "#210F37",
//           }}
//         >
//           <Typography variant="h6" fontWeight="bold" gutterBottom>
//             प्रधान संपादक
//           </Typography>
//           {editorInfo.map((info, index) => (
//             <InfoCard key={index} {...info} />
//           ))}
//         </CustomBox>

//         {/* Center Section (Slider + Cards) */}
//         <CustomBox
//           sx={{
//             order: 1,
//             width: isMobile ? "100%" : isTablet ? "100%" : "60%",
//             backgroundColor: "#EAA64D",
//             color: "#210F37",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: 2,
//           }}
//         >
//           <HeroSlider slides={slides} />

//           <Box
//             sx={{
//               display: "flex",
//               gap: 2,
//               justifyContent: "flex-start",
//               alignItems: "flex-start",
//               flexWrap: { xs: "nowrap", sm: "wrap" },
//               overflowX: { xs: "auto", sm: "visible" },
//               mt: 1,
//               width: "100%",
//               pb: 1,
//             }}
//           >
//             {featuredItems.map((item, index) => (
//               <ImageCard
//                 key={index}
//                 title={item.title}
//                 src={item.src}
//                 alt={item.alt}
//                 href={item.href}
//                 width={180}
//                 height={260}
//               />
//             ))}
//           </Box>
//         </CustomBox>

//         {/* Right Section (Social, Team, Updates) */}
//         <Box
//           sx={{
//             order: isMobile || isTablet ? 2 : 3,
//             width: isMobile ? "100%" : isTablet ? "100%" : "20%",
//             display: "flex",
//             flexDirection: "column",
//             gap: 2,
//           }}
//         >
//           <CustomBox sx={{ backgroundColor: "#EAA64D", color: "#210F37" }}>
//             <Typography variant="h6" fontWeight="bold" gutterBottom>
//               सोशल मीडिया
//             </Typography>
//             <SocialLinks />
//           </CustomBox>

//           <CustomBox sx={{ backgroundColor: "#EAA64D", color: "#210F37" }}>
//             <Typography variant="h6" fontWeight="bold" gutterBottom>
//               चौखट परिवार
//             </Typography>
//             <LinkChipCard links={Links} />
//           </CustomBox>

//           <CustomBox sx={{ backgroundColor: "#F2C76E", color: "#210F37" }}>
//             <Typography variant="h6" fontWeight="bold" gutterBottom>
//               मुख्य सूचनाएं
//             </Typography>
//             <Typography variant="body2">• जुलाई अंक प्रकाशित</Typography>
//             <Typography variant="body2">• नई कार्यशाला की घोषणा</Typography>
//           </CustomBox>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Home;


import React from "react";
import CustomBox from "../../components/UI/CustomBox";
import ImageCard from "../../components/UI/ImageCard";
import InfoCard from "../../components/UI/InfoCard";
import { Box, Typography, useMediaQuery, Button, Link as MuiLink } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom"; // ✅ for routing

// Your assets
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
import SocialLinks from "../../components/SocialLinks/SocialLinks";

// Dynamic Featured
const featuredItems = [
  { title: "Book Collection", src: img2, alt: "Book Collection", href: "/books" },
  { title: "Book Collection", src: img2, alt: "Book Collection", href: "/books" },
  { title: "Book Collection", src: img2, alt: "Book Collection", href: "/books" },
  { title: "Coming Soon...", src: img1, alt: "Coming Soon", href: "#" },
  { title: "Coming Soon...", src: img1, alt: "Coming Soon", href: "#" },
];

// HeroSlider images
const slides = [
  { src: slide1, alt: "Books" },
  { src: slide2, alt: "Coming" },
  { src: slide, alt: "More" },
  { src: slide0, alt: "More" },
  { src: slide3, alt: "More" },
];

// Editors
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

// Family links
const Links = [
  { label: "संस्थापक", href: "/founder" },
  { label: "संरक्षक", href: "/editorial-board" },
  { label: " परामर्श मंडल", href: "/guide-board" },
  { label: "संपादक मण्डल", href: "/editorial-board" },
  { label: "विशेषज्ञ समिति", href: "/expert-committee" },
  { label: "सक्रिय सहयोगी सदस्य", href: "/active-members" },
];

// ✅ Dynamic notices
const notices = [
  { title: "• जुलाई अंक प्रकाशित", href: "/notices/july-issue" },
  { title: "• नई कार्यशाला की घोषणा", href: "/notices/workshop" },
  { title: "• सदस्यता शुल्क जमा करें", href: "/notices/membership" },
  { title: "• गोष्ठी – 10 अगस्त", href: "/notices/meeting" },
];

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box sx={{ padding: 2 }}>
      {/* Welcome Box */}
      <CustomBox sx={{ mb: 3, backgroundColor: "#210F37", color: "#fff", textAlign: "center", padding: 2 }}>
        <Typography variant="h6" fontWeight="bold">
          साहित्य, समाज, कला और संस्कृति संसार की दहलीज ही चौखट है |
        </Typography>
        <Typography variant="body1">आपका हमारी चौखट में स्वागत है |</Typography>
      </CustomBox>

      {/* Responsive Layout */}
      <Box sx={{ display: "flex", flexDirection: isMobile || isTablet ? "column" : "row", gap: 3 }}>
        {/* Left Section (Editors) */}
        <CustomBox
          sx={{
            order: isMobile || isTablet ? 3 : 1,
            width: isMobile ? "100%" : isTablet ? "100%" : "20%",
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

        {/* Center Section */}
        <CustomBox
          sx={{
            order: 1,
            width: isMobile ? "100%" : isTablet ? "100%" : "60%",
            backgroundColor: "#EAA64D",
            color: "#210F37",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <HeroSlider slides={slides} />

          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexWrap: { xs: "nowrap", sm: "wrap" },
              overflowX: { xs: "auto", sm: "visible" },
              mt: 1,
              width: "100%",
              pb: 1,
            }}
          >
            {featuredItems.map((item, index) => (
              <ImageCard
                key={index}
                title={item.title}
                src={item.src}
                alt={item.alt}
                href={item.href}
                width={180}
                height={260}
              />
            ))}
          </Box>
        </CustomBox>

        {/* Right Section */}
        <Box
          sx={{
            order: isMobile || isTablet ? 2 : 3,
            width: isMobile ? "100%" : isTablet ? "100%" : "20%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <CustomBox sx={{ backgroundColor: "#EAA64D", color: "#210F37" }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              सोशल मीडिया
            </Typography>
            <SocialLinks />
          </CustomBox>

          <CustomBox sx={{ backgroundColor: "#EAA64D", color: "#210F37" }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              चौखट परिवार
            </Typography>
            <LinkChipCard links={Links} />
          </CustomBox>

          {/* ✅ मुख्य सूचनाएं with scroll + see all */}
          <CustomBox sx={{ backgroundColor: "#F2C76E", color: "#210F37" }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              मुख्य सूचनाएं
            </Typography>

            <Box sx={{ maxHeight: 72, overflow: "hidden", position: "relative" }}>
              <Box sx={{ animation: "scrollUp 12s linear infinite" }}>
                {notices.map((n, i) => (
                  <MuiLink
                    component={Link}
                    key={i}
                    to={n.href}
                    underline="hover"
                    sx={{
                      display: "block",
                      color: "#210F37",
                      py: 0.5,
                      "&:hover": { color: "#EAA64D" },
                    }}
                  >
                    {n.title}
                  </MuiLink>
                ))}
              </Box>
            </Box>

            <Button
  variant="outlined"
  component={Link}
  to="/all-notices"
  sx={{ mt: 1 }}
>
  सभी सूचनाएं देखें →
</Button>

          </CustomBox>
        </Box>
      </Box>
    </Box>
  );
};

// Inject marquee keyframe once
const style = document.createElement("style");
style.innerHTML = `
@keyframes scrollUp {
  0%   { transform: translateY(0); }
  100% { transform: translateY(-100%); }
}`;
document.head.appendChild(style);

export default Home;
