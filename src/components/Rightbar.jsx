import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

export const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box positino='fixed'>
        <Typography variant='h6' fontWeight={100}>
          Olnine Friends
        </Typography>
      </Box>
    </Box>
  );
};

export default Rightbar;
