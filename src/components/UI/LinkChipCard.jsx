// // src/components/UI/LinkChipCard.jsx
// import React from "react";
// import { Box, Typography, Chip } from "@mui/material";

// const LinkChipCard = ({ title, links }) => {
//   return (
//     <Box
//       sx={{
//         border: "2px solid white",
//         borderRadius: 2,
//         p: 2,
//         mb: 2,
//         // backgroundColor: "#FEE4C3",
//       }}
//     >
//       <Typography
//         variant="subtitle1"
//         fontWeight="bold"
//         sx={{ mb: 1, color: "#210F37" }}
//       >
//         {title}
//       </Typography>

//       <Box display="flex" flexDirection="column" gap={1}>
//         {links.map((link, idx) => (
//           <Chip
//             key={idx}
//             label={link.label}
//             component="a"
//             href={link.href}
//             clickable
//             variant="outlined"
//             sx={{
//               borderColor: "#C83F12",
//               color: "#210F37",
//               fontWeight: 500,
//               textDecoration: "none",
//               "&:hover": {
//                 backgroundColor: "#C83F12",
//                 color: "#fff",
//               },
//             }}
//           />
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default LinkChipCard;

// // src/components/UI/LinkChipCard.jsx
// import React from "react";
// import { Box, Typography, Chip } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const LinkChipCard = ({ title, links }) => {
//   const navigate = useNavigate();

//   return (
//     <Box
//       sx={{
//         border: "2px solid white",
//         borderRadius: 2,
//         p: 2,
//         mb: 2,
//       }}
//     >
//       <Typography
//         variant="subtitle1"
//         fontWeight="bold"
//         sx={{ mb: 1, color: "#210F37" }}
//       >
//         {title}
//       </Typography>

//       <Box display="flex" flexDirection="column" gap={1}>
//         {links.map((link, idx) => (
//           <Chip
//             key={idx}
//             label={link.label}
//             onClick={() => navigate(link.href)}
//             clickable
//             variant="outlined"
//             sx={{
//               borderColor: "#C83F12",
//               color: "#210F37",
//               fontWeight: 500,
//               textDecoration: "none",
//               "&:hover": {
//                 backgroundColor: "#C83F12",
//                 color: "#fff",
//               },
//             }}
//           />
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default LinkChipCard;

import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const LinkChipCard = ({ title, links }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box
      sx={{
        border: "2px solid white",
        borderRadius: 2,
        p: 2,
        mb: 2,
      }}
    >
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        sx={{ mb: 1, color: "#210F37" }}
      >
        {title}
      </Typography>

      <Box display="flex" flexDirection="column" gap={1}>
        {links.map((link, idx) => {
          const isActive = location.pathname === link.href;

          return (
            <Chip
              key={idx}
              label={link.label}
              onClick={() => navigate(link.href)}
              clickable
              variant={isActive ? "filled" : "outlined"}
              sx={{
                borderColor: "#C83F12",
                color: isActive ? "#fff" : "#210F37",
                backgroundColor: isActive ? "#C83F12" : "transparent",
                fontWeight: 500,
                "&:hover": {
                  backgroundColor: "#C83F12",
                  color: "#fff",
                },
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default LinkChipCard;
