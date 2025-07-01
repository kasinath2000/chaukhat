import React from "react";
import { Box } from "@mui/material";

/**
 * Reusable Box component with default styles.
 * 
 * Props:
 * - children: ReactNode
 * - sx: overrides default styles
 * - ...rest: any other MUI Box props
 */
const CustomBox = ({ children, sx = {}, ...rest }) => {
  return (
    <Box
      sx={{
        border: "1px solid #fff",
        borderRadius: "8px",
        padding: 2,
        ...sx, // allow overrides
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default CustomBox;
