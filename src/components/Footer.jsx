import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#1A1A1A", color: "#fff", py: 4, textAlign: "center" }}>
      <Typography variant="body1">
        © 2026 Variotech Interiors. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
