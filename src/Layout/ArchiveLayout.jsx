// // src/Layout/ArchiveLayout.jsx
// import React from "react";
// import { Box } from "@mui/material";
// import { Outlet } from "react-router-dom";
// import LinkChipCard from "../components/UI/LinkChipCard";

// const archiveLinks = [
//   { label: "लेखक का घर", href: "/archive/authors-home" },
//   { label: "लेखक की यादें", href: "/archive/authors-memories" },
//   { label: "अतीत", href: "/archive/past" },
//   { label: "संग्रहालयों की स्मृतियाँ", href: "/archive/museum-memories" },
// ];

// const ArchiveLayout = () => (
//   <Box
//     sx={{
//       padding: 4,
//       display: "flex",
//       flexDirection: "row",
//       gap: 3,
//       alignItems: "flex-start",
//     }}
//   >
//     <Box sx={{ flex: 1, backgroundColor: "#FAD59A", p: 2, borderRadius: 2 }}>
//       <Outlet />
//     </Box>

//     <Box sx={{ width: "25%" }}>
//       <LinkChipCard title="संग्रह अनुभाग" links={archiveLinks} />
//     </Box>
//   </Box>
// );

// export default ArchiveLayout;


// import React from "react";
// import { Box, Typography } from "@mui/material";
// import { useLocation, Outlet } from "react-router-dom";
// import LinkChipCard from "../components/UI/LinkChipCard";

// // Archive section links
// const ArchiveLinks = [
//   { label: "लेखक का घर", href: "/archive/home" },
//   { label: "लेखक की यादें", href: "/archive/memories" },
//   { label: "अतीत", href: "/archive/past" },
//   { label: "संग्रहालयों की स्मृतियाँ", href: "/archive/museums" },
// ];

// // Path-based heading mapping
// const pathToHeading = {
//   "/archive": "लेखक का घर",
//   "/archive/home": "लेखक का घर",
//   "/archive/memories": "लेखक की यादें",
//   "/archive/past": "अतीत",
//   "/archive/museums": "संग्रहालयों की स्मृतियाँ",
// };

// const ArchiveLayout = () => {
//   const location = useLocation();
//   const heading = pathToHeading[location.pathname] || "संग्रह";

//   return (
//     <Box>
//       {/* 🔷 Dynamic Top Heading */}
//       <Box
//         sx={{
//           backgroundColor: "#FAD59A",
//           textAlign: "center",
//           py: 2,
//           borderBottom: "2px solid #C83F12",
//         }}
//       >
//         <Typography variant="h4" fontWeight="bold" color="#C83F12">
//           {heading}
//         </Typography>
//       </Box>

//       {/* 🔷 Layout Body */}
//       <Box
//         sx={{
//           p: { xs: 2, md: 4 },
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           gap: 3,
//         }}
//       >
//         {/* Optional Spacer */}
//         <Box
//           sx={{
//             width: { md: "20%" },
//             display: { xs: "none", md: "block" },
//           }}
//         />

//         {/* Center Content */}
//         <Box
//           sx={{
//             width: { xs: "100%", md: "55%" },
//             backgroundColor: "#FAD59A",
//             p: 2,
//             borderRadius: 2,
//             minHeight: "300px",
//           }}
//         >
//           <Outlet />
//         </Box>

//         {/* Right Side Links */}
//         <Box sx={{ width: { xs: "100%", md: "25%" } }}>
//           <LinkChipCard title="संग्रह अनुभाग" links={ArchiveLinks} />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ArchiveLayout;

import React from "react";
import { Box, Typography } from "@mui/material";
import { useLocation, Outlet } from "react-router-dom";
import LinkChipCard from "../components/UI/LinkChipCard";

// 📌 Sidebar Links
const ArchiveLinks = [
  { label: "लेखक का घर", href: "/archive/authors-home" },
  { label: "लेखक की यादें", href: "/archive/authors-memories" },
  { label: "अतीत", href: "/archive/past" },
  { label: "संग्रहालयों की स्मृतियाँ", href: "/archive/museum-memories" },
];

// 🧠 Path to heading mapping
const pathToHeading = {
  "/archive": "लेखक का घर",
  "/archive/authors-home": "लेखक का घर",
  "/archive/authors-memories": "लेखक की यादें",
  "/archive/past": "अतीत",
  "/archive/museum-memories": "संग्रहालयों की स्मृतियाँ",
};

const ArchiveLayout = () => {
  const location = useLocation();
  const heading = pathToHeading[location.pathname] || "संग्रह";

  return (
    <Box>
      {/* 🔷 Top Heading */}
      <Box
        sx={{
          backgroundColor: "#FAD59A",
          textAlign: "center",
          py: 2,
          borderBottom: "2px solid #C83F12",
        }}
      >
        <Typography variant="h4" fontWeight="bold" color="#C83F12">
          {heading}
        </Typography>
      </Box>

      {/* 🔶 Main Layout */}
      <Box
        sx={{
          p: { xs: 2, md: 4 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
        }}
      >
        {/* Optional Left Spacer (hidden on mobile) */}
        <Box
          sx={{
            width: { md: "20%" },
            display: { xs: "none", md: "block" },
          }}
        />

        {/* 🔸 Center Content */}
        <Box
          sx={{
            width: { xs: "100%", md: "55%" },
            backgroundColor: "#FAD59A",
            p: 2,
            borderRadius: 2,
            minHeight: "300px",
          }}
        >
          <Outlet />
        </Box>

        {/* 🔸 Right Sidebar */}
        <Box sx={{ width: { xs: "100%", md: "25%" } }}>
          <LinkChipCard title="संग्रह अनुभाग" links={ArchiveLinks} />
        </Box>
      </Box>
    </Box>
  );
};

export default ArchiveLayout;
