import { Box, Typography, Button, Container } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: "85vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <Container>
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Transforming Spaces into Masterpieces
        </Typography>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Luxury interior design solutions for homes and businesses.
        </Typography>
        <a href="/projects">
          <Button variant="contained" size="large">
            View Projects
          </Button>
        </a>
      </Container>
    </Box>
  );
};

export default HeroSection;
