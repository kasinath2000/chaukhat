import React from 'react'
import CustomBox from '../components/UI/CustomBox'
import { Typography } from '@mui/material'
const SpecialIssue = () => {
  return (
    <CustomBox
      sx={{
        backgroundColor: "#EAA64D",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 200,
      }}
    >
      <Typography variant="h6" sx={{ color: "#C83F12", fontWeight: "bold" }}>
        कार्य प्रगति पर है।
      </Typography>
    </CustomBox>
  )
}

export default SpecialIssue
