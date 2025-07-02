import React from 'react'
import CustomBox from '../../components/UI/CustomBox'
import { Typography } from '@mui/material'

const Workshop = () => {
  return (
    <CustomBox
      sx={{
        backgroundColor: "#EAD8A4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 200,
      }}
    >
      <Typography variant="h6" sx={{ color: "#C83F12", fontWeight: "bold" }}>
        Coming Soon...
      </Typography>
    </CustomBox>
  )
}

export default Workshop
