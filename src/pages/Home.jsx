import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import { Box, Typography, Grid, Button } from "@mui/material";

const Home = () => {
  return (
    <>
      <HeroSection />

      {/* Services Section */}
      <Box sx={{ py: 5, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Transform your space with our expert interior decorating services.
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard
              title="Residential Design"
              description="Create a cozy and stylish home tailored to your taste."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard
              title="Commercial Design"
              description="Elevate your business space with professional designs."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard
              title="Custom Furniture"
              description="Unique furniture pieces designed just for you."
            />
          </Grid>
        </Grid>
      </Box>

      {/* Portfolio Highlights Section */}
      <Box sx={{ py: 5, textAlign: "center", backgroundColor: "#f9f9f9" }}>
        <Typography variant="h4" gutterBottom>
          Portfolio Highlights
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          A glimpse into some of our favorite projects.
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              title="Modern Living Room"
              image="/assets/living-room.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              title="Elegant Office Space"
              image="/assets/office-space.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard title="Luxury Bedroom" image="/assets/bedroom.jpg" />
          </Grid>
        </Grid>
      </Box>

      {/* Call-to-Action Section */}
      <Box sx={{ py: 5, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Ready to Transform Your Space?
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Contact us today to schedule a consultation and bring your vision to
          life.
        </Typography>
        <Button variant="contained" color="primary" href="/contact">
          Get Started
        </Button>
      </Box>
    </>
  );
};

export default Home;
